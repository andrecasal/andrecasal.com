import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { CommandLine } from './components/typography/command-line.tsx'
import { Code } from './components/typography/code.tsx'
import { H1 } from './components/typography/h1.tsx'
import { H2 } from './components/typography/h2.tsx'
import { P } from './components/typography/p.tsx'

export const loader = async () => {
	const basePath = '../'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const tailwindConfigPath = path.join(__dirname, basePath, 'tailwind.config.ts')
	const tailwindConfigCode = await fs.readFile(tailwindConfigPath, 'utf-8')
	const tailwindCSSPath = path.join(__dirname, basePath, '/app/styles/tailwind.css')
	const tailwindCSSCode = await fs.readFile(tailwindCSSPath, 'utf-8')
	const tailwindMergePath = path.join(__dirname, basePath, '/app/utils/tailwind-merge.ts')
	const tailwindMergeCode = await fs.readFile(tailwindMergePath, 'utf-8')
	return json({ tailwindConfigCode, tailwindCSSCode, tailwindMergeCode })
}

const Installation = () => {
	const { tailwindConfigCode, tailwindCSSCode, tailwindMergeCode } = useLoaderData<typeof loader>()

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
	const radixDependencies = [`@radix-ui/react-tooltip`]

	return (
		<>
			<H1 size="4xl" className="mt-8 lg:mt-0">
				Installation
			</H1>
			<H2 size="3xl" className="mt-8">
				Dependencies
			</H2>
			<P className="mt-4">
				This library has a development dependency:
				<CommandLine commands={[{ type: 'command', text: 'npm i -D tailwindcss' }]} />
			</P>
			<P className="mt-8">
				And the following regular dependencies.{' '}
				<CommandLine commands={[{ type: 'command', text: 'npm i clsx tailwind-merge class-variance-authority usehooks-ts tailwindcss-animate tailwindcss-radix' }]} />
			</P>
			<P className="mt-8">
				Eventually, you'll need all of the Radix UI dependencies. For now, while the library is being developed, this is the list of dependencies you'll need.
				<CommandLine commands={radixDependencies.map(text => ({ type: 'command', text }))} />
			</P>

			<H2 size="3xl" className="mt-8">
				tailwind.css
			</H2>
			<P className="mt-2">
				You can control the entire theme through the <Code>tailwind.css</Code> file.
			</P>
			<CodeBlock code={tailwindCSSCode} filename="tailwind" extension="css" className="mt-2" />

			<H2 size="3xl" className="mt-8">
				tailwind.config.ts
			</H2>
			<P className="mt-2">
				Then, you'll need the <code>tailwind.config.ts</code> that uses those CSS variables.
			</P>
			<CodeBlock code={tailwindConfigCode} filename="tailwind.config" extension="ts" className="mt-2" />

			<P className="mt-8">
				Finally, you'll also need the utility <code>cn()</code> function. The <code>extendTailwindMerge()</code> is there to tell <code>twMerge()</code> which classes belong to which
				groups, so it knows how to merge them.
			</P>
			<CodeBlock code={tailwindMergeCode} filename="tailwind-merge" extension="ts" className="mt-2" />

			<H2 size="3xl" className="mt-8">
				Providers
			</H2>
			<P className="mt-2">
				In order to use the{' '}
				<Link to="/ui/overlays/tooltip" className="underline">
					<Code>{'<Tooltip />'}</Code>
				</Link>{' '}
				component, you need to wrap your app with the tooltip's provider.
			</P>
			<CodeBlock code={tooltipProviderInRoot} filename="root" extension="tsx" className="mt-2" />

			<H2 size="3xl" className="mt-8">
				Ready
			</H2>
			<P className="mt-8">
				Ok, you're ready to start using the components. You can copy+paste the ones you need or download the repo. You'll find all components{' '}
				<a href="https://github.com/andrecasal/andrecasal.com/tree/main/app/routes/_marketing%2B/ui%2B/components" target="_blank" className="underline" rel="noreferrer">
					here
				</a>
				.
			</P>
			<P className="mt-8">
				Installation didn't work? Is something missing? Please file an issue{' '}
				<a href="https://github.com/andrecasal/andrecasal.com/issues" target="_blank" rel="noreferrer" className="underline">
					here
				</a>{' '}
				and I'll do my best to add any missing steps to the documentation.
			</P>
		</>
	)
}
export default Installation
