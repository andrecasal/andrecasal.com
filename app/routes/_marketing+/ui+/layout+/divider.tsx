import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Divider } from '../components/layout/divider.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { Code } from '../components/typography/code.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/divider.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const DividerRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usage = `<div>
	<div className="space-y-1">
		<Text as="p" size="md" weight="bold">
			andrecasal/ui
		</Text>
		<Text as="p" size="sm">
			An open-source UI component library.
		</Text>
	</div>
	<Divider className="my-4" />
	<Flex gap="10" align="center" className="h-5">
		<Text as="p" size="sm">
			Blog
		</Text>
		<Divider orientation="vertical" />
		<Text as="p" size="sm">
			Docs
		</Text>
		<Divider orientation="vertical" />
		<Text as="p" size="sm">
			Source
		</Text>
	</Flex>
</div>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Divider
			</Heading>
			<Text className="mt-4">Visually or semantically separates content.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-muted-600">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Supports horizontal and vertical orientations.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Support visibility in the accessibility tree when <Code>decorative</Code> is set to <Code>false</Code>.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename="DividerExample" extension="tsx" className="mt-4" />
			<Text>
				Here's the <Code>{'<Divider />'}</Code> component in action:
			</Text>
			<div>
				<div className="space-y-1">
					<Text as="p" size="md" weight="bold">
						andrecasal/ui
					</Text>
					<Text as="p" size="sm">
						An open-source UI component library.
					</Text>
				</div>
				<Divider className="my-4" />
				<Flex gap="10" align="center" className="h-5">
					<Text as="p" size="sm">
						Blog
					</Text>
					<Divider orientation="vertical" />
					<Text as="p" size="sm">
						Docs
					</Text>
					<Divider orientation="vertical" />
					<Text as="p" size="sm">
						Source
					</Text>
				</Flex>
			</div>

			<Heading as="h2" size="xl" className="mt-8">
				Props
			</Heading>
			<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-muted-300">
					<thead className="bg-muted-300">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-muted-900 sm:pl-6">
								Prop
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-muted-900">
								Type
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-muted-900">
								Default
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-muted-200 bg-muted-200">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">orientation</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">'horizontal' | 'vertical'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">'horizontal'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">decorative</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">false</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="divider" extension="tsx" className="mt-4" />
		</>
	)
}
export default DividerRoute
