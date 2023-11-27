/* import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible.tsx' */
import BackgroundSquareLines from './components/bg-square-lines.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import BackgroundBlur from './components/bg-blur.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Link } from '@remix-run/react'
import zacharyCassette from './images/zachary-cassette.jpg'
import { H1 } from './ui+/components/typography/h1.tsx'
import { H2 } from './ui+/components/typography/h2.tsx'
import { H3 } from './ui+/components/typography/h3.tsx'
import { H4 } from './ui+/components/typography/h4.tsx'
import { P } from './ui+/components/typography/p.tsx'
import { Span } from './ui+/components/typography/span.tsx'

const services = [
	{
		name: 'Idea Validation and Refinement',
		description: "Transform your ideas into viable business concepts through a rigorous validation process. I'll help you refine your vision, ensuring it aligns with market demands and stands out in a crowded landscape.",
		icon: 'trophy',
	},
	{
		name: 'Customer Acquisition Strategies',
		description: "Finding and retaining customers is the lifeblood of any business. I'll guide you in developing effective marketing and customer acquisition strategies to build a loyal customer base from the ground up.",
		icon: 'trophy',
	},
	{
		name: 'Sustainable Growth Planning',
		description: "Scaling a business requires careful planning and execution. Together, we'll develop a roadmap for sustainable growth, incorporating strategies for expansion, resource management, and market diversification.",
		icon: 'trophy',
	},
	{
		name: 'Entrepreneurial Mindset Coaching',
		description: "Success in entrepreneurship goes beyond business strategies; it's also about cultivating the right mindset. I offer coaching to help you develop the resilience, creativity, and strategic thinking essential for long-term success.",
		icon: 'trophy',
	},
]

/* const features = [
	{
		name: 'Beautiful UIs',
		description: 'Learn how to build and maintain design systems controllable with CSS Variables (custom properties), so you can ship beautiful and consistent UIs.',
		icon: 'swatch',
	},
	{
		name: 'Light/Dark Mode',
		description: 'Learn how to implement client hints, and light/dark/system modes in your apps, so you can give your users the option to choose their preferred color scheme.',
		icon: 'circle-half-filled',
	},
	{
		name: 'Accessibility',
		description: 'Learn how to use Radix UI to make your apps fully accessible and keyboard navigatable, so you can reach more users and improve the experience for everyone.',
		icon: 'accessibility',
	},
	{
		name: 'Full-stack apps',
		description: 'Learn how to build full-stack apps with the gold standard of Remix and React & friends.',
		icon: 'trophy',
	},
	{
		name: 'TypeScript',
		description: 'Learn how to use TypeScript to write fully typed code, so you can catch the largest category of bugs as you write the code.',
		icon: 'code',
	},
	{
		name: 'Code formatting',
		description: 'Learn how to automatically format code in a style you enjoy, in multiple languages, so you can read coder faster.',
		icon: 'file-text',
	},
	{
		name: 'Linting',
		description: 'Learn how to use linters to catch bugs, so you can write better code and avoid common mistakes.',
		icon: 'bug',
	},
	{
		name: 'Testing',
		description: 'Learn how, which and when to write automated tests for your apps, so you can test your code locally and in the cloud.',
		icon: 'beaker',
	},
	{
		name: 'Mocking',
		description: 'Learn how to mock external services and APIs, so you can test your code locally and in the cloud without having to rely on external services.',
		icon: 'masks-theater',
	},
] */

/* const moreFeatures = [
	{
		name: 'Validation',
		description: 'Learn how to build full-stack validation, so you can prevent invalid user input from reaching your database.',
		icon: 'check',
	},
	{
		name: 'Security',
		description: 'Learn how to implement secure login and signup flows, two-factor authentication (2FA), and more, so you can protect your users and their data.',
		icon: 'lock-closed',
	},
	{
		name: 'Database ORM',
		description: 'Learn how to use an ORM to interact with your database, so you can write less code and focus on your business logic.',
		icon: 'circle-stack',
	},
	{
		name: 'Performance',
		description: 'Learn how to improve the performance of your apps with code-splitting and how to avoid network request waterfalls, so you can deliver a better user experience.',
		icon: 'bolt',
	},
	{
		name: 'Caching and memoization',
		description:
			'Learn how to use in-app caching, memoization, and in-memory and SQLite-based caching, so you can improve the performance of your apps and reduce your cloud hosting costs.',
		icon: 'chip',
	},
	{
		name: 'Email',
		description: 'Learn how to send beautifully designed emails from your apps, so you can send transactional emails, newsletters, and more.',
		icon: 'paper-plane',
	},
	{
		name: 'Workflows',
		description: 'Integrate most, if not all, of your development workflow into VS Code. No need to switch between multiple apps to get things done.',
		icon: 'arrow-path',
	},
	{
		name: 'Push to deploy',
		description:
			'Integrate CI/CD pipelines with your GitHub repositories to automatically test and deploy your apps to the cloud. No need to manually upload files or run commands on the server.',
		icon: 'rocket',
	},
	{
		name: 'Deploy all over the world',
		description: 'Run your full stack apps (and databases) on the edge, close to your users. No need to worry about latency or network speed.',
		icon: 'globe',
	},
	{
		name: 'Monitoring',
		description: 'Learn how to monitor your apps, so you can detect and fix issues before your users notice them.',
		icon: 'chart-bar',
	},
	{
		name: 'Logging',
		description: 'Learn how to log errors and events in your apps, so you can debug issues and monitor your apps.',
		icon: 'file-text-folded',
	},
	{
		name: 'Navigation Analytics',
		description: 'Learn how to use Analytics to track user behavior and conversions in your apps, so you can make data-driven decisions.',
		icon: 'presentation-chart',
	},
	{
		name: 'On-page Analytics',
		description: 'Learn how to use On-page Analytics to track user behavior in your pages, and understand why are users converting or not, so you can make data-driven decisions.',
		icon: 'document-chart-bar',
	},
] */

const stats = [
	{ label: 'with an initial call', value: 'Start' },
	{ label: 'with guided cycles', value: 'Sprint' },
	{ label: 'higher goals', value: 'Reach' },
]

const featuredTestimonial = {
	body: "André is the best! He's is a very patient and dedicated mentor, he has helped me a lot stepping up my dev career and feel more confident very quickly. He guided me through all the steps to deploy an enterprise grade SaaS application, and I'd never imagine I'd find someone so invested in my project and my success.",
	author: {
		name: 'Zachary Cassette',
		imageUrl: zacharyCassette,
	},
}

const testimonials = [
	[
		[
			{
				body: 'André Casal is the most intelligent, hardworking, and caring web developer I know. If you want to receive the highest grade of help, go with him.',
				author: {
					name: 'Mony Chhim',
				},
			},
		],
		[
			{
				body: 'Very good!',
				author: {
					name: 'Wilson Mesquita',
				},
			},
		],
	],
	[
		[
			{
				body: 'Beyond expectations!',
				author: {
					name: 'Helena Oliveira',
				},
			},
		],
		[
			{
				body: 'André is extremely knowledgeable in React.',
				author: {
					name: 'Tarek Moussa',
				},
			},
			{
				body: "It's perfect. Recommend 100%. Couldn't have found better. Very thankful for everything.",
				author: {
					name: 'Isabel Rodrigues',
				},
			},
		],
	],
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const includedFeatures = ['Solving challenges', 'Pair programming', 'Code Reviews', 'Merge Requests']

const FullStackWebDevMentor = () => {
	/* const [open, setOpen] = useState<boolean>(false) */

	return (
		<>
			<BackgroundSquareLines>
				<Container>
					<div className="pb-24 pt-12 sm:pb-32 sm:pt-16 lg:flex lg:gap-x-10 lg:pb-40 lg:pt-20">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<H1 size="4xl" className="mt-10">
								Business mentoring for entrepreneurs.
							</H1>
							<P size="md" className="mt-6 text-muted-600">
								I'll help you build your service or tech product, find your first customers, grow your business, and become an independent entrepreneur.
							</P>
							<div className="mt-10 flex items-center gap-x-6">
								<Button asChild>
									<Link to="#pricing">Let's level up together</Link>
								</Button>
							</div>
						</div>
						<div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
							<svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
								<title>App screenshot</title>
								<defs>
									<clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
										<rect width={316} height={684} rx={36} />
									</clipPath>
								</defs>
								<path
									fill="#4B5563"
									d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
								/>
								<path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
								<foreignObject width={316} height={684} transform="translate(24 24)" clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
									<img src="/img/vs-code-screenshot.png" alt="VS Code" className="h-full object-cover" />
								</foreignObject>
							</svg>
						</div>
					</div>
				</Container>
			</BackgroundSquareLines>
			<Container>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-2xl">
								<H2 size="3xl">
									Building a business can be overwhelming
								</H2>
								<P size="xl" className="mt-6 text-muted-700">
									Embarking on the journey of entrepreneurship is both thrilling and challenging. As a seasoned business mentor, I understand the intricacies involved in transforming an idea into a thriving venture. Whether you're just starting or looking to take your business to new heights, I offer comprehensive guidance to navigate the entrepreneurial landscape.
								</P>
							</div>
						</div>
					</div>
					<div className="pt-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<img className="w-full max-w-none rounded-xl bg-muted-900 shadow-xl ring-1 ring-muted-400/10" src="/img/andre.jpg" alt="André Casal" />
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-muted-700 lg:max-w-lg">
								<H3 size="lg">
									Why Choose Me as Your Business Mentor?
								</H3>
								<ul className="mt-8 space-y-8 text-muted-600">
									<li className="flex items-start gap-x-3">
										<Icon name="trophy" className="mt-1.5 h-5 w-5 flex-none text-brand" aria-hidden="true" />
										<Span>
											<strong className="font-semibold text-muted-900">Proven Track Record</strong><br />With a track record of success in diverse industries, I bring a wealth of practical experience to the table. Having founded and scaled multiple businesses myself, I've encountered the hurdles you might face and conquered them. My hands-on experience sets me apart, ensuring you receive advice grounded in real-world achievements.
										</Span>
									</li>
									<li className="flex gap-x-3">
										<Icon name="brain" className="mt-1.5 h-5 w-5 flex-none text-brand" aria-hidden="true" />
										<Span>
											<strong className="font-semibold text-muted-900">Tailored Strategies for Success</strong><br />No two businesses are the same, and that's why a one-size-fits-all approach doesn't work. I specialize in crafting personalized strategies tailored to your unique goals, industry, and challenges. Whether you're in the service sector or tech industry, my guidance is designed to align with your specific needs.
										</Span>
									</li>
									<li className="flex gap-x-3">
										<Icon name="mountain" className="mt-1.5 h-5 w-5 flex-none text-brand" aria-hidden="true" />
										<Span>
											<strong className="font-semibold text-muted-900">Comprehensive Business Development</strong><br />From ideation to execution, I provide comprehensive support at every stage of business development. Whether you're brainstorming your first business concept or seeking strategies for sustainable growth, I offer a holistic approach that covers product development, market analysis, customer acquisition, and long-term scalability.
										</Span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:text-center">
						<H2 size="3xl" align="center">
							Here are some of the things you can learn with me
						</H2>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl gap-y-16 sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="relative grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							{services.map(service => (
								<div key={service.name} className="flex flex-col">
									<dt>
										<Span size="md" weight="semibold" className="flex items-center gap-x-3 text-muted-900">
											<Icon name={service.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
											{service.name}
										</Span>
									</dt>
									<dd>
										<P size="md" className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-600">
											{service.description}
										</P>
									</dd>
								</div>
							))}
							{/* {!open ? <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background sm:h-32" /> : null} */}
						</dl>
						{/* <Collapsible open={open} onOpenChange={setOpen}>
							<CollapsibleContent asChild>
								<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
									{moreFeatures.map(feature => (
										<div key={feature.name} className="flex flex-col">
											<dt>
												<Span size="md" className="flex items-center gap-x-3 text-base font-semibold leading-7 text-muted-900">
													<Icon name={feature.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
													{feature.name}
												</Span>
											</dt>
											<dd>
												<P size="md" className="mt-4 flex flex-auto flex-col text-muted-600">
													{feature.description}
												</P>
											</dd>
										</div>
									))}
								</dl>
							</CollapsibleContent>
							<div className="flex justify-around">
								<Button size="lg" variant="outline" asChild>
									<CollapsibleTrigger className="mt-8 rounded-lg border px-6 py-2 text-lg leading-8 text-muted-600 sm:mt-10 lg:mt-12">
										{open ? 'Show less...' : 'And much, much more...'}
									</CollapsibleTrigger>
								</Button>
							</div>
						</Collapsible> */}
					</div>
				</div>
			</Container>
			<Container>
				<div className="py-32">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<H2 size="3xl" className="mt-2">
							The process
						</H2>
						<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<P size="xl" className="text-muted-600">
									We start by having an initial call to build context on what you'd like to accomplish, bounce ideas back and forth, and make a plan for the first sprint. The goal is to gain clarity on exactly what you'd like to build, so we can get our hands dirty.
								</P>
								<P size="md" className="mt-10 max-w-xl text-muted-700">
									Then comes the bulk of the work, where you'll build your business with my guidance. I'll be there to make sure you're on the right track, helping you with any
									questions you have, and correcting any mistakes you make along the way. This usually includes weekly calls, code reviews (if applicable), and bouncing ideas back and forth on chat.
								</P>
								<P size="md" className="mt-10 max-w-xl text-muted-700">
									This happends until we reach the mentorship's natural end, where you've accomplished what you've set out to do and, hopefully, your business is thriving.
								</P>
							</div>
							<div className="flex w-full items-start justify-start gap-8 lg:ml-14 lg:flex-col xl:w-80">
								{stats.map(stat => (
									<div key={stat.value} className="flex flex-col gap-y-2">
										<Span size="4xl" weight="semibold" className="text-muted-900">
											{stat.value}
										</Span>
										<P size="md" className="text-muted-600">
											{stat.label}
										</P>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
			<BackgroundBlur>
				<Container>
					<div className="py-32">
						<div className="mx-auto max-w-2xl text-center">
							<H2 align="center" size="md" className="text-brand">
								Testimonials
							</H2>
							<P size="3xl" weight="bold" className="mt-2">
								I've worked with amazing people <Icon name="heart" className="h-10 w-10 text-brand" aria-hidden="true" />
							</P>
						</div>
						<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
							<figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-background sm:shadow-lg sm:ring-1 sm:ring-muted-900/5 xl:col-start-2 xl:row-end-1">
								<blockquote className="p-12 text-muted-900">
									<P size="xl" weight="semibold" className="tracking-tight">{`“${featuredTestimonial.body}”`}</P>
								</blockquote>
								<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
									<img className="h-10 w-10 flex-none rounded-full bg-muted-50" src={featuredTestimonial.author.imageUrl} alt={featuredTestimonial.author.name} />
									<div className="flex-auto">
										<P size="sm" weight="semibold">
											{featuredTestimonial.author.name}
										</P>
									</div>
									{/* <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" /> */}
								</figcaption>
							</figure>
							{testimonials.map((columnGroup, columnGroupIdx) => (
								<div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
									{columnGroup.map((column, columnIdx) => (
										<div
											key={columnIdx}
											className={classNames(
												(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
													? 'xl:row-span-2'
													: 'xl:row-start-1',
												'space-y-8',
											)}
										>
											{column.map(testimonial => (
												<figure key={testimonial.author.name} className="rounded-2xl bg-background p-6 shadow-lg ring-1 ring-muted-900/5">
													<blockquote>
														<P size="sm" className="text-muted-900">{`“${testimonial.body}”`}</P>
													</blockquote>
													<figcaption className="mt-6 flex items-center gap-x-4">
														{/* <img className="h-10 w-10 rounded-full bg-muted-50" src={testimonial.author.imageUrl} alt="" /> */}
														<div>
															<P size="sm" weight="semibold">
																{testimonial.author.name}
															</P>
														</div>
													</figcaption>
												</figure>
											))}
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</Container>
			</BackgroundBlur>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl sm:text-center">
						<H2 size="3xl" align="center" className="mt-2 font-bold" id="pricing">
							Simple no-tricks pricing
						</H2>
						<P size="lg" align="center" className="mx-auto mt-6 max-w-xl text-muted-600">
							I charge ~80€ per hour. The payments are done monthly.
							<br />
							Here are the most common plans mentees go for.
						</P>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Mentorship 4h/week</H3>
							<P size="md" className="mt-6 text-muted-600">
								This is the most popular plan for <strong>mentees building a product full-time</strong>. Chat is always available.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									We can use this time for
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{includedFeatures.map(feature => (
									<li key={feature} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Pay once a month
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€1024
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://calendly.com/andrecasal/meeting" target="_blank" rel="noopener noreferrer">
											Schedule initial call
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Invoices and receipts available for easy company reimbursement
									</P>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Mentorship 2h/week</H3>
							<P size="md" className="mt-6 text-muted-600">
								This is the most popular plan for <strong>mentees building something on the side</strong>. Chat is always available.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									We can use this time for
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{includedFeatures.map(feature => (
									<li key={feature} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Pay once a month
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€640
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://calendly.com/andrecasal/meeting" target="_blank" rel="noopener noreferrer">
											Schedule initial call
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Invoices and receipts available for easy company reimbursement
									</P>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto max-w-2xl sm:text-center">
						<P size="md" className="mt-6 text-muted-600">
							If you're a student or have been unemployed for more than 3 months, I offer a 50% discount. Just{' '}
							<a
								// eslint-disable-next-line remix-react-routes/use-link-for-routes
								href="mailto:andre@andrecasal.com"
								className="underline"
							>
								send me an email
							</a>{' '}
							with your situation and we'll figure it out.
						</P>
					</div>
				</div>
			</Container>
		</>
	)
}

export default FullStackWebDevMentor
