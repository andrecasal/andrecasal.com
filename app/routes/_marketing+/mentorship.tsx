/* import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible.tsx' */
import BackgroundSquareLines from './components/bg-square-lines.tsx'
import BackgroundBlur from './components/bg-blur.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Link } from '@remix-run/react'
import zacharyCassette from './images/zachary-cassette.jpg'
import { cn } from '~/utils/tailwind-merge.ts'
import { type MetaFunction, type LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { H3 } from '~/ui_components/typography/h3.tsx'
import { Span } from '~/ui_components/typography/span.tsx'
import { H4 } from '~/ui_components/typography/h4.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/mentorship' }]
}

export const meta: MetaFunction = () => {
	return [
		{ title: `Tech Business Mentorship | Andre Casal` },
		{
			name: 'description',
			content: `I'll help you build your service or tech product, find your first customers, grow your business, and become an independent entrepreneur.`,
		},
		{
			name: 'keywords',
			content: `business mentorship, tech business mentorship, business mentor, tech business mentor, business mentorship for entrepreneurs, tech business mentorship for entrepreneurs, business mentor for entrepreneurs, tech business mentor for entrepreneurs, business mentorship for startups, tech business mentorship for startups, business mentor for startups, tech business mentor for startups, business mentorship for small businesses, tech business mentorship for small businesses, business mentor for small businesses, tech business mentor for small businesses, business mentorship for entrepreneurs, tech business mentorship for entrepreneurs, business mentor for entrepreneurs, tech business mentor for entrepreneurs, business mentorship for startups, tech business mentorship for startups, business mentor for startups, tech business mentor for startups, business mentorship for small businesses, tech business mentorship for small businesses, business mentor for small businesses, tech business mentor for small businesses`,
		},
	]
}

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

const benefits = ['A clear path forward', 'Seasoned entrepreneur to bounce ideas off of', 'Guidance throughout the entire process', 'Motivating fast growth']

const FullStackWebDevMentor = () => {
	return (
		<>
			<BackgroundSquareLines>
				<Container>
					<div className="pb-24 pt-12 sm:pb-32 sm:pt-16 lg:flex lg:gap-x-10 lg:pb-40 lg:pt-20">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<H1 size="4xl" className="mt-10">
								Web Development and Entrepreneurship Mentorship
							</H1>
							<P size="md" className="mt-6 text-muted-600">
								Wow, those are some big words! I'll teach you full-stack web dev, and, if you want, help you build your service or tech product, teach you how to find your
								first customers.
							</P>
							<div className="mt-10 flex items-center gap-x-6">
								<Button size="lg" asChild>
									<Link to="#pricing">Let's level up together</Link>
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</BackgroundSquareLines>
			<Container>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-2xl">
								<H2 size="3xl">Web Dev can be overwhelming</H2>
								<P size="xl" className="mt-6 text-muted-700">
									As a tech entrepreneur and teacher for 18 years I've got loads of knowledge and experience to share with you. I've been through the same struggles you are
									going through right now, and I can help you overcome them.
								</P>
							</div>
						</div>
					</div>
					<div className="pt-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<img className="w-full max-w-none rounded-full bg-muted-900 shadow-xl ring-1 ring-muted-400/10" src="/img/andre_casal.png" alt="André Casal" />
					</div>
				</div>
			</Container>
			<BackgroundBlur>
				<Container>
					<div className="py-32">
						<div className="mx-auto max-w-2xl text-center">
							<H2 align="center">
								Testimonials from the <span className="px-2 text-brand">amazing</span> people I've worked with <Icon name="heart-filled" className="" aria-hidden="true" />
							</H2>
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
											className={cn(
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
				<div className="py-32">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<H2 size="3xl" className="mt-2">
							The process
						</H2>
						<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<P size="xl" className="text-muted-600">
									Is pretty straightforward. You bring a problem, I help you solve it. You bring a project, I help you build it. You bring a goal, I help you reach it. It's
									very much a hands-on approach, where we'll work together to get you where you want to be.
								</P>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl sm:text-center">
						<H2 size="3xl" align="center" className="mt-2 font-bold" id="pricing">
							Simple pricing
						</H2>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Single session</H3>
							<P size="md" className="mt-6 text-muted-600">
								Need one-on-one help with a specific problem? I'm available for single sessions to help you with whatever you need.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									What you'll get
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{benefits.map(benefit => (
									<li key={benefit} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none self-start text-brand" aria-hidden="true" />
										{benefit}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Pay per hour
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€80
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://calendly.com/andrecasal/webdev-entrepreneurship" target="_blank" rel="noopener noreferrer">
											Schedule a mentoring session
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Invoices and receipts available for easy company reimbursement.
									</P>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Continuous chat support</H3>
							<P size="md" className="mt-6 text-muted-600">
								Unlock continuous chat support with me, where I'll be available to help you with whatever you need, whenever you need it.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									What you'll get
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{benefits.map(benefit => (
									<li key={benefit} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none self-start text-brand" aria-hidden="true" />
										{benefit}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Monthly subscription
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€320
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR/month
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://calendly.com/andrecasal/meeting" target="_blank" rel="noopener noreferrer">
											Schedule initial call
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Invoices and receipts available for easy company reimbursement.
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
