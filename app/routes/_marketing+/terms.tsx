import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { P } from './ui+/components/typography/p.tsx'
import { type LinksFunction } from '@remix-run/node'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/terms' }]
}

const Terms = () => {
	return (
		<Container>
			<P>Terms</P>
		</Container>
	)
}

export default Terms
