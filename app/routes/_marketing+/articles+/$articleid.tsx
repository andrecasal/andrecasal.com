import { json, type LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader = async ({ params }: LoaderArgs) => {
	const { articleid } = params
	return json({ articleid })
}

const Article = () => {
	const { articleid } = useLoaderData<typeof loader>()
	return <p>Article ID: {articleid}</p>
}
export default Article
