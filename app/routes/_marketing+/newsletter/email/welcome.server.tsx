import {
	//Row, // <table>, <tbody>, and <tr> tags
	Section, // <table>, <tbody>, <tr>, and <td> tags
	//Column, // <td> tag
	Heading, // <h1> - <h6> tags
	//Hr, // <hr> tag
	//Img, // <img> tag
	// Note: All email clients can display .png, .gif, and .jpg images. Unfortunately, .svg images are not well supported, regardless of how they’re referenced, so avoid using these. See Can I Email for more information.
	Link, // <a> tag
	//Button, // A link that is styled to look like a button.
	// Semantics: Quite often in the email world we talk about buttons, when actually we mean links. Behind the scenes this is a <a> tag, that is styled like a <button> tag.
	Text, // <p> tag
} from '@react-email/components'
import { EmailRoot } from '~/components/email-root.tsx'

export const WelcomeToNewsletterEmail = ({ name }: { name: string }) => {
	return (
		<EmailRoot subjectLine="Confirm your subscription" previewText="This is a test">
			<Section className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<Text className="text-md font-semibold leading-7 text-[#ca8b04]">Thanks for subscribing</Text>
				<Heading as="h1" className="mt-2 text-5xl font-bold tracking-tight text-gray-900">
					Welcome aboard, {name}!
				</Heading>
				<Text className="mt-6 text-xl leading-8">
					Expect some pretty awesome stuff in your inbox soon!
					<br />
					For now, here's how to get you started in full-stack web dev.
				</Text>
				<Heading as="h2" className="mt-14 text-3xl font-bold tracking-tight text-gray-900">
					Here's your break from analysis paralysis
				</Heading>
				<img src="http://localhost:3000/img/guy-looking-at-vending-machines.jpg" alt="Analysis paralysis" />
				<Text className="mt-6 text-xl leading-8">
					Modern full-stack web dev is both fantastic and exhausting because there are so many great tools available. Solve the analysis paralysis by standing on the shoulders of
					seasoned web developers and skip the big distraction of choosing what tech to use and get to the point: build quality products fast.
				</Text>
				<Section className="mt-10 max-w-2xl">
					<Text className="text-base leading-7">
						As a full-stack web developer you need to know a lot of different things. This guide will help you learn how to become a full-stack web developer by giving you a road
						map to follow and the resources to use. Here's the list of technologies you should be using:
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Remix.</span> Forget next.js, Gatsby, and other web frameworks. Remix provides the best foundation for building
						full-stack web applications. It offers a well-structured and opinionated architecture, enabling developers to create scalable and maintainable projects.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">TypeScript.</span> Learn to use TypeScript if you haven't already. TypeScript brings strong typing to JavaScript,
						enhancing code quality and developer productivity. By catching type-related errors during development, TypeScript helps create more robust and reliable applications.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">ESLint.</span> ESLint is a powerful tool for identifying potential issues early in the development process. This keeps
						the code code clean, readable, and adheres to best practices, improving code quality effortlessly.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Prettier.</span> It automatically formats code, ensuring consistent styles across the entire project. This saves a lot
						of time formatting and reduces the chance of formatting-related bugs.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Radix UI.</span> Radix UI is a collection of accessible and keyboard-friendly components that can be easily customized
						to suit your project's needs. By leveraging Radix UI, you can create inclusive user interfaces while saving development time and effort.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">TailwindCSS.</span> TailwindCSS is a utility-first CSS framework that enables rapid and flexible styling. Combined with
						andrecasal/ui (coming soon 😎), it offers additional pre-built components and styles (that you control using CSS variables), reducing building your interface to
						putting legos together and greatly increasing development speed.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Light/Dark/System theme switcher.</span> Providing users with a theme switcher enhances the user experience, allowing
						them to choose their preferred appearance. Implementing it without a flash of incorrect theme ensures a seamless transition between themes, creating a polished and
						professional feel.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Conform.</span> Conform is a valuable tool for creating forms with progressive enhancement and type safety. It enables
						smoother user interactions and helps prevent data-related bugs through its type-safe approach.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Zod.</span> Zod is a powerful validation library that ensures data integrity by validating form inputs on both the
						client and server sides. By using Zod, you can maintain consistent data quality throughout your application.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Resend.</span> Resend offers a generous 3000 emails/month free tier and is very easy to use.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">React Email.</span> React Email offers a collection of high-quality, unstyled components for creating beautiful emails
						using React and TypeScript. You can also create a page to easily visualize them - they are just React components.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Prisma.</span> Prisma is a feature-rich ORM (Object-Relational Mapping) tool that simplifies database interactions. It
						provides a type-safe query builder, easing the process of database access and manipulation while preventing common database-related bugs.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Git & GitHub Actions.</span> Leveraging Git and GitHub Actions streamlines the deployment process, making it easier to
						manage and release updates. Automated workflows ensure consistent deployments, reducing the chance of deployment-related errors.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Fly.io.</span> Fly.io is a platform that optimizes web app deployments, offering better performance and scaling
						capabilities. By using Fly.io, you can deliver your application with lower latency and improved reliability.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Cachified and better-sqlite3.</span> Cachified and better-sqlite3 provide caching solutions, enhancing application
						performance by reducing unnecessary database queries. In-memory and in-SQLite caching minimize data retrieval time, resulting in faster response times for users.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Playwright.</span> Forget Cypress. Playwright is the best tool for automating end-to-end testing across different
						browsers. It ensures the functionality and stability of your web application, allowing you to catch and fix issues before they reach users.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">MSW.</span> MSW (Mock Service Worker) enables local mocking of third-party API requests during development and testing.
						This allows for independent testing of components and ensures smooth development even when external APIs are not available.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Vitest and Testing Library.</span> Vitest and Testing Library are essential for writing comprehensive unit tests. These
						tools facilitate the creation of reliable test suites, increasing confidence in the codebase's correctness and stability.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Stripe.</span> Stripe is a popular and reliable payment processing platform, offering a seamless payment experience for
						users. By integrating Stripe, you can easily handle transactions and manage e-commerce functionalities in your application.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Sentry.</span> Sentry is a robust error monitoring and logging tool that helps you identify and fix issues in real-time.
						It provides valuable insights into application errors, enabling faster debugging and improving overall application stability.
					</Text>
					<Text className="mt-8 text-base leading-7">
						<span className="font-semibold text-gray-900">Grafana.</span> Grafana is a powerful data visualization tool that allows you to create comprehensive dashboards for
						monitoring various aspects of your running application. By utilizing Grafana, you can gain valuable insights into the performance and usage patterns of your app.
					</Text>
					<Text className="mt-8 text-base leading-7">
						By combining these technologies, you can create a modern, performant, and user-friendly web application with a strong emphasis on code quality, security, and
						accessibility in an extremely short amount of time.
					</Text>
					<Heading as="h2" className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
						From good to great
					</Heading>
					<Text className="mt-8 text-base leading-7">
						Luckily, Remix supports{' '}
						<Link href="https://remix.run/docs/en/main/pages/stacks" target="_blank" className="font-semibold text-[#ca8b04]">
							Stacks
						</Link>{' '}
						and there's a particular stack that colocates all of these technologies, the{' '}
						<Link href="https://github.com/epicweb-dev/epic-stack" target="_blank" className="font-semibold text-[#ca8b04]">
							Epic Stack
						</Link>
						. There are, however, a few steps you need to take to make the Epic Stack ready for your project. I've documented{' '}
						<Link
							href="https://github.com/epicweb-dev/epic-stack/discussions/170#discussioncomment-6185290"
							target="_blank"
							className="font-semibold text-[#ca8b04] underline-offset-4"
						>
							those steps here
						</Link>
						. Some of those steps might no longer be valid, but you've got the general gist of it: remove styles you're not using, delete routes you don't need, and you'll be
						ready to go in less than a day's work.
					</Text>
					<Text className="mt-8 text-base leading-7">
						So here's my gift to you: if you want to become a full-stack web developer, you can use the Epic Stack as a starting point for your project. It's a great way to get a
						head start on your project and it's free.
					</Text>
					<Text className="mt-8 text-base leading-7">
						And soon you'll also be able to use andrecasal/ui, my headless UI component library, to hit the ground running building your apps!
					</Text>
					<Text className="mt-8 text-base leading-7">
						If you'd like a seasoned full-stack web developer to help you become a 10x developer and achieve your goals as fast as they could be achieved, feel free to{' '}
						<Link href="https://github.com/epicweb-dev/epic-stack/discussions/170#discussioncomment-6185290" target="_blank" className="font-semibold text-[#ca8b04]">
							hire me as your mentor
						</Link>
						.
					</Text>
					<Text className="mt-8 text-base leading-7">To your success and welcome again to the newsletter 🥂</Text>
				</Section>
			</Section>
		</EmailRoot>
	)
}
