import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Styling } from '../sections/sections.tsx'

const component: componentProps = {
	name: 'Container',
	shortName: 'Container',
	fileName: 'container',
	category: 'layout',
	description: ['Constrains the maximum width of page content.'],
	features: ["Inherits the content's max width and centers content beyond it.", 'Allows for fluid padding control.'],
	parts: [
		{
			name: 'Container',
			description: 'Constrains the maximum width of page content.',
		},
	],
	usage: `<Container>Some content</Container>`,
	styling: `/* Container */
@layer base {
	:root {
		/* 👇 Edit these values */
		--container-min-padding: var(--scale-4); /* 6px */
		--container-max-padding: var(--scale-13); /* 32px */

		/* Calculations */
		--container-deltaY: calc(var(--container-max-padding) - var(--container-min-padding));
		--container-gradient: calc(var(--container-deltaY) / var(--size-deltaX));
		--container-intercept: calc(var(--container-min-padding) - (var(--container-gradient) * var(--content-min-width)));
		--container-padding-size: calc(var(--container-gradient) * 100vw + var(--container-intercept) * 1rem);
		--container-padding-x: clamp(calc(var(--container-min-padding) * 1rem), var(--container-padding-size), calc(var(--container-max-padding) * 1rem));
	}
}`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()

	const { name, description, shortName, fileName, features, usage, parts, styling } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />
			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename={`${shortName}Example`} extension="tsx" className="mt-4" />
			<Text className="mt-4">This page is wrapped in a {'<Container />'}. To see it in action, resize the window and see how the padding grows fluidly with viewport width.</Text>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
		</>
	)
}
export default HeadingRoute
