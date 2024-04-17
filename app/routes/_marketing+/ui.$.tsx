import { redirect, type LoaderFunction } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
	return redirect('https://verveui.pro', 301)
}
