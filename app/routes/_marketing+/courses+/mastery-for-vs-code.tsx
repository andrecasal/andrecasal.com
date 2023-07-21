import { Link } from '@remix-run/react'
import BackgroundSquareLines from '../components/bg-square-lines.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Icon } from '~/components/ui/icon.tsx'
/* import { Badge } from '~/components/ui/badge.tsx' */
import { Text } from '~/components/ui/text.tsx'
import BackgroundBlur from '../components/bg-blur.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion.tsx'
import BackgroundRadial from '../components/bg-radial.tsx'
import BackgroundDiagonal from '../components/bg-diagonal.tsx'
import zacharyCassette from '../images/zachary-cassette.jpg'
import signature from '../images/signature.png'

const MasteryForVSCode = () => {
	const features = [
		{
			name: 'Dominate VS Code',
			description: 'Learn to dominate VS Code, mastering every aspect of this powerful code editor.',
			icon: 'trophy',
		},
		{
			name: 'Best practices',
			description: 'Discover and implement best practices to streamline your development process.',
			icon: 'heart',
		},
		{
			name: 'Essential shortcuts',
			description: 'Unlock the potential of essential shortcuts for lightning-fast coding.',
			icon: 'bolt',
		},
		{
			name: 'Upgraded snippets',
			description: 'Upgrade your default snippets to code more efficiently than ever before.',
			icon: 'code',
		},
		{
			name: 'The best extensions',
			description: 'Harness the power of the best extensions available to supercharge your workflow.',
			icon: 'puzzle',
		},
		{
			name: 'Automate tasks',
			description: 'Automate repetitive tasks and watch your productivity soar to new heights.',
			icon: 'arrow-path',
		},
		{
			name: 'Quality feeback',
			description: 'Get quality feedback on the quality of your code, honing your skills continuously.',
			icon: 'check',
		},
		{
			name: 'Stay in your editor',
			description: 'Integrate otherwise external workflows into VS Code, never leaving your editor.',
			icon: 'keyboard',
		},
		{
			name: 'Leverage AI',
			description: 'Leverage AI assistance for coding to boost your creativity and efficiency.',
			icon: 'wand',
		},
	]

	const moreFeatures = [
		{
			name: 'Save time',
			description: "Save time and effort by mastering VS Code's shortcuts and automation tools.",
			icon: 'stopwatch',
		},
		{
			name: 'Write cleaner code',
			description: 'Write cleaner and more maintainable code with the help of best practices and feedback.',
			icon: 'star',
		},
		{
			name: 'Stay focused',
			description: 'Stay focused and productive with a seamlessly integrated workflow.',
			icon: 'target',
		},
		{
			name: "Unlock extensions's potential",
			description: 'Unlock the full potential of VS Code by discovering and utilizing the best extensions.',
			icon: 'rocket',
		},
		{
			name: 'Code faster',
			description: 'Improve your coding speed and efficiency, leading to faster project completion.',
			icon: 'jet-fighter',
		},
		{
			name: 'Gain confidence',
			description: 'Gain the confidence to tackle complex coding challenges effortlessly with AI assistance.',
			icon: 'trophy',
		},
		{
			name: 'Boost employability',
			description: 'Boost your employability with essential skills for any modern full-stack developer.',
			icon: 'suitcase',
		},
		{
			name: 'Community access',
			description: 'Access to a supportive community of learners, sharing experiences and knowledge.',
			icon: 'chat-bubbles',
		},
	]

	const stats = [
		{ id: 1, name: 'Satisfied developers', value: '8,000+' },
		{ id: 3, name: 'Five-star reviews', value: '500+' },
		{ id: 2, name: 'Increase in coding speed', value: '30%' },
		{ id: 4, name: 'Completion rate', value: '90%' },
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

	const includedFeatures = [
		'Learn all about VS Code',
		'Make VS Code look awesome',
		'Improved shortcuts and snippets',
		'Improved DX',
		'Automated formatting and linting',
		'Terminal upgrades',
		'Integrate workflows',
		'...and much more',
	]

	const faqs = [
		{
			question: 'Is this course suitable for beginners?',
			answer: 'While some familiarity with web development is beneficial, the course is designed to be beginner-friendly, guiding you from basics to advanced concepts.',
		},
		{
			question: "What if I can't keep up with the course schedule?",
			answer: "Don't worry! Once you enroll, you'll have lifetime access to the course material, allowing you to learn at your own pace.",
		},
		{
			question: 'How do I get support during the course?',
			answer: "You can get support through our online community and email. I'm here to help you with any questions or challenges you encounter.",
		},
		{
			question: 'What tech does it support?',
			answer: 'It supports the technologies used in modern full-stack web development: HTML, CSS, JavaScript, TypeScript, React, Node.js, and more.',
		},
	]

	const modules = [
		{
			name: 'Getting to know VS Code',
			description: "Part one is all about VS Code's native capabilities and how to use it without any configurations or extensions.",
		},
		{
			name: 'Excellent DX',
			description: 'Part two is all about improvements that apply to any language or framework, providing you with a consistently excellent developer experience.',
		},
		{
			name: 'Best Practices',
			description: 'The third part is about teaching you all the best practices you need to know for full-stack web development.',
		},
		{
			name: 'Languages, libraries, frameworks, and tools',
			description: 'The fourth part is all about improving your developer experience and teaching you best practices in your particular tech stack.',
		},
		{
			name: 'Integrating Workflows',
			description: 'The fifth section is all about integrating otherwise external workflows into VS Code. Stay in your editor.',
		},
		{
			name: 'Common Pitfalls',
			description: "In this section, we'll go over some common pitfalls people fall into when using VS Code.",
		},
	]

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
							<Text size="lg" className="mt-6 text-muted-600">
								Upgrade your coding game with <strong>the</strong> course on VS Code.
							</Text>
							<Text size="md" className="mt-6 text-muted-900">
								Are you a full-stack web developer looking to level up your coding skills? Welcome to <strong>Mastery for VS Code</strong> - the ultimate online course that
								will transform you into a VS Code ninja! Say goodbye to inefficient workflows and hello to unparalleled productivity.
							</Text>
							<div className="mt-10 flex items-center gap-x-6">
								<Button size="lg" asChild>
									<Link to="#pricing">I want to master VS Code</Link>
								</Button>
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
						<Text heading="h2" size="md" className="text-brand">
							Course Overview
						</Text>
						<Text size="3xl" className="mt-2 font-bold sm:text-size-4xl">
							Efficient full-stack web development
						</Text>
						<Text size="lg" className="mt-6 text-muted-700">
							In this course, you will:
						</Text>
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
						<Text heading="h2" size="md" className="text-brand">
							Everything you need
						</Text>
						<Text size="3xl" className="mt-2 font-bold sm:text-size-4xl">
							Benefits of the course
						</Text>
						<Text size="lg" className="mt-6 text-muted-700">
							Here's what you can expect out of this course.
						</Text>
					</div>
				</div>
				<div className="relative overflow-hidden">
					<img src="/img/vs-code-screenshot.png" alt="App screenshot" className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-muted-900/10" width={2432} height={1442} />
					<div className="relative" aria-hidden="true">
						<div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
					</div>
				</div>
				<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
					<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-muted-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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
							<Text heading="h2" size="md" className="text-brand">
								Track record
							</Text>
							<Text size="3xl" className="mt-2 font-bold sm:text-size-4xl">
								Trusted by thousands of devs worldwide
							</Text>
							<Text size="lg" className="mt-6 text-muted-700">
								Join the other thousands of developers that have taken the course and loved it.
							</Text>
						</div>
						<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
							{stats.map(stat => (
								<div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10">
									<Text size="sm" className="font-semibold text-muted-600" asChild>
										<dt>{stat.name}</dt>
									</Text>
									<Text size="3xl" asChild>
										<dd className="order-first font-semibold tracking-tight text-muted-900">{stat.value}</dd>
									</Text>
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
							I've worked with amazing people <Icon name="heart" className="h-10 w-10 text-brand" aria-hidden="true" />
						</Text>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
						<figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-muted-900/5 xl:col-start-2 xl:row-end-1">
							<blockquote className="p-12 text-muted-900">
								<Text size="xl" className="font-semibold tracking-tight">{`“${featuredTestimonial.body}”`}</Text>
							</blockquote>
							<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
								<img className="h-10 w-10 flex-none rounded-full bg-muted-50" src={featuredTestimonial.author.imageUrl} alt="Zachary Cassette" />
								<div className="flex-auto">
									<Text size="sm" className="font-semibold">
										{featuredTestimonial.author.name}
									</Text>
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
											<figure key={testimonial.author.name} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-muted-900/5">
												<blockquote>
													<Text size="sm" className="text-muted-900">{`“${testimonial.body}”`}</Text>
												</blockquote>
												<figcaption className="mt-6 flex items-center gap-x-4">
													<div>
														<Text size="sm" className="font-semibold">
															{testimonial.author.name}
														</Text>
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
			<BackgroundDiagonal>
				<Container className="py-32 sm:py-40">
					<div className="lg:flex lg:gap-x-10">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<Text heading="h1" size="4xl" className="mt-10 sm:text-size-6xl">
								Hi! I'm André Casal a seasoned full-stack web developer.
							</Text>
							<Text size="lg" className="mt-6 text-muted-700">
								With over 16 years of experience, my passion for coding and optimizing workflows led me to master VS Code, and now I'm excited to share my knowledge with you.
								As an enthusiastic educator, I'm dedicated to helping you succeed in your coding journey, and help you ship better products, delight your customers, and take
								your career to new heights.
							</Text>
							<div className="mt-10 flex items-center gap-x-6">
								<Button size="lg" asChild>
									<Link to="/mentorship">I want to master VS Code</Link>
								</Button>
							</div>
						</div>
						<div className="mt-16 sm:mt-24 lg:mt-0">
							<img src="/img/andre.jpg" alt="André Casal" className="aspect-[6/5] h-full rounded-2xl object-cover" />
						</div>
					</div>
				</Container>
			</BackgroundDiagonal>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:text-center">
						<Text heading="h2" size="md" className="text-brand">
							Easy to follow modules
						</Text>
						<Text size="3xl" className="mt-2 font-bold sm:text-size-4xl">
							Course structure
						</Text>
						<Text size="lg" className="mt-6 text-gray-600">
							The course is divided into easy-to-follow modules.
						</Text>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							{modules.map((module, i) => (
								<div key={module.name} className="flex flex-col">
									<dt className="flex items-baseline gap-x-3 text-base font-semibold leading-7 text-muted-900">
										<span className="text-size-4xl text-muted-200">{i + 1}</span> {module.name}
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">{module.description}</p>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</Container>
			<Container className="py-24 sm:py-32">
				<div className="mx-auto max-w-2xl sm:text-center">
					<Text heading="h2" size="3xl" className="mt-2 font-bold sm:text-size-4xl" id="pricing">
						Enroll now
					</Text>
					<Text size="lg" className="mx-auto mt-6 max-w-xl text-center text-muted-600">
						Gain instant access to the <strong>Mastery for VS Code</strong> course.
					</Text>
				</div>
				<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
					<div className="p-8 sm:p-10 lg:flex-auto">
						<Text heading="h3" size="2xl">
							Lifetime membership
						</Text>
						<Text size="md" className="mt-6 text-muted-600">
							Level up your coding skills and dominate the world of full-stack web development!
						</Text>
						<div className="mt-10 flex items-center gap-x-4">
							<Text heading="h4" size="sm" className="flex-none font-semibold text-brand">
								What’s included
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
									<a href="https://andrecasal.gumroad.com/l/vscode" target="_blank" rel="noopener noreferrer">
										I want to master VS Code
									</a>
								</Button>
								<Text size="xs" className="mt-6 text-muted-600">
									30-day money-back guarantee: I'm confident you'll love the course, but if you're not satisfied, I'll refund your payment – no questions asked.
								</Text>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="mx-auto max-w-4xl divide-y divide-muted-900/10 py-24 sm:py-32 lg:py-40">
					<Text heading="h2" size="2xl">
						Frequently asked questions
					</Text>
					<Accordion type="multiple" className="mt-10 space-y-6 divide-y divide-muted-900/10">
						{faqs.map(({ question, answer }, i) => (
							<AccordionItem key={i} value={i.toString()} className="pt-6">
								<AccordionTrigger className="flex w-full items-start justify-between text-left text-muted-900">
									<Text size="md" className="font-semibold">
										{question}
									</Text>
								</AccordionTrigger>
								<AccordionContent className="mt-2 pr-12">
									<Text size="md">{answer}</Text>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</Container>
			<Container>
				<div className="py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
						<Text heading="h2" size="md" className="text-brand">
							Closing Statement
						</Text>
						<Text heading="h2" size="4xl" className="mt-2 text-muted-900 sm:text-size-6xl">
							A note on excellency
						</Text>
						<Text size="lg" className="mt-6 text-muted-600">
							Have you ever spent a ton of time trying to do something simple with VS Code? Maybe you're missing something. Maybe there's a bug in one of your tools. Maybe
							there's a bug in VS Code. Do you remember how frustrating it was to spend all that time just to end up quitting, or realize it's a bug in one of your tools or VS
							Code itself, or you just had to do something differently?
						</Text>
						<Text size="md" className="mt-8">
							I remember once I needed to debug GCC-compiled threads. I spent several days until I realized I just had to change a little word in my launch.json configuration
							from "-gdb-set follow-fork-mode parent" to "-gdb-set follow-fork-mode child". Argh, it's so frustrating spending all that time for such little gains.
						</Text>
						<Text size="md" className="mt-8">
							For those of us who want to achieve excellence, this pain is worth it, because we know it compounds: I'll never again forget that command (or how to get it) if I
							ever need to debug GCC-compiled threads. But wouldn't it be great if you didn't have to go through that process, waste all that time, and just get the answer
							you're looking for immediately?
						</Text>
						<Text size="md" className="mt-8">
							That's where this course comes in. I'll show you everything you need to know about VS Code, the good and the bad - I know, I've recorded a video for every single
							one of its 600+ settings and that playlist was featured my Microsoft. After taking this course, you'll master VS Code. Besides having it configured like an
							efficient professional, you'll know exactly what VS Code can do, what it can't, and how to work around it.
						</Text>
						<Text size="md" className="mt-8">
							To your success! 🥂
						</Text>
						<img src={signature} alt="André Casal signature" className="mt-16" />
					</div>
				</div>
			</Container>
			<Container>
				<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
					<div className="relative isolate overflow-hidden bg-muted-50 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
						<BackgroundRadial>
							<Text heading="h2" size="3xl" className="mt-2 sm:text-size-4xl">
								Boost your VS Code productivity today.
							</Text>
							<Text size="lg" className="mx-auto mt-6 max-w-xl">
								Upgrade your coding game with <strong>the</strong> course on VS Code.
							</Text>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<Button size="lg" asChild>
									<Link to="#pricing">I want to boost my productivity</Link>
								</Button>
							</div>
						</BackgroundRadial>
					</div>
				</div>
			</Container>
		</>
	)
}

export default MasteryForVSCode
