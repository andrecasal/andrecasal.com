import { Link, useLocation } from '@remix-run/react'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'

export async function loader() {
	throw new Response('Not found', { status: 404 })
}

export default function NotFound() {
	return <ErrorBoundary />
}

export function ErrorBoundary() {
	const location = useLocation()
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: () => (
					<div className="flex flex-col items-center gap-6 text-center">
						<p className="text-[8rem] font-bold leading-none text-muted-200">404</p>
						<div className="flex flex-col gap-2">
							<h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
							<p className="text-muted-500">
								The page at <code className="rounded bg-muted-100 px-1.5 py-0.5 text-sm">{location.pathname}</code> doesn't exist.
							</p>
						</div>
						<Link to="/" className="inline-block rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm hover:bg-muted-700">
							Back to home
						</Link>
					</div>
				),
			}}
		/>
	)
}
