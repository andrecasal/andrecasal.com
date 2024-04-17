import DiamondBackground from './bg-diamonds.tsx'
import { trusted } from '../logos/logos.ts'
import { Container } from '~/ui_components/layout/container.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'

const Brands = () => {
	return (
		<>
			<Container>
				<H2 size="3xl" align="center">
					Brands
				</H2>
				<P size="lg" className="mx-auto mt-6 max-w-xl text-center text-muted-600">
					Some of the companies that I've worked with or featured my work:
				</P>
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
