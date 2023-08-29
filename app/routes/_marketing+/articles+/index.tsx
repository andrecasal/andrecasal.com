import { useLoaderData } from '@remix-run/react'
import { Container } from '../../../components/ui/container.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import BackgroundBlur from '../components/bg-blur.tsx'
import { ArticlePreview } from '~/components/ArticlePreview.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Text } from '~/components/ui/text.tsx'
import { json } from '@remix-run/node'
import { z } from 'zod'

const sanityProjectId = process.env.SANITY_PROJECT_ID
const sanityDataset = process.env.SANITY_DATASET
const sanityEndpoint = `https://${sanityProjectId}.api.sanity.io/v2021-10-21/data/query/${sanityDataset}`

const postSchema = z.object({
	_id: z.string(),
	title: z.string(),
	slug: z.object({
		current: z.string(),
	}),
	categories: z.array(
		z.object({
			title: z.string(),
		}),
	),
	mainImage: z.object({
		asset: z.object({
			originalFilename: z.string(),
			url: z.string(),
		}),
	}),
	/* 	body: z.array(
		z.object({
			_key: z.string(),
			_type: z.enum(['block', 'image']),
			children: z
				.array(
					z.object({
						_key: z.string(),
						_type: z.literal('span'),
						text: z.string(),
					}),
				)
				.nullable(),
			asset: z
				.object({
					url: z.string(),
				})
				.nullable(),
		}),
	), */
})
export type Post = z.infer<typeof postSchema>
const getPostsSuccessSchema = z.object({
	ms: z.number(),
	query: z.string(),
	result: z.array(postSchema),
})

const getPosts = async () => {
	const query = encodeURIComponent(`*[_type=="post"]{
		_id,
		title,
		slug{
			current
		},
		categories[]->{
			title
		},
		mainImage{
			asset->{originalFilename, url}
		}
	}`)
	const response = await fetch(`${sanityEndpoint}?query=${query}`, {
		headers: {
			Authorization: `Bearer ${process.env.SANITY_API_ENDPOINT_KEY}`,
			'Content-Type': 'application/json',
		},
	})
	const data = await response.json()
	return getPostsSuccessSchema.parse(data)
}

const categoriesSchema = z.object({
	_id: z.string(),
	title: z.string(),
})
const getCategoriesSuccessSchema = z.object({
	ms: z.number(),
	query: z.string(),
	result: z.array(categoriesSchema),
})

const getCategories = async () => {
	const query = encodeURIComponent(`*[_type in ["category"]]{
		_id,
		title,
	}`)
	const result = await fetch(`${sanityEndpoint}?query=${query}`, {
		headers: {
			Authorization: `Bearer ${process.env.SANITY_API_ENDPOINT_KEY}`,
			'Content-Type': 'application/json',
		},
	})
	const data = await result.json()
	return getCategoriesSuccessSchema.parse(data)
}

export const loader = async () => {
	const { result: posts } = await getPosts() // Get posts
	const { result: categories } = await getCategories() // Get categories
	return json({ posts, categories } as const)
}

const Articles = () => {
	const { posts, categories } = useLoaderData<typeof loader>()

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
								{categories.map(({ _id, title }: any) => (
									<Button key={_id} variant="secondary" size="pill">
										{title}
									</Button>
								))}
							</div>
						</div>
					</div>
					<div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{posts.map(post => (
							<ArticlePreview key={post._id} post={post} />
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
