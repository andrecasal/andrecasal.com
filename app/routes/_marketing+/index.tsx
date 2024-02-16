import type { V2_MetaFunction, LinksFunction } from '@remix-run/node'
import HeroAndre from './components/hero-andre.tsx'
import Brands from './components/brands.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Link } from '@remix-run/react'
import { H2 } from './ui+/components/typography/h2.tsx'
import { Span } from './ui+/components/typography/span.tsx'
import styles from './hero-animation.css'

export const meta: V2_MetaFunction = () => [{ title: 'André Casal' }]

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function Index() {
	const successful_businesses = [
		{
			name: 'Tutoring',
			description: 'Tutoring college students on Computer Science. Algebra, Calculus, Digital Systems, Computer Architecture, Programming, Data Structures, Algorithms, and more.',
			icon: 'academic-cap',
			link: '/tutoring',
		},
		{
			name: 'Mentoring',
			description: "Business mentoring for entrepreneurs. I'll help you build your service or tech product, find your first customers, and grow your business.",
			icon: 'chat-bubble-left-right',
			link: '/mentorship',
		},
	]

	const currently_building = [
		{
			name: 'UI library',
			description: 'All the lego pieces to build your UI. An accessible, SEO-optimized, UI library for fast UI development.',
			icon: 'mix',
			link: '/ui',
		},
		{
			name: 'ShipFast',
			description: 'The Remix stack with all you need to build your full-stack web app. From idea to production in 5 minutes.',
			icon: 'bolt',
			link: '/ship-fast',
		},
		{
			name: 'Estuda Comigo',
			description: 'Platform for Portuguese students to find the best tutors.',
			icon: 'estuda-comigo',
			link: 'https://www.estuda-comigo.com/',
		},
		{
			name: 'Newsletter & Articles',
			description: 'Golden nuggets of (usually technical) knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks.',
			icon: 'file-text',
			link: '/articles',
		},
	]

	return (
		<>
			<HeroAndre />
			<Brands />
			<Container id="built">
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:text-center">
						<H2 size="3xl" align="center" className="mt-4 font-bold">
							<span className="inline-block -rotate-1 px-2 font-bold text-brand">Successfull</span> businesses
						</H2>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{successful_businesses.map(feature => (
								<Link key={feature.name} to={feature.link} className="rounded-xl p-4 hover:bg-muted-100 dark:hover:bg-muted-200">
									<dt>
										<Span size="md" className="flex gap-2 font-bold text-muted-900">
											<Icon name={feature.icon as any} className="h-6 w-6 text-foreground" aria-hidden="true" />
											{feature.name}
										</Span>
									</dt>
									<dd className="mt-2 text-muted-600">
										<Span size="md">{feature.description}</Span>
									</dd>
								</Link>
							))}
						</dl>
					</div>
				</div>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:text-center">
						<H2 size="3xl" align="center" className="mt-4 font-bold">
							Currently <span className="inline-block -rotate-1 px-2 font-bold text-brand">building</span>
						</H2>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{currently_building.map(feature => (
								<Link key={feature.name} to={feature.link} className="rounded-xl p-4 hover:bg-muted-100 dark:hover:bg-muted-200">
									<dt>
										<Span size="md" className="flex gap-2 font-bold text-muted-900">
											<Icon name={feature.icon as any} className="h-6 w-6 text-foreground" aria-hidden="true" />
											{feature.name}
										</Span>
									</dt>
									<dd className="mt-2 text-muted-600">
										<Span size="md">{feature.description}</Span>
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
