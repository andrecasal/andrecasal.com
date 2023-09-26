import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'

const Shorts = () => {
	return (
		<Container>
			<Text>Shorts</Text>
			<Newsletter
				className="relative isolate mt-32 sm:mt-56"
				title="Get exclusive shorts that I only share with email subscribers"
				description="Golden nuggets of code knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks."
				buttonText="I want my shorts"
			/>
		</Container>
	)
}

export default Shorts
