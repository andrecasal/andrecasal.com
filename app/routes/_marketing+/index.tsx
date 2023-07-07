import type { /* LinksFunction, */ V2_MetaFunction } from '@remix-run/node'
import HeroAndre from './components/hero-andre.tsx'
import Brands from './components/brands.tsx'
import FromTheBlog from './components/from-the-blog.tsx'
import Newsletter from './components/newsletter.tsx'
import { Container } from '~/components/ui/container.tsx'
import { CoursePresentation } from '~/components/CoursePresentation.tsx'
/* import andre from './images/andre.jpg' */

/* export const links: LinksFunction = () => {
	return [{ rel: 'preload', href: andre, as: 'image' }].filter(Boolean)
} */

export const meta: V2_MetaFunction = () => [{ title: 'André Casal' }]

export default function Index() {
	const featuredCourse = {
		title: 'Mastery for VS Code',
		description:
			"This course is designed to help you master VS Code. You'll learn how to use VS Code to its fullest potential, and you'll be able to do so in a way that's fun and engaging.",
		img: '/img/andre.jpg',
		benefits: ['Stellar DX', 'Make VS Code look awesome', 'Insights into your code', 'Automate common actions', 'Stay in the editor', 'Learn best practices'],
		link: {
			text: 'Become a master of VS Code',
			href: '/courses/mastery-for-vs-code',
		},
	}

	return (
		<>
			<HeroAndre />
			<Brands />
			<FromTheBlog />
			<Newsletter />
			<Container className="mt-32 sm:mt-56">
				<CoursePresentation course={featuredCourse} />
			</Container>
		</>
	)
}
