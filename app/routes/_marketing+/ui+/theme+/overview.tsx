import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Link } from '@remix-run/react'
import { H1 } from '../components/typography/h1.tsx'
import { P } from '../components/typography/p.tsx'

const Overview = () => {
	return (
		<Container>
			<H1 size="3xl">Theme Overview</H1>
			<P size="md" className="mt-2">
				Theming in andrecasal/ui is completely controled using CSS Variables in the tailwind.css file. These variables are used as input for custom utility-based TailwindCSS classes.
				Utility classes are used because they scale easily while keeping a small CSS footprint.
			</P>
			<P size="md" className="mt-2">
				Here's what you can control:
			</P>
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
			<P size="md" className="mt-2">
				Eventually, I plan to build a drop-in{' '}
				<Link to="/ui/architecture" className="underline">
					Theme Panel component
				</Link>{' '}
				that will allow you to quickly preview changes to the theme.
			</P>
		</Container>
	)
}
export default Overview
