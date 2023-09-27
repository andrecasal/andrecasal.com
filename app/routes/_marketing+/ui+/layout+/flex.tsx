import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Flex } from '../components/layout/flex.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/flex.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usageExample = `<Flex inline gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="center" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="end" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="between" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="center" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="end" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="stretch" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
</Flex>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Flex
			</Heading>
			<Text className="mt-4">Component for creating flex layouts.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Inherits the space scale on the gap prop.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usageExample} filename="FlexExample" extension="tsx" className="mt-4" />
			<Text>Here's the {'<Flex />'} component in action.</Text>
			<Flex inline gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex justify="center" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex justify="end" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex justify="between" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex align="center" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex align="end" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
				<div className="h-10 w-10 rounded-sm bg-slate-600" />
			</Flex>
			<Flex align="stretch" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
				<div className="w-10 rounded-sm bg-slate-600" />
			</Flex>

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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">inline</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">direction</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'row' | 'row-reverse' | 'col' | 'col-reverse'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'row'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">justify</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start' | 'center' | 'end' | 'between' </td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">align</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start' | 'center' | 'end' | 'baseline' | 'stretch'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">gap</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0' ... '20'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">wrap</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'no-wrap' | 'wrap' | 'wrap-reverse'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'no-wrap'</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Notes
			</Heading>
			<Text className="mt-4">
				If you set <code>inline</code>, justify has no meaning because the <code>{'<Flex />'}</code> has as less width as possible.
			</Text>
			<Text className="mt-4">
				If you set <code>align="stretch"</code>, the children shouldn't have a fixed height. Otherwise they won't stretch.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="flex" extension="tsx" className="mt-4" />
		</>
	)
}
export default HeadingRoute
