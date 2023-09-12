import { Text } from '~/components/ui/text.tsx'
import { Heading } from './components/typography/heading.tsx'

const DevelopmentPrinciples = () => {
	return (
		<>
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Development Principles
			</Heading>
			<ul className="ml-4 mt-4 list-disc">
				<li>Props over Composition where possible</li>
				<li>The least self-referential as possible</li>
				<li>Design controlled using CSS Variables</li>
				<li>Complete control, but excellent defaults</li>
			</ul>
			<Heading as="h2" size="xl" className="mt-14">
				Props over Composition where possible
			</Heading>
			<Text size="md" className="mt-2">
				Props over Composition simplifies components.
			</Text>
			<Heading as="h2" size="xl" className="mt-14">
				The least self-referential as possible
			</Heading>
			<Text size="md" className="mt-2">
				Some components benefit from the styles and functionality of other (usually lower-level) components. A common use-case is the {'<Button>'} component, which is used in a few
				higher-level components. However, I try to keep this at a minimum so that a change in a component is as much self-contained as possible.
			</Text>
			<Heading as="h2" size="xl" className="mt-14">
				Design controlled using CSS Variables
			</Heading>
			<Text size="md" className="mt-2">
				This library is made with a clear separation of concerns in mind. When you're building you don't have to focus on design, just use the default CSS file. When the designer
				comes in, open up the CSS file that contains all the CSS Vars and build your custom design.
			</Text>
			<Heading as="h2" size="xl" className="mt-14">
				Complete control, but excellent defaults
			</Heading>
			<Text size="md" className="mt-2">
				Even though you have complete control over the components - the code is yours - you'll rarelly have to change anything. The defaults are excellent and the design is
				completelly controlled by CSS Variables.
			</Text>
		</>
	)
}
export default DevelopmentPrinciples
