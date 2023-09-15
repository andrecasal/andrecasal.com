import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { type CommandAndLogArray, CommandLine } from '~/routes/_marketing+/ui+/components/typography/command-line.tsx'

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
	const inlineCommand = `npx cowsay Hello world!`
	const multipleStringCommands = `npx cowsay Hello world!
npx prisma db seed
npm run dev`
	const cowLog = ` ______________
< Hello world! >
 --------------
		   \\   ^__^
			\\  (oo)\\_______
			   (__)\\       )\\/\\
					||----w |
					||     ||`
	const commandsAndLogsArray: CommandAndLogArray = [
		{ type: 'command', text: 'npx cowsay Hello world!' },
		{
			type: 'log',
			text: cowLog,
		},
		{ type: 'command', text: 'npx prisma db seed' },
		{
			type: 'log',
			text: `Need to install the following packages:
  prisma@5.3.0
Ok to proceed? (y) y`,
		},
		{ type: 'command', text: `npm run dev` },
	]
	const cowLogArray: CommandAndLogArray = [{ type: 'log', text: cowLog }]
	const longCommand = `npx cowsay Hello world!
npx cowsay With a really long line so you can see how the component handles horizontal scrolling 😄 Seems to do a good job, like a boss 😎
npx prisma db seed
npm run dev`
	const usageExample = `const Component = () => {
	const inlineCommand = \`npx cowsay Hello world!\`
	const multipleStringCommands = \`npx cowsay Hello world!
npx prisma db seed
npm run dev\`
	const cowLog = \` ______________
< Hello world! >
 --------------
		   \\   ^__^
			\\  (oo)\\_______
			   (__)\\       )\\/\\
					||----w |
					||     ||\`
	const commandsAndLogsArray: CommandAndLogArray = [
		{ type: 'command', text: 'npx cowsay Hello world!' },
		{
			type: 'log',
			text: cowLog,
		},
		{ type: 'command', text: 'npx prisma db seed' },
		{
			type: 'log',
			text: \`Need to install the following packages:
  prisma@5.3.0
Ok to proceed? (y) y\`,
		},
		{ type: 'command', text: \`npm run dev\` },
	]
	const cowLogArray: CommandAndLogArray = [{ type: 'log', text: cowLog }]
	const longCommand = \`npx cowsay Hello world!
npx cowsay With a really long line so you can see how the component handles horizontal scrolling 😄 Seems to do a good job, like a boss 😎
npx prisma db seed
npm run dev\`

		return (
			<Heading as="h3" size="lg" className="mt-8">
				Command as string
			</Heading>
			<Text className="mt-4">
				Here's a single inline command with a string input <CommandLine command={inlineCommand} />.
			</Text>
			<Text className="mt-4">
				Here's multiple inline commands with a (newline separated) string input <CommandLine command={multipleStringCommands} />.
			</Text>
			<Heading as="h3" size="lg" className="mt-8">
				Command as array of objects
			</Heading>
			<Text className="mt-4">
				Here's multiple inline commands with an object array <CommandLine command={commandsAndLogsArray} />. Notice logs are ignored when using both a commands array and the inline
				variant.
			</Text>
			<Text className="mt-4">Here's how multiple commands with an object array look like in a block.</Text>
			<CommandLine variant="block" command={multipleStringCommands} />
			<Text className="mt-4">Here's a mix of commands and logs in a block.</Text>
			<CommandLine variant="block" command={commandsAndLogsArray} />
			<Text className="mt-4">Here's just a log in a block.</Text>
			<CommandLine variant="block" command={cowLogArray} />
			<Heading as="h3" size="lg" className="mt-8">
				Horizontal scrolling
			</Heading>
			<Text className="mt-4">And finally, a really long commmand in a block for you to see how the component handle horizontal scrolling.</Text>
			<CommandLine variant="block" command={longCommand} />
		)
	}`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Command Line Component
			</Heading>
			<Text className="mt-4">A semantic command line element that allows for both inline and block commands and supports copying commands to the clipboard.</Text>

			<Heading as="h2" size="xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="command-line" extension="tsx" className="mt-4" />

			<Heading as="h2" size="xl" className="mt-8">
				Usage Example
			</Heading>
			<CodeBlock code={usageExample} filename="CommandLineExample" extension="tsx" className="mt-4" />
			<Heading as="h3" size="lg" className="mt-8">
				Command as string
			</Heading>
			<Text className="mt-4">
				Here's a single inline command with a string input <CommandLine command={inlineCommand} />.
			</Text>
			<Text className="mt-4">
				Here's multiple inline commands with a (newline separated) string input <CommandLine command={multipleStringCommands} />.
			</Text>
			<Heading as="h3" size="lg" className="mt-8">
				Command as array of objects
			</Heading>
			<Text className="mt-4">
				Here's multiple inline commands with an object array <CommandLine command={commandsAndLogsArray} />. Notice logs are ignored when using both a commands array and the inline
				variant.
			</Text>
			<Text className="mt-4">Here's how multiple commands with an object array look like in a block.</Text>
			<CommandLine variant="block" command={multipleStringCommands} />
			<Text className="mt-4">Here's a mix of commands and logs in a block.</Text>
			<CommandLine variant="block" command={commandsAndLogsArray} />
			<Text className="mt-4">Here's just a log in a block.</Text>
			<CommandLine variant="block" command={cowLogArray} />
			<Heading as="h3" size="lg" className="mt-8">
				Horizontal scrolling
			</Heading>
			<Text className="mt-4">And finally, a really long commmand in a block for you to see how the component handle horizontal scrolling.</Text>
			<CommandLine variant="block" command={longCommand} />

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
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">command</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">string | {"{ type: 'command' | 'log'; text: string }[]"}</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">''</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
export default CommandLineRoute
