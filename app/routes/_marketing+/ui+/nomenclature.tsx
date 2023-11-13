import { H1 } from './components/typography/h1.tsx'
import { H2 } from './components/typography/h2.tsx'
import { P } from './components/typography/p.tsx'

const Nomenclature = () => {
	return (
		<>
			<H1 size="3xl" className="mt-8 lg:mt-0">
				Nomenclature
			</H1>

			<H2 size="xl" className="mt-14">
				What is nomenclature?
			</H2>
			<P size="md" className="mt-2">
				Nomenclature is the science of choosing names for things. Let's unpack that.
			</P>
			<P size="md" className="mt-2">
				Being a science means we gain knowledge by coming up with and testing hypotheses. Of choosing names means that the hypotheses are of the criteria that distinguishes one name
				from another.
			</P>

			<H2 size="xl" className="mt-14">
				Why bother with nomenclature?
			</H2>
			<P size="md" className="mt-2">
				Same benefits as taxonomy, but also because the lack of a common language for UI libraries makes things confusing for everyone. Some components call a modal a "dialog",
				others call it an "overlay". Some call a drawer a "sidebar", others call it a "panel". Some call a badge a "pill", others call it a "tag". And so on. Having clear names that
				immediately and intuitively convey what a component is and does is a huge win for everyone.
			</P>
			<P size="md" className="mt-2">
				TODO: Make a list of components and mark the ones that are named differently in different libraries. Then explore those differences and come up with clear naming criteria.
			</P>
		</>
	)
}
export default Nomenclature
