import { Heading } from '../../ui+/components/typography/heading.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import theDarkSideOfTheGrid from './the-dark-side-of-the-grid.png'
import { Link } from '@remix-run/react'
import { Kbd } from '../../ui+/components/typography/kbd.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { type Post } from '../_index.tsx'

export const post: Post = {
	title: 'The Dark Side Of The Grid (and Flexbox)',
	description: 'Learn about the Grid and Flexbox features you should avoid',
	imageUrl: theDarkSideOfTheGrid,
	href: '/articles/the-dark-side-of-the-grid',
	topics: ['Accessibility', 'CSS'],
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
	<Text size="md">Make changes to your profile. Click save when ready.</Text>
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
	<Text size="md">Make changes to your profile. Click save when ready.</Text>
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
			<Heading as="h1" size="4xl" className="mt-10">
				{post.title}
			</Heading>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={theDarkSideOfTheGrid} alt="The Dark Side Of The Grid" className="rounded-2xl object-cover" />

				<Heading as="h2" size="4xl" className="mt-10">
					Introduction
				</Heading>
				<Text size="xl" className="mt-8">
					Putting constraints in place is one of the most powerful principles of Software Engineering. When constraints are selected correctly, they allow you to develop
					considerably faster while also avoiding a wide range of mistakes.
				</Text>
				<Text size="xl" className="mt-8">
					In the case of the CSS Grid and Flexbox, there are a few features that dangerously disconnect visual order from DOM order. This creates an accessibility problem and
					here's why.
				</Text>

				<Heading as="h2" size="4xl" className="mt-10">
					When visual order and DOM order are disconnected
				</Heading>
				<Text size="xl" className="mt-8">
					When visual order and DOM order are disconnected this creates a frustrating experience in 3 circumstances:
				</Text>
				<ul className="mt-8 list-disc pl-5">
					<li>
						<Text size="xl">If there are focusable elements in the DOM, you can't predict where focus will go next.</Text>
					</li>
					<li>
						<Text size="xl">You'll annoy users of screen magnifiers when the enlarged portion of the screen unpredictably skips around.</Text>
					</li>
					<li>
						<Text size="xl">
							If a blind user is working with a sighted user who reads the page in visual order, this will confuse the blind user who encounters information in a different
							order.
						</Text>
					</li>
				</ul>
				<Text size="xl" className="mt-8">
					So, long story short, if you want your website or app to remain accessible, add this constraint: do not disconnect visual order from DOM order.
				</Text>

				<Heading as="h2" size="4xl" className="mt-10">
					Unaccessible CSS features
				</Heading>
				<Text size="xl" className="mt-8">
					So what CSS features create this disconnect? Here's the list.
				</Text>
				<ul className="mt-8 list-disc pl-5">
					<li>
						<Text size="xl">
							Grid's <code>grid-auto-flow: row dense</code> and <code>grid-auto-flow: col dense</code>
						</Text>
					</li>
					<li>
						<Text size="xl">
							Out of order <code>grid-template-areas</code>
						</Text>
					</li>
					<li>
						<Text size="xl">
							Flexbox's <code>flex-direction: row-reverse</code> and <code>flex-direction: col-reverse</code>
						</Text>
					</li>
					<li>
						<Text size="xl">
							Out of order <code>position: absolute</code>
						</Text>
					</li>
				</ul>
				<Text size="xl" className="mt-8">
					Let's go through each, one by one.
				</Text>

				<Heading as="h2" size="4xl" className="mt-16">
					grid-auto-flow
				</Heading>
				<Text size="xl" className="mt-8">
					When you set <code>grid-auto-flow: row dense</code> or <code>grid-auto-flow: col dense</code>, you're asking CSS to use an auto-placement algorithm that attempts to fill
					in holes earlier in the grid if smaller items come up later.
				</Text>
				<Text size="xl" className="mt-8">
					This changes the visual order of your items disconnecting it from the DOM order.
				</Text>
				<Text size="xl" className="mt-8">
					Here's how that would look like without <code>dense</code>.
				</Text>
				<CodeBlock code={gridWithoutDense} filename="GridWithoutDense" extension="tsx" />
				<Text size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is correct. Also take into account that this accessibility problem remains true even
					if there is nothing to focus on, i.e. no buttons. Screen readers will still read things in DOM order.
				</Text>
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
				<Text size="xl" className="mt-8">
					And here's how that would look like with <code>dense</code>.
				</Text>
				<CodeBlock code={gridWithDense} filename="GridWithDense" extension="tsx" />
				<Text size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is wrong, because visual order was changed.
				</Text>
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
				<Text size="xl" className="mt-8">
					Therefore, grid's auto-placement algorithm is a no-go.
				</Text>

				<Heading as="h2" size="4xl" className="mt-16">
					grid-template-areas
				</Heading>
				<Text size="xl" className="mt-8">
					Using <code>grid-template-areas</code> isn't necessarily a no-go. In fact, most of the time it's totally ok to use. You just need to be mindful of the fact that
					<code>grid-template-areas</code> describes your layout visually, so you need to keep it in sync with your DOM order.
				</Text>
				<Text size="xl" className="mt-8">
					Here's an example of how we could screw this up.
				</Text>
				<CodeBlock code={gridTemplateAreasScrewUp} filename="ScrewingGridTemplateAreas" extension="tsx" />
				<Text size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is wrong, because visual and DOM order have been disconnected.
				</Text>
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

				<Heading as="h2" size="4xl" className="mt-16">
					flex-direction
				</Heading>
				<Text size="xl" className="mt-8">
					<code>flex-direction: column-reverse</code> and <code>flex-direction: row-reverse</code> can also create this disconnect.
				</Text>
				<Text size="xl" className="mt-8">
					Here's an example of how we could screw this up.
				</Text>
				<CodeBlock code={flexRowReverseScrewUp} filename="FlexDirectionScrewUp" extension="tsx" />
				<Text size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>. Notice how the focus order is wrong, because the visual order was disconnected from DOM order.
				</Text>
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
				<Text size="xl" className="mt-8">
					And here's the same problem with column-reverse.
				</Text>
				<CodeBlock code={flexColumnReverseScrewUp} filename="FlexDirectionScrewUp" extension="tsx" />
				<Text size="xl" className="mt-8">
					Click anywhere on this paragraph and press <Kbd>Tab</Kbd>.
				</Text>
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

				<Heading as="h2" size="4xl" className="mt-16">
					position: absolute
				</Heading>
				<Text size="xl" className="mt-8">
					Finally, there's <code>position: absolute</code>. This is one I've personally done thoughlessly for a long time. The thing to keep in mind with{' '}
					<code>position: absolute</code> is that it may also change visual order, so you just need to change the order in the DOM to match the visual order.
				</Text>
				<Text size="xl" className="mt-8">
					Following Radix UI's{' '}
					<a href="https://www.radix-ui.com/primitives/docs/components/dialog" target="_blank" rel="noreferrer" className="underline">
						dialog component
					</a>
					, you'd want the cancel button to be the last one to have focus. Here's a correct example. Notice how the cancel button is the last one to have focus.
				</Text>

				<Text size="xl" className="mt-8">
					Here's a correct example.
				</Text>
				<CodeBlock code={absolutePositionCorrect} filename="FlexDirectionScrewUp" extension="tsx" />
				<Text size="xl" className="mt-8">
					Notice how the cancel button is the last one to have focus.
				</Text>
				<div className="relative inline-flex flex-col items-start rounded-lg border p-8">
					<Heading size="xl">Edit profile</Heading>
					<Text size="md">Make changes to your profile. Click save when ready.</Text>
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

				<Text size="xl" className="mt-8">
					And here's what most developers incorrectly do - including myself for a long time.
				</Text>
				<CodeBlock code={absolutePositionScrewUp} filename="FlexDirectionScrewUp" extension="tsx" />
				<Text size="xl" className="mt-8">
					Notice how the cancel button is, incorrectly, the first one to have focus.
				</Text>
				<div className="relative inline-flex flex-col items-start rounded-lg border p-8">
					<button className="absolute right-2 top-2 rounded-md bg-muted-50 p-4">Cancel</button>
					<Heading size="xl">Edit profile</Heading>
					<Text size="md">Make changes to your profile. Click save when ready.</Text>
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

				<Heading as="h2" size="4xl" className="mt-16">
					Conclusion
				</Heading>
				<Text size="xl" className="mt-8">
					In conclusion, avoid disconnecting visual order from DOM order because this breaks accessibility and usability patterns. This pertains to <code>grid-auto-flow</code>,
					incorrect use of <code>grid-template-areas</code>, <code>flex-direction</code>, and incorrect use of <code>position: absolute</code>.
				</Text>
				<Text size="xl" className="mt-8">
					All of these accessibility and usability concerns are encoded in&nbsp;
					<Link to="/ui" className="underline">
						andrecasal/ui
					</Link>
					- I've purposely removed these options from the <code>{'<Grid />'}</code> and <code>{'<Flex />'}</code> components. As for <code>position: absolute</code>, that's up to
					you to implement correctly.
				</Text>
			</div>
		</>
	)
}
export default TheDarkSideOfTheGrid
