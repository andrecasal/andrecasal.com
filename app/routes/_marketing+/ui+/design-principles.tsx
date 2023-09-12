import { Heading } from './components/typography/heading.tsx'

const DesignPrinciples = () => {
	return (
		<div className="max-w-2xl">
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Design Principles
			</Heading>
			<ul className="ml-4 mt-4 list-disc">
				<li>Hand-picked scale</li>
				<li>Fluid typography</li>
			</ul>
			<Heading as="h2" size="xl" className="mt-14">
				Hand-picked scale
			</Heading>
			<p className="mt-4">
				One popular method for establishing a typography scale is to use a modular scale, based on a specific ratio. Ratios like 4:5 (a "major third"), 2:3 (a "perfect fifth"), or
				the "golden ratio" of 1:1.618 are commonly used. Typically, you start with a base font size, often 16px (a common default for browsers), and then apply your chosen ratio to
				calculate the subsequent sizes in your scale.
			</p>
			<p className="mt-4">
				While the mathematical elegance of this approach is appealing, it has a deal-breaker limitation: limited size options. You could try different ratios and equations, but at
				that point you’re just trying to pick a scale that happens to match the sizes you already know you want.
			</p>
			<p className="mt-4">For interface design, an alternative and more practical approach is to hand-pick the font sizes. This is the approach I took for this library.</p>

			<Heading as="h2" size="xl" className="mt-14">
				Fluid typography
			</Heading>
			<p className="mt-8">
				Traditionally, web designers rely on hand-picked font sizes and a set of breakpoints to control how those sizes vary across screen sizes. Developers are often handed a
				collection of mockups for mobile (320px), large mobile (400px), tablet (768px), small desktop (1024px), and large desktop (1440px). Breakpoint-based type sizing is hacky and
				lacks a well-thought-out scaling strategy. The effort expended by designers and developers in generating so many discrete artifacts is an inefficient use of time and
				resources. The better we want it to work, the more stuff you need to design and develop.
			</p>
			<p className="mt-4">Even though you have complete control to change this, I chose to apply fluid typography, with a simple process:</p>
			<ul className="ml-4 mt-4 list-disc">
				<li>Define a type scale for a small screen</li>
				<li>Define a type scale for a large screen</li>
				<li>Tell the browser to interpolate between the two scales, based on the current viewport width</li>
			</ul>
		</div>
	)
}
export default DesignPrinciples
