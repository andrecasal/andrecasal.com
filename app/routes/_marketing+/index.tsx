import type { V2_MetaFunction } from '@remix-run/node'
import HeroAndre from './components/hero-andre.tsx'
import Brands from './components/brands.tsx'
import FromTheBlog from './components/from-the-blog.tsx'
import Newsletter from './components/newsletter.tsx'
import MasteryForVSCode from './components/mastery-for-vs-code.tsx'

export const meta: V2_MetaFunction = () => [{ title: 'André Casal' }]

export default function Index() {
	return (
		<>
			<HeroAndre />
			<Brands />
			<FromTheBlog />
			<Newsletter />
			<MasteryForVSCode />
		</>
	)
}
