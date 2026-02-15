import { type LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { Newsletter } from '~/components/newsletter.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/about' }]
}

const social = [
	{ name: 'X', href: 'https://twitter.com/andrecasaldev' },
	{ name: 'GitHub', href: 'https://github.com/andrecasal' },
	{ name: 'Bluesky', href: 'https://bsky.app/profile/andrecasal.com' },
	{ name: 'LinkedIn', href: 'https://linkedin.com/in/andrecasal' },
]

export default function AboutRoute() {
	return (
		<Container>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-2xl">
					<H1 size="4xl" className="font-bold tracking-tight">
						About
					</H1>

					<div className="mt-10 flex justify-center">
						<img src="/img/andre_casal.png" alt="André Casal" className="aspect-square w-48 rounded-2xl object-contain sm:w-64" />
					</div>

					<div className="mt-10 space-y-6">
						<P size="xl" className="text-muted-600">
							I'm a first-principles thinker, philosopher, and engineer. I think about systems deeply before I build them — whether that's software architecture, a product
							strategy, or a framework for thinking about life decisions.
						</P>
						<P size="xl" className="text-muted-600">
							I don't take things at face value. I question defaults, discard inherited assumptions, and reconstruct from the ground up. This is how I approach everything — code,
							product, and life.
						</P>
					</div>

					<H2 size="2xl" className="mt-16 font-bold">
						What this site is
					</H2>
					<div className="mt-6 space-y-6">
						<P size="xl" className="text-muted-600">
							I write long-form essays about the decisions that compound — in code, product, and life. Each essay is an attempt to think clearly about something that matters and
							share what I find.
						</P>
						<P size="xl" className="text-muted-600">
							This site is the home of those essays. No fluff, no listicles, no hot takes. Just deep thinking, clearly expressed.
						</P>
					</div>

					<H2 size="2xl" className="mt-16 font-bold">
						LaunchFast
					</H2>
					<div className="mt-6 space-y-6">
						<P size="xl" className="text-muted-600">
							I built{' '}
							<a
								href="https://launchfast.pro"
								target="_blank"
								rel="noreferrer"
								className="font-semibold text-foreground underline decoration-brand underline-offset-4 hover:text-brand"
							>
								LaunchFast
							</a>{' '}
							because I applied first-principles thinking to the question: what does a founding codebase actually need? The result is a production-ready TypeScript starter that
							handles auth, email, payments, and deployment — so you can focus on what makes your product unique.
						</P>
					</div>

					<H2 size="2xl" className="mt-16 font-bold">
						Connect
					</H2>
					<div className="mt-6">
						<P size="xl" className="text-muted-600">
							Find me on{' '}
							{social.map((item, index) => (
								<span key={item.name}>
									<a href={item.href} target="_blank" rel="noreferrer" className="font-semibold text-foreground underline underline-offset-4 hover:text-brand">
										{item.name}
									</a>
									{index < social.length - 2 ? ', ' : index === social.length - 2 ? ', or ' : '.'}
								</span>
							))}
						</P>
					</div>

					<Newsletter className="mt-24 sm:mt-32" />
				</div>
			</div>
		</Container>
	)
}
