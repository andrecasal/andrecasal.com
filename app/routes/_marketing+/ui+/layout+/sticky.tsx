import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Sticky } from '../components/layout/sticky.tsx'
import { Code } from '../components/typography/code.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'
import { P } from '../components/typography/p.tsx'

const component: componentProps = {
	name: 'Sticky',
	shortName: 'Sticky',
	fileName: 'sticky',
	category: 'layout',
	description: ['Sticky allows an element to become fixed in its parent container when it reaches a top, left, bottom, or right threshold.'],
	parts: [
		{
			name: 'Sticky',
			description: 'Sticky allows an element to become fixed in its parent container when it reaches a top, left, bottom, or right threshold.',
		},
	],
	usage: `<div className="mt-14 h-80 overflow-y-auto rounded-lg border">
	<div className="h-10" />
	<Sticky className="top-0 bg-green-500">This sticks</Sticky>
	<div className="h-40" />
	<p>Some content</p>
	<div className="h-40" />
	<Sticky className="top-0 bg-emerald-500">This also sticks</Sticky>
	<div className="h-40" />
	<p>Some more content</p>
	<div className="h-40" />
</div>`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const StickyRoute = () => {
	const { source } = useLoaderData<typeof loader>()

	const { name, description, shortName, fileName, features, usage, parts } = component

	return (
		<>
			<Description name={name} description={description} />
			<P className="mt-4">
				You are responsible for giving it a <Code>top-x</Code>, <Code>left-x</Code>, <Code>bottom-x</Code> or <Code>right-x</Code> position to stick to.
			</P>
			<Features features={features} />
			<Parts parts={parts} />
			<Usage usage={usage} shortName={shortName} />
			<div className="mt-14 h-80 overflow-y-auto rounded-lg border">
				<div className="h-10" />
				<Sticky className="top-0 bg-green-500">This sticks</Sticky>
				<div className="h-40" />
				<p>Some content</p>
				<div className="h-40" />
				<Sticky className="top-0 bg-emerald-500">This also sticks</Sticky>
				<div className="h-40" />
				<p>Some more content</p>
				<div className="h-40" />
			</div>
			<Source source={source} fileName={fileName} />
			<P className="mt-4">
				This is just a <Code>div</Code> with the <Code>sticky</Code> class on it, but it's easier to read <Code>{'<Sticky>'}</Code> than <Code>{'<div className="sticky">'}</Code>.
			</P>
		</>
	)
}
export default StickyRoute
