import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { P } from './ui+/components/typography/p.tsx'
import { type LinksFunction } from '@remix-run/node'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/transparency' }]
}

const Transparency = () => {
	return (
		<Container>
			<P>Transparency</P>
		</Container>
	)
}

export default Transparency
