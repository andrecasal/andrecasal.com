import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { Ul } from '../components/typography/ul.tsx'
import { Li } from '../components/typography/li.tsx'
import { Ol } from '../components/typography/ol.tsx'

const component: componentProps = {
	name: 'Ol',
	shortName: 'Ol',
	fileName: 'ol',
	category: 'typography',
	description: ['An ordered list of items.'],
	features: ['Drop-in replacement for the native <ol> element.'],
	parts: [
		{
			name: 'Ol',
			description: 'An ordered list of items.',
		},
	],
	usage: `<Ul>
	<Li>Milk</Li>
	<Li>
		Cheese
		<Ol>
			<Li>Blue cheese</Li>
			<Li>Feta</Li>
		</Ol>
	</Li>
</Ul>`,
	styling: `/* ### Typography ### */
@layer components {
	/* Ol */
	.ol {
		@apply ml-space-10 list-decimal;
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
					<Ol>
						<Li>Blue cheese</Li>
						<Li>Feta</Li>
					</Ol>
				</Li>
			</Ul>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
		</>
	)
}
export default SpanRoute
