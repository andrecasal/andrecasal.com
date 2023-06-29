import type { V2_MetaFunction } from '@remix-run/node'
import { Button } from 'andrecasal-ui'

export const meta: V2_MetaFunction = () => [{ title: 'André Casal' }]

export default function Index() {
	return (
		<main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
			<Button>Awesome button</Button>
		</main>
	)
}
