import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from './components/typography/heading.tsx'

const Taxonomy = () => {
	return (
		<>
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Taxonomy
			</Heading>

			<Heading as="h2" size="xl" className="mt-14">
				What is taxonomy?
			</Heading>
			<Text size="md" className="mt-2">
				Taxonomy is the science of categorization. Let's unpack that.
			</Text>
			<Text size="md" className="mt-2">
				Being a science means we gain knowledge by coming up with and testing hypotheses. Of categorization means that the hypotheses are of the criteria that distinguishes one
				classification from another.
			</Text>

			<Heading as="h2" size="xl" className="mt-14">
				Why bother with taxonomy?
			</Heading>
			<Text size="md" className="mt-2">
				Why have categories that clearly distinguish between components?
			</Text>
			<Text size="md" className="mt-2">
				Here's why:
			</Text>
			<ul className="list-disc pl-5">
				<li>For a clearer mental model.</li>
				<li>To make the UI library as easy to understand as possible.</li>
				<li>To ease the search and choosing of components.</li>
				<li>For a common language between designers and developers.</li>
			</ul>

			<Heading as="h2" size="xl" className="mt-14">
				Practical considerations
			</Heading>
			<Text size="md" className="mt-2">
				We can pepper in some practical considerations like avoiding categories that are too broad or too narrow. Categories that contain all (or too many) items or that contain one
				(or very few) items defeat the purpose of categorizing in the first place: to make it easier to find things.
			</Text>

			<Heading as="h2" size="xl" className="mt-14">
				Current violations to clear taxonomy I'd love help fixing 🙏
			</Heading>

			<Heading as="h3" size="lg" className="mt-2">
				Button
			</Heading>
			<Text size="md" className="mt-2">
				I'm not entirely happy with having the {'<Button />'} component inside "Data Entry", because a button fires an action: submit this form, open this modal, etc. Buttons
				shouldn't be used for navigations though, that's what {'<Link />'} is for.
			</Text>
			<Text size="md" className="mt-2">
				But I'm also not happy with having a category called "Actions" with only one item in it. So I'm going with "Data Entry" for now.
			</Text>

			<Heading as="h3" size="lg" className="mt-14">
				Label and Fieldset
			</Heading>
			<Text size="md" className="mt-2">
				{'<Label />'} and {'<Fieldset />'} aren't "Data Entry" at all 😅. A possible alternative for "Data Entry" could be "Form elements".
			</Text>
		</>
	)
}
export default Taxonomy
