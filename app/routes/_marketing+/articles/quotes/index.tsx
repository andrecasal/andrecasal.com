import { Heading } from '../../ui+/components/typography/heading.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import theDarkSideOfTheGrid from './the-dark-side-of-the-grid.png'

export const title = 'Quotes'
export const description =
	'Everything there is to know about the use of internal and external sources in written communication and how they translate to web developement and semantic markup'

const TheDarkSideOfTheGrid = () => {
	return (
		<>
			<Heading as="h1" size="4xl" className="mt-10">
				{title}
			</Heading>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={theDarkSideOfTheGrid} alt="The Dark Side Of The Grid" className="rounded-2xl object-cover" />
				<Heading as="h2" size="4xl" className="mt-10">
					Introduction
				</Heading>
				<Text size="xl" className="mt-8">
					This article explains everything there is to know about the use of internal and external sources in written communication and how they translate to web developement and
					semantic markup.
				</Text>
				<Text size="xl" className="mt-8">
					We'll distinguish between the “quote” and “quotation”. We'll also explain how to properly use quotation marks and
				</Text>
				<Text size="xl" className="mt-8">
					Let's start with clear definitions.
				</Text>

				<Heading as="h2" size="4xl" className="mt-10">
					Definitions
				</Heading>
				<Text size="xl" className="mt-8">
					This article explains everything there is to know about the use of internal and external sources in written communication and how they translate to web developement and
					semantic markup.
				</Text>
				<Text size="xl" className="mt-8">
					Let's start with clear definitions.
				</Text>
			</div>
		</>
	)
}
export default TheDarkSideOfTheGrid
