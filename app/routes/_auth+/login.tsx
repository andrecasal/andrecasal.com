import { json, type DataFunctionArgs, type V2_MetaFunction } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { Spacer } from '~/components/spacer.tsx'
import { authenticator, requireAnonymous } from '~/utils/auth.server.ts'
import { commitSession, getSession } from '~/utils/session.server.ts'
import { InlineLogin } from '../resources+/login.tsx'
import { Verifier, unverifiedSessionKey } from '../resources+/verify.tsx'
import { H1 } from '../_marketing+/ui+/components/typography/h1.tsx'
import { P } from '../_marketing+/ui+/components/typography/p.tsx'

export async function loader({ request }: DataFunctionArgs) {
	await requireAnonymous(request)
	const session = await getSession(request.headers.get('cookie'))
	const error = session.get(authenticator.sessionErrorKey)
	let errorMessage: string | null = null
	if (typeof error?.message === 'string') {
		errorMessage = error.message
	}
	return json(
		{ formError: errorMessage, unverified: session.has(unverifiedSessionKey) },
		{
			headers: {
				'Set-Cookie': await commitSession(session),
			},
		},
	)
}

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Login to André Casal' }]
}

export default function LoginPage() {
	const [searchParams] = useSearchParams()
	const data = useLoaderData<typeof loader>()

	const redirectTo = searchParams.get('redirectTo') || '/'

	return (
		<div className="flex min-h-full flex-col justify-center pb-32 pt-20">
			<div className="mx-auto w-full max-w-md">
				<div className="flex flex-col gap-3 text-center">
					<H1 size="xl">Welcome back!</H1>
					<P size="lg" className="text-muted-500">
						Please enter your details.
					</P>
				</div>
				<Spacer size="xs" />
				{data.unverified ? <Verifier redirectTo={redirectTo} /> : <InlineLogin redirectTo={redirectTo} formError={data.formError} />}
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
