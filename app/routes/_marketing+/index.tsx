import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const meta: MetaFunction = () => [
	{ title: 'André Casal — First-principles thinking about code, product, and life' },
	{ name: 'description', content: 'Long-form essays about the decisions that compound — in code, product, and life.' },
]

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://andrecasal.com/' }]

export default function Index() {
	return (
		<Container>
			{/* Hero */}
			<div className="flex flex-col items-center py-16 text-center sm:py-24 lg:py-32">
				<img src="/img/andre_casal.png" alt="André Casal" className="mb-8 aspect-square w-24 rounded-full object-contain sm:w-28" />
				<H1 size="5xl" className="max-w-3xl font-bold tracking-tight">
					First-principles thinking about code, product, and life.
				</H1>
				<P size="lg" className="mt-6 max-w-2xl text-muted-600">
					I write long-form essays about the decisions that compound.
				</P>
				<P size="sm" className="mt-3 text-muted-400">
					Engineer. Built{' '}
					<a href="https://launchfast.pro" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-muted-600">
						LaunchFast
					</a>
					. Worked with Microsoft, NBC News, and the Gulbenkian Foundation.
				</P>
				<div className="mt-10 flex gap-4">
					<Link
						to="/essays"
						className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-size-sm font-semibold text-background transition-colors hover:bg-foreground/90"
					>
						Read essays
					</Link>
					<Link
						to="#newsletter"
						className="inline-flex h-12 items-center justify-center rounded-md border border-muted-300 px-8 text-size-sm font-semibold transition-colors hover:bg-muted-100"
					>
						Subscribe
					</Link>
				</div>
			</div>

			{/* Newsletter */}
			<div className="border-t border-muted-200">
				<Newsletter
					id="newsletter"
					className="py-16 text-center sm:py-24"
					title="Get notified when I publish"
					description="One deep essay per month on code architecture, product strategy, and first-principles thinking. Each one takes weeks to research. No fluff, no spam."
				/>
			</div>

			{/* LaunchFast */}
			<div className="border-t border-muted-200 py-12">
				<P size="lg" className="text-center text-muted-600">
					I built{' '}
					<a href="https://launchfast.pro" target="_blank" rel="noreferrer" className="font-semibold text-foreground underline decoration-brand underline-offset-4 hover:text-brand">
						LaunchFast
					</a>{' '}
					&mdash; founding infrastructure for TypeScript web apps.
				</P>
			</div>
		</Container>
	)
}
