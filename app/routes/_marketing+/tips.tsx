import { Newsletter } from '~/components/newsletter.tsx'
import { CodeBlock, type Language } from '~/components/ui/code-block.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from './ui+/components/typography/heading.tsx'

const Tips = () => {
	const tips: { title: string; description: string; filename: string; extension: Language; code: string }[] = [
		{
			title: 'Filter out repeated values',
			description: 'Use this code snippet to remove repeated values from an array.',
			filename: 'unique',
			extension: 'ts',
			code: `const array = [1, 2, 3, 3, 3, 3, 4, 4, 5, 6, 7]
const uniqueArray = [...new Set(array)]
console.log(unique) // [1, 2, 3, 4, 5, 6, 7]`,
		},
		{
			title: 'Clean falsy values out of arrays',
			description: 'Use the .filter() function to remove falsy values from an array.',
			filename: 'filter',
			extension: 'ts',
			code: `const array = ['andre', false, 0, 'loves', null, undefined, 'you']
const cleanArray = array.filter(v => v)
console.log(cleanArray) // ['andre', 'loves', 'you']`,
		},
		{
			title: 'Flatten an array of arrays',
			description: 'Use the .flat() function to flatten a deeply nested array of arrays.',
			filename: 'flat',
			extension: 'ts',
			code: `const array = [1, [2, 3, [4, 5, [6, 7], 8], 9], 10]
const flattenedArray = array.flat(Infinity)
console.log(flattenedArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
		},
		{
			title: 'Sort an array alphabetically',
			description: 'Use the .sort() and .localeCompare() functions to sort alphabetically.',
			filename: 'sort',
			extension: 'ts',
			code: `const array = ['study', 'I', 'must']
const sortedArray = array.sort((a, b) => a.localeCompare(b))
console.log(sortedArray) // ['I', 'must', 'study']`,
		},
	]

	return (
		<Container>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-2xl lg:text-center">
					<Heading as="h2" size="md" className="text-brand">
						Golden nuggets of knowledge
					</Heading>
					<Text size="3xl" weight="bold" className="mt-2">
						Hot tips to upgrade your skills
					</Text>
					<Text size="lg" className="mt-6 text-muted-600">
						Explore the art of writing elegant and maintainable code that sparks joy for developers and users alike. Master best practices, code refactoring, and design patterns
						to create software that stands the test of time.
					</Text>
				</div>
			</div>
			{tips.map(({ title, description, filename, extension, code }, i) => (
				<div key={i} className="py-24 sm:py-32">
					<Text size="3xl" weight="bold" className="mt-2">
						{title}
					</Text>
					<Text size="lg" className="mt-6 text-muted-600">
						{description}
					</Text>
					<CodeBlock filename={filename} extension={extension} code={code} className="mt-10" />
				</div>
			))}
			<Newsletter
				className="relative isolate mt-32 sm:mt-56"
				title="Get exclusive coding tips that I only share with email subscribers"
				description="Golden nuggets of code knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks."
				buttonText="I want my tips"
			/>
		</Container>
	)
}

export default Tips
