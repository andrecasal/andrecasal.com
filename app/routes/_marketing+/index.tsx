import type { LinksFunction, MetaFunction } from '@remix-run/node'
import HeroAndre from './components/hero-andre.tsx'
import Brands from './components/brands.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Link } from '@remix-run/react'
import { Container } from '~/ui_components/layout/container.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { Span } from '~/ui_components/typography/span.tsx'

export const meta: MetaFunction = () => [{ title: 'André Casal' }]

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/' }]
}

export default function Index() {
	const successful_businesses = [
		{
			name: 'LaunchFast.pro',
			description: 'One command to a fully featured, secure, production-ready app.',
			icon: 'rocket',
			link: 'https://launchfast.pro',
			external: true,
		},
		{
			name: 'Newsletter & Articles',
			description: 'Golden nuggets of (usually technical) knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks.',
			icon: 'file-text',
			link: '/articles',
		},
		{
			name: 'Mentoring',
			description: "Business mentoring for entrepreneurs. I'll help you build your service or tech product, find your first customers, and grow your business.",
			icon: 'chat-bubble-left-right',
			link: '/mentorship',
		},
		{
			name: 'Tutoring',
			description: 'Tutoring college students on Computer Science. Algebra, Calculus, Digital Systems, Computer Architecture, Programming, Data Structures, Algorithms, and more.',
			icon: 'academic-cap',
			link: '/tutoring',
		},
	]

	const currently_building = [
		{
			name: 'VerveUI',
			description: 'All the lego pieces to build your UI. An accessible, SEO-optimized, UI library for fast UI development.',
			icon: 'mix',
			link: 'https://verveui.pro',
			external: true,
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
							<span className="inline-block -rotate-1 px-2 font-bold text-brand">Stuff I've built</span>
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
											{feature.name} {feature.external ? <Icon name="paper-plane" className="-mt-1 inline-block h-3 w-3 -rotate-45" /> : null}
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
