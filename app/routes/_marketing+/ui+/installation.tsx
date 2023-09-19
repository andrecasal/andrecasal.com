import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from './components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { CommandLine } from './components/typography/command-line.tsx'

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

	return (
		<>
			<Heading as="h1" size="4xl" className="mt-8 lg:mt-0">
				Installation
			</Heading>
			<Heading as="h2" size="3xl" className="mt-8">
				Dependencies
			</Heading>
			<Text className="mt-8">This library has a development dependency:</Text>
			<Text className="mt-8">
				<CommandLine command={`npm i -D tailwindcss`} variant="block" />
			</Text>
			<Text className="mt-8">And the following regular dependencies:</Text>
			<Text className="mt-8">
				<CommandLine command={`npm i clsx tailwind-merge class-variance-authority usehooks-ts tailwindcss-animate tailwindcss-radix`} variant="block" />
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				tailwind.css
			</Heading>
			<Text className="mt-4">
				You can control the entire theme through the <code>tailwind.css</code> file.
			</Text>
			<CodeBlock code={tailwindCSSCode} filename="tailwind" extension="css" className="mt-8" />

			<Heading as="h2" size="3xl" className="mt-8">
				tailwind.config.ts
			</Heading>
			<Text className="mt-4">
				Then, you'll need the <code>tailwind.config.ts</code> that uses those CSS variables.
			</Text>
			<CodeBlock code={tailwindConfigCode} filename="tailwind.config" extension="ts" className="mt-8" />

			<Text className="mt-8">
				Finally, you'll also need the utility <code>cn()</code> function. The <code>extendTailwindMerge()</code> is there to tell <code>twMerge()</code> which classes belong to which
				groups, so it knows how to merge them.
			</Text>
			<CodeBlock code={tailwindMergeCode} filename="tailwind-merge" extension="ts" className="mt-8" />

			<Heading as="h2" size="3xl" className="mt-8">
				Providers
			</Heading>
			<Text className="mt-4">
				In order to use the{' '}
				<Link to="/ui/ui/tooltip" className="underline">
					<code>{'<Tooltip />'}</code>
				</Link>{' '}
				component, you need to wrap your app with the tooltip's provider.
			</Text>
			<CodeBlock code={tooltipProviderInRoot} filename="root" extension="tsx" className="mt-4" />

			<Heading as="h2" size="3xl" className="mt-8">
				Ready
			</Heading>
			<Text className="mt-8">
				Ok, you're ready to start using the components. You can copy+paste the ones you need or download the repo. You'll find all components{' '}
				<a href="https://github.com/andrecasal/andrecasal.com/tree/main/app/routes/_marketing%2B/ui%2B/components" target="_blank" className="underline" rel="noreferrer">
					here
				</a>
				.
			</Text>
			<Text className="mt-8">
				Installation didn't work? Is something missing? Please file an issue{' '}
				<a href="https://github.com/andrecasal/andrecasal.com/issues" target="_blank" rel="noreferrer" className="underline">
					here
				</a>{' '}
				and I'll do my best to add any missing steps to the documentation.
			</Text>
		</>
	)
}
export default Installation
