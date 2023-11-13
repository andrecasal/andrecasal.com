import { Code } from './components/typography/code.tsx'
import { H1 } from './components/typography/h1.tsx'
import { H2 } from './components/typography/h2.tsx'
import { P } from './components/typography/p.tsx'

const DevelopmentPrinciples = () => {
	return (
		<>
			<H1 size="3xl" className="mt-8 lg:mt-0">
				Development Principles
			</H1>
			<H2 size="xl" className="mt-14">
				HTML syntax
			</H2>
			<P size="md" className="mt-2">
				Except the fact that you're using uppercased tag names, using this library should feel just like writing HTML. Children will always go inside the tags and props control other
				behavior: <Code>{'<Button type="submit">Click me</Button>'}</Code> instead of <Code>{'<button type="submit">Click me</button>'}</Code>.
			</P>
			<P size="md" className="mt-2">
				Ideally, all atomic components (components that have a direct HTML counterpart) should be able to go from lowercase to uppercase without any other changes.
			</P>

			<H2 size="xl" className="mt-14">
				The least self-referential as possible
			</H2>
			<P size="md" className="mt-2">
				Some components benefit from the styles and functionality of other, usually lower-level, components. A common use-case is the {'<Button>'} component, which is used in a few
				higher-level components. However, I try to keep this at a minimum so that a change in a component is as much self-contained as possible.
			</P>

			<H2 size="xl" className="mt-14">
				Decoupled design and development
			</H2>
			<P size="md" className="mt-2">
				This library is made with a clear separation of concerns between design and development. When you're building you don't have to focus on design, just use whatever defaults
				you have. When you decide to focus on design (or when the designer comes in), the entire interface design is completely controled by CSS variables in the tailwind.css file.
			</P>

			<H2 size="xl" className="mt-14">
				Excellent defaults
			</H2>
			<P size="md" className="mt-2">
				Even though you have complete control over the components, and the code is yours, I'll do my best so that you rarelly have to change any code. The aim is to make the
				components so good that you'd prefer to give up control and install from an NPM package than to have them explicitly in your codebase. At that point, I'll create an NPM
				package for that, but you'll always have both options.
			</P>
		</>
	)
}
export default DevelopmentPrinciples
