import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/components/ui/container.tsx'

const Shorts = () => {
	return (
		<Container>
			<p>Shorts</p>
			<Newsletter
				className="relative isolate mt-32 sm:mt-56"
				title="Get exclusive shorts that I only share with email subscribers"
				description="Golden nuggets of code knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks."
			/>
		</Container>
	)
}

export default Shorts
