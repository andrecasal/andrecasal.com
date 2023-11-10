import { json } from '@remix-run/node'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Code } from '../components/typography/code.tsx'
import { Kbd } from '../components/typography/kbd.tsx'
import { H1 } from '../components/typography/h1.tsx'
import { H2 } from '../components/typography/h2.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/typography/code.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const CodeRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const codeUsage = `<Text className="mt-4">
	Here's the code component in action:{' '}
	<Code className="mt-4">npm i -D tailwindcss</Code>. And here's the same component with copy functionality enabled:{' '}
	<Code copy className="mt-4">
		npm i -D tailwindcss
	</Code>
	.
</Text>`
	const stylingSource = `.code {
	@apply rounded-md bg-muted-200 px-space-5 py-space-2 text-muted-900;
}`

	return (
		<>
			<H1 className="mt-8">Code</H1>
			<Text className="mt-4">A semantic code element that supports copy to clipboard.</Text>

			<H2 size="3xl" className="mt-8">
				Features
			</H2>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Copy to clipboard.
				</li>
			</ul>

			<H2 size="3xl" className="mt-8">
				Usage
			</H2>
			<CodeBlock code={codeUsage} filename="CodeExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">
				Here's the code component, without copy functionality, in action: <Code className="mt-4">npm i -D tailwindcss</Code>. And here's with copy functionality enabled:{' '}
				<Code copy className="mt-4">
					npm i -D tailwindcss
				</Code>
				.
			</Text>
			<Text className="mt-4">
				Notice that when copy is not enabled, the component is just text, but it becomes focusable (try <Kbd>Tab</Kbd>'ing) when copy is enabled so you can press <Kbd>Enter</Kbd> to
				copy to clipboard.
			</Text>

			<H2 size="xl" className="mt-8">
				Props
			</H2>
			<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-gray-300">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Prop
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Type
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Default
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">copy</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">true | false</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
					</tbody>
				</table>
			</div>

			<H2 size="3xl" className="mt-8">
				Source
			</H2>
			<CodeBlock code={source} filename="code" extension="tsx" className="mt-4" />

			<H2 size="3xl" className="mt-8">
				Styling
			</H2>
			<Text className="mt-4">
				The styling is controlled through the <Code>.code</Code> class.
			</Text>
			<CodeBlock code={stylingSource} filename="tailwind" extension="css" className="mt-4" />
		</>
	)
}
export default CodeRoute
