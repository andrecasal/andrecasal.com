import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Divider } from '../components/layout/divider.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'
import { P } from '../components/typography/p.tsx'

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
		<P size="md" weight="bold">
			andrecasal/ui
		</P>
		<P size="sm">
			An open-source UI component library.
		</P>
	</div>
	<Divider className="my-4" />
	<Flex gap="10" align="center" className="h-5">
		<P size="sm">
			Blog
		</P>
		<Divider orientation="vertical" />
		<P size="sm">
			Docs
		</P>
		<Divider orientation="vertical" />
		<P size="sm">
			Source
		</P>
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
					<P size="md" weight="bold">
						andrecasal/ui
					</P>
					<P size="sm">An open-source UI component library.</P>
				</div>
				<Divider className="my-4" />
				<Flex gap="10" align="center" className="h-5">
					<P size="sm">Blog</P>
					<Divider orientation="vertical" />
					<P size="sm">Docs</P>
					<Divider orientation="vertical" />
					<P size="sm">Source</P>
				</Flex>
			</div>
			<Source source={source} fileName={fileName} />
		</>
	)
}
export default DividerRoute
