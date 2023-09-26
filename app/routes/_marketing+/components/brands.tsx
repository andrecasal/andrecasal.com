import DiamondBackground from './bg-diamonds.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { trusted } from '../logos/logos.ts'
import { Heading } from '../ui+/components/typography/heading.tsx'

const Brands = () => {
	return (
		<>
			<Container>
				<Heading as="h2" size="3xl" align="center">
					Brands
				</Heading>
				<Text size="lg" className="mx-auto mt-6 max-w-xl text-center text-muted-600">
					Some of the companies that I've worked with or featured my work:
				</Text>
			</Container>
			<DiamondBackground>
				<Container>
					<div className="grid grid-cols-2 grid-rows-5 justify-center gap-8 p-16 sm:grid-rows-3 md:grid-cols-6 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
						{trusted.map(img => (
							<a
								key={img.href}
								href={img.href}
								className="col-span-2 mx-auto min-w-[10rem] max-w-[13rem] rounded-lg contrast-0 hover:contrast-100 dark:hover:contrast-0 sm:col-span-1 sm:last:col-span-2 md:col-span-2 md:last:col-span-3 lg:col-span-1 lg:last:col-span-1 md:[&:nth-child(4)]:col-span-3 lg:[&:nth-child(4)]:col-span-1"
							>
								<img src={img.src} alt={img.alt} />
							</a>
						))}
					</div>
				</Container>
			</DiamondBackground>
		</>
	)
}

export default Brands
