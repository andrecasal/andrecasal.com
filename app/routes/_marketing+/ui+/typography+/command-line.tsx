import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { CommandLine } from '~/routes/_marketing+/ui+/components/typography/command-line.tsx'
import { Icon } from '~/components/ui/icon.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/typography/command-line.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const CommandLineRoute = () => {
	const { source } = useLoaderData<typeof loader>()

	return (
		<>
			<Heading as="h1" className="mt-8">
				Command Line
			</Heading>
			<Text className="mt-4">A semantic command line element that allows for both inline and block commands and supports copying commands to the clipboard.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Allows for inline or block commands.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Commands as strings.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Commands and outputs as an array of objects.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Copy to clipboard.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<Heading as="h3" size="2xl" className="mt-8">
				Inline
			</Heading>
			<CodeBlock
				code={`<Text className="mt-4">
	Here's the inline component in action: <CommandLine command={\`npx cowsay Hello world!\`} />
</Text>`}
				filename="InlineCommandLineExample"
				extension="tsx"
				className="mt-4"
			/>
			<Text className="mt-4">
				Here's the inline component, with a string, in action: <CommandLine command={`npx cowsay Hello world!`} />
			</Text>
			<CodeBlock
				code={`<Text className="mt-4">
Here's the inline component with an array in action:{' '}
<CommandLine
	command={[
		{ type: 'command', text: 'npx cowsay Hello world!' },
		{
			type: 'log',
			text: \` ______________
< Hello world! >
 --------------
		\\   ^__^
		\\  (oo)\\_______
			(__)\\       )\\/\\
				||----w |
				||     ||\`,
		},
		{ type: 'command', text: 'npx prisma db seed' },
		{
			type: 'log',
			text: \`Need to install the following packages:
  prisma@5.3.0
Ok to proceed? (y) y\`,
		},
		{ type: 'command', text: 'npm run dev' },
	]}
/>`}
				filename="InlineCommandLineExample"
				extension="tsx"
				className="mt-4"
			/>
			<Text className="mt-4">
				Here's the inline component, with an array, in action:{' '}
				<CommandLine
					command={[
						{ type: 'command', text: 'npx cowsay Hello world!' },
						{
							type: 'log',
							text: ` ______________
< Hello world! >
 --------------
		   \\   ^__^
			\\  (oo)\\_______
			   (__)\\       )\\/\\
					||----w |
					||     ||`,
						},
						{ type: 'command', text: 'npx prisma db seed' },
						{
							type: 'log',
							text: `Need to install the following packages:
  prisma@5.3.0
Ok to proceed? (y) y`,
						},
						{ type: 'command', text: `npm run dev` },
					]}
				/>
			</Text>
			<Text className="mt-4">Notice output is ignored in this mode.</Text>

			<Heading as="h3" size="2xl" className="mt-8">
				Block
			</Heading>
			<CodeBlock
				code={`<Text className="mt-4">Here's the block component in action.</Text>
<CommandLine variant="block" command={\`npx cowsay Hello world!\`} />`}
				filename="BlockCommandLineExample"
				extension="tsx"
				className="mt-4"
			/>
			<Text className="mt-4">Here's the block component, with a string, in action.</Text>
			<CommandLine variant="block" command={`npx cowsay Hello world!`} />

			<CodeBlock
				code={`<Text className="mt-4">Here's the block component with an array in action.</Text>
				<CommandLine
					variant="block"
					command={[
						{ type: 'command', text: 'npx cowsay Hello world!' },
						{
							type: 'log',
							text: \` ______________
< Hello world! >
 --------------
		   \\   ^__^
			\\  (oo)\\_______
			   (__)\\       )\\/\\
					||----w |
					||     ||\`,
						},
						{ type: 'command', text: 'npx prisma db seed' },
						{
							type: 'log',
							text: \`Need to install the following packages:
  prisma@5.3.0
Ok to proceed? (y) y\`,
						},
						{ type: 'command', text: 'npm run dev' },
					]}
				/>`}
				filename="BlockCommandLineExample"
				extension="tsx"
				className="mt-4"
			/>
			<Text className="mt-4">Here's the block component, with an array, in action.</Text>
			<CommandLine
				variant="block"
				command={[
					{ type: 'command', text: 'npx cowsay Hello world!' },
					{
						type: 'log',
						text: ` ______________
< Hello world! >
 --------------
		   \\   ^__^
			\\  (oo)\\_______
			   (__)\\       )\\/\\
					||----w |
					||     ||`,
					},
					{ type: 'command', text: 'npx prisma db seed' },
					{
						type: 'log',
						text: `Need to install the following packages:
  prisma@5.3.0
Ok to proceed? (y) y`,
					},
					{ type: 'command', text: `npm run dev` },
				]}
			/>

			<Heading as="h2" size="3xl" className="mt-8">
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
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">command</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">string | {"{ type: 'command' | 'log'; text: string }[]"}</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">''</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="command-line" extension="tsx" className="mt-4" />
		</>
	)
}
export default CommandLineRoute
