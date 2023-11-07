import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Icon } from '~/components/ui/icon.tsx'
import { VisuallyHidden } from '../components/layout/visually-hidden.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'

const component: componentProps = {
	name: 'Visually Hidden',
	shortName: 'VisuallyHidden',
	fileName: 'visually-hidden',
	category: 'layout',
	description: ['Hides content from the screen in an accessible way.'],
	features: ['Visually hides content while preserving it for assistive technology.'],
	parts: [
		{
			name: 'VisuallyHidden',
			description: 'Hides content from the screen in an accessible way.',
		},
	],
	usage: `<Button variant="outline">
	<Icon name="bars-3" />
	<VisuallyHidden>Settings</VisuallyHidden>
</Button>`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const VisuallyHiddenRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, usage, parts } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />
			<Usage usage={usage} shortName={shortName} />
			<Button variant="outline">
				<Icon name="bars-3" />
				<VisuallyHidden>Open sidebar</VisuallyHidden>
			</Button>
			<Source source={source} fileName={fileName} />
		</>
	)
}
export default VisuallyHiddenRoute
