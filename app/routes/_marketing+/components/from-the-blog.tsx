import { ArticlePreview } from '~/components/ArticlePreview.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Text } from '~/components/ui/text.tsx'

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
		<Container className="mt-32 sm:mt-56">
			<div className="mx-auto max-w-2xl text-center">
				<Text heading="h2" size="3xl" className="text-center sm:text-size-4xl">
					Blog
				</Text>
				<Text size="lg" className="mx-auto mt-6 max-w-xl text-center text-muted-600">
					Well-thought-out solutions to common problems in modern full-stack web dev.
				</Text>
			</div>
			<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{posts.map(post => (
					<ArticlePreview key={post.id} post={post} />
				))}
			</div>
		</Container>
	)
}

export default FromTheBlog
