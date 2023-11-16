import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'
import { Code } from '../components/typography/code.tsx'
import { B } from '../components/typography/b.tsx'

const component: componentProps = {
	name: 'B',
	shortName: 'B',
	fileName: 'b',
	category: 'typography',
	description: ['A b element with control for typographic attributes.'],
	features: [
		'Drop-in replacement for the native <b> element.',
		"Automatically inherits the parent's design tokens (just like a normal b tag).",
		'Allows control of size, weight, alignment, and tracking.',
	],
	parts: [
		{
			name: 'B',
			description: 'A b element with control for typographic attributes.',
			props: [
				{ name: 'weight', type: 'enum: black, extrabold, bold, semibold, medium, normal, light, extralight, thin', default: 'No default value' },
				{ name: 'size', type: 'enum: 4xl, 3xl, 2xl, xl, lg, md, sm, xs', default: 'No default value' },
				{ name: 'align', type: 'enum: left, center, or right', default: 'No default value' },
				{ name: 'tracking', type: 'enum: tighter, tight, normal, wide, wider, or widest', default: 'size-dependent' },
			],
		},
	],
	usage: `<P>
	The two most popular science courses offered by the school are <B>chemistry</B> (the study of chemicals and the composition of substances) and <B>physics</B> (the study of
	the nature and properties of matter and energy).
</P>`,
	styling: `/* ### Typography ### */
@layer components {
	/* B */
	.b {
		@apply font-bold;
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
				Generally, <Code>b</Code> tags will go inside <Code>p</Code> tags and inherit whatever typographical attributes that paragraph has. But because <Code>b</Code>'s' are not
				limited to being inside paragraphs, this elements also allows you to control typographic attributes.
			</P>
			<P className="mt-4">
				The <Code>{'<b>'}</Code> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly
				known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <Code>{'<b>'}</Code> for styling text because that's a job for
				CSS and you should not use <Code>{'<b>'}</Code> for granting importance or stress emphasis because that's a job for the <Code>{'<strong>'}</Code> and <Code>{'<em>'}</Code>{' '}
				tags, respectively.
			</P>
			<H2 className="mt-8">
				{'<b>'} vs {'<strong>'}
			</H2>
			<P>
				It is often confusing to new developers why there are so many ways to express the same thing on a rendered website. {'<b>'} and {'<strong>'} are perhaps one of the most
				common sources of confusion, causing developers to ask "Should I use {'<b>'} or {'<strong>'}? Don't they both do the same thing?"
			</P>
			<P className="mt-4">
				Not exactly. The {'<strong>'} element is for content that is of greater importance, while the {'<b>'} element is used to draw attention to text without indicating that it's
				more important.
			</P>
			<P className="mt-4">
				It may help to realize that both are valid and semantic elements in HTML and that it's a coincidence that they both have the same default styling (boldface) in most browsers
				(although some older browsers actually underline {'<strong>'}). Each element is meant to be used in certain types of scenarios, and if you want to bold text for decoration,
				you should instead actually use the CSS font-weight property.
			</P>
			<P className="mt-4">
				The intended meaning or purpose of the enclosed text should be what determines which element you use. Communicating meaning is what semantics are all about.
			</P>
			<Features features={features} />
			<Parts parts={parts} />
			<P className="mt-4">The tracking's default value depends on the size prop and is controlled through CSS variables: check out the styling section.</P>
			<Usage usage={usage} shortName={shortName} />
			<P>
				The two most popular science courses offered by the school are <B>chemistry</B> (the study of chemicals and the composition of substances) and <B>physics</B> (the study of
				the nature and properties of matter and energy).
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
