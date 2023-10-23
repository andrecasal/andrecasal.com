import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from './components/typography/heading.tsx'

const Taxonomy = () => {
	return (
		<>
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Taxonomy
			</Heading>
			<Heading as="h2" size="xl" className="mt-14">
				Taxonomy
			</Heading>
			<Text size="md" className="mt-2">
				This provides for a simpler API.
			</Text>
		</>
	)
}
export default Taxonomy
