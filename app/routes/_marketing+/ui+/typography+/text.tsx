import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/typography/text.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const TextRoute = () => {
	const { source } = useLoaderData<typeof loader>()

	return (
		<>
			<Heading as="h1" className="mt-8">
				Heading Component
			</Heading>
			<Text className="mt-4">A semantic heading element that allows customization of size, weight, alignment, and other typographic properties.</Text>

			<Heading as="h2" size="xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="text" extension="tsx" className="mt-4" />

			<Heading as="h2" size="xl" className="mt-8">
				Usage Example
			</Heading>
			<CodeBlock code={`<Text as="p">The quick brown fox jumps over the lazy dog</Text>`} filename="TextExample" extension="tsx" className="mt-4" />

			<Heading as="h2" size="xl" className="mt-8">
				Props
			</Heading>
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">as</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'p' | 'span' | 'div'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'p'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">weight</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
								'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'normal'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">size</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'md'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">align</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'left' | 'center' | 'right'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'left'</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
export default TextRoute
