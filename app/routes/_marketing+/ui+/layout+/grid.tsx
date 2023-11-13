import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Grid } from '../components/layout/grid.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'
import { Code } from '../components/typography/code.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'

const component: componentProps = {
	name: 'Grid',
	shortName: 'Grid',
	fileName: 'grid',
	category: 'layout',
	description: ['Component for creating bidimensional grid layouts.'],
	features: ['Inherits the space scale on the gapX and gapY props.'],
	parts: [
		{
			name: 'Grid',
			description: 'Component for creating bidimensional grid layouts.',
			props: [
				{ name: 'inline', type: 'boolean', default: 'false' },
				{ name: 'cols', type: 'number', default: '1' },
				{ name: 'rows', type: 'number', default: '1' },
				{ name: 'justify', type: "'start' | 'center' | 'end' | 'between'", default: "'start'" },
				{ name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", default: "'start'" },
				{ name: 'gapX', type: '0 to 20', default: '0' },
				{ name: 'gapY', type: '0 to 20', default: '0' },
			],
		},
	],
	usage: `<Grid cols="3" rows="3" justify="stretch" align="stretch" gapX="6" gapY="6" className="mt-4 h-96 rounded-md bg-slate-200 p-4">
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
</Grid>`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()

	const { name, description, shortName, fileName, features, usage, parts } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />

			<H2 size="3xl" className="mt-8">
				Notes
			</H2>
			<P className="mt-4">
				If you set <Code>inline</Code>, <Code>justify</Code> has no meaning because the {'<Grid />'} has the least width possible.
			</P>
			<P className="mt-4">
				Setting <Code>align</Code> only has meaning if the <Code>{'<Grid />'}</Code> has a height. Otherwise it will have the least height possible.
			</P>
			<P className="mt-4">
				If you set <Code>justify="stretch"</Code>, the children shouldn't have a fixed width. Otherwise they won't stretch.
			</P>
			<P className="mt-4">
				If you set <Code>align="stretch"</Code>, the children shouldn't have a fixed height. Otherwise they won't stretch.
			</P>
			<P className="mt-4">
				Setting <Code>justify="stretch"</Code> has the same effect as setting <Code>w-full</Code> on all the children (assuming <Code>flow="row"</Code>).
			</P>
			<P className="mt-4">
				Setting <Code>align="stretch"</Code> has the same effect as setting <Code>h-full</Code> on all the children (assuming <Code>flow="row"</Code>).
			</P>

			<H2 size="3xl" className="mt-8">
				Accessibility
			</H2>
			<P className="mt-4">
				Changing visual order creates a disconnect between content and presentation and is, therefore,{' '}
				<Link to="/articles/the-dark-side-of-the-grid" className="underline">
					bad for accessibility
				</Link>
				. For this reason, I've ommitted <Code>grid-auto-flow:row dense</Code> and <Code>grid-auto-flow: column dense</Code>.
			</P>

			<Usage usage={usage} shortName={shortName} />
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

			<Source fileName={fileName} source={source} />
		</>
	)
}
export default HeadingRoute
