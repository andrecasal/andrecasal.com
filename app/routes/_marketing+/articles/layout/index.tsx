import layout from './layout.png'
import { type Post } from '../_index.tsx'
import { H1 } from '../../ui+/components/typography/h1.tsx'
import { H2 } from '../../ui+/components/typography/h2.tsx'
import { P } from '../../ui+/components/typography/p.tsx'
import { H3 } from '../../ui+/components/typography/h3.tsx'

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
						<b>Multi-column layout algorithm</b> - for laying out text in columns, as in a newspaper.
					</li>
					<li>
						<b>Float layout algorithm</b> - to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
					</li>
					<li>
						<b>Table layout algorithm</b> - for tables.
					</li>
					<li>
						<b>Positioned layout algorithm</b> - for positioning elements without much interaction with other elements.
					</li>
					<li>
						<b>Flexible box layout algorithm</b> - for spacing out elements on a page.
					</li>
					<li>
						<b>Grid layout algorithm</b> - for laying out elements relative to a grid.
					</li>
				</ul>
				<P size="xl" className="mt-8">
					Let's go through each, one by one.
				</P>

				<H3 size="3xl" className="mt-16">
					Normal Flow Layout Algorithm
				</H3>
				<P size="xl" className="mt-8">
					This is an inline-level box. <span className="bg-green-500 inline">It's a box that participates in the inline formatting context.</span> It's a box that flows in between surrounding content.
				</P>
				<P size="xl" className="mt-8">
					Browsers render boxes according to these rules:
					- Box dimensions and type (block, inline, or inline-block)
					- Positioning scheme (normal flow, float, or absolute positioning)
					- Relationships between elements
					- External information (viewport size, intrinsic dimensions of images, etc.)

					<div className="w-10 h-10 bg-green-500 float-right" />

					The visual formatting model does not specify all aspects of formatting. For example, it does not specify the letter-spacing algorithm.

					Ok, so whenever there is at least one block-level box inside a container, that container will now only have block-level boxes inside it. Anonymous block boxes are created to contain the inline-level boxes.

					There are two contexts working simultaneously in the normal flow layout algorithm: block and inline. Block-level elements participate in the block formatting context, and inline-level elements participate in the inline formatting context. But no element can participate in both at the same time.

					Block-level elements start on a new line and take up the full width available (stopping any content from flowing next to them).
					Inline-level elements flow in between surrounding content.

					So if you have a block-level element, an inline-level element, and another block-level element, the first block-level element will participate in the block formatting context, the inline-level element will participate in the inline formatting context, and the second block-level element will participate in the block formatting context.

					Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

					But not new inline formatting contexts?
				</P>
				<div className="bg-green-500/20 border">
					<div className="h-10 bg-emerald-500 my-10">Block 1</div>
					<div className="h-10 bg-yellow-600 my-10 inline">Inline 1</div>
					<div className="h-10 bg-red-700 my-10">Block 2</div>
					<div className="h-10 bg-teal-600 my-10 inline">Inline 2</div>
				</div>
			</div>
		</>
	)
}
export default Layout
