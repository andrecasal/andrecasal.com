import { Link } from '@remix-run/react'
import BackgroundSquareLines from '../components/bg-square-lines.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Icon } from '~/components/ui/icon.tsx'
/* import { Badge } from '~/components/ui/badge.tsx' */
import { Text } from '~/components/ui/text.tsx'
import BackgroundBlur from '../components/bg-blur.tsx'
import { Button } from '~/components/ui/button.tsx'

const MasteryForVSCode = () => {
	const features = [
		{
			name: 'Push to deploy',
			description: 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
			icon: 'bolt',
		},
		{
			name: 'SSL certificates',
			description: 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
			icon: 'bolt',
		},
		{
			name: 'Simple queues',
			description: 'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
			icon: 'bolt',
		},
		{
			name: 'Advanced security',
			description: 'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
			icon: 'bolt',
		},
	]

	const moreFeatures = [
		{
			name: 'Push to deploy.',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
			icon: 'bolt',
		},
		{
			name: 'SSL certificates.',
			description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
			icon: 'bolt',
		},
		{
			name: 'Simple queues.',
			description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
			icon: 'bolt',
		},
		{
			name: 'Advanced security.',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
			icon: 'bolt',
		},
		{
			name: 'Powerful API.',
			description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
			icon: 'bolt',
		},
		{
			name: 'Database backups.',
			description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
			icon: 'bolt',
		},
	]

	const stats = [
		{ id: 1, name: 'Creators on the platform', value: '8,000+' },
		{ id: 2, name: 'Flat platform fee', value: '3%' },
		{ id: 3, name: 'Uptime guarantee', value: '99.9%' },
		{ id: 4, name: 'Paid out to creators', value: '$70M' },
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
						handle: 'lesliealexander2',
						imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					},
				},
			],
			[
				{
					body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
					author: {
						name: 'Lindsay Walton',
						handle: 'lindsaywalton3',
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
						handle: 'tomcook4',
						imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					},
				},
			],
			[
				{
					body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
					author: {
						name: 'Leonard Krasner',
						handle: 'leonardkrasner5',
						imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					},
				},
				{
					body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
					author: {
						name: 'Leonard Krasner',
						handle: 'leonardkrasner6',
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

	/* const faqs = [
		{
			question: "What's the best thing about Switzerland?",
			answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
		},
	] */

	return (
		<>
			<BackgroundSquareLines>
				<Container>
					<div className="pb-24 pt-10 sm:pb-40 lg:flex lg:pt-40">
						<div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
							{/* <div className="mt-24 sm:mt-32 lg:mt-16">
							<Link to="#updates" className="inline-flex space-x-6">
								<Badge variant="info" size="md">
									Latest updates
								</Badge>
								<Text size="sm" asChild>
									<span className="inline-flex items-center space-x-2 text-size-sm font-medium text-muted-600">
										<span>Add AI assistance</span>
										<Icon name="chevron-right" className="h-5 w-5 text-muted-400" aria-hidden="true" />
									</span>
								</Text>
							</Link>
						</div> */}
							<Text heading="h1" size="4xl" className="sm:text-size-6xl">
								Mastery
								<br className="hidden lg:block" /> for VS Code
							</Text>
							<Text size="lg" className="mt-6">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
							</Text>
							<div className="mt-10 flex items-center gap-x-6">
								<Link
									to="/"
									className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
								>
									Get started
								</Link>
								<Link to="#" className="text-sm font-semibold leading-6 text-white">
									Live demo <span aria-hidden="true">→</span>
								</Link>
							</div>
						</div>
						<div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
							<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
								<img
									src="/img/vs-code-screenshot.png"
									alt="App screenshot"
									width={2432}
									height={1442}
									className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
								/>
							</div>
						</div>
					</div>
				</Container>
			</BackgroundSquareLines>
			<Container>
				<div className=" py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<div key={feature.name} className="flex flex-col">
									<Text size="md" asChild>
										<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-muted-900">
											<Icon name={feature.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
											{feature.name}
										</dt>
									</Text>
									<Text size="md" asChild>
										<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-600">
											<p className="flex-auto">{feature.description}</p>
										</dd>
									</Text>
								</div>
							))}
						</dl>
					</div>
				</div>
			</Container>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl sm:text-center">
						<h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No server? No problem.</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
						</p>
					</div>
				</div>
				<div className="relative overflow-hidden pt-16">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<img src="/img/vs-code-screenshot.png" alt="App screenshot" className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" width={2432} height={1442} />
						<div className="relative" aria-hidden="true">
							<div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
						</div>
					</div>
				</div>
				<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
					<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
						{moreFeatures.map(feature => (
							<div key={feature.name} className="flex flex-col">
								<Text size="md" asChild>
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-muted-900">
										<Icon name={feature.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
										{feature.name}
									</dt>
								</Text>
								<Text size="md" asChild>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-600">
										<p className="flex-auto">{feature.description}</p>
									</dd>
								</Text>
							</div>
						))}
					</dl>
				</div>
			</Container>
			<BackgroundBlur>
				<Container>
					<div className="relative isolate mt-32 overflow-hidden py-24 sm:mt-56 sm:py-32">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
							<h2 className="text-base font-semibold leading-8 text-brand">Our track record</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by thousands of creators&nbsp;worldwide</p>
							<p className="mt-6 text-lg leading-8">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
							</p>
						</div>
						<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
							{stats.map(stat => (
								<div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
									<dt className="text-sm leading-6">{stat.name}</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
								</div>
							))}
						</dl>
					</div>
				</Container>
			</BackgroundBlur>
			<Container>
				<div className="py-32">
					<div className="mx-auto max-w-2xl text-center">
						<Text heading="h2" size="md" className="text-brand">
							Testimonials
						</Text>
						<Text size="3xl" className="mt-2 font-bold sm:text-size-4xl">
							I've worked with amazing people <Icon name="heart-filled" className="h-10 w-10 text-brand" aria-hidden="true" />
						</Text>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
						<figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-muted-900/5 xl:col-start-2 xl:row-end-1">
							<blockquote className="p-12 text-muted-900">
								<Text size="xl" className="font-semibold tracking-tight">{`“${featuredTestimonial.body}”`}</Text>
							</blockquote>
							<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
								<Icon name="person" className="h-10 w-10 flex-none" />
								{/* <img className="h-10 w-10 flex-none rounded-full bg-muted-50" src={featuredTestimonial.author.imageUrl} alt="" /> */}
								<div className="flex-auto">
									<Text size="sm" className="font-semibold">
										{featuredTestimonial.author.name}
									</Text>
									<Text size="sm" className="text-muted-600">{`@${featuredTestimonial.author.handle}`}</Text>
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
												<blockquote>
													<Text size="sm" className="text-muted-900">{`“${testimonial.body}”`}</Text>
												</blockquote>
												<figcaption className="mt-6 flex items-center gap-x-4">
													<Icon name="person" className="h-10 w-10" />
													{/* <img className="h-10 w-10 rounded-full bg-muted-50" src={testimonial.author.imageUrl} alt="" /> */}
													<div>
														<Text size="sm" className="font-semibold">
															{featuredTestimonial.author.name}
														</Text>
														<Text size="sm" className="text-muted-600">{`@${featuredTestimonial.author.handle}`}</Text>
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
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl sm:text-center">
						<Text heading="h2" size="3xl" className="mt-2 font-bold sm:text-size-4xl">
							Simple no-tricks pricing
						</Text>
						<Text size="lg" className="mx-auto mt-6 max-w-xl text-center text-muted-600">
							I charge ~80€ per hour. The payments are done monthly.
							<br />
							Here are the most common plans mentees go for.
						</Text>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<Text heading="h3" size="2xl">
								Mentorship 4h/week
							</Text>
							<Text size="md" className="mt-6 text-muted-600">
								This is the most popular plan for mentees building a product <strong>full-time</strong>. Chat is always available.
							</Text>
							<div className="mt-10 flex items-center gap-x-4">
								<Text heading="h4" size="sm" className="flex-none font-semibold text-brand">
									We can use this time for
								</Text>
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
									<Text size="md" className="font-semibold text-muted-600">
										Pay once, own it forever
									</Text>
									<p className="mt-6 flex items-baseline justify-center gap-x-2">
										<Text size="5xl" className="font-bold" asChild>
											<span>€180</span>
										</Text>
										<Text size="sm" className="font-semibold tracking-wide text-muted-600" asChild>
											<span>EUR</span>
										</Text>
									</p>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://calendly.com/andrecasal/meeting" target="_blank" rel="noopener noreferrer">
											Schedule initial call
										</a>
									</Button>
									<Text size="xs" className="mt-6 text-muted-600">
										Invoices and receipts available for easy company reimbursement
									</Text>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="bg-white">
					<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
						<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
							<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
							{/* <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
								{faqs.map(faq => (
									<Disclosure as="div" key={faq.question} className="pt-6">
										{({ open }) => (
											<>
												<dt>
													<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
														<span className="text-base font-semibold leading-7">{faq.question}</span>
														<span className="ml-6 flex h-7 items-center">
															{open ? <MinusSmallIcon className="h-6 w-6" aria-hidden="true" /> : <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />}
														</span>
													</Disclosure.Button>
												</dt>
												<Disclosure.Panel as="dd" className="mt-2 pr-12">
													<p className="text-base leading-7 text-gray-600">{faq.answer}</p>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								))}
							</dl> */}
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="relative isolate overflow-hidden pt-14">
					<div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
							<h2 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">About André</h2>
							<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
								<p className="text-lg leading-8 text-gray-600">
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute
									id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<Link
										to="#"
										className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Get started
									</Link>
									<Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
										Learn more <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
							<img
								src="/img/andre.jpg"
								alt=""
								className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
							<p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
							<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A note on excellency</h1>
							<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
								<div>
									<p>
										Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec
										est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
										mauris semper sed amet vitae sed turpis id.
									</p>
									<p className="mt-8">
										Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac
										cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
									</p>
								</div>
								<div>
									<p>
										Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices
										congue nunc tortor.
									</p>
									<p className="mt-8">
										Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac
										cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
									</p>
								</div>
							</div>
							<div className="mt-10 flex">
								<Link
									to="#"
									className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Get started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="bg-white">
					<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
						<div className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
							<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Boost your productivity today.</h2>
							<p className="mx-auto mt-6 max-w-xl text-lg leading-8">
								Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<Link
									to="#"
									className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								>
									Get started
								</Link>
								<Link to="#" className="text-sm font-semibold leading-6">
									Learn more <span aria-hidden="true">→</span>
								</Link>
							</div>
							<svg
								viewBox="0 0 1024 1024"
								className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
								aria-hidden="true"
							>
								<circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
								<defs>
									<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
										<stop stopColor="#7775D6" />
										<stop offset={1} stopColor="#E935C1" />
									</radialGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}

export default MasteryForVSCode
