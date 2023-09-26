import { Outlet } from '@remix-run/react'
import { Newsletter } from '~/components/newsletter.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'

const ArticlesLayoutRoute = () => {
	return (
		<>
			<Container>
				<Outlet />
			</Container>
			<Container>
				<Newsletter
					className="relative isolate mt-32 sm:mt-56"
					title="If you liked this article, you'll love my newsletter."
					description="Golden nuggets of in-depth code knowledge. Delivered to your inbox every 2 weeks."
					buttonText="I want to learn more"
				/>
			</Container>
		</>
	)
}
export default ArticlesLayoutRoute
