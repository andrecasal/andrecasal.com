import { json } from '@remix-run/node'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { Link, useLoaderData } from '@remix-run/react'
import { Tooltip } from '~/routes/_marketing+/ui+/components/ui/tooltip.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { CommandLine } from '../components/typography/command-line.tsx'
import { H1 } from '../components/typography/h1.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { H3 } from '../components/typography/h3.tsx'
import { P } from '../components/typography/p.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/ui/tooltip.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const TooltipRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usageExample = `<P className="mt-4">
	Here's the{' '}
	<Tooltip content="This is a tooltip">
		<button className="bg-green-500">tooltip component</button>
	</Tooltip>{' '}
	in action.
</P>`
	const stylingSource = `.tooltip {
	border-radius: calc(var(--radius) - 2px);
	background-color: hsl(var(--color-foreground));
	padding-left: var(--space-5);
	padding-right: var(--space-5);
	font-size: var(--text-size-sm);
	color: hsl(var(--color-background));
}`
	const twMerge = `import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
	classGroups: {
		spacing: [{ 'text-size': ['tooltip'] }],
	},
})

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}`
	const tooltipProviderInRoot = `import * as TooltipPrimitive from '@radix-ui/react-tooltip'
...

function App() {	
	return (
		<html>
			<head>
				...
			</head>
			<body>
				<TooltipPrimitive.Provider delayDuration={300}>
					<Header />
					<Outlet />
					<Footer />
					...
				</TooltipPrimitive.Provider>
			</body>
		</html>
	)
}`

	return (
		<>
			<H1 className="mt-8">Tooltip</H1>
			<P className="mt-4">A popup that displays related information when a button receives keyboard focus or the mouse hovers over it.</P>

			<H2 size="3xl" className="mt-8">
				Features
			</H2>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Opens when the trigger is focused or hovered.
				</li>
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Closes when the trigger is activated or when pressing escape.
				</li>
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Provider to control display delay globally.
				</li>
			</ul>

			<H2 size="3xl" className="mt-8">
				Keyboard interactions
			</H2>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-muted-300">
					<thead className="bg-muted-300">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-muted-900 sm:pl-6">
								Key
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-muted-900">
								Description
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-muted-200 bg-muted-200">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<kbd>Tab</kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">Opens/closes the tooltip without delay.</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<kbd>Space</kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">If open, closes the tooltip without delay.</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<kbd>Enter</kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">If open, closes the tooltip without delay.</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<kbd>Escape</kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">If open, closes the tooltip without delay.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<H2 size="3xl" className="mt-8">
				Usage
			</H2>
			<CodeBlock code={usageExample} filename="TooltipExample" extension="tsx" className="mt-4" />
			<P className="mt-4">
				Here's the{' '}
				<Tooltip content="This is a tooltip">
					<button className="bg-green-500">tooltip component</button>
				</Tooltip>{' '}
				in action.
			</P>

			<H2 size="3xl" className="mt-8">
				Props
			</H2>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">content</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">string</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">''</td>
						</tr>
					</tbody>
				</table>
			</div>

			<H2 size="3xl" className="mt-8">
				Installation
			</H2>
			<P className="mt-4">
				You can follow the{' '}
				<Link to="/ui" className="underline">
					global installation guide
				</Link>{' '}
				that will install everything you need to use all the components or you can install the tooltip component by itself by installing its dependencies and wrap your app with the
				tooltip provider.
			</P>
			<P className="mt-4">
				Either way, you'll need the to add <code>'tooltip'</code> to the <code>spacing</code> key on the <code>extendTailwindMerge()</code> function, so <code>twMerge()</code> knows
				that the tooltip's custom class <code>text-size-tooltip</code> belongs to the sizing category, so it won't conflict with color classes like{' '}
				<code>text-tooltip-foreground</code>, <code>bg-tooltip-background</code>, or <code>text-green-500</code> for example.
			</P>
			<CodeBlock code={twMerge} filename="tailwind-merge" extension="ts" className="mt-4" />

			<H3 size="2xl" className="mt-8">
				Provider
			</H3>
			<P className="mt-4">
				Additionally, the tooltip component's display delay is controlled globally by a tooltip provider, so you'll need to add the provider to your app's root component. A slight
				delay (300-500 milliseconds) is recommended to prevent accidental hover-triggered tooltips from appearing too quickly and becoming distracting.
			</P>
			<CodeBlock code={tooltipProviderInRoot} filename="root" extension="tsx" className="mt-4" />

			<H3 size="2xl" className="mt-8">
				Dependencies
			</H3>
			<CommandLine commands={[{ type: 'command', text: 'npm i @radix-ui/react-tooltip' }]} className="mt-4" />

			<H2 size="3xl" className="mt-8">
				Source
			</H2>
			<CodeBlock code={source} filename="tooltip" extension="tsx" className="mt-4" />

			<H2 size="3xl" className="mt-8">
				Styling
			</H2>
			<CodeBlock code={stylingSource} filename="tailwind" extension="css" className="mt-4" />
		</>
	)
}
export default TooltipRoute
