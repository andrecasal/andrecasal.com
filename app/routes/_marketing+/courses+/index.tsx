import { CoursePresentation } from '~/components/CoursePresentation.tsx'
import { Newsletter } from '~/components/newsletter.tsx'
import { type LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/courses' }]
}

const Courses = () => {
	const courses = [
		{
			title: 'Mastery for VS Code',
			description:
				"This course is designed to help you master VS Code. You'll learn how to use VS Code to its fullest potential, and you'll be able to do so in a way that's fun and engaging.",
			img: '/img/andre.jpg',
			benefits: ['Stellar DX', 'Make VS Code look awesome', 'Insights into your code', 'Automate common actions', 'Stay in the editor', 'Learn best practices'],
			link: {
				text: 'Become a master of VS Code',
				href: '/courses/mastery-for-vs-code',
			},
		},
	]

	return (
		<>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<H1 size="4xl">Courses for you to upgrade your skills</H1>
						<P size="lg" className="mt-6 text-muted-800">
							Awesome courses to upgrade your skills.
						</P>
					</div>
				</div>
			</Container>
			<Container className="mb-32">
				{courses.map((course, i) => (
					<CoursePresentation key={i} course={course} />
				))}
			</Container>
			<Container>
				<Newsletter
					title="Want to be notified of when I launch new courses?"
					description="Subscribe to the newsletter and you'll be the first to know!"
					buttonText="I want to be the first to know"
				/>
			</Container>
		</>
	)
}

export default Courses
