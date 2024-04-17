import { type LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/privacy' }]
}

const Privacy = () => {
	return (
		<Container>
			<P>Privacy</P>
		</Container>
	)
}

export default Privacy
