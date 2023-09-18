import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from './components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
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
				You can control the entire theme through the <code>tailwind.css</code> file. Here's mine:
			</Text>
			<CodeBlock code={tailwindCSSCode} filename="tailwind" extension="css" className="mt-8" />

			<Heading as="h2" size="3xl" className="mt-8">
				tailwind.config.ts
			</Heading>
			<Text className="mt-4">Then you'll need the custom Tailwind classes that use those CSS variables. Here's my tailwind.config.ts.</Text>
			<CodeBlock code={tailwindConfigCode} filename="tailwind.config" extension="ts" className="mt-8" />

			<Text className="mt-8">
				Finally you'll also need the utility <code>cn()</code> function. The <code>extendTailwindMerge()</code> is there to tell twMerge to which class groups the 'text-muted' and
				'text-size' classes belong to (otherwise it doesn't know how to resolve the conflicts).
			</Text>
			<CodeBlock code={tailwindMergeCode} filename="tailwind-merge" extension="ts" className="mt-8" />

			<Text className="mt-8">
				Ok, you're ready to start using the components. You can copy+paste the ones you need or download the repo. You'll find all components{' '}
				<a href="https://github.com/andrecasal/andrecasal.com/tree/main/app/routes/_marketing%2B/ui%2B/components" target="_blank" className="underline" rel="noreferrer">
					here
				</a>
				.
			</Text>
		</>
	)
}
export default Installation
