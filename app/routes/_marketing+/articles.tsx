import { Link, useLoaderData } from '@remix-run/react'
import { Container } from '../../components/ui/container.tsx'
import Newsletter from './components/newsletter.tsx'
import BackgroundBlur from './components/bg-blur.tsx'
import { ArticlePreview } from '~/components/ArticlePreview.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'
import { Text } from '~/components/ui/text.tsx'

export const loader = () => {
	const posts = [
		{
			id: 1,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			imageUrl: '/img/andre-at-piano.jpg',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
		},
		{
			id: 2,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			imageUrl: '/img/andre-at-piano.jpg',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
		},
		{
			id: 3,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			imageUrl: '/img/andre-at-piano.jpg',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
		},
	]
	const topics = ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Tailwind CSS', 'Remix', 'Performance', 'Open Source', 'UX']
	return { posts, topics }
}

const Blog = () => {
	const { posts, topics } = useLoaderData()
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
								Well-thought-out solutions to common problems in modern full-stack web development.
							</Text>
						</div>
						<div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
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
						</div>
						<div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 lg:max-w-none">
							<div>
								<Text size="md">Filter by topic:</Text>
							</div>
							<div className="flex flex-wrap gap-4">
								{topics.map((topic: any) => (
									<Button key={topic} variant="secondary" size="pill">
										{topic}
									</Button>
								))}
							</div>
						</div>
					</div>
					<div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{posts.map((post: any) => (
							<ArticlePreview key={post.id} post={post} />
						))}
						{posts.map((post: any) => (
							<ArticlePreview key={post.id} post={post} />
						))}
						{posts.map((post: any) => (
							<ArticlePreview key={post.id} post={post} />
						))}
					</div>
					<div className="flex justify-around">
						<Button variant="secondary" size="lg" className="mt-8 text-muted-600 sm:mt-10 lg:mt-12">
							Load more articles...
						</Button>
					</div>
				</Container>
			</BackgroundBlur>
			<Newsletter />
		</>
	)
}

export default Blog
