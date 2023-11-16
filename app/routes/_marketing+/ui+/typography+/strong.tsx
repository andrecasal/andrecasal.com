import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'
import { Code } from '../components/typography/code.tsx'
import { Strong } from '../components/typography/strong.tsx'

const component: componentProps = {
	name: 'Strong',
	shortName: 'Strong',
	fileName: 'strong',
	category: 'typography',
	description: ['A strong element with control for typographic attributes.'],
	features: [
		'Drop-in replacement for the native <strong> element.',
		"Automatically inherits the parent's design tokens (just like a normal strong tag).",
		'Allows control of size, weight, alignment, and tracking.',
	],
	parts: [
		{
			name: 'Strong',
			description: 'A strong element with control for typographic attributes.',
			props: [
				{ name: 'weight', type: 'enum: black, extrabold, bold, semibold, medium, normal, light, extralight, thin', default: 'No default value' },
				{ name: 'size', type: 'enum: 4xl, 3xl, 2xl, xl, lg, md, sm, xs', default: 'No default value' },
				{ name: 'align', type: 'enum: left, center, or right', default: 'No default value' },
				{ name: 'tracking', type: 'enum: tighter, tight, normal, wide, wider, or widest', default: 'size-dependent' },
			],
		},
	],
	usage: `<P>
	<Strong>Warning!</Strong> This is <Strong>very dangerous</Strong>.
</P>`,
	styling: `/* ### Typography ### */
@layer components {
	/* Strong */
	.strong {
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
				Generally, <Code>strong</Code> tags will go inside <Code>p</Code> tags and inherit whatever typographical attributes that paragraph has. But because <Code>strong</Code>'s'
				are not limited to being inside paragraphs, this elements also allows you to control typographic attributes.
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
			<H2 className="mt-8">
				{'<em>'} vs {'<strong>'}
			</H2>
			<P>
				Adding to the confusion is the fact that while HTML 4 defined {'<strong>'} as indicating a stronger emphasis, HTML 5 defines {'<strong>'} as representing "strong importance
				for its contents." This is an important distinction to make.
			</P>
			<P className="mt-4">
				While {'<em>'} is used to change the meaning of a sentence as spoken emphasis does ("I <em>love</em> carrots" vs. "I love <em>carrots</em>"), {'<strong>'} is used to give
				portions of a sentence added importance (e.g., "<strong>Warning!</strong> This is <strong>very dangerous</strong>.") Both {'<strong>'} and {'<em>'} can be nested to increase
				the relative degree of importance or stress emphasis, respectively.
			</P>
			<Features features={features} />
			<Parts parts={parts} />
			<P className="mt-4">The tracking's default value depends on the size prop and is controlled through CSS variables: check out the styling section.</P>
			<Usage usage={usage} shortName={shortName} />
			<P>
				<Strong>Warning!</Strong> This is <Strong>very dangerous</Strong>.
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
