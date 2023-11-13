import { json } from '@remix-run/node'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { useLoaderData } from '@remix-run/react'
import { ScrollArea } from '../components/layout/scroll-area.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage } from '../sections/sections.tsx'
import { Code } from '../components/typography/code.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'

const component: componentProps = {
	name: 'Scroll Area',
	shortName: 'ScrollArea',
	fileName: 'scroll-area',
	category: 'layout',
	description: ['Augments native scroll functionality for custom, cross-browser styling.'],
	features: [
		'Scrollbar sits on top of the scrollable content, taking up no space.',
		'Scrolling is native; no underlying position movements via CSS transformations.',
		'Shims pointer behaviors only when interacting with the controls, so keyboard controls are unaffected.',
		'Supports Right to Left direction.',
	],
	parts: [
		{
			name: 'ScrollArea',
			description: 'Augments native scroll functionality for custom, cross-browser styling.',
			props: [
				{ name: 'scrollbars', type: "'vertical' | 'horizontal' | 'both'", default: "'vertical'" },
				{ name: 'type', type: "'auto' | 'always' | 'scroll' | 'hover'", default: "'hover'" },
			],
		},
	],
	usage: `<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-muted-200 dark:bg-muted-300">
	<ScrollArea>
		<div className="p-5">
			<P size="lg">
				Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
				synonymously, typographically they are separate but related concepts.
			</P>
			<P size="lg" className="mt-8">
				Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
				and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
			</P>
		</div>
	</ScrollArea>
</div>`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, usage, parts } = component
	const badExampleOne = `<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-muted-100 p-5">
	<ScrollArea>
		<P size="lg">
			Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
			synonymously, typographically they are separate but related concepts.
		</P>
		<P size="lg" className="mt-8">
			Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
			recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
		</P>
	</ScrollArea>
</div>`
	const badExampleTwo = `<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-muted-100">
	<ScrollArea className="p-5">
		<P size="lg">
			Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
			synonymously, typographically they are separate but related concepts.
		</P>
		<P size="lg" className="mt-8">
			Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
			recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
		</P>
	</ScrollArea>
</div>`

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Parts parts={parts} />
			<H2 size="3xl" className="mt-8">
				Notes
			</H2>
			<P className="mt-4">
				<Code>type</Code> describes the nature of scrollbar visibility, similar to how the scrollbar preferences in macOS control visibility of native scrollbars:
			</P>
			<ul className="ml-4 mt-2 list-disc">
				<li>
					<Code>auto</Code> means that scrollbars are visible when content is overflowing on the corresponding orientation.
				</li>
				<li>
					<Code>always</Code> means that scrollbars are always visible regardless of whether the content is overflowing.
				</li>
				<li>
					<Code>scroll</Code> means that scrollbars are visible when the user is scrolling along its corresponding orientation.
				</li>
				<li>
					<Code>hover</Code> when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.
				</li>
			</ul>
			<Usage usage={usage} shortName={shortName} />
			<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-muted-200 dark:bg-muted-300">
				<ScrollArea>
					<div className="p-5">
						<P size="lg">
							Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
							synonymously, typographically they are separate but related concepts.
						</P>
						<P size="lg" className="mt-8">
							Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
							and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
						</P>
					</div>
				</ScrollArea>
			</div>

			<H2 size="3xl" className="mt-8">
				Common Pitfalls
			</H2>
			<P className="mt-4">
				Note the <Code>{'<div className="p-5">'}</Code> on the example. It's good practice to set padding <em>inside</em> the scroll area, rather than outside or on the scroll area.
			</P>
			<P className="mt-4">See how both the content and the scroll bar don't touch the sides of the containing div:</P>
			<CodeBlock code={badExampleOne} filename="BadScrollAreaExampleOne" extension="tsx" className="mt-4" />
			<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-muted-100 p-5">
				<ScrollArea>
					<P size="lg">
						Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
						synonymously, typographically they are separate but related concepts.
					</P>
					<P size="lg" className="mt-8">
						Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
						recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
					</P>
				</ScrollArea>
			</div>
			<P className="mt-4">And here notice how the scroll bar does extend to the edges, but the content does not:</P>
			<CodeBlock code={badExampleTwo} filename="BadScrollAreaExampleTwo" extension="tsx" className="mt-4" />
			<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-muted-100">
				<ScrollArea className="p-5">
					<P size="lg">
						Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
						synonymously, typographically they are separate but related concepts.
					</P>
					<P size="lg" className="mt-8">
						Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
						recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
					</P>
				</ScrollArea>
			</div>
			<P className="mt-4">
				So make sure to add padding <em>inside</em> the scroll area.
			</P>

			<Source source={source} fileName={fileName} />
		</>
	)
}
export default HeadingRoute
