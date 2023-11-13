import { redirect, json, type LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { commitSession, getSession } from '~/utils/session.server.ts'
import analysisParalysis from './images/guy-looking-at-vending-machines.jpg'
import BackgroundSpicy from './components/bg-spicy.tsx'
import { Button } from '~/components/ui/button.tsx'
import BackgroundCover from './components/bg-cover.tsx'
import { H1 } from './ui+/components/typography/h1.tsx'
import { H2 } from './ui+/components/typography/h2.tsx'
import { P } from './ui+/components/typography/p.tsx'
import { Span } from './ui+/components/typography/span.tsx'

export const newsletterNameSessionKey = 'newsletterEmail'

export async function loader({ request }: LoaderArgs) {
	const session = await getSession(request.headers.get('cookie'))
	const name = session.get(newsletterNameSessionKey)
	if (typeof name !== 'string' || !name) {
		return redirect('/')
	}
	session.unset(newsletterNameSessionKey)
	return json({ name }, { headers: { 'Set-Cookie': await commitSession(session) } })
}

const WelcomeAboard = () => {
	const { name } = useLoaderData<typeof loader>()

	return (
		<>
			<Container>
				<div className="mx-auto max-w-3xl text-base leading-7 text-muted-700">
					<P size="md" weight="semibold" className="text-brand">
						Thank you for subscribing
					</P>
					<H1 size="4xl" className="mt-2 text-muted-900">
						Welcome aboard, {name}!
					</H1>
					<P size="xl" className="mt-6">
						Expect some pretty awesome stuff in your inbox soon!
						<br />
						For now, here's your guide to modern full-stack web dev.
					</P>
					<hr className="mt-14" />
				</div>
			</Container>
			<Container>
				<BackgroundCover className="rounded-3xl">
					<div className="mx-auto max-w-3xl text-center text-base leading-7 text-muted-700">
						<H2
							size="4xl"
							align="center"
							className="mt-44 bg-gradient-to-r from-[hsl(25deg,61%,26%)] via-[hsl(33deg,79%,54%)] to-[hsl(41deg,98%,82%)] bg-clip-text text-transparent"
						>
							Guide to modern
						</H2>
						<H2
							size="4xl"
							align="center"
							className="my-14 bg-gradient-to-r from-[hsl(25deg,61%,26%)] via-[hsl(33deg,79%,54%)] to-[hsl(41deg,98%,82%)] bg-clip-text text-transparent"
						>
							full-stack
						</H2>
						<H2
							size="4xl"
							align="center"
							className="mb-44 bg-gradient-to-r from-[hsl(25deg,61%,26%)] via-[hsl(33deg,79%,54%)] to-[hsl(41deg,98%,82%)] bg-clip-text text-transparent"
						>
							web dev
						</H2>
					</div>
				</BackgroundCover>
			</Container>
			<Container>
				<div className="mx-auto max-w-3xl text-base leading-7 text-muted-700">
					<H2 size="3xl" className="mt-14 text-muted-900">
						Here's your break from analysis paralysis
					</H2>
					<img src={analysisParalysis} alt="Analysis paralysis" className="mt-6 rounded-xl" />
					<P size="xl" className="mt-6 leading-8">
						Modern full-stack web dev is both fantastic and exhausting because there are so many great tools available. Solve the{' '}
						<Span weight="semibold">analysis paralysis</Span> by standing on the shoulders of seasoned web developers and skip the big distraction of choosing what tech to use
						and get to the point: <Span weight="semibold">build quality products fast</Span>.
					</P>
					<div className="mt-10 max-w-2xl">
						<P>Here's the list of technologies you should be using:</P>
						<ul className="mt-8 max-w-xl space-y-8 text-muted-600">
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Remix.</strong> Forget next.js, Gatsby, and other web frameworks. Remix provides the best foundation for
									building full-stack web applications. It offers a well-structured and opinionated architecture, enabling developers to create scalable and maintainable
									projects.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">React.</strong> Forget Angular, Vue, Svelte, and other UI frameworks. React is the king of UI frameworks
									and the best way to build user interfaces.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">TypeScript.</strong> Learn to use TypeScript if you haven't already. TypeScript brings strong typing to
									JavaScript, enhancing code quality and developer productivity. By catching type-related errors during development, TypeScript helps create more robust and
									reliable applications.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">ESLint.</strong> ESLint is a powerful tool for identifying potential issues early in the development
									process. This keeps the code code clean, readable, and adheres to best practices, improving code quality effortlessly.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Prettier.</strong> It automatically formats code, ensuring consistent styles across the entire project.
									This saves a lot of time formatting and reduces the chance of formatting-related bugs.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Radix UI.</strong> Radix UI is a collection of accessible and keyboard-friendly components that can be
									easily customized to suit your project's needs. By leveraging Radix UI, you can create inclusive user interfaces while saving development time and effort.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">TailwindCSS.</strong> TailwindCSS is a utility-first CSS framework that enables rapid and flexible
									styling. Combined with andrecasal/ui (coming soon 😎), it offers additional pre-built components and styles (that you control using CSS variables),
									reducing building your interface to putting legos together and greatly increasing development speed.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Light/Dark/System theme switcher.</strong> Providing users with a theme switcher enhances the user
									experience, allowing them to choose their preferred appearance. Implementing it without a flash of incorrect theme ensures a seamless transition between
									themes, creating a polished and professional feel.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Conform.</strong> Conform is a valuable tool for creating forms with progressive enhancement and type
									safety. It enables smoother user interactions and helps prevent data-related bugs through its type-safe approach.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Zod.</strong> Zod is a powerful validation library that ensures data integrity by validating form inputs
									on both the client and server sides. By using Zod, you can maintain consistent data quality throughout your application.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Resend.</strong> Resend offers a generous 3000 emails/month free tier and is very easy to use.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">React Email.</strong> React Email offers a collection of high-quality, unstyled components for creating
									beautiful emails using React and TypeScript. You can also create a page to easily visualize them - they are just React components.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Prisma.</strong> Prisma is a feature-rich ORM (Object-Relational Mapping) tool that simplifies database
									interactions. It provides a type-safe query builder, easing the process of database access and manipulation while preventing common database-related bugs.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Git & GitHub Actions.</strong> Leveraging Git and GitHub Actions streamlines the deployment process,
									making it easier to manage and release updates. Automated workflows ensure consistent deployments, reducing the chance of deployment-related errors.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Fly.io.</strong> Fly.io is a platform that optimizes web app deployments, offering better performance and
									scaling capabilities. By using Fly.io, you can deliver your application with lower latency and improved reliability.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Cachified and better-sqlite3.</strong> Cachified and better-sqlite3 provide caching solutions, enhancing
									application performance by reducing unnecessary database queries. In-memory and in-SQLite caching minimize data retrieval time, resulting in faster
									response times for users.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Playwright.</strong> Forget Cypress. Playwright is the best tool for automating end-to-end testing across
									different browsers. It ensures the functionality and stability of your web application, allowing you to catch and fix issues before they reach users.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">MSW.</strong> MSW (Mock Service Worker) enables local mocking of third-party API requests during
									development and testing. This allows for independent testing of components and ensures smooth development even when external APIs are not available.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Vitest and Testing Library.</strong> Vitest and Testing Library are essential for writing comprehensive
									unit tests. These tools facilitate the creation of reliable test suites, increasing confidence in the codebase's correctness and stability.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Stripe.</strong> Stripe is a popular and reliable payment processing platform, offering a seamless
									payment experience for users. By integrating Stripe, you can easily handle transactions and manage e-commerce functionalities in your application.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Sentry.</strong> Sentry is a robust error monitoring and logging tool that helps you identify and fix
									issues in real-time. It provides valuable insights into application errors, enabling faster debugging and improving overall application stability.
								</Span>
							</li>
							<li className="flex gap-x-3">
								<Span>
									<strong className="font-semibold text-muted-900">Grafana.</strong> Grafana is a powerful data visualization tool that allows you to create comprehensive
									dashboards for monitoring various aspects of your running application. By utilizing Grafana, you can gain valuable insights into the performance and usage
									patterns of your app.
								</Span>
							</li>
						</ul>
						<P className="mt-8">
							By combining these technologies, you can create a modern, performant, and user-friendly web application with a strong emphasis on code quality, security, and
							accessibility in an extremely short amount of time.
						</P>
						<hr className="mt-14" />
						<H2 size="3xl" className="mt-16 text-muted-900">
							From good to great
						</H2>
						<P size="lg" className="mt-6">
							Luckily, Remix supports{' '}
							<a href="https://remix.run/docs/en/main/pages/stacks" target="_blank" rel="noreferrer" className="font-semibold text-brand underline-offset-4 hover:underline">
								Stacks
							</a>{' '}
							and there's a particular stack that colocates most of these technologies, the{' '}
							<a href="https://github.com/epicweb-dev/epic-stack" target="_blank" rel="noreferrer" className="font-semibold text-brand underline-offset-4 hover:underline">
								Epic Stack
							</a>{' '}
							- this is a fantastic starting point! There are, however, a few steps you need to take to make the Epic Stack ready for your project. I've documented{' '}
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
						</P>
						<P size="lg" className="mt-10">
							So here's my gift to you: if you want to become a full-stack web developer, you can use the <Span weight="semibold">Epic Stack</Span> as a starting point for your
							project. It's a great way to get a head start on your project and it's free.
						</P>
						<P size="lg" className="mt-10">
							And soon you'll also be able to use <Span weight="semibold">andrecasal/ui</Span>, my headless UI component library, to hit the ground running building your apps!
						</P>
						<P size="lg" className="mt-10">
							And if you'd like a seasoned full-stack web developer to help you become super productive, feel free to{' '}
							<Link to="/mentorship" className="font-semibold text-brand underline-offset-4 hover:underline">
								hire me as your mentor
							</Link>
							.
						</P>
						<P size="lg" className="mt-10">
							To your success and welcome to the newsletter 🥂
						</P>
					</div>
					<BackgroundSpicy className="mt-14 overflow-hidden rounded-xl">
						<H2 size="4xl" className="mt-44 text-center text-muted-50">
							Let's spice things up!
						</H2>
						<div className="mb-44 mt-14 flex justify-center">
							<Button asChild>
								<Link to="/mentorship">I want to spice things up</Link>
							</Button>
						</div>
					</BackgroundSpicy>
				</div>
			</Container>
		</>
	)
}

export default WelcomeAboard
