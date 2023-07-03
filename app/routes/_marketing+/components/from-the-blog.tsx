import { Container } from '~/components/ui/container.tsx'

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
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h2>
					<p className="mt-2 text-body-md leading-8 text-muted-600">Well-thought-out solutions to common problems in modern full-stack web dev.</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map(post => (
						<article key={post.id} className="bg-grey-900 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
							<img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
							<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
							<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

							<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-body-xs leading-6 text-gray-300">
								<time dateTime={post.datetime} className="mr-8">
									{post.date}
								</time>
							</div>
							<h3 className="mt-3 text-body-md font-semibold leading-6 text-white">
								<a href={post.href}>
									<span className="absolute inset-0" />
									{post.title}
								</a>
							</h3>
						</article>
					))}
				</div>
			</div>
		</Container>
	)
}

export default FromTheBlog
