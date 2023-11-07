import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { Link, useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'
import { Code } from '../components/typography/code.tsx'

const component: componentProps = {
	name: 'Flex',
	shortName: 'Flex',
	fileName: 'flex',
	category: 'layout',
	description: ['Component for creating unidimensional flex layouts.'],
	features: ['Inherits the space scale on the gap prop.'],
	parts: [
		{
			name: 'Flex',
			description: 'Component for creating unidimensional flex layouts.',
			props: [
				{ name: 'inline', type: 'boolean', default: 'false' },
				{ name: 'direction', type: "'row' | 'col'", default: "'row'" },
				{ name: 'justify', type: "'start' | 'center' | 'end' | 'between'", default: "'start'" },
				{ name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", default: "'start'" },
				{ name: 'gap', type: '0 to 20', default: '0' },
			],
		},
	],
	usage: `<Flex inline gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="center" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="end" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="between" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="center" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="end" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="stretch" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
</Flex>`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, usage, parts } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />

			<Heading as="h2" size="3xl" className="mt-8">
				Notes
			</Heading>
			<Text className="mt-4">
				If you set <Code>inline</Code>, justify has no meaning because the <Code>{'<Flex />'}</Code> has the least width possible.
			</Text>
			<Text className="mt-4">
				If you set <Code>align="stretch"</Code>, the children shouldn't have a fixed height, because otherwise, they won't stretch.
			</Text>
			<Text className="mt-4">
				Flexbox loses a lot of its power if you use <Code>flex-wrap: wrap</Code>, so this option is omitted on purpose. If you need to wrap, you should probably use a grid instead.
				But if you don't, you can still use <Code>className="flex-wrap"</Code>.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Accessibility concerns
			</Heading>
			<Text className="mt-4">
				Changing visual order creates a disconnect between content and presentation and is, therefore,{' '}
				<Link to="/articles/the-dark-side-of-the-grid" className="underline">
					bad for accessibility
				</Link>
				. For this reason, I've ommitted <Code>flex-direction: row-reverse</Code> and <Code>flex-direction: column-reverse</Code>.
			</Text>

			<Usage usage={usage} shortName={shortName} />
			<Flex inline gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex justify="center" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex justify="end" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex justify="between" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex align="center" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex align="end" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex align="stretch" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
			</Flex>

			<Source source={source} fileName={fileName} />
		</>
	)
}
export default HeadingRoute
