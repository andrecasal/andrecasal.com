import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/container.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const headingSource = `<Container>Some content</Container>`
	const stylingSource = `/* Container */
@layer base {
	:root {
		/* 👇 Edit these values */
		--container-min-padding: var(--scale-4);
		--container-max-padding: var(--scale-13);

		/* Calculations */
		--container-deltaY: calc(var(--container-max-padding) - var(--container-min-padding));
		--container-gradient: calc(var(--container-deltaY) / var(--size-deltaX));
		--container-intercept: calc(var(--container-min-padding) - (var(--container-gradient) * var(--content-min-width)));
		--container-padding-size: calc(var(--container-gradient) * 100vw + var(--container-intercept) * 1rem);
		--container-padding-x: clamp(calc(var(--container-min-padding) * 1rem), var(--container-padding-size), calc(var(--container-max-padding) * 1rem));
	}
}`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Container
			</Heading>
			<Text className="mt-4">Constrains the maximum width of page content.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Inherits the content's max width and centers content beyond it.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Allows for fluid padding control.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={headingSource} filename="HeadingExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">This page is wrapped in a {'<Container />'}. To see it in action, resize the window and see how the padding grows fluidly with viewport width.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="heading" extension="tsx" className="mt-4" />

			<Heading as="h2" size="3xl" className="mt-8">
				Styling
			</Heading>
			<CodeBlock code={stylingSource} filename="tailwind" extension="css" className="mt-4" />
		</>
	)
}
export default HeadingRoute
