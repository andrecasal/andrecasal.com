import { useEffect, useState } from 'react'
import { getFormProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { z } from 'zod'
import { json, type ActionFunctionArgs } from '@remix-run/node'
import { useFetcher, useRevalidator } from '@remix-run/react'
import { invariantResponse } from '@epic-web/invariant'
import { clientHints, useHints } from '~/utils/client-hints.tsx'
import { ErrorList } from '~/components/forms.tsx'
import { useRequestInfo } from '~/utils/request-info.ts'
import { type Theme, setTheme } from './theme-session.server.ts'
import { Icon, type IconName } from '~/components/ui/icon.tsx'

const ROUTE_PATH = '/resources/theme'

const ThemeFormSchema = z.object({
	theme: z.enum(['system', 'light', 'dark']),
})

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const submission = parseWithZod(formData, { schema: ThemeFormSchema })
	invariantResponse(submission.status === 'success', 'Invalid theme received')

	const { theme } = submission.value

	const responseInit = { headers: { 'set-cookie': setTheme(theme) } }
	return json({ result: submission.reply() }, responseInit)
}

const modes = ['light', 'dark', 'system'] as const

const modeIcons: Record<(typeof modes)[number], IconName> = {
	light: 'sun',
	dark: 'moon',
	system: 'desktop',
}

export function ThemeSwitch({ id, userPreference }: { id: string; userPreference?: Theme | null }) {
	const requestInfo = useRequestInfo()
	const fetcher = useFetcher<typeof action>()
	const [isHydrated, setIsHydrated] = useState(false)
	const { revalidate } = useRevalidator()

	useEffect(() => {
		setIsHydrated(true)
	}, [])

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleChange = () => {
			document.cookie = `${clientHints.theme.cookieName}=${mediaQuery.matches ? 'dark' : 'light'}`
			revalidate()
		}
		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [revalidate])

	const [form] = useForm({ id: `theme-switch-${id}`, lastResult: fetcher.data?.result })

	const mode = userPreference ?? 'system'

	return (
		<fetcher.Form {...getFormProps(form)}>
			{isHydrated ? null : <input type="hidden" name="redirectTo" value={requestInfo.path} />}
			<div className="flex items-center rounded-full bg-muted-100 p-1">
				{modes.map(m => (
					<button
						key={m}
						type="button"
						onClick={() => fetcher.submit({ theme: m }, { method: 'POST', action: ROUTE_PATH })}
						className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${mode === m ? 'bg-background shadow-sm' : 'text-muted-400 hover:text-muted-600'}`}
						aria-label={`Switch to ${m} mode`}
					>
						<Icon name={modeIcons[m]} className="h-4 w-4" />
					</button>
				))}
			</div>
			<ErrorList errors={form.errors} id={form.errorId} />
		</fetcher.Form>
	)
}

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference. Defaults to dark.
 */
export function useTheme() {
	const hints = useHints()
	const requestInfo = useRequestInfo()
	return requestInfo.session.theme ?? hints.theme ?? 'dark'
}
