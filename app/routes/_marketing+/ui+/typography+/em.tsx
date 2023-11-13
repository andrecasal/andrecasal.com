import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Styling } from '../sections/sections.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'
import { Code } from '../components/typography/code.tsx'
import { Em } from '../components/typography/em.tsx'

const component: componentProps = {
	name: 'Em',
	shortName: 'Em',
	fileName: 'em',
	category: 'typography',
	description: ['An em element with control for typographic attributes.'],
	features: [
		'Drop-in replacement for the native <em> element.',
		"Automatically inherits the parent's design tokens (just like a normal em tag).",
		'Allows control of size, weight, alignment, and tracking.',
	],
	parts: [
		{
			name: 'Em',
			description: 'An em element with control for typographic attributes.',
			props: [
				{ name: 'weight', type: 'enum: black, extrabold, bold, semibold, medium, normal, light, extralight, thin', default: 'No default value' },
				{ name: 'size', type: 'enum: 4xl, 3xl, 2xl, xl, lg, md, sm, xs', default: 'No default value' },
				{ name: 'align', type: 'enum: left, center, or right', default: 'No default value' },
				{ name: 'tracking', type: 'enum: tighter, tight, normal, wide, wider, or widest', default: 'size-dependent' },
			],
		},
	],
	usage: `<P>
	This <Em>is</Em> emphasized.
</P>`,
	styling: `/* Typography: https://andrecasal.com/articles/fluid-typography-sizing-with-modular-scales */
@layer base {
	:root {
		/* Font family */
		--font-sans: Inter; /* This requires the font.css file to be preloaded in the root.tsx */
		--font-code: 'Fira Code VF'; /* This requires the font.css file to be preloaded in the root.tsx */

		/* Font size */
		--text-size-6xl-min-size: 4.5;
		--text-size-6xl-max-size: 8;
		--text-size-5xl-min-size: 3;
		--text-size-5xl-max-size: 6;
		--text-size-4xl-min-size: 2.25;
		--text-size-4xl-max-size: 3.75;
		--text-size-3xl-min-size: 1.875;
		--text-size-3xl-max-size: 2.25;
		--text-size-2xl-min-size: 1.5;
		--text-size-2xl-max-size: 1.875;
		--text-size-xl-min-size: 1.25;
		--text-size-xl-max-size: 1.5;
		--text-size-lg-min-size: 1.125;
		--text-size-lg-max-size: 1.25;
		--text-size-md-min-size: 1;
		--text-size-md-max-size: 1.125;
		--text-size-sm-min-size: 0.875;
		--text-size-sm-max-size: 1;
		--text-size-xs-min-size: 0.75;
		--text-size-xs-max-size: 0.875;

		/* Line-height. Default values. This should be adapted to paragraph length: 1em for 45 characters, 2em for 75 characters. */
		--text-line-height-xs: clamp(1.125rem, 6.2vw, 1.75rem); /* 12px <-> 14px => 18px <-> 28px */
		--text-line-height-sm: clamp(1.25rem, 6.2vw, 2rem); /* 20px <-> 32px */
		--text-line-height-md: clamp(1.5rem, 6vw, 2.25rem); /* 24px <-> 36px */
		--text-line-height-lg: clamp(1.75rem, 5.8vw, 2.25rem); /* 28px <-> 36px */
		--text-line-height-xl: clamp(2rem, 6.5vw, 2.5rem); /* 32px <-> 40px */
		--text-line-height-2xl: 1.5;
		--text-line-height-3xl: 1.5;
		--text-line-height-4xl: 1.2;
		--text-line-height-5xl: 1.2;
		--text-line-height-6xl: 1.2;

		/* Tracking. Default values. Can be overridden by the 'tracking' prop on the <Heading /> and <P /> components) */
		--text-tracking-xs: 0em;
		--text-tracking-sm: 0em;
		--text-tracking-md: 0em;
		--text-tracking-lg: 0em;
		--text-tracking-xl: 0em;
		--text-tracking-2xl: -0.025em;
		--text-tracking-3xl: -0.025em;
		--text-tracking-4xl: -0.025em;
		--text-tracking-5xl: -0.05em;
		--text-tracking-6xl: -0.05em;

		/* Calculations (you probably don't need to change this) */
		/* text-size-6xl */
		--text-size-6xl-deltaY: calc(var(--text-size-6xl-max-size) - var(--text-size-6xl-min-size));
		--text-size-6xl-gradient: calc(var(--text-size-6xl-deltaY) / var(--size-deltaX));
		--text-size-6xl-intercept: calc(var(--text-size-6xl-min-size) - (var(--text-size-6xl-gradient) * var(--content-min-width)));
		--text-size-6xl-font-size: calc(var(--text-size-6xl-gradient) * 100vw + var(--text-size-6xl-intercept) * 1rem);
		--text-size-6xl: clamp(calc(var(--text-size-6xl-min-size) * 1rem), var(--text-size-6xl-font-size), calc(var(--text-size-6xl-max-size) * 1rem));
		/* text-size-5xl */
		--text-size-5xl-deltaY: calc(var(--text-size-5xl-max-size) - var(--text-size-5xl-min-size));
		--text-size-5xl-gradient: calc(var(--text-size-5xl-deltaY) / var(--size-deltaX));
		--text-size-5xl-intercept: calc(var(--text-size-5xl-min-size) - (var(--text-size-5xl-gradient) * var(--content-min-width)));
		--text-size-5xl-font-size: calc(var(--text-size-5xl-gradient) * 100vw + var(--text-size-5xl-intercept) * 1rem);
		--text-size-5xl: clamp(calc(var(--text-size-5xl-min-size) * 1rem), var(--text-size-5xl-font-size), calc(var(--text-size-5xl-max-size) * 1rem));
		/* text-size-4xl */
		--text-size-4xl-deltaY: calc(var(--text-size-4xl-max-size) - var(--text-size-4xl-min-size));
		--text-size-4xl-gradient: calc(var(--text-size-4xl-deltaY) / var(--size-deltaX));
		--text-size-4xl-intercept: calc(var(--text-size-4xl-min-size) - (var(--text-size-4xl-gradient) * var(--content-min-width)));
		--text-size-4xl-font-size: calc(var(--text-size-4xl-gradient) * 100vw + var(--text-size-4xl-intercept) * 1rem);
		--text-size-4xl: clamp(calc(var(--text-size-4xl-min-size) * 1rem), var(--text-size-4xl-font-size), calc(var(--text-size-4xl-max-size) * 1rem));
		/* text-size-3xl */
		--text-size-3xl-deltaY: calc(var(--text-size-3xl-max-size) - var(--text-size-3xl-min-size));
		--text-size-3xl-gradient: calc(var(--text-size-3xl-deltaY) / var(--size-deltaX));
		--text-size-3xl-intercept: calc(var(--text-size-3xl-min-size) - (var(--text-size-3xl-gradient) * var(--content-min-width)));
		--text-size-3xl-font-size: calc(var(--text-size-3xl-gradient) * 100vw + var(--text-size-3xl-intercept) * 1rem);
		--text-size-3xl: clamp(calc(var(--text-size-3xl-min-size) * 1rem), var(--text-size-3xl-font-size), calc(var(--text-size-3xl-max-size) * 1rem));
		/* text-size-2xl */
		--text-size-2xl-deltaY: calc(var(--text-size-2xl-max-size) - var(--text-size-2xl-min-size));
		--text-size-2xl-gradient: calc(var(--text-size-2xl-deltaY) / var(--size-deltaX));
		--text-size-2xl-intercept: calc(var(--text-size-2xl-min-size) - (var(--text-size-2xl-gradient) * var(--content-min-width)));
		--text-size-2xl-font-size: calc(var(--text-size-2xl-gradient) * 100vw + var(--text-size-2xl-intercept) * 1rem);
		--text-size-2xl: clamp(calc(var(--text-size-2xl-min-size) * 1rem), var(--text-size-2xl-font-size), calc(var(--text-size-2xl-max-size) * 1rem));
		/* text-size-xl */
		--text-size-xl-deltaY: calc(var(--text-size-xl-max-size) - var(--text-size-xl-min-size));
		--text-size-xl-gradient: calc(var(--text-size-xl-deltaY) / var(--size-deltaX));
		--text-size-xl-intercept: calc(var(--text-size-xl-min-size) - (var(--text-size-xl-gradient) * var(--content-min-width)));
		--text-size-xl-font-size: calc(var(--text-size-xl-gradient) * 100vw + var(--text-size-xl-intercept) * 1rem);
		--text-size-xl: clamp(calc(var(--text-size-xl-min-size) * 1rem), var(--text-size-xl-font-size), calc(var(--text-size-xl-max-size) * 1rem));
		/* text-size-lg */
		--text-size-lg-deltaY: calc(var(--text-size-lg-max-size) - var(--text-size-lg-min-size));
		--text-size-lg-gradient: calc(var(--text-size-lg-deltaY) / var(--size-deltaX));
		--text-size-lg-intercept: calc(var(--text-size-lg-min-size) - (var(--text-size-lg-gradient) * var(--content-min-width)));
		--text-size-lg-font-size: calc(var(--text-size-lg-gradient) * 100vw + var(--text-size-lg-intercept) * 1rem);
		--text-size-lg: clamp(calc(var(--text-size-lg-min-size) * 1rem), var(--text-size-lg-font-size), calc(var(--text-size-lg-max-size) * 1rem));
		/* text-size-md */
		--text-size-md-deltaY: calc(var(--text-size-md-max-size) - var(--text-size-md-min-size));
		--text-size-md-gradient: calc(var(--text-size-md-deltaY) / var(--size-deltaX));
		--text-size-md-intercept: calc(var(--text-size-md-min-size) - (var(--text-size-md-gradient) * var(--content-min-width)));
		--text-size-md-font-size: calc(var(--text-size-md-gradient) * 100vw + var(--text-size-md-intercept) * 1rem);
		--text-size-md: clamp(calc(var(--text-size-md-min-size) * 1rem), var(--text-size-md-font-size), calc(var(--text-size-md-max-size) * 1rem));
		/* text-size-sm */
		--text-size-sm-deltaY: calc(var(--text-size-sm-max-size) - var(--text-size-sm-min-size));
		--text-size-sm-gradient: calc(var(--text-size-sm-deltaY) / var(--size-deltaX));
		--text-size-sm-intercept: calc(var(--text-size-sm-min-size) - (var(--text-size-sm-gradient) * var(--content-min-width)));
		--text-size-sm-font-size: calc(var(--text-size-sm-gradient) * 100vw + var(--text-size-sm-intercept) * 1rem);
		--text-size-sm: clamp(calc(var(--text-size-sm-min-size) * 1rem), var(--text-size-sm-font-size), calc(var(--text-size-sm-max-size) * 1rem));
		/* text-size-xs */
		--text-size-xs-deltaY: calc(var(--text-size-xs-max-size) - var(--text-size-xs-min-size));
		--text-size-xs-gradient: calc(var(--text-size-xs-deltaY) / var(--size-deltaX));
		--text-size-xs-intercept: calc(var(--text-size-xs-min-size) - (var(--text-size-xs-gradient) * var(--content-min-width)));
		--text-size-xs-font-size: calc(var(--text-size-xs-gradient) * 100vw + var(--text-size-xs-intercept) * 1rem);
		--text-size-xs: clamp(calc(var(--text-size-xs-min-size) * 1rem), var(--text-size-xs-font-size), calc(var(--text-size-xs-max-size) * 1rem));
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
				Generally, <Code>em</Code> tags will go inside <Code>p</Code> tags and inherit whatever typographical attributes that paragraph has. But because ems are not limited to being
				inside paragraphs, this elements also allows you to control typographic attributes.
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
				This <Em>is</Em> emphasized.
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
