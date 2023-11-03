import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from './components/typography/heading.tsx'

const Nomenclature = () => {
	return (
		<>
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Nomenclature
			</Heading>

			<Heading as="h2" size="xl" className="mt-14">
				What is nomenclature?
			</Heading>
			<Text size="md" className="mt-2">
				Nomenclature is the science of choosing names for things. Let's unpack that.
			</Text>
			<Text size="md" className="mt-2">
				Being a science means we gain knowledge by coming up with and testing hypotheses. Of choosing names means that the hypotheses are of the criteria that distinguishes one name
				from another.
			</Text>

			<Heading as="h2" size="xl" className="mt-14">
				Why bother with nomenclature?
			</Heading>
			<Text size="md" className="mt-2">
				Same benefits as taxonomy, but also because the lack of a common language for UI libraries makes things confusing for everyone. Some components call a modal a "dialog",
				others call it an "overlay". Some call a drawer a "sidebar", others call it a "panel". Some call a badge a "pill", others call it a "tag". And so on. Having clear names that
				immediately and intuitively convey what a component is and does is a huge win for everyone.
			</Text>
			<Text size="md" className="mt-2">
				TODO: Make a list of components and mark the ones that are named differently in different libraries. Then explore those differences and come up with clear naming criteria.
			</Text>
		</>
	)
}
export default Nomenclature
