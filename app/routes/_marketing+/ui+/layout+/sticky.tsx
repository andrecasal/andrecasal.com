import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Sticky } from '../components/layout/sticky.tsx'
import { Code } from '../components/typography/code.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/sticky.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const StickyRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usage = `<div className="mt-14 h-80 overflow-y-auto rounded-lg border">
	<div className="h-10" />
	<Sticky className="top-0 bg-green-500">This sticks</Sticky>
	<div className="h-40" />
	<p>Some content</p>
	<div className="h-40" />
	<Sticky className="top-0 bg-emerald-500">This also sticks</Sticky>
	<div className="h-40" />
	<p>Some more content</p>
	<div className="h-40" />
</div>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Sticky
			</Heading>
			<Text className="mt-4">Sticky allows an element to become fixed in its parent container when it reaches a top, left, bottom, or right threshold.</Text>
			<Text className="mt-4">You are responsible for giving it a top-x, left-x, bottom-x or right-x position to stick to.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename="StickyExample" extension="tsx" className="mt-4" />
			<div className="mt-14 h-80 overflow-y-auto rounded-lg border">
				<div className="h-10" />
				<Sticky className="top-0 bg-green-500">This sticks</Sticky>
				<div className="h-40" />
				<p>Some content</p>
				<div className="h-40" />
				<Sticky className="top-0 bg-emerald-500">This also sticks</Sticky>
				<div className="h-40" />
				<p>Some more content</p>
				<div className="h-40" />
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<Text className="mt-4">
				This is literally just a <Code>div</Code> with the <Code>sticky</Code> class on it, but it's easier to read <Code>{'<Sticky>'}</Code> than{' '}
				<Code>{'<div className="sticky">'}</Code>.
			</Text>
			<CodeBlock code={source} filename="sticky" extension="tsx" className="mt-4" />
		</>
	)
}
export default StickyRoute
