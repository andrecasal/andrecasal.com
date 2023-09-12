import { Link } from '@remix-run/react'
import { Newsletter } from '~/components/newsletter.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'

export default function Talks() {
	const talks = [
		{
			id: 1,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
			imageUrl: '/img/andre.jpg',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			category: { title: 'Marketing', href: '#' },
			author: {
				name: 'Michael Foster',
				role: 'Co-Founder / CTO',
				href: '#',
				imageUrl: '/img/andre.jpg',
			},
		},
		{
			id: 2,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
			imageUrl: '/img/andre.jpg',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			category: { title: 'Marketing', href: '#' },
			author: {
				name: 'Michael Foster',
				role: 'Co-Founder / CTO',
				href: '#',
				imageUrl: '/img/andre.jpg',
			},
		},
		{
			id: 3,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
			imageUrl: '/img/andre.jpg',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			category: { title: 'Marketing', href: '#' },
			author: {
				name: 'Michael Foster',
				role: 'Co-Founder / CTO',
				href: '#',
				imageUrl: '/img/andre.jpg',
			},
		},
	]

	return (
		<Container>
			<div className="py-24 sm:py-32">
				<h2 className="text-3xl font-bold tracking-tight text-muted-900 sm:text-4xl">Talks</h2>
				<Text size="lg" className="mt-2 leading-8 text-muted-600">
					Learn how to grow your business with expert advice.
				</Text>
				<div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
					{talks.map(talk => (
						<article key={talk.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
							<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
								<img src={talk.imageUrl} alt="" className="absolute inset-0 h-full w-full rounded-2xl bg-muted-50 object-cover" />
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-muted-900/10" />
							</div>
							<div>
								<div className="flex items-center gap-x-4 text-xs">
									<time dateTime={talk.datetime} className="text-muted-500">
										{talk.date}
									</time>
									<a href={talk.category.href} className="relative z-10 rounded-full bg-muted-50 px-3 py-1.5 font-medium text-muted-600 hover:bg-muted-100">
										{talk.category.title}
									</a>
								</div>
								<div className="group relative max-w-xl">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-muted-900 group-hover:text-muted-600">
										<a href={talk.href}>
											<span className="absolute inset-0" />
											{talk.title}
										</a>
									</h3>
									<Text size="sm" className="mt-5 leading-6 text-muted-600">
										{talk.description}
									</Text>
								</div>
								<div className="mt-6 flex border-t border-muted-900/5 pt-6">
									<div className="relative flex items-center gap-x-4">
										<img src={talk.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-muted-50" />
										<div className="text-sm leading-6">
											<Text weight="bold" className="text-muted-900">
												<a href={talk.author.href}>
													<span className="absolute inset-0" />
													{talk.author.name}
												</a>
											</Text>
											<Text className="text-muted-600">{talk.author.role}</Text>
										</div>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
			<Button variant="link" asChild>
				<Link to="/talks">
					See all talks <span aria-hidden="true">→</span>
				</Link>
			</Button>
			<Newsletter
				className="relative isolate mt-32 sm:mt-56"
				title="Get exclusive talks that I only share with email subscribers"
				description="Golden nuggets of code knowledge. Delivered to your inbox every 2 weeks."
				buttonText="I want my talks"
			/>
		</Container>
	)
}
