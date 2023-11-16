import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { Ul } from '../components/typography/ul.tsx'

const component: componentProps = {
	name: 'Ul',
	shortName: 'Ul',
	fileName: 'ul',
	category: 'typography',
	description: ['An unordered list of items.'],
	features: ['Drop-in replacement for the native <ul> element.'],
	parts: [
		{
			name: 'Ul',
			description: 'An unordered list of items.',
		},
	],
	usage: `<Ul>
	<Li>Milk</Li>
	<Li>
		Cheese
		<Ul>
			<Li>Blue cheese</Li>
			<Li>Feta</Li>
		</Ul>
	</Li>
</Ul>`,
	styling: `/* ### Typography ### */
@layer components {
	/* Ul */
	.ul {
		@apply ml-space-10 list-disc;
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
			<Ul>
				<li>Milk</li>
				<li>
					Cheese
					<Ul>
						<li>Blue cheese</li>
						<li>Feta</li>
					</Ul>
				</li>
			</Ul>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
		</>
	)
}
export default SpanRoute
