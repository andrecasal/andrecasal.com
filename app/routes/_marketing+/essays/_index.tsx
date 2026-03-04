import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://andrecasal.com/essays' }]

export const meta: MetaFunction = () => [
	{ title: 'Essays | André Casal' },
	{ name: 'description', content: 'First-principles thinking about code, product, and life.' },
	{ name: 'keywords', content: 'essays, first-principles, web development, software engineering, typescript, react, css, design systems, functional programming' },
]

export type Essay = {
	title: string
	description: string
	imageUrl: string
	date: string
	href: string
	pillars: string[]
}

export function getEssays(): Essay[] {
	return [
		{
			title: 'Stripe from First Principles',
			description:
				'A first-principles guide to Stripe. Builds your mental model layer by layer — from how money moves, through Payment Intents, webhooks, payment methods, checkout, subscriptions, Connect, disputes, and payouts.',
			imageUrl: '',
			date: '2026-02-28',
			href: '/essays/stripe-from-first-principles',
			pillars: ['Code'],
		},
	]
}

export default function Essays() {
	const essays = getEssays()

	return (
		<>
			<Container>
				<div className="py-16 sm:py-24">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<H1 size="4xl">Essays</H1>
						<P size="lg" className="mt-6 text-muted-600">
							First-principles thinking about code, product, and life.
						</P>
					</div>

					{essays.length > 0 ? (
						<div className="mt-16">
							<ul className="space-y-8">
								{essays.map(essay => (
									<li key={essay.href}>
										<Link to={essay.href} className="group block border-l-2 border-muted-200 pl-6 transition-colors hover:border-brand">
											<P size="xs" className="font-semibold uppercase tracking-wider text-brand">
												{essay.pillars.join(' · ')}
											</P>
											<P size="lg" className="mt-1 font-semibold group-hover:text-brand">
												{essay.title}
											</P>
											<P size="md" className="mt-1 text-muted-500">
												{essay.description}
											</P>
											<P size="sm" className="mt-2 text-muted-400">
												<time dateTime={essay.date}>{new Date(essay.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
											</P>
										</Link>
									</li>
								))}
							</ul>
						</div>
					) : null}
				</div>
			</Container>
			<Container>
				<Newsletter
					className="relative isolate mt-4 sm:mt-8"
					title="Get notified when I publish"
					description="One deep essay per month on code architecture, product strategy, and first-principles thinking."
				/>
			</Container>
		</>
	)
}
