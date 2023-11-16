import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'
import { Code } from '../components/typography/code.tsx'
import { I } from '../components/typography/i.tsx'

const component: componentProps = {
	name: 'I',
	shortName: 'I',
	fileName: 'i',
	category: 'typography',
	description: ['An i element with control for typographic attributes.'],
	features: [
		'Drop-in replacement for the native <i> element.',
		"Automatically inherits the parent's design tokens (just like a normal i tag).",
		'Allows control of size, weight, alignment, and tracking.',
	],
	parts: [
		{
			name: 'I',
			description: 'An i element with control for typographic attributes.',
			props: [
				{ name: 'weight', type: 'enum: black, extrabold, bold, semibold, medium, normal, light, extralight, thin', default: 'No default value' },
				{ name: 'size', type: 'enum: 4xl, 3xl, 2xl, xl, lg, md, sm, xs', default: 'No default value' },
				{ name: 'align', type: 'enum: left, center, or right', default: 'No default value' },
				{ name: 'tracking', type: 'enum: tighter, tight, normal, wide, wider, or widest', default: 'size-dependent' },
			],
		},
	],
	usage: `<P>
	The word <I>the</I> is italicized.
</P>`,
	styling: `/* ### Typography ### */
@layer components {
	/* I */
	.i {
		@apply italic;
	}
}`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const SpanRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, usage, parts, styling } = component

	return (
		<>
			<Description name={name} description={description} />
			<P className="mt-4">
				Generally, <Code>i</Code> tags will go inside <Code>p</Code> tags and inherit whatever typographical attributes that paragraph has. But because <Code>i</Code> tags are not
				limited to being inside paragraphs, this elements also allows you to control typographic attributes.
			</P>
			<H2>
				{'<i>'} vs {'<em>'}
			</H2>
			<P>
				Some developers may be confused by how multiple elements seemingly produce similar visual results. <Code>{'<em>'}</Code> and <Code>{'<i>'}</Code> are a common example, since
				they both italicize text. What's the difference? Which should you use?
			</P>
			<P className="mt-4">
				By default, the visual result is the same. However, the semantic meaning is different. The <Code>{'<em>'}</Code> element represents stress emphasis of its contents, while the{' '}
				<Code>{'<i>'}</Code> element represents text that is set off from the normal prose, such as a foreign word, fictional character thoughts, or when the text refers to the
				definition of a word instead of representing its semantic meaning. (The title of a work, such as the name of a book or movie, should use <Code>{'<cite>'}</Code>.)
			</P>
			<P className="mt-4">This means the right one to use depends on the situation. Neither is for purely decorative purposes, that's what CSS styling is for.</P>
			<P className="mt-4">
				An example for <Code>{'<em>'}</Code> could be: "Just <em>do</em> it already!", or: "We <em>had</em> to do something about it". A person or software reading the text would
				pronounce the words in italics with an emphasis, using verbal stress.
			</P>
			<P className="mt-4">
				An example for <Code>{'<i>'}</Code> could be: "The <i>Queen Mary</i> sailed last night". Here, there is no added emphasis or importance on the word "Queen Mary". It is merely
				indicated that the object in question is not a queen named Mary, but a ship named Queen Mary. Another example for <Code>{'<i>'}</Code> could be: "The word <i>the</i> is an
				article".
			</P>
			<Features features={features} />
			<Parts parts={parts} />
			<P className="mt-4">The tracking's default value depends on the size prop and is controlled through CSS variables: check out the styling section.</P>
			<Usage usage={usage} shortName={shortName} />
			<P>
				The word <I>the</I> is italicized.
			</P>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
			<P className="mt-4">
				The typographic styling is actually pretty simple once you wrap your head around it. For an explanation check out the{' '}
				<Link to="/articles/fluid-typography-sizing-with-modular-scales" className="underline">
					Fluid Typography Sizing and Scales article
				</Link>
				.
			</P>
		</>
	)
}
export default SpanRoute
