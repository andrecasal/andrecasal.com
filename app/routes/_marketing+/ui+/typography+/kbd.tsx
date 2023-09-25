import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { Kbd } from '../components/typography/kbd.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/typography/kbd.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usageSource = `<p>Press <Kbd>Shift + Left</Kbd>, <Kbd>Shift + Right</Kbd>, <Kbd>Shift + Up</Kbd>, <Kbd>Shift + Down</Kbd> to move things by 10px.</p>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Kbd (Keyboard)
			</Heading>
			<Text className="mt-4">Marks text as keyboard or voice (or another entry device) input.</Text>
			<Text className="mt-4">
				This component is merely a styling layer on top of the <code>{'<kbr>'}</code> tag.
			</Text>
			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usageSource} filename="KbdExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">Here's the Kbd component in action.</Text>
			<p>
				Press <Kbd>Shift + Left</Kbd>, <Kbd>Shift + Right</Kbd>, <Kbd>Shift + Up</Kbd>, <Kbd>Shift + Down</Kbd> to move things by 10px.
			</p>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="kbd" extension="tsx" className="mt-4" />
		</>
	)
}
export default HeadingRoute
