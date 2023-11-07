import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Divider } from '../components/layout/divider.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'

const component: componentProps = {
	name: 'Divider',
	shortName: 'Divider',
	fileName: 'divider',
	category: 'layout',
	description: ['Visually or semantically separates content.'],
	features: ['Supports horizontal and vertical orientations.', 'Support visibility in the accessibility tree.'],
	parts: [
		{
			name: 'Divider',
			description: 'Visually or semantically separates content.',
			props: [
				{ name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'" },
				{ name: 'decorative', type: 'boolean', default: 'false' },
			],
		},
	],
	usage: `<div>
	<div className="space-y-1">
		<Text as="p" size="md" weight="bold">
			andrecasal/ui
		</Text>
		<Text as="p" size="sm">
			An open-source UI component library.
		</Text>
	</div>
	<Divider className="my-4" />
	<Flex gap="10" align="center" className="h-5">
		<Text as="p" size="sm">
			Blog
		</Text>
		<Divider orientation="vertical" />
		<Text as="p" size="sm">
			Docs
		</Text>
		<Divider orientation="vertical" />
		<Text as="p" size="sm">
			Source
		</Text>
	</Flex>
</div>`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const DividerRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, usage, parts } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />
			<Usage usage={usage} shortName={shortName} />
			<div>
				<div className="space-y-1">
					<Text as="p" size="md" weight="bold">
						andrecasal/ui
					</Text>
					<Text as="p" size="sm">
						An open-source UI component library.
					</Text>
				</div>
				<Divider className="my-4" />
				<Flex gap="10" align="center" className="h-5">
					<Text as="p" size="sm">
						Blog
					</Text>
					<Divider orientation="vertical" />
					<Text as="p" size="sm">
						Docs
					</Text>
					<Divider orientation="vertical" />
					<Text as="p" size="sm">
						Source
					</Text>
				</Flex>
			</div>
			<Source source={source} fileName={fileName} />
		</>
	)
}
export default DividerRoute
