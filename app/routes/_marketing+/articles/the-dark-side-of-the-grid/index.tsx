import theDarkSideOfTheGrid from './the-dark-side-of-the-grid.png'
import { Link } from '@remix-run/react'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { type Post } from '../_index.tsx'
import { type MetaFunction, type LinksFunction } from '@remix-run/node'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { Kbd } from '~/ui_components/typography/kbd.tsx'

export const post: Post = {
	title: 'The Dark Side Of The Grid (and Flexbox)',
	description: 'Learn about the Grid and Flexbox features you should avoid',
	imageUrl: theDarkSideOfTheGrid,
	date: '2023-10-04',
	href: '/articles/the-dark-side-of-the-grid',
	topics: ['Accessibility', 'CSS'],
}

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com${post.href}` }]
}

export const meta: MetaFunction = () => {
	return [
		{ title: `The Dark Side Of The Grid | Andre Casal` },
		{
			name: 'description',
			content: `Learn about the Grid and Flexbox features you should avoid`,
		},
		{
			name: 'keywords',
			content: `css grid, css flexbox, css grid auto flow, css grid template areas, css flex direction, css position absolute, css grid dense, css grid auto flow dense, css grid template areas out of order, css flex direction row reverse, css flex direction col reverse, css position absolute out of order`,
		},
	]
}

const TheDarkSideOfTheGrid = () => {
	const gridWithoutDense = `<div className="mt-8 grid grid-cols-3 grid-rows-3 gap-4">
	<div className="row-end-[span_3] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">1</button>
	</div>
	<div className="row-end-[span_1] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">2</button>
	</div>
	<div className="row-end-[span_3] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">3</button>
	</div>
	<div className="col-end-[span_2] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">4</button>
	</div>
	<div className="row-end-[span_2] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">5</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">6</button>
	</div>
</div>`
	const gridWithDense = `<div className="mt-8 grid grid-flow-dense grid-cols-3 grid-rows-3 gap-4">
	<div className="row-end-[span_3] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">1</button>
	</div>
	<div className="row-end-[span_1] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">2</button>
	</div>
	<div className="row-end-[span_3] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">3</button>
	</div>
	<div className="col-end-[span_2] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">4</button>
	</div>
	<div className="row-end-[span_2] rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">5</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="h-full w-full text-center align-middle">6</button>
	</div>
</div>`
	const gridTemplateAreasScrewUp = `<div className="mt-8 grid grid-cols-2 gap-4"
	style={{
		gridTemplateAreas: \`'header header'
		'content sidebar'
		'footer footer'\`,
	}}>
	<div className="rounded-md bg-green-200" style={{ gridArea: 'footer' }}>
		<button className="h-full w-full text-center align-middle">footer</button>
	</div>
	<div className="rounded-md bg-green-200" style={{ gridArea: 'sidebar' }} >
		<button className="h-full w-full text-center align-middle">sidebar</button>
	</div>
	<div className="rounded-md bg-green-200" style={{ gridArea: 'content' }} >
		<button className="h-full w-full text-center align-middle">content</button>
	</div>
	<div className="rounded-md bg-green-200" style={{ gridArea: 'header' }} >
		<button className="h-full w-full text-center align-middle">header</button>
	</div>
</div>`
	const flexRowReverseScrewUp = `<div className="flex flex-row-reverse justify-between gap-4">
	<div className="rounded-md bg-green-200">
		<button className="h-full px-10 text-center align-middle">1</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="h-full px-10 text-center align-middle">2</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="h-full px-10 text-center align-middle">3</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="h-full px-10 text-center align-middle">4</button>
	</div>
</div>`
	const flexColumnReverseScrewUp = `<div className="flex flex-col-reverse gap-4">
	<div className="rounded-md bg-green-200">
		<button className="w-full text-center align-middle">1</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="w-full text-center align-middle">2</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="w-full text-center align-middle">3</button>
	</div>
	<div className="rounded-md bg-green-200">
		<button className="w-full text-center align-middle">4</button>
	</div>
</div>`
	const absolutePositionCorrect = `<div className="relative inline-flex flex-col items-start rounded-lg border p-8">
	<Heading size="xl">Edit profile</Heading>
	<P size="md">Make changes to your profile. Click save when ready.</P>
	<div className="mt-8 flex gap-4">
		<div className="flex flex-col items-end gap-4">
			<label className="my-auto">Name</label>
			<label className="my-auto">Username</label>
		</div>
		<div className="flex flex-col justify-center gap-4">
			<input type="text" className="rounded-md p-2" defaultValue="André Casal" />
			<input type="text" className="rounded-md p-2" defaultValue="@andrecasal" />
		</div>
	</div>
	<button className="mt-8 self-end rounded-md bg-muted-50 px-8 py-4">Save changes</button>
	<button className="absolute right-2 top-2 rounded-md bg-muted-50 p-4">Cancel</button>
</div>`
	const absolutePositionScrewUp = `<div className="relative inline-flex flex-col items-start rounded-lg border p-8">
	<button className="absolute right-2 top-2 rounded-md bg-muted-50 p-4">Cancel</button>
	<Heading size="xl">Edit profile</Heading>
	<P size="md">Make changes to your profile. Click save when ready.</P>
	<div className="mt-8 flex gap-4">
		<div className="flex flex-col items-end gap-4">
			<label className="my-auto">Name</label>
			<label className="my-auto">Username</label>
		</div>
		<div className="flex flex-col justify-center gap-4">
			<input type="text" className="rounded-md p-2" defaultValue="André Casal" />
			<input type="text" className="rounded-md p-2" defaultValue="@andrecasal" />
		</div>
	</div>
	<button className="mt-8 self-end rounded-md bg-muted-50 px-8 py-4">Save changes</button>
</div>`

	return (
		<>
			<H1 size="4xl" className="mt-10">
				{post.title}
			</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={theDarkSideOfTheGrid} alt="The Dark Side Of The Grid" className="rounded-2xl object-cover" />

				<H2 size="4xl" className="mt-10">
					Introduction
				</H2>
				<P size="xl" className="mt-8">
					Putting constraints in place is one of the most powerful principles of Software Engineering. When constraints are selected correctly, they allow you to develop
					considerably faster while also avoiding a wide range of mistakes.
				</P>
				<P size="xl" className="mt-8">
					In the case of the CSS Grid and Flexbox, there are a few features that dangerously disconnect visual order from DOM order. This creates an accessibility problem and
					here's why.
				</P>

				<H2 size="4xl" className="mt-10">
					When visual order and DOM order are disconnected
				</H2>
				<P size="xl" className="mt-8">
					When visual order and DOM order are disconnected this creates a frustrating experience in 3 circumstances:
				</P>
				<ul className="mt-8 list-disc pl-5">
					<li>
						<P size="xl">If there are focusable elements in the DOM, you can't predict where focus will go next.</P>
					</li>
					<li>
						<P size="xl">You'll annoy users of screen magnifiers when the enlarged portion of the screen unpredictably skips around.</P>
					</li>
					<li>
						<P size="xl">
							If a blind user is working with a sighted user who reads the page in visual order, this will confuse the blind user who encounters information in a different
							order.
						</P>
					</li>
				</ul>
				<P size="xl" className="mt-8">
					So, long story short, if you want your website or app to remain accessible, add this constraint: do not disconnect visual order from DOM order.
				</P>

				<H2 size="4xl" className="mt-10">
					Unaccessible CSS features
				</H2>
				<P size="xl" className="mt-8">
					So what CSS features create this disconnect? Here's the list.
				</P>
				<ul className="mt-8 list-disc pl-5">
					<li>
						<P size="xl">
							Grid's <code>grid-auto-flow: row dense</code> and <code>grid-auto-flow: col dense</code>
						</P>
					</li>
					<li>
						<P size="xl">
							Out of order <code>grid-template-areas</code>
						</P>
					</li>
					<li>
						<P size="xl">
							Flexbox's <code>flex-direction: row-reverse</code> and <code>flex-direction: col-reverse</code>
						</P>
					</li>
					<li>
						<P size="xl">
							Out of order <code>position: absolute</code>
						</P>
					</li>
				</ul>
				<P size="xl" className="mt-8">
					Let's go through each, one by one.
				</P>

				<H2 size="4xl" className="mt-16">
					grid-auto-flow
				</H2>
				<P size="xl" className="mt-8">
					When you set <code>grid-auto-flow: row dense</code> or <code>grid-auto-flow: col dense</code>, you're asking CSS to use an auto-placement algorithm that attempts to fill
					in holes earlier in the grid if smaller items come up later.
				</P>
				<P size="xl" className="mt-8">
					This changes the visual order of your items disconnecting it from the DOM order.
				</P>
				<P size="xl" className="mt-8">
					Here's how that would look like without <code>dense</code>.
				</P>
				<CodeBlock code={gridWithoutDense} filename="GridWithoutDense" extension="tsx" />
				<P size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is correct. Also take into account that this accessibility problem remains true even
					if there is nothing to focus on, i.e. no buttons. Screen readers will still read things in DOM order.
				</P>
				<div className="mt-8 grid grid-cols-3 grid-rows-3 gap-4">
					<div className="row-end-[span_3] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">1</button>
					</div>
					<div className="row-end-[span_1] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">2</button>
					</div>
					<div className="row-end-[span_3] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">3</button>
					</div>
					<div className="col-end-[span_2] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">4</button>
					</div>
					<div className="row-end-[span_2] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">5</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">6</button>
					</div>
				</div>
				<P size="xl" className="mt-8">
					And here's how that would look like with <code>dense</code>.
				</P>
				<CodeBlock code={gridWithDense} filename="GridWithDense" extension="tsx" />
				<P size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is wrong, because visual order was changed.
				</P>
				<div className="mt-8 grid grid-flow-dense grid-cols-3 grid-rows-3 gap-4">
					<div className="row-end-[span_3] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">1</button>
					</div>
					<div className="row-end-[span_1] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">2</button>
					</div>
					<div className="row-end-[span_3] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">3</button>
					</div>
					<div className="col-end-[span_2] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">4</button>
					</div>
					<div className="row-end-[span_2] rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">5</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="h-full w-full text-center align-middle">6</button>
					</div>
				</div>
				<P size="xl" className="mt-8">
					Therefore, grid's auto-placement algorithm is a no-go.
				</P>

				<H2 size="4xl" className="mt-16">
					grid-template-areas
				</H2>
				<P size="xl" className="mt-8">
					Using <code>grid-template-areas</code> isn't necessarily a no-go. In fact, most of the time it's totally ok to use. You just need to be mindful of the fact that
					<code>grid-template-areas</code> describes your layout visually, so you need to keep it in sync with your DOM order.
				</P>
				<P size="xl" className="mt-8">
					Here's an example of how we could screw this up.
				</P>
				<CodeBlock code={gridTemplateAreasScrewUp} filename="ScrewingGridTemplateAreas" extension="tsx" />
				<P size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is wrong, because visual and DOM order have been disconnected.
				</P>
				<div
					className="mt-8 grid grid-cols-2 gap-4"
					style={{
						gridTemplateAreas: `'header header'
						'content sidebar'
						'footer footer'`,
					}}
				>
					<div
						className="rounded-md bg-green-200"
						style={{
							gridArea: 'footer',
						}}
					>
						<button className="h-full w-full text-center align-middle">footer</button>
					</div>
					<div
						className="rounded-md bg-green-200"
						style={{
							gridArea: 'sidebar',
						}}
					>
						<button className="h-full w-full text-center align-middle">sidebar</button>
					</div>
					<div
						className="rounded-md bg-green-200"
						style={{
							gridArea: 'content',
						}}
					>
						<button className="h-full w-full text-center align-middle">content</button>
					</div>
					<div
						className="rounded-md bg-green-200"
						style={{
							gridArea: 'header',
						}}
					>
						<button className="h-full w-full text-center align-middle">header</button>
					</div>
				</div>

				<H2 size="4xl" className="mt-16">
					flex-direction
				</H2>
				<P size="xl" className="mt-8">
					<code>flex-direction: column-reverse</code> and <code>flex-direction: row-reverse</code> can also create this disconnect.
				</P>
				<P size="xl" className="mt-8">
					Here's an example of how we could screw this up.
				</P>
				<CodeBlock code={flexRowReverseScrewUp} filename="FlexDirectionScrewUp" extension="tsx" />
				<P size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is wrong, because the visual order was disconnected from DOM order.
				</P>
				<div className="flex flex-row-reverse justify-between gap-4">
					<div className="rounded-md bg-green-200">
						<button className="h-full px-10 text-center align-middle">1</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="h-full px-10 text-center align-middle">2</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="h-full px-10 text-center align-middle">3</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="h-full px-10 text-center align-middle">4</button>
					</div>
				</div>
				<P size="xl" className="mt-8">
					And here's the same problem with column-reverse.
				</P>
				<CodeBlock code={flexColumnReverseScrewUp} filename="FlexDirectionScrewUp" extension="tsx" />
				<P size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>.
				</P>
				<div className="flex flex-col-reverse gap-4">
					<div className="rounded-md bg-green-200">
						<button className="w-full text-center align-middle">1</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="w-full text-center align-middle">2</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="w-full text-center align-middle">3</button>
					</div>
					<div className="rounded-md bg-green-200">
						<button className="w-full text-center align-middle">4</button>
					</div>
				</div>

				<H2 size="4xl" className="mt-16">
					position: absolute
				</H2>
				<P size="xl" className="mt-8">
					Finally, there's <code>position: absolute</code>. This is one I've personally done thoughlessly for a long time. The thing to keep in mind with{' '}
					<code>position: absolute</code> is that it may also change visual order, so you just need to change the order in the DOM to match the visual order.
				</P>
				<P size="xl" className="mt-8">
					Following Radix UI's{' '}
					<a href="https://www.radix-ui.com/primitives/docs/components/dialog" target="_blank" rel="noreferrer" className="underline">
						dialog component
					</a>
					, you'd want the cancel button to be the last one to have focus. Here's a correct example. Notice how the cancel button is the last one to have focus.
				</P>

				<P size="xl" className="mt-8">
					Here's a correct example.
				</P>
				<CodeBlock code={absolutePositionCorrect} filename="FlexDirectionScrewUp" extension="tsx" />
				<P size="xl" className="mt-8">
					Notice how the cancel button is the last one to have focus.
				</P>
				<div className="relative inline-flex flex-col items-start rounded-lg border p-8">
					<H2 size="xl">Edit profile</H2>
					<P size="md">Make changes to your profile. Click save when ready.</P>
					<div className="mt-8 flex gap-4">
						<div className="flex flex-col items-end gap-4">
							<label className="my-auto">Name</label>
							<label className="my-auto">Username</label>
						</div>
						<div className="flex flex-col justify-center gap-4">
							<input type="text" className="rounded-md p-2" defaultValue="André Casal" />
							<input type="text" className="rounded-md p-2" defaultValue="@andrecasal" />
						</div>
					</div>
					<button className="mt-8 self-end rounded-md bg-muted-50 px-8 py-4">Save changes</button>
					<button className="absolute right-2 top-2 rounded-md bg-muted-50 p-4">Cancel</button>
				</div>

				<P size="xl" className="mt-8">
					And here's what most developers incorrectly do - including myself for a long time.
				</P>
				<CodeBlock code={absolutePositionScrewUp} filename="FlexDirectionScrewUp" extension="tsx" />
				<P size="xl" className="mt-8">
					Notice how the cancel button is, incorrectly, the first one to have focus.
				</P>
				<div className="relative inline-flex flex-col items-start rounded-lg border p-8">
					<button className="absolute right-2 top-2 rounded-md bg-muted-50 p-4">Cancel</button>
					<H2 size="xl">Edit profile</H2>
					<P size="md">Make changes to your profile. Click save when ready.</P>
					<div className="mt-8 flex gap-4">
						<div className="flex flex-col items-end gap-4">
							<label className="my-auto">Name</label>
							<label className="my-auto">Username</label>
						</div>
						<div className="flex flex-col justify-center gap-4">
							<input type="text" className="rounded-md p-2" defaultValue="André Casal" />
							<input type="text" className="rounded-md p-2" defaultValue="@andrecasal" />
						</div>
					</div>
					<button className="mt-8 self-end rounded-md bg-muted-50 px-8 py-4">Save changes</button>
				</div>

				<H2 size="4xl" className="mt-16">
					Conclusion
				</H2>
				<P size="xl" className="mt-8">
					In conclusion, avoid disconnecting visual order from DOM order because this breaks accessibility and usability patterns. This pertains to <code>grid-auto-flow</code>,
					incorrect use of <code>grid-template-areas</code>, <code>flex-direction</code>, and incorrect use of <code>position: absolute</code>.
				</P>
				<P size="xl" className="mt-8">
					All of these accessibility and usability concerns are encoded in&nbsp;
					<Link to="/ui" className="underline">
						andrecasal/ui
					</Link>
					- I've purposely removed these options from the <code>{'<Grid />'}</code> and <code>{'<Flex />'}</code> components. As for <code>position: absolute</code>, that's up to
					you to implement correctly.
				</P>
			</div>
		</>
	)
}
export default TheDarkSideOfTheGrid
