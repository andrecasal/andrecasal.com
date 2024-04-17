import { type LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { P } from '~/ui_components/typography/p.tsx'

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
