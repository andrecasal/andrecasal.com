import theDarkSideOfTheGrid from './the-dark-side-of-the-grid.png'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'

export const title = 'Quotes'
export const description =
	'Everything there is to know about the use of internal and external sources in written communication and how they translate to web developement and semantic markup'

const TheDarkSideOfTheGrid = () => {
	return (
		<>
			<H1 size="4xl" className="mt-10">
				{title}
			</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={theDarkSideOfTheGrid} alt="The Dark Side Of The Grid" className="rounded-2xl object-cover" />
				<H2 size="4xl" className="mt-10">
					Introduction
				</H2>
				<P size="xl" className="mt-8">
					This article explains everything there is to know about the use of internal and external sources in written communication and how they translate to web developement and
					semantic markup.
				</P>
				<P size="xl" className="mt-8">
					We'll distinguish between the “quote” and “quotation”. We'll also explain how to properly use quotation marks and
				</P>
				<P size="xl" className="mt-8">
					Let's start with clear definitions.
				</P>

				<H2 size="4xl" className="mt-10">
					Definitions
				</H2>
				<P size="xl" className="mt-8">
					This article explains everything there is to know about the use of internal and external sources in written communication and how they translate to web developement and
					semantic markup.
				</P>
				<P size="xl" className="mt-8">
					Let's start with clear definitions.
				</P>
			</div>
		</>
	)
}
export default TheDarkSideOfTheGrid
