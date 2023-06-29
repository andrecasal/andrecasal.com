import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => [{ title: 'André Casal' }]

export default function Index() {
	return <main className="relative sm:flex sm:items-center sm:justify-center">Homepage</main>
}
