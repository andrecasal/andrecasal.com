import { Link } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { H1 } from './components/typography/h1.tsx'
import { H2 } from './components/typography/h2.tsx'

const DesignPrinciples = () => {
	return (
		<div className="max-w-2xl">
			<H1 size="3xl" className="mt-8 lg:mt-0">
				Design Principles
			</H1>
			<Text size="md" className="mt-2">
				I've written a few articles about design principles that I've used to build this library.
			</Text>
			<H2 size="lg" className="mt-4">
				<Link to="/articles/fluid-typography-sizing-with-modular-scales" className="underline">
					Fluid Typography Sizing and Scales
				</Link>
			</H2>
			<H2 size="lg">
				<Link to="/articles/fluid-space-sizing" className="underline">
					Fluid Space Sizing
				</Link>
			</H2>
		</div>
	)
}
export default DesignPrinciples
