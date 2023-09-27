import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Grid } from '../components/layout/grid.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/grid.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usageExample = `<Grid cols="3" rows="3" justify="stretch" align="stretch" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="start" align="start" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="center" align="start" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="end" align="start" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="start" align="center" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="center" align="center" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="end" align="center" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="start" align="end" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="center" align="end" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>
<Grid cols="3" rows="3" justify="end" align="end" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
	<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
</Grid>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Grid
			</Heading>
			<Text className="mt-4">Component for creating bidimensional grid layouts.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Inherits the space scale on the gapX and gapY props.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usageExample} filename="GridExample" extension="tsx" className="mt-4" />
			<Text>Here's the {'<Grid />'} component in action.</Text>
			<Grid cols="3" rows="3" justify="stretch" align="stretch" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="start" align="start" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="center" align="start" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="end" align="start" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="start" align="center" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="center" align="center" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="end" align="center" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="start" align="end" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="center" align="end" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>
			<Grid cols="3" rows="3" justify="end" align="end" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">1</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">2</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">3</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">4</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">5</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">6</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">7</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">8</div>
				<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-600 text-white">9</div>
			</Grid>

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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">cols</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0' ... Infinity</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">rows</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0' ... Infinity</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">flow</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'row' | 'col' | 'row-dense' | 'col-dense'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'row'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">justify</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start' | 'center' | 'end' | 'stretch'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">align</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start' | 'center' | 'end' | 'baseline' | 'stretch'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">gapX</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0' ... '20'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">gapY</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0' ... '20'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0'</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Notes
			</Heading>
			<Text className="mt-4">
				If you set <code>inline</code>, <code>justify</code> has no meaning because the {'<Grid />'} has the least width possible.
			</Text>
			<Text className="mt-4">
				Setting <code>align</code> only has meaning if the <code>{'<Grid />'}</code> has a height. Otherwise it will have the least height possible.
			</Text>
			<Text className="mt-4">
				If you set <code>justify="stretch"</code>, the children shouldn't have a fixed width. Otherwise they won't stretch.
			</Text>
			<Text className="mt-4">
				If you set <code>align="stretch"</code>, the children shouldn't have a fixed height. Otherwise they won't stretch.
			</Text>
			<Text className="mt-4">
				Setting <code>justify="stretch"</code> has the same effect as setting <code>w-full</code> on all the children (assuming the <code>flow="row"</code>).
			</Text>
			<Text className="mt-4">
				Setting <code>align="stretch"</code> has the same effect as setting <code>h-full</code> on all the children (assuming the <code>flow="row"</code>).
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="flex" extension="tsx" className="mt-4" />
		</>
	)
}
export default HeadingRoute
