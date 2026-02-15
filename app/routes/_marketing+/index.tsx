import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { Newsletter } from '~/components/newsletter.tsx'
import { Link } from '@remix-run/react'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const meta: MetaFunction = () => [{ title: 'André Casal' }]

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/' }]
}

export default function Index() {
	return (
		<>
			{/* Hero */}
			<div className="bg-muted-50 dark:bg-transparent">
				<Container>
					<div className="flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
						<H1 size="5xl" className="max-w-3xl font-bold tracking-tight">
							First-principles thinking about code, product, and life.
						</H1>
						<P size="lg" className="mt-6 max-w-2xl text-muted-600">
							I write long-form essays about the decisions that compound.
						</P>
						<div className="mt-10 flex gap-4">
							<Link
								to="/essays"
								className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-size-sm font-semibold text-background transition-colors hover:bg-foreground/90"
							>
								Read essays
							</Link>
							<Link
								to="/newsletter"
								className="inline-flex h-12 items-center justify-center rounded-md border border-muted-300 px-8 text-size-sm font-semibold transition-colors hover:bg-muted-100"
							>
								Subscribe
							</Link>
						</div>
					</div>
				</Container>
			</div>

			{/* Newsletter */}
			<Container>
				<Newsletter className="py-24 sm:py-32" />
			</Container>

			{/* LaunchFast */}
			<Container>
				<div className="border-t border-muted-200 py-16">
					<P size="lg" className="text-muted-600">
						I built{' '}
						<a href="https://launchfast.pro" target="_blank" rel="noreferrer" className="font-semibold text-foreground underline decoration-brand underline-offset-4 hover:text-brand">
							LaunchFast
						</a>{' '}
						&mdash; founding infrastructure for TypeScript web apps.
					</P>
				</div>
			</Container>
		</>
	)
}
