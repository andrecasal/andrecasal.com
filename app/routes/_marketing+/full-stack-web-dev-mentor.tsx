import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible.tsx'
import BackgroundSquareLines from './components/bg-square-lines.tsx'
import { Container } from '~/components/ui/container.tsx'
import BackgroundBlur from './components/bg-blur.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Link } from '@remix-run/react'
import { Heading } from '~/components/ui/heading.tsx'

const features = [
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
]

const moreFeatures = [
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
]

const stats = [
	{ label: 'With an initial call', value: 'Startup' },
	{ label: 'To learn and build', value: 'Sprints' },
	{ label: 'Your goals', value: 'Accomplished' },
]

const featuredTestimonial = {
	body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
	author: {
		name: 'Brenna Goyette',
		handle: 'brennagoyette',
		imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
		logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-muted-900.svg',
	},
}

const testimonials = [
	[
		[
			{
				body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
				author: {
					name: 'Leslie Alexander',
					handle: 'lesliealexander',
					imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
				author: {
					name: 'Leslie Alexander',
					handle: 'lesliealexander',
					imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
		],
		[
			{
				body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
				author: {
					name: 'Lindsay Walton',
					handle: 'lindsaywalton',
					imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
		],
	],
	[
		[
			{
				body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
				author: {
					name: 'Tom Cook',
					handle: 'tomcook',
					imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
		],
		[
			{
				body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
				author: {
					name: 'Leonard Krasner',
					handle: 'leonardkrasner',
					imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			{
				body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
				author: {
					name: 'Leonard Krasner',
					handle: 'leonardkrasner',
					imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
	const [open, setOpen] = useState<boolean>(false)

	return (
		<>
			<BackgroundSquareLines>
				<Container>
					<div className="pb-24 pt-12 sm:pb-32 sm:pt-16 lg:flex lg:gap-x-10 lg:pb-40 lg:pt-20">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<Heading level="h1" size="xl" className="mt-10 max-w-lg">
								Modern full-stack web development mentorship
							</Heading>
							<p className="mt-6 text-body-md text-muted-600">
								Are you looking for a seasoned full-stack web dev mentor to guide you through modern tools and techniques and impart essential knowledge to step up your
								development game? I love working with people, and I'm here to help you level up your skills and career.
							</p>
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
									<img src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png" alt="" />
								</foreignObject>
							</svg>
						</div>
					</div>
				</Container>
			</BackgroundSquareLines>
			<Container>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg">
								<Heading level="p" size="2xs" className="text-brand">
									Full-stack web development
								</Heading>
								<Heading level="h2" size="lg" className="mt-2">
									Can be overwhelming
								</Heading>
								<p className="mt-6 text-body-md text-muted-700">
									Layout, styling, design systems, responsiveness, server-side rendering, hydration, user experience, accessibility, validation, data modeling, caching,
									memoization, performance, authentication, security, email, testing, visual regression, deployment, monitoring, logging, developer experience...
								</p>
							</div>
						</div>
					</div>
					<div className="pt-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<img className="w-full max-w-none rounded-xl bg-muted-900 shadow-xl ring-1 ring-muted-400/10" src="/img/andre.jpg" alt="André Casal" />
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-body-sm text-muted-700 lg:max-w-lg">
								<p>
									It can be disheartening to spend endless hours scrolling through online tutorials and courses, try to remember all the best practices, and to constantly
									make an effort to stay up-to-date in this fast-paced industry. It can be mentally and emotionally exhausting and your dream of becoming a proficient
									full-stack web developer may, at times, feel out of reach.
								</p>
								<p className="mt-8">That's the problem I'm here to solve.</p>
								<ul className="mt-8 space-y-8 text-muted-600">
									<li className="flex gap-x-3">
										<Icon name="trophy" className="mt-1 h-5 w-5 flex-none text-brand" aria-hidden="true" />
										<span>
											<strong className="font-semibold text-muted-900">Modern tools.</strong> Forget analysis paralysis. I'll guide you through the best tools for the
											job.
										</span>
									</li>
									<li className="flex gap-x-3">
										<Icon name="brain" className="mt-1 h-5 w-5 flex-none text-brand" aria-hidden="true" />
										<span>
											<strong className="font-semibold text-muted-900">Knowledge.</strong> I'll teach you everything you need to know to ship world-class products.
										</span>
									</li>
									<li className="flex gap-x-3">
										<Icon name="mountain" className="mt-1 h-5 w-5 flex-none text-brand" aria-hidden="true" />
										<span>
											<strong className="font-semibold text-muted-900">Real-world experience.</strong> We will build a real, production-ready, full-stack web app
											together from start to finish.
										</span>
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
						<Heading level="p" size="2xs" className="text-brand">
							Everything you need
						</Heading>
						<Heading level="h2" size="lg" className="mt-2">
							To ship modern full-stack web apps
						</Heading>
						<p className="mt-6 text-lg leading-8 text-muted-600">Here are some of the things you can learn with me:</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl gap-y-16 sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="relative grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							{features.map(feature => (
								<div key={feature.name} className="flex flex-col">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-muted-900">
										<Icon name={feature.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
										{feature.name}
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-600">
										<p className="flex-auto">{feature.description}</p>
									</dd>
								</div>
							))}
							{!open ? <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background sm:h-32" /> : null}
						</dl>
						<Collapsible open={open} onOpenChange={setOpen}>
							<CollapsibleContent asChild>
								<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
									{moreFeatures.map(feature => (
										<div key={feature.name} className="flex flex-col">
											<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-muted-900">
												<Icon name={feature.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
												{feature.name}
											</dt>
											<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-600">
												<p className="flex-auto">{feature.description}</p>
											</dd>
										</div>
									))}
								</dl>
							</CollapsibleContent>
							<div className="flex justify-around">
								<CollapsibleTrigger className="mt-8 rounded-lg border px-6 py-2 text-lg leading-8 text-muted-600 sm:mt-10 lg:mt-12">
									{open ? 'Show less...' : 'And many, many more...'}
								</CollapsibleTrigger>
							</div>
						</Collapsible>
					</div>
				</div>
			</Container>
			<Container>
				<div className="py-32">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<Heading level="h2" size="lg" className="mt-2">
							The process
						</Heading>
						<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<p className="text-xl leading-8 text-muted-600">
									We start by having a startup call for you to contextualize me on what you'd like to accomplish, where we bounce ideas back and forth, and where we make a
									plan for the first sprint. I highly recommend you already bring a real-world application in mind that you'd like to build or improve so we can get our
									hands dirty.
								</p>
								<p className="mt-10 max-w-xl text-base leading-7 text-muted-700">
									Then comes the bulk of the work, where you'll build your app with my guidance. I'll be there to make sure you're on the right track, helping you with any
									questions you have, and correcting any mistakes you make along the way. This usually includes weekly calls, code reviews, and bouncing ideas back and
									forth on chat.
								</p>
								<p className="mt-10 max-w-xl text-base leading-7 text-muted-700">
									This happends until we reach the mentorship's natural end, where you've accomplished what you've set out to do: learned everything you wanted to, got a
									higher-paying job, shipped your app, or any combination of those.
								</p>
							</div>
							<div className="lg:flex lg:flex-auto lg:justify-center">
								<dl className="w-64 space-y-8 xl:w-80">
									{stats.map(stat => (
										<div key={stat.label} className="flex flex-col-reverse gap-y-4">
											<dt className="text-base leading-7 text-muted-600">{stat.label}</dt>
											<Heading level="p" size="lg" className="mt-2 text-muted-900" asChild>
												<dd>{stat.value}</dd>
											</Heading>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<BackgroundBlur>
				<Container>
					<div className="py-32">
						<div className="mx-auto max-w-2xl text-center">
							<Heading level="p" size="2xs" className="text-brand">
								Testimonials
							</Heading>
							<div className="mt-2 flex gap-x-3">
								<Heading level="h2" size="lg" className="mt-2">
									I've worked with amazing people <Icon name="heart-filled" className="h-10 w-10 text-brand" aria-hidden="true" />
								</Heading>
							</div>
						</div>
						<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
							<figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-muted-900/5 xl:col-start-2 xl:row-end-1">
								<blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-muted-900">
									<p>{`“${featuredTestimonial.body}”`}</p>
								</blockquote>
								<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
									<Icon name="person" className="h-10 w-10 flex-none" />
									{/* <img className="h-10 w-10 flex-none rounded-full bg-muted-50" src={featuredTestimonial.author.imageUrl} alt="" /> */}
									<div className="flex-auto">
										<div className="font-semibold">{featuredTestimonial.author.name}</div>
										<div className="text-muted-600">{`@${featuredTestimonial.author.handle}`}</div>
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
												<figure key={testimonial.author.handle} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-muted-900/5">
													<blockquote className="text-muted-900">
														<p>{`“${testimonial.body}”`}</p>
													</blockquote>
													<figcaption className="mt-6 flex items-center gap-x-4">
														<Icon name="person" className="h-10 w-10" />
														{/* <img className="h-10 w-10 rounded-full bg-muted-50" src={testimonial.author.imageUrl} alt="" /> */}
														<div>
															<div className="font-semibold">{testimonial.author.name}</div>
															<div className="text-muted-600">{`@${testimonial.author.handle}`}</div>
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
						<Heading level="h2" size="lg" className="mt-2" id="pricing">
							Simple no-tricks pricing
						</Heading>
						<p className="mt-6 text-lg leading-8 text-muted-600">
							I charge ~80€ per hour. The payments are done monthly.
							<br />
							Here are the most common plans mentees go for.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<Heading level="h3" size="xs">
								Mentorship 2 hours per week
							</Heading>
							<p className="mt-6 text-base leading-7 text-muted-600">This is the most popular plan with mentees that are full-time employees building something on the side.</p>
							<div className="mt-10 flex items-center gap-x-4">
								<h4 className="flex-none text-sm font-semibold leading-6 text-brand">What’s included</h4>
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
									<p className="text-base font-semibold text-muted-600">Pay once a month</p>
									<p className="mt-6 flex items-baseline justify-center gap-x-2">
										<Heading level="p" size="xl">
											€640
										</Heading>
										<span className="text-sm font-semibold leading-6 tracking-wide text-muted-600">EUR</span>
									</p>
									<a
										href="https://calendly.com/andrecasal/meeting"
										target="_blank"
										rel="noopener noreferrer"
										className="mt-10 block w-full rounded-md bg-brand px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
									>
										Schedule initial call
									</a>
									<p className="mt-6 text-xs leading-5 text-muted-600">Invoices and receipts available for easy company reimbursement</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<Heading level="h3" size="xs">
								Mentorship 4 hours per week
							</Heading>
							<p className="mt-6 text-base leading-7 text-muted-600">
								This is the most popular plan with mentees working full-time on building a new product or improving an existing one.
							</p>
							<div className="mt-10 flex items-center gap-x-4">
								<h4 className="flex-none text-sm font-semibold leading-6 text-brand">We can use this time for</h4>
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
							<p className="mt-8 text-sm leading-6 text-muted-600">Chat is always available.</p>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<p className="text-base font-semibold text-muted-600">Pay once a month</p>
									<p className="mt-6 flex items-baseline justify-center gap-x-2">
										<Heading level="p" size="xl">
											€1024
										</Heading>
										<span className="text-sm font-semibold leading-6 tracking-wide text-muted-600">EUR</span>
									</p>
									<a
										href="https://calendly.com/andrecasal/meeting"
										target="_blank"
										rel="noopener noreferrer"
										className="mt-10 block w-full rounded-md bg-brand px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
									>
										Schedule initial call
									</a>
									<p className="mt-6 text-xs leading-5 text-muted-600">Invoices and receipts available for easy company reimbursement</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto max-w-2xl sm:text-center">
						<p className="mt-6 text-base leading-7 text-muted-600">
							If you're a student or have been unemployed for more than 3 months, I offer a 50% discount. Just{' '}
							<a
								// eslint-disable-next-line remix-react-routes/use-link-for-routes
								href="mailto:andre@andrecasal.com"
								className="underline"
							>
								send me an email
							</a>{' '}
							with your situation and we'll figure it out.
						</p>
					</div>
				</div>
			</Container>
		</>
	)
}

export default FullStackWebDevMentor
