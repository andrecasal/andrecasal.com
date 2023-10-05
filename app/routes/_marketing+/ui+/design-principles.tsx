import { Link } from '@remix-run/react'
import { Heading } from './components/typography/heading.tsx'

const DesignPrinciples = () => {
	return (
		<div className="max-w-2xl">
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Design Principles
			</Heading>
			<Heading as="h2" size="xl" className="mt-14">
				<Link to="/articles/fluid-space-sizing" className="underline">
					Fluid Space Sizing
				</Link>
			</Heading>
			<Heading as="h2" size="xl">
				<Link to="/articles/fluid-typography-sizing-with-modular-scales" className="underline">
					Fluid Typography Sizing and Scales
				</Link>
			</Heading>
		</div>
	)
}
export default DesignPrinciples
