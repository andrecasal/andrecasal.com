import { useLoaderData } from '@remix-run/react'
import { Newsletter } from '~/components/newsletter.tsx'
import { EssayCard } from '~/components/essay-card.tsx'
import { Button } from '~/components/ui/button.tsx'
import { useState } from 'react'
import { type LinksFunction, json, type MetaFunction } from '@remix-run/node'
import { essay as theDarkSideOfTheGridEssay } from './the-dark-side-of-the-grid/index.tsx'
import { essay as fluidSpaceEssay } from './fluid-space-sizing/index.tsx'
import { essay as fluidTypographyEssay } from './fluid-typography-sizing-with-modular-scales/index.tsx'
import { essay as remixDataFlowEssay } from './remix-data-flow/index.tsx'
import { essay as whyIsOOPBadEssay } from './why-is-oop-bad/index.tsx'
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
	return [whyIsOOPBadEssay, theDarkSideOfTheGridEssay, fluidSpaceEssay, fluidTypographyEssay, remixDataFlowEssay]
}

export function loader() {
	const essays = getEssays()
	const pillars = [...new Set(essays.flatMap(({ pillars }) => pillars))]
	return json({ essays, pillars })
}

function Essays() {
	const loaderData = useLoaderData<typeof loader>()
	const [pillarsArray, setPillarsArray] = useState<{ pillar: string; selected: boolean }[]>(loaderData.pillars.map((pillar: string) => ({ pillar, selected: false })))
	const [essaysArray, setEssaysArray] = useState<Essay[]>(loaderData.essays)

	const handlePillarClick = (p: string) => {
		const newPillarsArray = pillarsArray.map(({ pillar, selected }) => ({ pillar, selected: pillar === p ? !selected : selected }))
		const selectedPillars = newPillarsArray.filter(({ selected }) => selected)
		const newEssaysArray = loaderData.essays.filter(({ pillars }) => selectedPillars.length === 0 || selectedPillars.every(({ pillar }) => pillars.some(p => pillar === p)))
		setPillarsArray(newPillarsArray)
		setEssaysArray(newEssaysArray)
	}

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
					<div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 lg:max-w-none">
						<div>
							<P size="md">Filter by pillar:</P>
						</div>
						<div className="flex flex-wrap gap-4">
							{pillarsArray.map(({ pillar, selected }) => (
								<Button key={pillar} variant={selected ? 'primary' : 'secondary'} size="pill" onClick={() => handlePillarClick(pillar)}>
									{pillar}
								</Button>
							))}
						</div>
					</div>
				</div>
				<div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{essaysArray.map(essay => (
						<EssayCard key={essay.title} essay={essay} />
					))}
				</div>
			</Container>
			<Container>
				<Newsletter className="relative isolate mt-32 sm:mt-56" />
			</Container>
		</>
	)
}

export default Essays
