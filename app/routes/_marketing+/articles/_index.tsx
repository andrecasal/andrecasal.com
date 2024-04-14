import { useLoaderData } from '@remix-run/react'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import BackgroundBlur from '../components/bg-blur.tsx'
import { ArticlePreview } from '~/components/ArticlePreview.tsx'
import { Button } from '~/components/ui/button.tsx'
import { useState } from 'react'
import { type LinksFunction, json } from '@remix-run/node'
import { H1 } from '../ui+/components/typography/h1.tsx'

/* import { post as layout } from './layout/index.tsx' */
import { post as theDarkSideOfTheGridPost } from './the-dark-side-of-the-grid/index.tsx'
import { post as fluidSpacePost } from './fluid-space-sizing/index.tsx'
import { post as fluidTypographyPost } from './fluid-typography-sizing-with-modular-scales/index.tsx'
import { post as remixDataFlowPost } from './remix-data-flow/index.tsx'
import { P } from '../ui+/components/typography/p.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/articles' }]
}

export type Post = {
	title: string
	description: string
	imageUrl: string
	date: string
	href: string
	topics: string[]
}

export const loader = () => {
	const posts: Post[] = [/* layout,  */ theDarkSideOfTheGridPost, fluidSpacePost, fluidTypographyPost, remixDataFlowPost]
	const tags = [...new Set(posts.map(({ topics }) => topics).flat())]
	return json({ posts, tags })
}

const Articles = () => {
	const loaderData = useLoaderData<typeof loader>()
	const [tagsArray, setTagsArray] = useState<{ tag: string; selected: boolean }[]>(loaderData.tags.map((tag: string) => ({ tag, selected: false })))
	const [postsArray, setPostsArray] = useState<Post[]>(loaderData.posts)

	const handleTagClick = (t: string) => {
		// Select the clicked tag
		const newTagsArray = tagsArray.map(({ tag, selected }) => ({ tag, selected: tag === t ? !selected : selected }))
		// Get all selected tags
		const selectedTags = newTagsArray.filter(({ selected }) => selected)
		// Filter posts by selected tags
		const newPostsArray = loaderData.posts.filter(({ topics }) => selectedTags.length === 0 || selectedTags.every(({ tag }) => topics.some(topic => tag === topic)))
		setTagsArray(newTagsArray)
		setPostsArray(newPostsArray)
	}

	return (
		<>
			<BackgroundBlur>
				<Container>
					<div className="py-24 sm:py-32">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<H1 size="4xl">Great web dev articles</H1>
							<P size="lg" className="mt-6 text-muted-800">
								Articles to make full-stack web dev a cakewalk.
							</P>
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
								<P size="md">Filter by topic:</P>
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
