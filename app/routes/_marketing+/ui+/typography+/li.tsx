import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { Ul } from '../components/typography/ul.tsx'
import { Li } from '../components/typography/li.tsx'

const component: componentProps = {
	name: 'Li',
	shortName: 'Li',
	fileName: 'li',
	category: 'typography',
	description: ['A list item element.'],
	features: ['Drop-in replacement for the native <li> element.'],
	parts: [
		{
			name: 'Li',
			description: 'A list item element.',
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
	/* Li */
	.li {
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
				<Li>Milk</Li>
				<Li>
					Cheese
					<Ul>
						<Li>Blue cheese</Li>
						<Li>Feta</Li>
					</Ul>
				</Li>
			</Ul>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
		</>
	)
}
export default SpanRoute
