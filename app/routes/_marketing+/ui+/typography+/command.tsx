import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Command } from '../components/typography/command.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/typography/command.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const CommandRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const headingSource = `<Code>npm i -D tailwindcss</Code>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Command Component
			</Heading>
			<Text className="mt-4">A semantic command element that allows for both inline and block commands and support copying to the clipboard.</Text>

			<Heading as="h2" size="xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="command" extension="tsx" className="mt-4" />

			<Heading as="h2" size="xl" className="mt-8">
				Usage Example
			</Heading>
			<CodeBlock code={headingSource} filename="CommandExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">Here's the command component in action.</Text>
			<Text className="mt-4">
				This is an inline command <Command code={`npm i -D tailwindcss`} />.
			</Text>
			<Text className="mt-4">And here's multiple commands in a block.</Text>
			<Command
				variant="block"
				code={`npm i -D tailwindcss
npx cowsay Command component FTW! 💪
npm run dev
npx prisma db seed`}
			/>

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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">variant</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'inline' | 'block'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'inline'</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
export default CommandRoute
