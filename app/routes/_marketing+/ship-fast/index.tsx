import { redirect, type LoaderFunction } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
	return redirect('https://launchfast.pro/', 301)
}

