import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Code } from '../components/typography/code.tsx'
import { AspectRatio } from '../components/layout/aspect-ratio.tsx'
import blueSkies from '../images/sarah-lee-ydpczVKWl4w-unsplash.jpg'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/aspect-ratio.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const AspectRatioRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usage = `<AspectRatio ratio={16 / 9}>
	<img src={blueSkies} alt="By Sarah Lee on Unsplash" className="h-full w-full rounded-xl object-cover" />
</AspectRatio>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Aspect Ratio
			</Heading>
			<Text className="mt-4">Displays content within a desired ratio.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Accepts any custom ratio.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename="AspectRatioExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">
				Here's the <Code>{'<AspectRatio />'}</Code> component in action.
			</Text>
			<AspectRatio ratio={16 / 9}>
				<img src={blueSkies} alt="By Sarah Lee on Unsplash" className="h-full w-full rounded-xl object-cover" />
			</AspectRatio>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="aspect-ratio" extension="tsx" className="mt-4" />
		</>
	)
}
export default AspectRatioRoute
