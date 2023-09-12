import { Container } from '~/components/ui/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import HeroAndre from './components/hero-andre.tsx'
import { Heading } from './ui+/components/typography/heading.tsx'

export default function AboutRoute() {
	const stats = [
		{ label: 'Transactions every 24 hours', value: '44 million' },
		{ label: 'Assets under holding', value: '$119 trillion' },
		{ label: 'New users annually', value: '46,000' },
	]

	const values = [
		{
			name: 'Be world-class',
			description:
				'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
		},
		{
			name: 'Share everything you know',
			description:
				'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
		},
		{
			name: 'Always learning',
			description: 'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
		},
		{
			name: 'Be supportive',
			description:
				'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
		},
		{
			name: 'Take responsibility',
			description:
				'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
		},
		{
			name: 'Enjoy downtime',
			description: 'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
		},
	]

	return (
		<>
			<HeroAndre />
			<Container>
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
					<h2 className="text-3xl font-bold tracking-tight text-muted-900 sm:text-4xl">My mission</h2>
					<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
						<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
							<Text size="xl" className="leading-8 text-muted-600">
								Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac.
								Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
							</Text>
							<div className="mt-10 max-w-xl text-base leading-7 text-muted-700">
								<Text>
									Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est.
									Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
									semper sed amet vitae sed turpis id.
								</Text>
								<Text className="mt-10">
									Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac
									cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
								</Text>
							</div>
						</div>
						<div className="lg:flex lg:flex-auto lg:justify-center">
							<dl className="w-64 space-y-8 xl:w-80">
								{stats.map(stat => (
									<div key={stat.label} className="flex flex-col-reverse gap-y-4">
										<dt className="text-base leading-7 text-muted-600">{stat.label}</dt>
										<dd className="text-5xl font-semibold tracking-tight text-muted-900">{stat.value}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</Container>
			<div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
				<img src="/img/friends.jpeg" alt="André Casal and friends" className="aspect-[16/9] w-full object-cover xl:rounded-3xl" />
			</div>
			<Container className="mt-32 sm:mt-40">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-muted-900 sm:text-4xl">Some of the values I live by</h2>
					<Text size="lg" className="mt-6 leading-8 text-muted-600">
						Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
					</Text>
				</div>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{values.map(value => (
						<div key={value.name}>
							<dt className="font-semibold text-muted-900">{value.name}</dt>
							<dd className="mt-1 text-muted-600">{value.description}</dd>
						</div>
					))}
				</dl>
			</Container>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<Heading as="h2" size="3xl">
							Conclusion
						</Heading>
						<Text size="lg" className="mt-6 text-muted-600">
							This is my conclusion.
						</Text>
					</div>
				</div>
			</Container>
		</>
	)
}
