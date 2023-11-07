import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { AspectRatio } from '../components/layout/aspect-ratio.tsx'
import blueSkies from '../images/sarah-lee-ydpczVKWl4w-unsplash.jpg'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'

const component: componentProps = {
	name: 'Aspect Ratio',
	shortName: 'AspectRatio',
	fileName: 'aspect-ratio',
	category: 'layout',
	description: ['Displays content within a desired ratio.'],
	features: ['Accepts any custom ratio.'],
	parts: [
		{
			name: 'AspectRatio',
			description: 'Displays content within a desired ratio.',
			props: [{ name: 'ratio', type: 'number', default: '1' }],
		},
	],
	usage: `<AspectRatio ratio={16 / 9}>
	<img src={blueSkies} alt="By Sarah Lee on Unsplash" className="h-full w-full rounded-xl object-cover" />
</AspectRatio>`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const AspectRatioRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, usage, parts } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />
			<Usage usage={usage} shortName={shortName} />
			<AspectRatio ratio={16 / 9}>
				<img src={blueSkies} alt="By Sarah Lee on Unsplash" className="h-full w-full rounded-xl object-cover" />
			</AspectRatio>
			<Source source={source} fileName={fileName} />
		</>
	)
}
export default AspectRatioRoute
