import type { LinksFunction } from '@remix-run/node'
import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://andrecasal.com/about' }]

export default function AboutRoute() {
	return (
		<Container>
			<div className="py-16 sm:py-24">
				<div className="mx-auto max-w-2xl">
					{/* Intro with photo */}
					<div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
						<img src="/img/andre_casal.png" alt="André Casal" className="aspect-square w-28 shrink-0 rounded-2xl object-contain sm:w-36" />
						<div>
							<H1 size="4xl" className="font-bold tracking-tight">
								I think from first principles, then I build.
							</H1>
						</div>
					</div>

					<div className="mt-10 space-y-6">
						<P size="lg" className="text-muted-600">
							I'm a first-principles thinker, philosopher, and engineer. I think about systems deeply before I build them — whether that's software architecture, a product
							strategy, or a framework for thinking about life decisions.
						</P>
						<P size="lg" className="text-muted-600">
							I don't take things at face value. I question defaults, discard inherited assumptions, and reconstruct from the ground up. This is how I approach everything
							— code, product, and life.
						</P>
					</div>

					<H2 size="xl" className="mt-16 font-bold">
						What this site is
					</H2>
					<div className="mt-4 space-y-6">
						<P size="lg" className="text-muted-600">
							I write long-form essays about the decisions that compound — in code, product, and life. Each essay is an attempt to think clearly about something that
							matters and share what I find.
						</P>
						<P size="lg" className="text-muted-600">
							No fluff, no listicles, no hot takes. Just deep thinking, clearly expressed.
						</P>
					</div>

					<H2 size="xl" className="mt-16 font-bold">
						LaunchFast
					</H2>
					<div className="mt-4 space-y-6">
						<P size="lg" className="text-muted-600">
							I built{' '}
							<a
								href="https://launchfast.pro"
								target="_blank"
								rel="noreferrer"
								className="font-semibold text-foreground underline decoration-brand underline-offset-4 hover:text-brand"
							>
								LaunchFast
							</a>{' '}
							because I applied first-principles thinking to the question: what does a founding codebase actually need? The result is a production-ready TypeScript starter
							that handles auth, email, payments, and deployment — so you can focus on what makes your product unique.
						</P>
					</div>

					<div className="mt-16 border-t border-muted-200 pt-16">
						<Newsletter title="Don't miss an essay" description="Subscribe and I'll send each one straight to your inbox." />
					</div>
				</div>
			</div>
		</Container>
	)
}
