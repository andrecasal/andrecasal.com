import { Container } from '../../../components/ui/container.tsx'
import { Text } from '~/components/ui/text.tsx'
import MasteryForVSCode from '../components/mastery-for-vs-code.tsx'

const Courses = () => {
	return (
		<>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<Text heading="h1" size="xl">
							Courses for you to upgrade your skills
						</Text>
						<p className="mt-6 text-lg leading-8 text-muted-800">Awesome courses to upgrade your skills.</p>
					</div>
				</div>
			</Container>
			<MasteryForVSCode />
		</>
	)
}

export default Courses
