import type { V2_MetaFunction } from '@remix-run/node'
import HeroAndre from './components/hero-andre.tsx'
import Brands from './components/brands.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Link } from '@remix-run/react'
import { Heading } from './ui+/components/typography/heading.tsx'

export const meta: V2_MetaFunction = () => [{ title: 'André Casal' }]

export default function Index() {
	const features = [
		/* {
			name: 'Hot and spicy little tips',
			description: 'Spicy little golden nuggets of knowledge. Think of this as Instagram for web dev. Consume at leisure.',
			icon: 'fire',
			link: '/tips',
		}, */
		/* {
			name: 'Short videos',
			description: 'Spicy little golden nuggets of knowledge. Think of this as Instagram for web dev. Consume at leisure.',
			icon: 'play',
			link: '/shorts',
		}, */
		{
			name: 'Articles',
			description: "Relatively short articles you can read in 5 to 10 minutes. You'll learn a lot, but you won't become an expert.",
			icon: 'file-text',
			link: '/articles',
		},
		/* {
			name: 'Talks',
			description: "Talks have the same depth as the articles, except in video format. It's also worth to take notes on these ones, but feel free to merely be entertained.",
			icon: 'presentation-chart-line',
			link: '/talks',
		}, */
		{
			name: 'Courses',
			description: "If you're serious about becoming a full-stack web developer, you'll need to take courses. I'm building a few.",
			icon: 'trophy',
			link: '/courses',
		},
		{
			name: 'Mentorship',
			description: "If you're building something part- or full-time and you'd like to become better, you can hire me as your full-stack web dev mentor.",
			icon: 'rocket',
			link: '/mentorship',
		},
	]

	return (
		<>
			<HeroAndre />
			<Brands />
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:text-center">
						<Heading as="h2" size="md" align="center" className="text-brand">
							Everything you need to
						</Heading>
						<Text size="3xl" align="center" className="mt-4 font-bold">
							Become a modern
							<br className="hidden sm:block" /> full-stack web developer
						</Text>
						<Text size="lg" align="center" className="mt-6 leading-8 text-muted-600">
							The website's content is organized in a rising progression of time and depth.
						</Text>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<Link key={feature.name} to={feature.link} className="rounded-xl p-4 hover:bg-muted-100">
									<dt>
										<Text as="span" size="md" className="flex gap-2 font-bold text-muted-900">
											<Icon name={feature.icon as any} className="h-6 w-6 text-foreground" aria-hidden="true" />
											{feature.name}
										</Text>
									</dt>
									<dd className="mt-2 text-muted-600">
										<Text as="span" size="md">
											{feature.description}
										</Text>
									</dd>
								</Link>
							))}
						</dl>
					</div>
				</div>
				<Newsletter
					className="mt-24 sm:mt-44"
					title="Get exclusive web dev tips that I only share with email subscribers"
					description="Golden nuggets of code knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks."
					buttonText="I want my tips"
				/>
			</Container>
		</>
	)
}
