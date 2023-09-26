import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import BackgroundDiagonal from './components/bg-diagonal.tsx'
import BackgroundBlur from './components/bg-blur.tsx'
import BackgroundSquareLines from './components/bg-square-lines.tsx'
import collegeLife from './images/college-life.jpg'
import andreOnMacBookPro from './images/andre-on-macbook-pro.png'
import goncaloBarreiros from './images/goncalo-barreiros.png'
import pauloJorge from './images/paulo-jorge.png'
import miguelFerreira from './images/miguel-ferreira.png'
import satisfactionGuarantee from './images/satisfaction-guarantee.png'
import signatureBlack from './images/signature-black.png'
import signatureWhite from './images/signature-white.png'
import { Heading } from './ui+/components/typography/heading.tsx'

const Tutoring = () => {
	const features = [
		{
			name: 'Easy Zoom calls',
			description: 'All you need to do is click a link at the time of the session.',
			icon: 'video',
		},
		{
			name: 'Free recordings',
			description: "I'll give you full lifetime access to a playlist containing all our calls.",
			icon: 'play',
		},
		{
			name: 'Whatsapp support',
			description: "I'll give you real-time Whatsapp support for any questions that can be quickly solved through texting.",
			icon: 'chat',
		},
		{
			name: 'Whatsapp support',
			description: "I'll give you real-time Whatsapp support for any questions that can be quickly solved through texting.",
			icon: 'chat',
		},
	]

	const featuredTestimonial = {
		body: "Before I started being tutored by André, I hated Assembly and Microprocessors. I was repeating his class for the third time and I felt like I was going to fail it once again. But after I started being tutored by André, I took a liking to what I was learning because I started to understand it, and it even became fun. For once, I actually felt confident! André is really nice and patient: he would draw diagrams and break them down for me, use other programming languages to help me see the connection between them and assembly, and everything was great! I had never had a teacher like this. When the exam result came back, I was baffled when I saw that I had went from failing this class two years in a row, to having a 16/20 as my grade. André's teaching method and dedication is, in my opinion, unbeatable.",
		author: {
			name: 'Gonçalo Barreiros',
			imageUrl: goncaloBarreiros,
		},
	}

	const testimonials = [
		[
			[
				{
					body: "My teachers introduced Arduino programming with small pieces of code. A little bit of code here and there. But they never explained things very well. They assumed we went looking for the missing pieces. I tried researching on the internet and talking to friends, but I couldn't find good resources on the internet and my friends were just as lost as I was. When I started the tutoring lessons with André, my grades increased exponentially. I've been with André for one year at this point, the current class is the second one we're doing together. In the first class, if I know anything about Arduino, it was because André taught me. I mean it! Not only did André taught me how to complete the Arduino projects, he taught me to the point where I could complete the exams on my own. And in terms of availability, André is top.",
					author: {
						name: 'Paulo Jorge',
						imageUrl: pauloJorge,
					},
				},
				{
					body: "I couldn't understand the class subject matter that was being given by the teachers. They weren't doing a good job and weren't giving us the necessary resources. I tried going to the university library, tried talking to colleagues that understood a little bit more of the class but it was of little help. The difference [between having and not having tutoring lessons] is that I wouldn't pass my exams. I have been getting results. It has been a good experience, I've been learning and improved.",
					author: {
						name: 'Miguel Ferreira',
						imageUrl: miguelFerreira,
					},
				},
				{
					body: 'Excellent tutor',
					author: {
						name: 'Jose Maria',
					},
				},
			],
			[
				{
					body: 'Hey André! I hope everything is fine! In the meanwhile, the grades have been published [...] The programming one was much better than I was expecting! [Screenshot with grades] Programming ended up being the best one ahah (he had a 17)',
					author: {
						name: 'Guilherme Echeverri',
					},
				},
				{
					body: "It's excellent to have tutoring sessions with André. I understand everything.",
					author: {
						name: 'Maria Isabel',
					},
				},
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
					body: 'I got the impression 2h was little time, and that Prof. André could have helped us more, if not for the exercises of my college being supposedly unconventional.',
					author: {
						name: 'Henrique Silvestre',
					},
				},
				{
					body: "It's perfect. Recommend 100%. Couldn't have found better. Very thankful for everything.",
					author: {
						name: 'Isabel Rodrigues',
					},
				},
				{
					body: 'Professional: competence and availability.',
					author: {
						name: 'Jaime Torrinhas',
					},
				},
			],
			[
				{
					body: 'André Casal is the most intelligent, hardworking, and caring tutor I know. If you want to receive the highest grade of help, use him.',
					author: {
						name: 'Mony Chhim',
					},
				},
				{
					body: "I'm very grateful for all your help: knowledge, availability, patience, and above all for your kindness. Thank you!",
					author: {
						name: 'Maria Ribeiro',
					},
				},
				{
					body: "André was very patient with me and explained everything very well. If I need help again... it's with him.",
					author: {
						name: 'Marcos Marcos',
					},
				},
				{
					body: 'A great tutor. Knows how to guide you step by step to solve problems. Very good experience overall.',
					author: {
						name: 'Miguel Lomba',
					},
				},
				{
					body: 'Helped a lot, was very patient, and interested in teaching and explaining the subject matter.',
					author: {
						name: 'Isabel Bozzato',
					},
				},
				{
					body: 'Beyond expectations!',
					author: {
						name: 'Helena Oliveira',
					},
				},
			],
		],
	]

	const stats = [
		{ name: 'Number of students', value: '540+' },
		{ name: 'Subjects taught', value: '51+' },
		{ name: 'Average grade', value: '16.4' },
		{ name: 'Success rate', value: '99.5%' },
	]

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ')
	}

	const navigation = {
		programming: [
			{ name: 'C, C++, C#, Java, PHP, Python' },
			{ name: 'Kotlin (Android)' },
			{ name: 'Swift (iOS)' },
			{ name: 'Clean Code' },
			{ name: 'Object-Oriented and Functional Programming' },
			{ name: 'Imperative and Declarative Programming' },
			{ name: 'Behavior- and Test-Driven Development' },
		],
		webdev: [
			{ name: 'HTML, CSS, JS' },
			{ name: 'The HTTP Protocol' },
			{ name: 'React, Vue, Angular' },
			{ name: 'Styled Components' },
			{ name: 'TailwindCSS' },
			{ name: 'Browser, Node, Deno APIs' },
			{ name: 'Express, Next, Remix' },
			{ name: 'REST and GraphQL APIs' },
			{ name: 'Git & GitHub' },
			{ name: 'Databases (SQL, SQLite, Mongo)' },
		],
		computerscience: [
			{ name: 'Digital Systems' },
			{ name: 'Computer Architecture and Organization' },
			{ name: 'Assembly (x86, x86-64, ARM, MIPS)' },
			{ name: 'Operating Systems' },
			{ name: 'Computer Networks' },
			{ name: 'Data Structures' },
			{ name: 'Algorithms' },
		],
		math: [{ name: 'Algebra' }, { name: 'Mathematical Analysis' }, { name: 'Calculus' }, { name: 'Numerical Analysis' }],
	}

	const includedFeatures = ['Studying together', 'Removing your doubts', 'Solving hard challenges', 'Helping with projects']

	const singleSessionFeatures = ['Studying together', 'Removing your doubts', 'Solving hard challenges', 'Helping with projects']

	return (
		<>
			<Container className="relative">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-20">
					<div className="pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:pb-56 lg:pt-48 xl:col-span-6">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<Heading as="h1" size="4xl" className="mt-24 sm:mt-10">
								Tutoring
							</Heading>
							<Text size="lg" className="mt-6 text-muted-600">
								I've been tutoring college students on computer science for over 16 years. I've helped hundreds of students get through their classes and graduate. I can help
								you too.
							</Text>
							<div className="mt-10 flex items-center gap-x-6">
								<Button variant="primary" asChild>
									<a href="https://calendly.com/d/dtz-m4z-kxh" target="_blank" rel="noreferrer">
										I want an awesome tutor
									</a>
								</Button>
							</div>
						</div>
					</div>
					<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
						<img className="aspect-[3/2] w-full rounded-2xl bg-muted-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src={collegeLife} alt="College life" />
					</div>
				</div>
			</Container>
			<Container className="py-32">
				<div className="max-w-3xl text-muted-700">
					<Text size="md" weight="semibold" className="text-brand">
						I understand the
					</Text>
					<Heading as="h2" size="3xl" className="mt-2 text-muted-900">
						College life
					</Heading>
					<Text size="xl" className="mt-6 leading-8">
						Ok, so you're in college and you don't want to be disrespected, shamed, or humiliated by your peers. Much less by your teachers. Having gone through college and been
						a tutor for more than 16 years, I know how you feel. You feel like your teachers don't care enough, your colleagues are just as lost as you, and going to the library
						won't magically make your grades go up. Besides, spending more time reading the recommended books won't help because you can't lose any more time and you're already
						sleeping less than what would be healthy.
					</Text>
					<div className="mt-10 max-w-2xl">
						<Text>
							You might have even tried tutoring centers. I remember having gone to this tutoring center for Calculus when I was in high school. I packed my backpack, left home
							one hour before, arrived at the center, and started studying. We would pay 30€/hour for a teacher in a room full of students. During the two hours I was there, I
							was able to ask exactly two questions to the teacher, whose answers were short and too hurried to understand anything useful. I get it, the teacher wanted to
							spread her time across all the students. I remember asking myself "is it worth it to lose two hours to come and go, pay 30€/hour to come study here, and just get
							the teacher's attention twice in two hours? For this, I might as well study at home!"
						</Text>
						<Text className="mt-8">
							After that, I tried a private math tutor. He knew the subject matter, but couldn't bridge my knowledge to his knowledge. He couldn't understand which background
							knowledge I was missing to understand the current concepts, so he mechanistically repeated the same answers that I wouldn't be able to understand until he gave me
							the background knowledge required. It was frustrating.
						</Text>
						<Text className="mt-6">
							Are you looking for a better solution to improve your grades, and feel proud of yourself and the things you'll be able to accomplish? That's why I'm here. To help
							you dominate the subject matter, deliver well-made projects on time, and get top grades with tutoring dedicated to you!
						</Text>
						<Heading as="h3" size="2xl" className="mt-16 text-muted-900">
							From beginner to expert
						</Heading>
						<Text className="mt-10">
							Imagine yourself commanding the respect and admiration of your parents, teachers, and colleagues. Wow, son, you're doing well in college! Imagine your teachers:
							guys, if you have questions direct them to him, he knows this stuff! Imagine your colleagues recognizing your knowledge, and asking for study sessions with you!
						</Text>
					</div>
					<div className="mt-44 max-w-2xl">
						<Text size="md" weight="semibold" className="text-brand">
							How it feels like
						</Text>
						<Heading as="h2" size="3xl" className="mt-2 text-muted-900">
							Working with me
						</Heading>
						<figure className="mt-16">
							<img className="aspect-video rounded-xl bg-muted-50 object-cover" src={andreOnMacBookPro} alt="André on a Zoom call with a student" />
							<figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-muted-500">André on a Zoom call with a student.</figcaption>
						</figure>
						<Text className="mt-6">
							Imagine this: your teacher asks you a question that he knows no student would be able to answer. But you have a secret weapon - tutoring lessons with an expert
							tutor with excellent communication skills. As you start to thoroughly and beautifully answer your teacher's question, your colleagues start to look at you in awe
							and you see a smile of approval begin to form on your teacher's lips. When you're done there's a pause while the shock of your answer subsides. You feel a rush of
							adrenaline as the awareness that everyone is now looking at you hits you. You chuckle and your teacher says “Guys, make friends with him, he's going places!”
						</Text>
						<Text className="mt-8">
							During the rest of the class, all your colleagues will be thinking you'd be a good friend to have. Trust me, you won't have any problems making friends. Your
							biggest problem will be to distinguish the ones who appreciate you for your intelligence from those who just want to take advantage of you.
						</Text>
						<Text className="mt-8">
							You're doing the exams. Confident. Focused. Your colleagues struggle to remember the concepts they need to answer the questions. You completely blaze through the
							memorization questions the teacher posed, knowing every single answer by heart. A great start makes you feel even more confident and allows you more time to
							answer all the questions and revise your answers after you're done. Still, 10 minutes left on the clock. You turn in your exam early, feeling proud of yourself
							and everything you're achieving! You leave the exam room, take your phone out and dial your parent's phone number.
							<ul className="max-w-md list-inside list-disc space-y-1">
								<li>Hello, son?</li>
								<li>Nailed it!</li>
							</ul>
						</Text>
						<Text className="mt-8">
							How is this possible? Because I'll give you my own researched and scientifically proven method for memorizing anything important. Plus I'll connect to you, at
							your current level of knowledge, and help you bridge the gap between where you are now and where you need to be to pass the exams like it was first-grade math.
							You'll be able to have tutoring sessions just for yourself or for your group.
						</Text>
					</div>
					<div className="mt-16 max-w-2xl">
						<h3 className="text-2xl font-bold tracking-tight text-muted-900">I dedicate myself to my students</h3>
						<Text className="mt-6">
							You're studying in the library with your colleagues and find a problem you can't solve. You ask your colleagues but no one knows the answer. You're blocked. You
							open your browser and search on Google. You know the solution is easy if you just have the right knowledge, but you just can't find the answer online. But you
							remember you have a trusted tutor always by your side! You take your phone, open WhatsApp, and write a quick message. A minute later you receive a clear
							explanation that exactly answers the doubt you had. You feel relieved and thankful for being able to carry on studying without bumps in the road.
						</Text>
						<Text className="mt-6">
							The average rate of passing grades of my more than 600 students is 98,75%. I dedicate myself to my students and I'm relentless when it comes to making sure
							they're having access to the right knowledge. Besides the tutoring sessions themselves, I'll give you support through WhatsApp so that you can keep on studying
							and have a smooth experience without bumps in the road - as long as those are questions easily answered by text message. Otherwise, it would make more sense to
							schedule a tutoring session, of course. During tutoring sessions, you'll also have real-time comments on the work you're doing.
						</Text>
					</div>
				</div>
			</Container>
			<Container className="py-24 sm:py-32">
				<div className="mx-auto max-w-2xl lg:text-center">
					<Heading as="h2" size="md" align="center" className="text-brand">
						Everything you need to be a
					</Heading>
					<Text size="3xl" weight="bold" className="mt-2 text-muted-900">
						Successful student
					</Text>
					<Text size="lg" className="mt-6 text-muted-600">
						You'll learn how to organize your time, material, and study sessions, so that you can deliver them on time and with the quality you need to get top grades.
					</Text>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						{features.map(feature => (
							<div key={feature.name} className="flex max-w-xl flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-muted-900">
									<Icon name={feature.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-600">
									<Text className="flex-auto">{feature.description}</Text>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</Container>
			<BackgroundDiagonal>
				<Container className="py-32 sm:py-40">
					<div className="lg:flex lg:gap-x-10">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<Heading as="h1" size="4xl" className="mt-10">
								About André
							</Heading>
							<Text size="lg" className="mt-6 text-muted-700">
								André has been working as a software engineer, for more than 16 years, with companies like Calouste Gulbenkian Foundation, American TV network NBC, and energy
								drink Monster Energy. He has provided technical direction to countless startups, and managed teams of over 20 people. Currently, he helps other software
								engineers to improve their careers through mentoring and his online courses, which have been featured by Microsoft. Teaching has always been one of his
								passions, and that is why throughout his career he has consulted, mentored, and tutored with remarkable reviews.
							</Text>
						</div>
						<div className="mt-16 sm:mt-24 lg:mt-0">
							<img src="/img/andre.jpg" alt="André Casal" className="aspect-[6/5] h-full rounded-2xl object-cover" />
						</div>
					</div>
					<div className="max-w-2xl">
						<Text className="mt-8">André is part of Noumena's Advisory Council, hosts Tech Jobs Fair Lisbon, and is launching a Software Engineering School.</Text>
						<Text className="mt-8">
							Besides tech, entrepreneurship, and business, André also has a deep interest in teaching practical introspection and (nonviolent) communication skills. He feels
							that, to a large degree, the quality of your mind determines the quality of your life, and he's passionate about personal transformation and development.
						</Text>
					</div>
				</Container>
			</BackgroundDiagonal>
			<BackgroundBlur>
				<Container>
					<div className="py-32">
						<div className="mx-auto max-w-2xl text-center">
							<Heading as="h2" size="md" align="center" className="text-brand">
								Testimonials
							</Heading>
							<Text size="3xl" weight="bold" className="mt-2">
								I've worked with amazing people <Icon name="heart" className="h-10 w-10 text-brand" aria-hidden="true" />
							</Text>
						</div>
						<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
							<figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-background sm:shadow-lg sm:ring-1 sm:ring-muted-900/5 xl:col-start-2 xl:row-end-1">
								<blockquote className="p-12 text-muted-900">
									<Text size="xl" weight="semibold" className="tracking-tight">{`“${featuredTestimonial.body}”`}</Text>
								</blockquote>
								<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
									<img className="h-10 w-10 flex-none rounded-full bg-muted-50" src={featuredTestimonial.author.imageUrl} alt="" />
									<div className="flex-auto">
										<Text size="sm" weight="semibold">
											{featuredTestimonial.author.name}
										</Text>
										<div className="flex gap-0.5">
											{Array(5)
												.fill(null)
												.map((_value, i) => (
													<Icon key={i} name="star" className="text-size-lg text-brand" />
												))}
										</div>
									</div>
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
											{column.map((testimonial, i) => (
												<figure key={i} className="rounded-2xl bg-background p-6 shadow-lg ring-1 ring-muted-900/5">
													<blockquote>
														<Text size="sm" className="text-muted-900">{`“${testimonial.body}”`}</Text>
													</blockquote>
													<figcaption className="mt-6 flex items-center gap-x-4">
														{'imageUrl' in testimonial.author ? (
															<img className="h-10 w-10 rounded-full bg-muted-50" src={testimonial.author.imageUrl} alt={testimonial.author.name} />
														) : null}
														<div>
															<Text size="sm" weight="semibold">
																{testimonial.author.name}
															</Text>
															<div className="flex gap-0.5">
																{Array(5)
																	.fill(null)
																	.map((_value, i) => (
																		<Icon key={i} name="star" className="text-size-lg text-brand" />
																	))}
															</div>
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
			<BackgroundSquareLines>
				<Container className="py-24 sm:py-32">
					<div className="lg:flex lg:items-center lg:gap-x-10 lg:pt-40">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<Heading as="h2" size="3xl" className="mt-10 max-w-xl text-muted-900">
								The subjects I teach
							</Heading>
							<Text size="lg" className="mt-6 text-muted-600">
								I've been teaching computer science and software engineering for more than 16 years, so I've mastered quite a few subjects. Below you can find a
								non-exhaustive list of the subjects I can help you with.
							</Text>
							<div className="mt-10 flex items-center gap-x-6"></div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
						{stats.map(stat => (
							<div key={stat.name} className="py-6">
								<Text size="sm" weight="medium" className="leading-6 text-muted-400">
									{stat.name}
								</Text>
								<Text className="mt-2 flex items-baseline gap-x-2">
									<Text as="span" size="4xl" weight="semibold" className="tracking-tight">
										{stat.value}
									</Text>
								</Text>
							</div>
						))}
					</div>
				</Container>
			</BackgroundSquareLines>
			<Container>
				<div className="xl:grid xl:grid-cols-2 xl:gap-8">
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<Heading as="h3" size="md">
									Programming
								</Heading>
								<ul className="mt-6 space-y-4">
									{navigation.programming.map(item => (
										<li key={item.name}>
											<Text as="span" size="sm">
												{item.name}
											</Text>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<Heading as="h3" size="md">
									Web Development
								</Heading>
								<ul className="mt-6 space-y-4">
									{navigation.webdev.map(item => (
										<li key={item.name}>
											<Text as="span" size="sm">
												{item.name}
											</Text>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<Heading as="h3" size="md">
									Computer Science
								</Heading>
								<ul className="mt-6 space-y-4">
									{navigation.computerscience.map(item => (
										<li key={item.name}>
											<Text as="span" size="sm">
												{item.name}
											</Text>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<Heading as="h3" size="md">
									Math
								</Heading>
								<ul className="mt-6 space-y-4">
									{navigation.math.map(item => (
										<li key={item.name}>
											<Text as="span" size="sm">
												{item.name}
											</Text>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container className="pt-44">
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl sm:text-center">
						<Heading as="h2" size="3xl" align="center" className="mt-2 font-bold" id="pricing">
							Simple no-tricks pricing
						</Heading>
						<Text size="lg" align="center" className="mx-auto mt-6 max-w-xl text-muted-600">
							I charge 40€ per hour. The payments are done per session.
							<br />
							Here are the most common plans mentees go for.
						</Text>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<Heading as="h3" size="2xl">
								Continuous tutoring (4h/week)
							</Heading>
							<Text size="md" className="mt-6 text-muted-600">
								This is the most popular plan for students wanting <strong>excellent grades</strong>.<br /> Chat is always available.
							</Text>
							<div className="mt-10 flex items-center gap-x-4">
								<Heading as="h4" size="sm" className="flex-none font-semibold text-brand">
									We can use this time for
								</Heading>
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
									<Text size="md" weight="semibold" className="text-muted-600">
										Pay once a month
									</Text>
									<Text className="mt-6 flex items-baseline justify-center gap-x-2">
										<Text as="span" size="4xl" weight="bold">
											€640
										</Text>
										<Text as="span" size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Text>
									</Text>
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
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<Heading as="h3" size="2xl">
								Single session
							</Heading>
							<Text size="md" className="mt-6 text-muted-600">
								Need help with a <strong>single project</strong> or <strong>exams</strong>?<br />
								Schedule however many of these sessions you want.
							</Text>
							<div className="mt-10 flex items-center gap-x-4">
								<Heading as="h4" size="sm" className="flex-none font-semibold text-brand">
									We can use this time for
								</Heading>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{singleSessionFeatures.map(feature => (
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
									<Text size="md" weight="semibold" className="text-muted-600">
										Pay per hour
									</Text>
									<Text className="mt-6 flex items-baseline justify-center gap-x-2">
										<Text as="span" size="4xl" weight="bold">
											€40
										</Text>
										<Text as="span" size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Text>
									</Text>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://calendly.com/d/dtz-m4z-kxh" target="_blank" rel="noopener noreferrer">
											Schedule a tutoring session
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container className="pt-14">
				<div className="py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
						<Heading as="h2" size="4xl" className="mt-10 text-muted-900">
							Satisfaction Guaranteed
						</Heading>
						<Text size="lg" className="mt-6 text-muted-600">
							I'm sure you'll love the tutoring sessions with me. In the remote possibility of you not liking them - and I'm proud to say that in 16 years of tutoring, no one
							has ever asked for their money back - I'll give you your money back.
						</Text>
					</div>
					<div className="mt-16 rounded-xl bg-brand p-40 sm:mt-24 lg:mt-0">
						<img src={satisfactionGuarantee} alt="Satisfaction Guarantee stamp" />
					</div>
				</div>
			</Container>
			<Container className="pt-14">
				<div className="py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
						<Heading as="h2" size="4xl" className="mt-10 max-w-lg text-muted-900">
							A note to you
						</Heading>
						<Text size="lg" className="mt-6 text-muted-600">
							I just want to thank you for taking the time to read about my tutoring service. It continues to be a tremendous honor to have so many students trust me to help
							them find a better way of going through college. I sincerely hope you decide to get tutoring lessons, even if not with me, because I know it to be such a good
							decision.
						</Text>
						<Text size="lg" className="mt-6 text-muted-600">
							To your success! 🥂
						</Text>
					</div>
					<div className="mt-16 rounded-xl p-8 sm:mt-24 lg:mt-0">
						<img src={signatureBlack} alt="André Casal signature" className="mt-16 dark:hidden" />
						<img src={signatureWhite} alt="André Casal signature" className="mt-16 hidden dark:block" />
					</div>
				</div>
			</Container>
		</>
	)
}

export default Tutoring
