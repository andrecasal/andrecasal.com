import { type LoaderFunctionArgs, redirect } from '@remix-run/node'

export function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url)
	const newPath = url.pathname.replace(/^\/articles/, '/essays')
	return redirect(newPath, { status: 301 })
}
