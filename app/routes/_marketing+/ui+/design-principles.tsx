import { Link } from '@remix-run/react'
import { Heading } from './components/typography/heading.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'

const DesignPrinciples = () => {
	return (
		<div className="max-w-2xl">
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Design Principles
			</Heading>
			<Text size="md" className="mt-2">
				I've written a few articles about design principles that I've used to build this library.
			</Text>
			<Heading as="h2" size="xl">
				<Link to="/articles/fluid-typography-sizing-with-modular-scales" className="underline">
					Fluid Typography Sizing and Scales
				</Link>
			</Heading>
			<Heading as="h2" size="xl" className="mt-14">
				<Link to="/articles/fluid-space-sizing" className="underline">
					Fluid Space Sizing
				</Link>
			</Heading>
		</div>
	)
}
export default DesignPrinciples
