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
import { VisuallyHidden } from '../components/layout/visually-hidden.tsx'
import { Button } from '~/components/ui/button.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/visually-hidden.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const VisuallyHiddenRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usage = `<Button variant="outline">
	<Icon name="bars-3" />
	<VisuallyHidden>Settings</VisuallyHidden>
</Button>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Visually Hidden
			</Heading>
			<Text className="mt-4">Hides content from the screen in an accessible way.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Visually hides content while preserving it for assistive technology.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename="VisuallyHiddenExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">
				Here's the <Code>{'<VisuallyHidden />'}</Code> component in action.
			</Text>
			<Button variant="outline">
				<Icon name="bars-3" />
				<VisuallyHidden>Open sidebar</VisuallyHidden>
			</Button>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="visually-hidden" extension="tsx" className="mt-4" />
		</>
	)
}
export default VisuallyHiddenRoute
