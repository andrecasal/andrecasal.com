import layout from './layout.png'
import { type Post } from '../_index.tsx'
import { H1 } from '../../ui+/components/typography/h1.tsx'
import { H2 } from '../../ui+/components/typography/h2.tsx'
import { P } from '../../ui+/components/typography/p.tsx'
import { H3 } from '../../ui+/components/typography/h3.tsx'
import { Code } from '../../ui+/components/typography/code.tsx'
import { H4 } from '../../ui+/components/typography/h4.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'

export const post: Post = {
	title: 'CSS Layout Algorithms',
	description: 'Learn what tools to reach for when laying out your UI.',
	imageUrl: layout,
	date: '2024-02-16',
	href: '/articles/layout',
	topics: ['CSS', 'Layout'],
}

const Layout = () => {
	return (
		<>
			<H1 size="4xl" className="mt-10">
				{post.title}
			</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={layout} alt="Fluid typography sizing with modular scales" className="rounded-2xl object-cover" />
				<H2 size="4xl" className="mt-10">
					Introduction
				</H2>
				<P size="xl" className="mt-8">
					Just like JSX, CSS is a declarative language. In a declarative language, you define what to do, while in an imperative language you define how to do it.
				</P>
				<P size="xl" className="mt-8">
					It's like having an assistant. The value of assistants is that they are declarative. You ask them for what you want and they will know how to do it - and this saves a
					tremendous amount of time.
				</P>
				<P size="xl" className="mt-8">
					When you do need to show them (both assistants and software) how to do something, you usually only need to do it once. From then on, they will know how to do it, and you
					can just ask them for what you want and keep saving time.
				</P>
				<P size="xl" className="mt-8">
					Thus, all declarative code has imperative code behind it, i.e. in order for you to be able to ask a piece of software for what you want, it first needs to know how to do
					it.
				</P>
				<P size="xl" className="mt-8">
					And therein lies the danger of declarative APIs: because we can just ask them for what we want, they give us the impression that we don't need to know how they do the
					things they do.
				</P>
				<P size="xl" className="mt-8">
					It's this misguided intuition that keeps us stuck, sometimes for years, when things go wrong in JSX or CSS: we don't know how to fix it, because we don't know how it
					works.
				</P>
				<P size="xl" className="mt-8">
					We can clearly see the reflection of our misguided intuition regarding declarative APIs for both JSX and CSS, in that documentation regarding what they do (or how to fix
					a given problem with a very shallow explanation of why it fixes it), almost completely eclipses documentation regarding how they do the things they do, i.e. their
					underlying algorithms.
				</P>
				<P size="xl" className="mt-8">
					Thus the aim of this article: to explain how CSS Layout algorithms (technically they're called layout "modes") work, so that you will never again be stuck when laying out
					your UI and, instead, have a lot of fun being productive.
				</P>

				<H2 size="4xl" className="mt-16">
					CSS Layout Algorithms
				</H2>
				<P size="xl" className="mt-8">
					There are 7 layout algorithms in CSS:
				</P>
				<ul className="mt-8 list-disc pl-5 text-size-xl">
					<li>
						<b>Normal flow layout algorithm</b> - the default layout algorithm.
					</li>
					<li>
						<b>Float layout algorithm</b> - to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
					</li>
					<li>
						<b>Positioned layout algorithm</b> - for positioning elements without much interaction with other elements.
					</li>
					<li>
						<b>Multi-column layout algorithm</b> - for laying out text in columns, as in a newspaper.
					</li>
					<li>
						<b>Table layout algorithm</b> - for tables.
					</li>
					<li>
						<b>Flexible box layout algorithm</b> - for spacing out elements on a page.
					</li>
					<li>
						<b>Grid layout algorithm</b> - for laying out elements relative to a grid.
					</li>
				</ul>
				<P size="xl" className="mt-8">
					Before we can start exploring the layout algorithms, we need to define a few concepts.
				</P>

				<H3 size="3xl" className="mt-16">
					Concepts
				</H3>
				<H4 size="2xl" className="mt-8">
					Canvas
				</H4>
				<P size="xl" className="mt-8">
					The document canvas is the infinite surface over which the document is rendered. Don't confuse it with HTML's <Code>{'<canvas>'}</Code> element. Each canvas can only have
					one viewport - a window through which users can view the canvas. When the canvas is bigger than the viewport, the browser offers a scrolling mechanism.
				</P>
				<P size="xl" className="mt-8">
					So you can think of these as stacked in the Z-axis (the axis that goes from the screen to the user's eyes): document {'->'} canvas {'->'} viewport (possibly with scroll).
				</P>

				<H4 size="2xl" className="mt-8">
					The visual formatting model
				</H4>
				<P size="xl" className="mt-8">
					In the visual formatting model, each element in the document tree generates zero or more boxes according to the box model. The layout of these boxes is governed by:
				</P>
				<ul className="mt-8 list-disc pl-5 text-size-xl">
					<li>Box dimensions (content size, width and height)</li>
					<li>Box type (inline or block)</li>
					<li>Positioning scheme (normal flow, float, and absolute positioning)</li>
					<li>Relationships between elements in the document tree</li>
					<li>External information (viewport size, intrinsic image size, etc)</li>
				</ul>

				<H4 size="2xl" className="mt-8">
					Containing blocks
				</H4>
				<P size="xl" className="mt-8">
					Box positions and sizes are calculated with respect to the edges of a rectangular box called a <b>containing block</b>. In general, generated boxes act as containing
					blocks for descendant boxes; we say that a box "establishes" the containing block for its descendants. The phrase "a box's containing block" means "the containing block
					in which the box lives," not the one it generates.
				</P>
				<P size="xl" className="mt-8">
					Each box is given a position with respect to its containing block, but it is not confined by this containing block; it may overflow.
				</P>

				<H4 size="2xl" className="mt-8">
					Initial formatting context
				</H4>
				<P size="xl" className="mt-8">
					The root of an HTML document, the html element, establishes the <b>initial formatting context</b>, i.e. it's the box, positioned at the origin of the canvas, that
					establishes the first context.
				</P>

				<H4 size="2xl" className="mt-8">
					Special cases
				</H4>
				<P size="xl" className="mt-8">
					In CSS, values are never propagated upward, i.e. an element never passes values up to its ancestors, with one exception:{' '}
					<a href="https://www.w3.org/TR/css-backgrounds-3/#body-background" target="_blank" rel="noreferrer" className="underline">
						background styles applied to the body element are passed to the html element
					</a>
					.
				</P>
				<P size="xl" className="mt-8">
					The background of the root html element{' '}
					<a href="https://www.w3.org/TR/css-backgrounds-3/#special-backgrounds" target="_blank" rel="noreferrer" className="underline">
						becomes the canvas background
					</a>{' '}
					and its background painting area extends to cover the entire canvas.
				</P>
				<P size="xl" className="mt-8">
					If the html element is smaller than the viewport, setting <Code>overflow: hidden</Code> will not clip what overflows the html element, but what overflows the viewport.
				</P>
				<P size="xl" className="mt-8">
					When you set <Code>position: absolute</Code> on an element without any ascending positioned ancestors, that element is positioned relative to the canvas, not the root
					html element.
				</P>

				<P size="xl" className="mt-8">
					You can see all of these special cases in action in the following example:
				</P>
				<CodeBlock
					code={`function App() {
	return (
		<html>
			<head>
				<style>
					html {
						height: 50vh;
						background: red;
						border: 1px solid black;
						overflow: hidden;
						position: relative;
					}

					body {
						height: 50%;
						background: blue;
					}
					div {
						background: green;
						width: 100px;
						height: 100px;
						position: absolute;
						bottom:-50px;
						left: -50px;
					}
				</style>
			</head>
			<body><div></div></body>
		</html>
	)
}`}
					filename="SpecialCases"
					extension="tsx"
				/>
				<P size="xl" className="mt-8">
					Feel free to copy this code into an <Code>about:blank</Code> tab in your browser and toggle properties on and off to see how they affect the layout.
				</P>

				<P size="xl" className="mt-8">
					Ok, now that we've discussed the required concepts and special cases, let's start with the default layout algorithm: the Normal Flow Layout Algorithm.
				</P>

				<H3 size="3xl" className="mt-16">
					Normal Flow Layout Algorithm
				</H3>
				<P size="xl" className="mt-8">
					Any element will stay in the default Normal Flow Layout Algorithm, unless you explicitly switch it to another layout algorithm (with <Code>float: left | right</Code>,{' '}
					<Code>display: table | flex | grid</Code> or <Code>columns: n</Code>).
				</P>
				<P size="xl" className="mt-8">
					Let's see how it works.
				</P>
				<P size="xl" className="mt-8">
					A box in the normal flow layout algorithm creates either an inline formatting context or a block formatting context - but not both. You can think of each as its own
					algorithm.
				</P>

				<H4 size="2xl" className="mt-8">
					Inline formatting context
				</H4>
				<P size="xl" className="mt-8">
					An inline formatting context only exists if all siblings in a containing block are inline-level elements, even if those elements are anonymous inline boxes.

					Note, this root inline box concept effectively replaces the "anonymous inline element" concept introduced in CSS2§9.2.2.1.
				</P>
				<P size="xl" className="mt-8">
					Let's see how it works.
				</P>
				<P size="xl" className="mt-8">
					Let's see how it works.
				</P>
				<P size="xl" className="mt-8">
					Let's see how it works.
				</P>
				<P size="xl" className="mt-8">
					## Anonymous inline boxes
					{'<p>Some awesome <em>emphasized</em> super text</p>'} generates an anonymous inline box with "Some awesome", an inline box generated by {'<em>'} and another anonymous
					inline box for "super text". They are called "anonymous" because they do not have an associated element, and therefore can't be targeted for CSS rules. Anonymous inline
					boxes inherit inheritable properties from their block parent box. Non-inherited properties have their initial value. For example, the previous anonymous inline boxes
					inherit the text color from the {'<p>'}, but their background is transparent, even if the {'<p>'} background is not. ## Inline-level elements display: inline |
					inline-table | inline-block generate inline-level elements: they do not form new blocks of content, instead their content participates in an inline formatting context and
					is distributed in lines boxes. ## Line boxes The rectangular area that contains the boxes that form a line is called a line box. The width of a line box is determined by
					its containing block and the presence of floats. Line boxes are stacked with no vertical separation and they never overlap. In the inline formatting context, inline-level
					boxes are laid out horizontally, one after the other. If there is not enough space in the containing block for all of the boxes, a box can break onto a new line box. The
					box model does not fully apply to items participating in an inline formatting context. In the horizontal writing mode, horizontal padding, borders and margin will be
					applied to the element and push the text away left and right. However, margins above and below the element will not be applied. Vertical padding and borders will be
					applied but may overlap content above and below as the line boxes will not be pushed apart by padding or borders. ### Where does a line box break? Wrapping is only
					performed at an allowed break point, called a <b>soft wrap opportunity</b>. Most writing systems use spaces to separate words, and those are used as soft wrap
					opportunities. When a whitespace becomes a soft wrap opportunity, it is removed from the flow and the line box is split, i.e. the whitespace character will not show up
					either after the last word on the upper line box or before the first word on the lower line box. White-space rules can override where a line box is split. [Explore
					white-space rules] Now let's analyze the vertical dimension of the inline formatting context and see what rules govern the height of each line box. The height of a line
					box is determined by its line height. A line box is always tall enough for all of the boxes it contains. However, it may be taller than the tallest box it contains (if,
					for example, boxes are aligned so that baselines line up). When the height of a box B is less than the height of the line box containing it, the vertical alignment of B
					within the line box is determined by the 'vertical-align' property. These boxes may be aligned vertically in different ways: bottoms, tops, baselines, centered. display:
					inline-block Atomic inline box = its contents participate in its inline formatting context as a single block "display: block | list-item | table" create block-level
					elements. Each block-level element generates a principal block-level box that contains its descendants and is involved in any positioning scheme. Some block-level
					elements, like the list-item, generate additional boxes positioned relative to the principal box (the bullet points or numbers you see on list items). A block-level box
					is also a block container box: it either contains only block-level boxes or establishes an inline formatting context with only inline-level boxes. Inline elements are
					also block container boxes, even though they aren't block-level boxes themselves. Block-level boxes that are also block containers are called block boxes. If a block
					container box has a block-level box inside it, then we force it to only have block-level boxes inside it, by creating anonymous block boxes around inline content.
				</P>
			</div>
		</>
	)
}
export default Layout
