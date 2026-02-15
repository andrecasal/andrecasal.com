import { type LinksFunction, type MetaFunction } from '@remix-run/node'
import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/essays' }]
}

export const meta: MetaFunction = () => {
	return [
		{ title: `Essays | André Casal` },
		{
			name: 'description',
			content: `First-principles thinking about code, product, and life.`,
		},
		{
			name: 'keywords',
			content: `essays, first-principles, web development, software engineering, typescript, react, css, design systems, functional programming`,
		},
	]
}

export type Essay = {
	title: string
	description: string
	imageUrl: string
	date: string
	href: string
	pillars: string[]
}

export function getEssays(): Essay[] {
	return []
}

function Essays() {
	return (
		<>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<H1 size="4xl">Essays</H1>
						<P size="lg" className="mt-6 text-muted-600">
							First-principles thinking about code, product, and life.
						</P>
					</div>
					<P size="md" className="mt-16 text-muted-400">
						First essay coming soon.
					</P>
				</div>
			</Container>
			<Container>
				<Newsletter className="relative isolate mt-8 sm:mt-16" />
			</Container>
		</>
	)
}

export default Essays
