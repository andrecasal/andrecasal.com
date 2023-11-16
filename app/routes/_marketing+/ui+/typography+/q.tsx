import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { P } from '../components/typography/p.tsx'
import { Q } from '../components/typography/q.tsx'

const component: componentProps = {
	name: 'Q',
	shortName: 'Q',
	fileName: 'q',
	category: 'typography',
	description: ['A short inline quotation.'],
	features: ['Drop-in replacement for the native <q> element.', "Automatically inherits the parent's design tokens (just like a normal q tag)."],
	parts: [
		{
			name: 'Q',
			description: 'A short inline quotation.',
			props: [
				{ name: 'weight', type: 'enum: black, extrabold, bold, semibold, medium, normal, light, extralight, thin', default: 'No default value' },
				{ name: 'size', type: 'enum: 4xl, 3xl, 2xl, xl, lg, md, sm, xs', default: 'No default value' },
				{ name: 'align', type: 'enum: left, center, or right', default: 'No default value' },
				{ name: 'tracking', type: 'enum: tighter, tight, normal, wide, wider, or widest', default: 'size-dependent' },
			],
		},
	],
	usage: `<P>
	When Dave asks HAL to open the pod bay door, HAL answers: <Q>I'm sorry, Dave. I'm afraid I can't do that.</Q>
</P>`,
	styling: `/* ### Typography ### */
@layer components {
	/* Q */
	.q {
		@apply before:content-['“'] after:content-['”'];
	}
}`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const SpanRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, usage, parts, styling } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />
			<Usage usage={usage} shortName={shortName} />
			<P>
				When Dave asks HAL to open the pod bay door, HAL answers: <Q>I'm sorry, Dave. I'm afraid I can't do that.</Q>
			</P>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
		</>
	)
}
export default SpanRoute
