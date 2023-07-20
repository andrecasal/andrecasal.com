import { Container } from '~/components/ui/container.tsx'
import { Newsletter as NewsletterComponent } from '~/components/newsletter.tsx'

const Newsletter = () => {
	return (
		<Container className="relative isolate mt-32 sm:mt-56">
			<NewsletterComponent
				title="Get exclusive web dev tips that I only share with email subscribers"
				description="Golden nuggets of knowledge you can read in 5 min. Delivered to your inbox every 2 weeks."
			/>
		</Container>
	)
}

export default Newsletter
