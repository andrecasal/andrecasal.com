import { useEffect, useState } from 'react'
import { getFormProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { z } from 'zod'
import { json, type ActionFunctionArgs } from '@remix-run/node'
import { useFetcher, useRevalidator } from '@remix-run/react'
import { invariantResponse } from '@epic-web/invariant'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clientHints, useHints } from '~/utils/client-hints.tsx'
import { ErrorList } from '~/components/forms.tsx'
import { useRequestInfo } from '~/utils/request-info.ts'
import { type Theme, setTheme } from './theme-session.server.ts'
import { Icon } from '~/components/ui/icon.tsx'

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

	const [form] = useForm({ id: 'theme-switch', lastResult: fetcher.data?.result })

	const mode = userPreference ?? 'system'
	//const nextMode = mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system'

	const handleSelection = (theme: string) => {
		fetcher.submit({ theme }, { method: 'POST', action: ROUTE_PATH })
	}

	return (
		<DropdownMenu.Root>
			<fetcher.Form {...getFormProps(form)}>
				{/*
					this is for progressive enhancement so we redirect them to the page
					they are on if the JavaScript hasn't had a chance to hydrate yet.
				*/}
				{isHydrated ? null : <input type="hidden" name="redirectTo" value={requestInfo.path} />}

				<DropdownMenu.Trigger className="box-content flex h-6 min-h-tap w-6 min-w-tap cursor-pointer items-center justify-center rounded-lg p-2.5">
					<Icon name="sun" className={`h-5 w-5 ${mode !== 'light' ? 'hidden' : ''}`} />
					<Icon name="moon" className={`h-5 w-5 ${mode !== 'dark' ? 'hidden' : ''}`} />
					<Icon name="desktop" className={`h-5 w-5 ${mode !== 'system' ? 'hidden' : ''}`} />
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenu.Content className="mt-2 w-40 rounded-lg bg-background shadow-lg shadow-muted-300 ring-1 ring-muted-900 ring-opacity-5 focus:outline-none" hideWhenDetached>
						<DropdownMenu.RadioGroup value={mode} onValueChange={handleSelection}>
							<DropdownMenu.RadioItem
								value="light"
								className="flex min-h-tap justify-between rounded-lg px-4 py-2 text-size-sm text-muted-700 focus-visible:bg-muted-100 focus-visible:outline-none"
							>
								<div className="flex items-center gap-4">
									<Icon name="sun" className="h-4" />
									Light
								</div>
								<DropdownMenu.ItemIndicator>
									<Icon name="check" className="h-3" />
								</DropdownMenu.ItemIndicator>
							</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem
								value="dark"
								className="flex min-h-tap justify-between px-4 py-2 text-size-sm text-muted-700 focus-visible:bg-muted-100 focus-visible:outline-none"
							>
								<div className="flex items-center gap-4">
									<Icon name="moon" className="h-4" />
									Dark
								</div>
								<DropdownMenu.ItemIndicator>
									<Icon name="check" className="h-3" />
								</DropdownMenu.ItemIndicator>
							</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem
								value="system"
								className="flex min-h-tap justify-between px-4 py-2 text-size-sm text-muted-700 focus-visible:bg-muted-100 focus-visible:outline-none"
							>
								<div className="flex items-center gap-4">
									<Icon name="desktop" className="h-4" />
									System
								</div>
								<DropdownMenu.ItemIndicator>
									<Icon name="check" className="h-3" />
								</DropdownMenu.ItemIndicator>
							</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
				<ErrorList errors={form.errors} id={form.errorId} />
			</fetcher.Form>
		</DropdownMenu.Root>
	)
}

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference.
 */
export function useTheme() {
	const hints = useHints()
	const requestInfo = useRequestInfo()
	return requestInfo.session.theme ?? hints.theme
}
