import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from '../components/typography/heading.tsx'
import { Link } from '@remix-run/react'

const Overview = () => {
	return (
		<Container>
			<Heading as="h1" size="3xl">
				Theme Overview
			</Heading>
			<Text size="md" className="mt-2">
				Theming in andrecasal/ui is completely controled using CSS Variables in the tailwind.css file. These variables are used as input for custom utility-based TailwindCSS classes.
				Utility classes are used because they scale easily while keeping a small CSS footprint.
			</Text>
			<Text size="md" className="mt-2">
				Here's what you can control:
			</Text>
			<ul className="mt-8 list-disc pl-5">
				<li>Spacing scale</li>
				<li>Border roundness scale</li>
				<li>
					Typography
					<ul className="list-disc pl-5">
						<li>Font families</li>
						<li>Font size scale</li>
						<li>Font weights</li>
						<li>Line heights</li>
						<li>Trackings</li>
					</ul>
				</li>
				<li>
					Colors
					<ul className="list-disc pl-5">
						<li>Background colors</li>
						<li>Foreground colors</li>
						<li>Brand colors</li>
						<li>Muted colors (shades of grey)</li>
						<li>Success, Info, Warning, and Danger colors</li>
					</ul>
				</li>
				<li>Shadows</li>
				<li>Animations</li>
			</ul>
			<Text size="md" className="mt-2">
				Eventually, I plan to build a drop-in{' '}
				<Link to="/ui/architecture" className="underline">
					Theme Panel component
				</Link>{' '}
				that will allow you to quickly preview changes to the theme.
			</Text>
		</Container>
	)
}
export default Overview
