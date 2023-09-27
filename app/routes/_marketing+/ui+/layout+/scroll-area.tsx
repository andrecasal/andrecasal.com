import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { ScrollArea } from '../components/layout/scroll-area.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/layout/scroll-area.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usageExample = `<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-slate-100">
	<ScrollArea>
		<div className="p-5">
			<Text size="lg">
				Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
				synonymously, typographically they are separate but related concepts.
			</Text>
			<Text size="lg" className="mt-8">
				Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
				and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
			</Text>
		</div>
	</ScrollArea>
</div>`
	const badExampleOne = `<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-slate-100 p-5">
	<ScrollArea>
		<Text size="lg">
			Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
			synonymously, typographically they are separate but related concepts.
		</Text>
		<Text size="lg" className="mt-8">
			Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
			recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
		</Text>
	</ScrollArea>
</div>`
	const badExampleTwo = `<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-slate-100">
	<ScrollArea className="p-5">
		<Text size="lg">
			Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
			synonymously, typographically they are separate but related concepts.
		</Text>
		<Text size="lg" className="mt-8">
			Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
			recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
		</Text>
	</ScrollArea>
</div>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Scroll Area
			</Heading>
			<Text className="mt-4">Augments native scroll functionality for custom, cross-browser styling.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Scrollbar sits on top of the scrollable content, taking up no space.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Scrolling is native; no underlying position movements via CSS transformations.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Shims pointer behaviors only when interacting with the controls, so keyboard controls are unaffected.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Supports Right to Left direction.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usageExample} filename="GridExample" extension="tsx" className="mt-4" />
			<Text>Here's the {'<ScrollArea />'} component in action.</Text>
			<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-slate-100">
				<ScrollArea>
					<div className="p-5">
						<Text size="lg">
							Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
							synonymously, typographically they are separate but related concepts.
						</Text>
						<Text size="lg" className="mt-8">
							Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
							and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
						</Text>
					</div>
				</ScrollArea>
			</div>

			<Heading as="h2" size="xl" className="mt-8">
				Props
			</Heading>
			<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-gray-300">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Prop
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Type
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Default
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">scrollbars</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'vertical' | 'horizontal' | 'both'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'vertical'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">type</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'auto' | 'always' | 'scroll' | 'hover'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'hover'</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Notes
			</Heading>
			<Text className="mt-4">
				<code>type</code> describes the nature of scrollbar visibility, similar to how the scrollbar preferences in macOS control visibility of native scrollbars:
			</Text>
			<ul className="ml-4 mt-2 list-disc">
				<li>
					<code>auto</code> means that scrollbars are visible when content is overflowing on the corresponding orientation.
				</li>
				<li>
					<code>always</code> means that scrollbars are always visible regardless of whether the content is overflowing.
				</li>
				<li>
					<code>scroll</code> means that scrollbars are visible when the user is scrolling along its corresponding orientation.
				</li>
				<li>
					<code>hover</code> when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.
				</li>
			</ul>
			<Text className="mt-4">
				Note the <code>{'<div className="p-5">'}</code> on the example. It's good practice to set padding <em>inside</em> the scroll area, rather than outside or on the scroll area.
			</Text>
			<Text className="mt-4">See how both the content and the scroll bar don't touch the sides of the containing div:</Text>
			<CodeBlock code={badExampleOne} filename="BadScrollAreaExampleOne" extension="tsx" className="mt-4" />
			<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-slate-100 p-5">
				<ScrollArea>
					<Text size="lg">
						Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
						synonymously, typographically they are separate but related concepts.
					</Text>
					<Text size="lg" className="mt-8">
						Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
						recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
					</Text>
				</ScrollArea>
			</div>
			<Text className="mt-4">And here notice how the scroll bar does extend to the edges, but the content does not:</Text>
			<CodeBlock code={badExampleTwo} filename="BadScrollAreaExampleTwo" extension="tsx" className="mt-4" />
			<div className="h-40 max-w-lg overflow-y-auto rounded-lg bg-slate-100">
				<ScrollArea className="p-5">
					<Text size="lg">
						Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
						synonymously, typographically they are separate but related concepts.
					</Text>
					<Text size="lg" className="mt-8">
						Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable and
						recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.
					</Text>
				</ScrollArea>
			</div>
			<Text className="mt-4">
				So make sure to add padding <em>inside</em> the scroll area.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="scroll-area" extension="tsx" className="mt-4" />
		</>
	)
}
export default HeadingRoute
