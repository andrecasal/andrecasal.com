import { Container } from '~/components/ui/container.tsx'
import { Text } from '~/components/ui/text.tsx'
import { CoursePresentation } from '~/components/CoursePresentation.tsx'
import Newsletter from '../components/newsletter.tsx'

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
						<Text heading="h1" size="4xl" className="sm:text-size-6xl">
							Courses for you to upgrade your skills
						</Text>
						<Text size="lg" className="mt-6 text-muted-800">
							Awesome courses to upgrade your skills.
						</Text>
					</div>
				</div>
			</Container>
			<Container className="mb-32">
				{courses.map((course, i) => (
					<CoursePresentation key={i} course={course} />
				))}
			</Container>
			<Newsletter />
		</>
	)
}

export default Courses
