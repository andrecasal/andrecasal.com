import { /* Link, */ useLoaderData } from '@remix-run/react'
import { Container } from '../../../components/ui/container.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import BackgroundBlur from '../components/bg-blur.tsx'
import { ArticlePreview } from '~/components/ArticlePreview.tsx'
import { Button } from '~/components/ui/button.tsx'
/* import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx' */
import { Text } from '~/components/ui/text.tsx'
import { useState } from 'react'
import { json } from '@remix-run/node'
import { title as RemixDataFlowTitle } from './remix-data-flow/index.tsx'
import remixDataFlow from './remix-data-flow/remix-data-flow.png'

export type Post = {
	title: string
	href: string
	description: string
	imageUrl: string
	topics: string[]
}

export const loader = () => {
	const posts: Post[] = [
		{
			title: RemixDataFlowTitle,
			href: '/articles/remix-data-flow',
			description: 'Understand how data flows in a Remix route.',
			imageUrl: remixDataFlow,
			topics: ['Remix', 'Full-stack'],
		},
	]
	const tags = posts.map(({ topics }) => topics).flat()
	return json({ posts, tags })
}

const Articles = () => {
	const loaderData = useLoaderData<typeof loader>()
	const [tagsArray, setTagsArray] = useState<{ tag: string; selected: boolean }[]>(loaderData.tags.map((tag: string) => ({ tag, selected: false })))
	const [postsArray, setPostsArray] = useState<Post[]>(loaderData.posts)

	const handleTagClick = (t: string) => {
		const newTagsArray = tagsArray.map(({ tag, selected }) => ({ tag, selected: tag === t ? !selected : selected }))
		const selectedTags = newTagsArray.filter(({ selected }) => selected)
		const newPostsArray = loaderData.posts.filter(({ topics }) => selectedTags.length === 0 || topics.some(topic => selectedTags.some(({ tag }) => tag === topic)))
		setTagsArray(newTagsArray)
		setPostsArray(newPostsArray)
	}

	return (
		<>
			<BackgroundBlur>
				<Container>
					<div className="py-24 sm:py-32">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<Text heading="h1" size="4xl" className="sm:text-size-6xl">
								Great web dev articles
							</Text>
							<Text size="lg" className="mt-6 text-muted-800">
								Articles to make full-stack web dev a cakewalk.
							</Text>
						</div>
						{/* <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
							<div className="mt-6 flex max-w-md gap-x-4">
								<Label htmlFor="search" className="sr-only">
									Search articles by title or content
								</Label>
								<Input id="search" name="search" type="text" placeholder="Search articles by title or content" />
								<Button variant="primary" asChild>
									<Link
										to="/articles"
										className="flex-none rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
									>
										Search articles
									</Link>
								</Button>
							</div>
						</div> */}
						<div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 lg:max-w-none">
							<div>
								<Text size="md">Filter by topic:</Text>
							</div>
							<div className="flex flex-wrap gap-4">
								{tagsArray.map(({ tag, selected }) => (
									<Button key={tag} variant={selected ? 'primary' : 'secondary'} size="pill" onClick={() => handleTagClick(tag)}>
										{tag}
									</Button>
								))}
							</div>
						</div>
					</div>
					<div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{postsArray.map(post => (
							<ArticlePreview key={post.title} post={post} />
						))}
					</div>
					{/* <div className="flex justify-around">
						<Button variant="secondary" size="lg" className="mt-8 text-muted-600 sm:mt-10 lg:mt-12">
							Load more articles...
						</Button>
					</div> */}
				</Container>
			</BackgroundBlur>
			<Container>
				<Newsletter
					className="relative isolate mt-32 sm:mt-56"
					title="Get exclusive articles that I only share with email subscribers"
					description="Golden nuggets of in-depth code knowledge. Delivered to your inbox every 2 weeks."
					buttonText="I want to learn more"
				/>
			</Container>
		</>
	)
}

export default Articles
