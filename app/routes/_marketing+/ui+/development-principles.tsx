import { Heading } from './components/typography/heading.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'

const DevelopmentPrinciples = () => {
	return (
		<>
			<Heading as="h1" size="3xl" className="mt-8 lg:mt-0">
				Development Principles
			</Heading>
			<Heading as="h2" size="xl" className="mt-14">
				Props over composition where possible
			</Heading>
			<Text size="md" className="mt-2">
				This provides for a simpler API.
			</Text>
			<Heading as="h2" size="xl" className="mt-14">
				The least self-referential as possible
			</Heading>
			<Text size="md" className="mt-2">
				Some components benefit from the styles and functionality of other, usually lower-level, components. A common use-case is the {'<Button>'} component, which is used in a few
				higher-level components. However, I try to keep this at a minimum so that a change in a component is as much self-contained as possible.
			</Text>
			<Heading as="h2" size="xl" className="mt-14">
				Decoupled design and development
			</Heading>
			<Text size="md" className="mt-2">
				This library is made with a clear separation of concerns between design and development. When you're building you don't have to focus on design, just use whatever defaults
				you have. When you decide to focus on design (or when the designer comes in), the entire interface design is completely controled by CSS variables in the tailwind.css file.
			</Text>
			<Heading as="h2" size="xl" className="mt-14">
				Excellent defaults
			</Heading>
			<Text size="md" className="mt-2">
				Even though you have complete control over the components, and the code is yours, I'll do my best so that you rarelly have to change any code. The aim is to make the
				components so good that you'd prefer to give up control and install from an NPM package than to have them explicitly in your codebase. At that point, I'll create an NPM
				package for that, but you'll always have both options.
			</Text>
		</>
	)
}
export default DevelopmentPrinciples
