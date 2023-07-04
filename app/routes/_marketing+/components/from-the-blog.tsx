import { ArticlePreview } from '~/components/ArticlePreview.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Heading } from '~/components/ui/heading.tsx'

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

const FromTheBlog = () => {
	return (
		<Container>
			<div className="pb-12 pt-24 sm:pb-16 sm:pt-32">
				<div className="mx-auto max-w-2xl text-center">
					<Heading level="h2" size="lg" className="text-center">
						Blog
					</Heading>
					<p className="mt-2 text-body-md text-muted-600">Well-thought-out solutions to common problems in modern full-stack web dev.</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map(post => (
						<ArticlePreview key={post.id} post={post} />
					))}
				</div>
			</div>
		</Container>
	)
}

export default FromTheBlog
