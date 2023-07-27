import { redirect, json, type LoaderArgs } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Container } from '~/components/ui/container.tsx'
import { Text } from '~/components/ui/text.tsx'
import { commitSession, getSession } from '~/utils/session.server.ts'

export const newsletterEmailSessionKey = 'newsletterEmail'

export async function loader({ request }: LoaderArgs) {
	const session = await getSession(request.headers.get('cookie'))
	const newsletterEmail = session.get(newsletterEmailSessionKey)
	console.log(newsletterEmail)
	if (typeof newsletterEmail !== 'string' || !newsletterEmail) {
		return redirect('/')
	}
	session.unset(newsletterEmailSessionKey)
	return json(null, { headers: { 'Set-Cookie': await commitSession(session) } })
}

const WelcomeAboard = () => {
	return (
		<Container>
			<div className="mx-auto max-w-3xl text-base leading-7 text-muted-700">
				<Text size="md" className="font-semibold text-brand">
					You're subscribed
				</Text>
				<Text heading="h2" size="3xl" className="mt-2 text-muted-900 sm:text-4xl">
					Welcome aboard, champion! Here's your gift!
				</Text>
				<p className="mt-6 text-xl leading-8">
					So you want to become a full-stack web developer. You've got a lot of things to learn and a lot of work to do, but you're not alone. I'm here to help you succeed. Here's
					your break from analysis paralysis.
				</p>
				<div className="mt-10 max-w-2xl">
					<p>
						As a full-stack web developer you need to know a lot of different things. This guide will help you learn how to become a full-stack web developer by giving you a road
						map to follow and the resources to use. Here's the list of technologies you should be using:
					</p>
					<ul className="mt-8 max-w-xl space-y-8 text-muted-600">
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Remix.</strong> Forget next.js, Gatsby, and other web frameworks. Remix provides the best foundation for
								building full-stack web applications. It offers a well-structured and opinionated architecture, enabling developers to create scalable and maintainable
								projects.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">React.</strong> Forget Angular, Vue, Svelte, and other UI frameworks. React is the king of UI frameworks and
								the best way to build user interfaces.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">TypeScript.</strong> Learn to use TypeScript if you haven't already. TypeScript brings strong typing to
								JavaScript, enhancing code quality and developer productivity. By catching type-related errors during development, TypeScript helps create more robust and
								reliable applications.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">ESLint.</strong> ESLint is a powerful tool for identifying potential issues early in the development process.
								This keeps the code code clean, readable, and adheres to best practices, improving code quality effortlessly.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Prettier.</strong> It automatically formats code, ensuring consistent styles across the entire project. This
								saves a lot of time formatting and reduces the chance of formatting-related bugs.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Radix UI.</strong> Radix UI is a collection of accessible and keyboard-friendly components that can be easily
								customized to suit your project's needs. By leveraging Radix UI, you can create inclusive user interfaces while saving development time and effort.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">TailwindCSS.</strong> TailwindCSS is a utility-first CSS framework that enables rapid and flexible styling.
								Combined with andrecasal/ui (coming soon 😎), it offers additional pre-built components and styles (that you control using CSS variables), reducing building
								your interface to putting legos together and greatly increasing development speed.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Light/Dark/System theme switcher.</strong> Providing users with a theme switcher enhances the user
								experience, allowing them to choose their preferred appearance. Implementing it without a flash of incorrect theme ensures a seamless transition between
								themes, creating a polished and professional feel.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Conform.</strong> Conform is a valuable tool for creating forms with progressive enhancement and type safety.
								It enables smoother user interactions and helps prevent data-related bugs through its type-safe approach.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Zod.</strong> Zod is a powerful validation library that ensures data integrity by validating form inputs on
								both the client and server sides. By using Zod, you can maintain consistent data quality throughout your application.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Resend.</strong> Resend offers a generous 3000 emails/month free tier and is very easy to use.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">React Email.</strong> React Email offers a collection of high-quality, unstyled components for creating
								beautiful emails using React and TypeScript. You can also create a page to easily visualize them - they are just React components.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Prisma.</strong> Prisma is a feature-rich ORM (Object-Relational Mapping) tool that simplifies database
								interactions. It provides a type-safe query builder, easing the process of database access and manipulation while preventing common database-related bugs.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Git & GitHub Actions.</strong> Leveraging Git and GitHub Actions streamlines the deployment process, making
								it easier to manage and release updates. Automated workflows ensure consistent deployments, reducing the chance of deployment-related errors.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Fly.io.</strong> Fly.io is a platform that optimizes web app deployments, offering better performance and
								scaling capabilities. By using Fly.io, you can deliver your application with lower latency and improved reliability.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Cachified and better-sqlite3.</strong> Cachified and better-sqlite3 provide caching solutions, enhancing
								application performance by reducing unnecessary database queries. In-memory and in-SQLite caching minimize data retrieval time, resulting in faster response
								times for users.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Playwright.</strong> Forget Cypress. Playwright is the best tool for automating end-to-end testing across
								different browsers. It ensures the functionality and stability of your web application, allowing you to catch and fix issues before they reach users.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">MSW.</strong> MSW (Mock Service Worker) enables local mocking of third-party API requests during development
								and testing. This allows for independent testing of components and ensures smooth development even when external APIs are not available.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Vitest and Testing Library.</strong> Vitest and Testing Library are essential for writing comprehensive unit
								tests. These tools facilitate the creation of reliable test suites, increasing confidence in the codebase's correctness and stability.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Stripe.</strong> Stripe is a popular and reliable payment processing platform, offering a seamless payment
								experience for users. By integrating Stripe, you can easily handle transactions and manage e-commerce functionalities in your application.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Sentry.</strong> Sentry is a robust error monitoring and logging tool that helps you identify and fix issues
								in real-time. It provides valuable insights into application errors, enabling faster debugging and improving overall application stability.
							</span>
						</li>
						<li className="flex gap-x-3">
							<span>
								<strong className="font-semibold text-muted-900">Grafana.</strong> Grafana is a powerful data visualization tool that allows you to create comprehensive
								dashboards for monitoring various aspects of your running application. By utilizing Grafana, you can gain valuable insights into the performance and usage
								patterns of your app.
							</span>
						</li>
					</ul>
					<p className="mt-8">
						By combining these technologies, you can create a modern, performant, and user-friendly web application with a strong emphasis on code quality, security, and
						accessibility in an extremely short amount of time.
					</p>
					<h2 className="mt-16 text-2xl font-bold tracking-tight text-muted-900">From good to great</h2>
					<p className="mt-6">
						Luckily, Remix supports{' '}
						<a href="https://remix.run/docs/en/main/pages/stacks" target="_blank" rel="noreferrer" className="font-semibold text-brand underline-offset-4 hover:underline">
							Stacks
						</a>{' '}
						and there's a particular stack that colocates all of these technologies, the{' '}
						<a href="https://github.com/epicweb-dev/epic-stack" target="_blank" rel="noreferrer" className="font-semibold text-brand underline-offset-4 hover:underline">
							Epic Stack
						</a>
						. There are, however, a few steps you need to take to make the Epic Stack ready for your project. I've documented{' '}
						<a
							href="https://github.com/epicweb-dev/epic-stack/discussions/170#discussioncomment-6185290"
							target="_blank"
							rel="noreferrer"
							className="font-semibold text-brand underline-offset-4 hover:underline"
						>
							those steps here
						</a>
						. Some of those steps might no longer be valid, but you've got the general gist of it: remove styles you're not using, delete routes you don't need, and you'll be
						ready to go in less than a day's work.
					</p>
					<p className="mt-10">
						So here's my gift to you: if you want to become a full-stack web developer, you can use the Epic Stack as a starting point for your project. It's a great way to get a
						head start on your project and it's free.
					</p>
					<p className="mt-10">
						If you'd like a seasoned full-stack web developer to help you become a 10x developer and achieve your goals as fast as they could be achieved, feel free to{' '}
						<Link to="/mentorship" className="font-semibold text-brand underline-offset-4 hover:underline">
							hire me as your mentor
						</Link>
						.
					</p>
					<p className="mt-10">To your success 🥂</p>
				</div>
			</div>
		</Container>
	)
}

export default WelcomeAboard
