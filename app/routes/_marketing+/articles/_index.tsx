import { useLoaderData } from '@remix-run/react'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import BackgroundBlur from '../components/bg-blur.tsx'
import { ArticlePreview } from '~/components/ArticlePreview.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { useState } from 'react'
import { json } from '@remix-run/node'
import { Heading } from '../ui+/components/typography/heading.tsx'
import { title as RemixDataFlowTitle, description as RemixDataFlowDescription } from './remix-data-flow/index.tsx'
import remixDataFlowImage from './remix-data-flow/remix-data-flow.png'
import {
	title as FluidTypographySizingWithModularScalesTitle,
	description as FluidTypographySizingWithModularScalesDescription,
} from './fluid-typography-sizing-with-modular-scales/index.tsx'
import fluidTypographySizingWithModularScalesImage from './fluid-typography-sizing-with-modular-scales/fluid-typography.png'
import { title as fluidSpaceSizingTitle, description as fluidSpaceSizingDescription } from './fluid-space-sizing/index.tsx'
import fluidSpaceSizingImage from './fluid-space-sizing/fluid-space-sizing.png'
import { title as theDarkSideOfTheGridTitle, description as theDarkSideOfTheGridDescription } from './the-dark-side-of-the-grid/index.tsx'
import theDarkSideOfTheGridImage from './the-dark-side-of-the-grid/the-dark-side-of-the-grid.png'

export type Post = {
	title: string
	href: string
	description: string
	imageUrl: string
	topics: string[]
}

export const loader = () => {
	const posts: Post[] = [
		/* {
			title: theDarkSideOfTheGridTitle,
			description: theDarkSideOfTheGridDescription,
			imageUrl: theDarkSideOfTheGridImage,
			href: '/articles/the-dark-side-of-the-grid',
			topics: ['Accessibility', 'CSS'],
		}, */
		{
			title: fluidSpaceSizingTitle,
			description: fluidSpaceSizingDescription,
			imageUrl: fluidSpaceSizingImage,
			href: '/articles/fluid-space-sizing',
			topics: ['Spacing', 'CSS', 'Design Systems'],
		},
		{
			title: FluidTypographySizingWithModularScalesTitle,
			description: FluidTypographySizingWithModularScalesDescription,
			imageUrl: fluidTypographySizingWithModularScalesImage,
			href: '/articles/fluid-typography-sizing-with-modular-scales',
			topics: ['Typography', 'CSS', 'Design Systems'],
		},
		{
			title: RemixDataFlowTitle,
			description: RemixDataFlowDescription,
			imageUrl: remixDataFlowImage,
			href: '/articles/remix-data-flow',
			topics: ['Remix', 'Full-stack'],
		},
	]
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
		const newPostsArray = loaderData.posts.filter(({ topics }) => selectedTags.length === 0 || topics.some(topic => selectedTags.every(({ tag }) => tag === topic)))
		setTagsArray(newTagsArray)
		setPostsArray(newPostsArray)
	}

	return (
		<>
			<BackgroundBlur>
				<Container>
					<div className="py-24 sm:py-32">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<Heading as="h1" size="4xl">
								Great web dev articles
							</Heading>
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
