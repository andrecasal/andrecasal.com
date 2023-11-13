import { json } from '@remix-run/node'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { type CommandAndLogArray, CommandLine } from '~/routes/_marketing+/ui+/components/typography/command-line.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { H1 } from '../components/typography/h1.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'

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
	const singleCommandLineUsageExample: CommandAndLogArray = [{ type: 'command', text: `npm i -D tailwindcss` }]
	const multipleCommandLineUsageExample = `<P className="mt-4">
Here's the inline component with an array in action:{' '}
<CommandLine
	commands={[
		{ type: 'command', text: 'npx cowsay Hello world!' },
		{
			type: 'log',
			text: \` ______________
< Hello world! >
 --------------
	  \\    ^__^
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
/>`

	return (
		<>
			<H1 className="mt-8">Command Line</H1>
			<P className="mt-4 max-w-3xl">A semantic command line element that supports copy to clipboard.</P>

			<H2 size="3xl" className="mt-8">
				Features
			</H2>
			<ul className="list-inside space-y-1 text-muted-500 dark:text-muted-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Accepts commands and outputs as an array of objects.
				</li>
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
			<CodeBlock code={multipleCommandLineUsageExample} filename="InlineCommandLineExample" extension="tsx" className="mt-4" />
			<P className="mt-4">Here's the {'<CommandLine />'} component in action:</P>
			<CommandLine commands={singleCommandLineUsageExample} />
			<CommandLine
				className="mt-8"
				commands={[
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

			<H2 size="3xl" className="mt-8">
				Props
			</H2>
			<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-muted-300">
					<thead className="bg-muted-50">
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
					<tbody className="divide-y divide-muted-200 bg-white">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">command</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">{"{ type: 'command' | 'log'; text: string }[]"}</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">undefined</td>
						</tr>
					</tbody>
				</table>
			</div>

			<H2 size="3xl" className="mt-8">
				Source
			</H2>
			<CodeBlock code={source} filename="command-line" extension="tsx" className="mt-4" />

			<H2 size="3xl" className="mt-8">
				Styling
			</H2>
			<P className="mt-4 max-w-3xl">
				This component is made for developers, so the styling is not based on CSS variables a designer can control, but it's built-in into the component and you can change it however
				you like. I made it look like the{' '}
				<a href="https://github.com/wesbos/Cobalt2-iterm" target="_blank" rel="noreferrer">
					Cobalt2 powerline
				</a>
				, which is what I use in my VS Code.
			</P>
		</>
	)
}
export default CommandLineRoute
