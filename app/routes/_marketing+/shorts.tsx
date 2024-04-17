import { Newsletter } from '~/components/newsletter.tsx'
import { type LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/shorts' }]
}

const Shorts = () => {
	return (
		<Container>
			<P>Shorts</P>
			<Newsletter
				className="relative isolate mt-32 sm:mt-56"
				title="Get exclusive shorts that I only share with email subscribers"
				description="Golden nuggets of code knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks."
				buttonText="I want my shorts"
			/>
		</Container>
	)
}

export default Shorts
