import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { P } from './ui+/components/typography/p.tsx'
import { type LinksFunction } from '@remix-run/node'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/uses' }]
}

const Uses = () => {
	return (
		<Container>
			<P>Uses</P>
		</Container>
	)
}

export default Uses
