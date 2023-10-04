import { Icon } from '~/components/ui/icon.tsx'
import { Container } from '../ui+/components/layout/container.tsx'
import { Heading } from '../ui+/components/typography/heading.tsx'
import { Text } from '../ui+/components/typography/text.tsx'
import { Tabs } from '../ui+/components/ui/tabs.tsx'
import { Link } from '@remix-run/react'
import BackgroundBlur from '../components/bg-blur.tsx'
import { Grid } from '../ui+/components/layout/grid.tsx'
import { cn } from '~/utils/tailwind-merge.ts'
import { Flex } from '../ui+/components/layout/flex.tsx'
import { Button } from '~/components/ui/button.tsx'
import shipFastImage from './shipfast.png'
import arrow from './arrow.png'

const ShipFast = () => {
	const tiers = [
		{
			soon: false,
			name: 'Presale',
			id: 'tier-presale',
			href: 'https://buy.stripe.com/eVa9B31Mqa811C8eUV',
			price: '149',
			discounted: '49',
			description: 'Get an awesome discount price before it launches 🚀',
			features: [
				'Remix boilerplate',
				'Transactional and marketing emails',
				'Payment integration',
				'Authentication',
				'Database',
				'SEO',
				'Styling',
				'CD/CI pipeline',
				'Analytics',
				'Monitoring',
				'Lifetime updates',
				'Discord community',
				'...and much more',
			],
			lacks: [],
			mostPopular: true,
		},
		/* {
			soon: true,
			name: 'Starter',
			id: 'tier-starter',
			href: '#',
			price: '229',
			description: 'The essentials to get your startup off the ground.',
			features: [
				'Remix boilerplate',
				'Transactional and marketing emails',
				'Payment integration',
				'Authentication',
				'Database',
				'SEO',
				'Styling',
				'CD/CI pipeline',
				'Analytics',
				'Monitoring',
				'...and much more',
			],
			lacks: ['Lifetime updates', 'Discord community'],
			mostPopular: false,
		},
		{
			soon: true,
			name: 'Pro',
			id: 'tier-professional',
			href: '#',
			price: '249',
			description: 'For the pros who want to ship fast, high-quality apps.',
			features: [
				'Remix boilerplate',
				'Transactional and marketing emails',
				'Payment integration',
				'Authentication',
				'Database',
				'SEO',
				'Styling',
				'CD/CI pipeline',
				'Analytics',
				'Monitoring',
				'Lifetime updates',
				'Discord community',
				'...and much more',
			],
			mostPopular: false,
		}, */
	]

	const faqs = [
		{
			question: 'What do I get exactly?',
			answer: 'A Remix Stack with all the tools you need to build your startup. From idea to production in 5 minutes.',
		},
		{
			question: 'Can I get a refund?',
			answer: 'Yes! If you bought the presale, you can get a refund within 30 days after the launch. If you bought the Starter or Pro tiers, you can get a refund within 30 days after your purchase.',
		},
		{
			question: 'JavaScript or TypeScript',
			answer: 'All code is 100% TypeScript.',
		},
		{
			question: 'My tech stack is different, can I still use this?',
			answer: 'One of the main points of this stack is that it is opinionated with great defaults, so you do not have to spend time overthinking what tech you need. This means you have to learn the tools you are not yet familiar with. External services are modular though, so you can easily swap out MailerLite for ConvertKit, for example.',
		},
		{
			question: 'Is it a website template?',
			answer: 'It comes with all the pages you need to get started, but it is not a template. It comes integrated with andrecasal/ui: an accessible UI library with all the lego pieces you need to build your app.',
		},
		{
			question: 'I can build this myself, why should I buy it?',
			answer: 'True. While you are spending time configuring tools and services for your app, others are launching theirs.',
		},
		{
			question: 'How often is the stack updated?',
			answer: 'I update the stack regularly with new features and improvements. You will get lifetime updates.',
		},
		{
			question: 'How do I keep up with updates?',
			answer: 'When you create a new project with ShipFast, a bunch of code is generated for you. This code is completely yours and there is no way to update it other than making manual changes. This is both a good thing and a bad thing. It is good in the sense that you can tweak it to fit your specific use cases. But it is a challenge because as ShipFast gets improvements there is no way to get those automatically. You would have to keep up with the commits and update your code manually. This being said, you should not feel compelled to keep up-to-date with the latest ShipFast. If what you are using is working fine for you, then just keep going with it - you will get the latest features every time you launch a new project.',
		},
	]

	return (
		<>
			<Container>
				<section className="mx-auto flex flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:items-start lg:gap-20 lg:py-20">
					<div className="flex flex-col items-center justify-center gap-10 text-center lg:items-start lg:text-left">
						<Heading as="h1" align="center" className="mx-auto max-w-3xl">
							<span className="whitespace-nowrap">Ship your startup</span>{' '}
							<span className="whitespace-nowrap">
								in days,
								<span className="inline-block -rotate-2 bg-brand/40 px-2">not weeks</span>
							</span>
						</Heading>
						<div>
							<Text size="md" className="mx-auto max-w-3xl text-muted-700">
								The <strong>Remix stack</strong> with all you need to build your full-stack web app. From idea to production in <strong>5 minutes</strong>.
							</Text>
						</div>
						<Flex justify="center" className="mt-10 w-full">
							<Button size="lg" asChild>
								<Link to="#pricing">Get ShipFast ⚡️</Link>
							</Button>
						</Flex>
					</div>
					<div className="rounded-2xl pb-3 dark:bg-slate-200 max-md:-m-4 lg:w-full">
						<img src={shipFastImage} alt="Logo could for tech used in ShipFast" width={1080} height={1080} className="w-full" />
					</div>
				</section>

				<section className="flex flex-wrap items-center justify-center gap-4 p-8 md:gap-8 md:p-12">
					<span className="text-xs opacity-50">Featured on</span>
					{/* <a
						href=""
						target="_blank"
						rel="noreferrer"
						title="Featured on Product Hunt"
						className="flex cursor-pointer items-center gap-3 opacity-80 saturate-0 duration-100 hover:opacity-100 hover:saturate-100"
					>
						<svg className="fill-base-content w-10" viewBox="0 0 219 219" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_176_3)">
								<path
									d="M218.991 109.5C218.991 169.999 170.037 219 109.596 219C49.1552 219 0.200928 169.999 0.200928 109.5C0.200928 49.0012 49.1552 0 109.596 0C170.037 0 218.991 49.0012 218.991 109.5Z"
									fill="#DA552F"
								></path>
								<path
									d="M124.182 109.5H93.1866V76.65H124.182C133.207 76.65 140.591 84.0413 140.591 93.075C140.591 102.109 133.207 109.5 124.182 109.5ZM124.182 54.75H71.3076V164.25H93.1866V131.4H124.182C145.332 131.4 162.47 114.245 162.47 93.075C162.47 71.905 145.332 54.75 124.182 54.75Z"
									fill="white"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_176_3">
									<rect width="935" height="219" fill="white"></rect>
								</clipPath>
							</defs>
						</svg>
						<span>Product Hunt</span>
					</a> */}
					<a
						href="https://x.com/theandrecasal/status/1707415504292315397?s=20"
						target="_blank"
						rel="noreferrer"
						title="Featured on X.com"
						className="group flex cursor-pointer items-center gap-3 opacity-80 saturate-0 duration-100 hover:opacity-100 hover:saturate-100"
					>
						<svg
							className="fill-base-content w-10 cursor-pointer opacity-80 saturate-0 group-hover:opacity-100 group-hover:saturate-100"
							viewBox="0 0 252 252"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_177_29)">
								<path
									d="M126 250.793C195.036 250.793 251 194.875 251 125.897C251 56.9181 195.036 1 126 1C56.9644 1 1 56.9181 1 125.897C1 194.875 56.9644 250.793 126 250.793Z"
									fill="black"
									stroke="white"
									stroke-miterlimit="10"
								></path>
								<path
									d="M48.9999 53.5352L108.748 133.357L48.6233 198.256H62.1561L114.797 141.435L157.327 198.256H203.377L140.265 113.945L196.23 53.5352H182.697L134.219 105.865L95.0494 53.5352H48.9999ZM68.9004 63.4941H90.0554L183.474 188.297H162.319L68.9004 63.4941Z"
									fill="white"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_177_29">
									<rect width="252" height="252" fill="white"></rect>
								</clipPath>
							</defs>
						</svg>
						<span>X.com</span>
					</a>
					{/* <a
						href=""
						target="_blank"
						rel="noreferrer"
						title="Featured on Reddit"
					>
						<svg
							className="fill-base-content w-[5.5rem] cursor-pointer opacity-80 saturate-0 duration-100 hover:opacity-100 hover:saturate-100 md:w-24"
							viewBox="0 0 644 214"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_180_2)">
								<path
									d="M627.075 157.051V97.6266H633.795C634.727 97.7109 635.666 97.5995 636.552 97.2996C637.439 96.9997 638.253 96.518 638.942 95.8851C639.631 95.2523 640.181 94.4824 640.556 93.6247C640.931 92.767 641.123 91.8405 641.119 90.9044V90.7028C641.231 89.7931 641.155 88.8701 640.897 87.9906C640.639 87.1111 640.204 86.2937 639.619 85.5886C639.034 84.8834 638.311 84.3055 637.494 83.8902C636.677 83.475 635.784 83.2312 634.87 83.1739H627.075V72.0822C627.084 70.0116 626.315 68.0133 624.922 66.4822C623.528 64.9512 621.611 63.999 619.55 63.8139C617.432 63.6844 615.349 64.395 613.752 65.7918C612.154 67.1885 611.172 69.1588 611.016 71.2755V83.3083H604.297C603.365 83.2241 602.426 83.3354 601.54 83.6353C600.653 83.9352 599.839 84.417 599.15 85.0498C598.46 85.6826 597.911 86.4525 597.536 87.3102C597.161 88.1679 596.969 89.0945 596.973 90.0305V90.5011C596.861 91.4108 596.937 92.3337 597.195 93.2132C597.452 94.0927 597.887 94.9101 598.473 95.6153C599.058 96.3204 599.781 96.8984 600.598 97.3136C601.415 97.7289 602.308 97.9727 603.222 98.03H610.815V157.253C610.815 159.374 611.657 161.409 613.157 162.909C614.656 164.409 616.69 165.252 618.811 165.252C620.921 165.362 622.989 164.632 624.563 163.221C626.137 161.811 627.088 159.834 627.21 157.723C627.235 157.491 627.188 157.256 627.075 157.051Z"
									fill="#D7DADC"
								></path>
								<path
									d="M577.554 83.3755C585.422 83.3755 591.799 76.9951 591.799 69.1244C591.799 61.2537 585.422 54.8733 577.554 54.8733C569.687 54.8733 563.31 61.2537 563.31 69.1244C563.31 76.9951 569.687 83.3755 577.554 83.3755Z"
									fill="#FF4500"
								></path>
								<path
									d="M585.483 98.5005C585.483 96.379 584.641 94.3443 583.141 92.8441C581.642 91.3439 579.608 90.5011 577.487 90.5011C575.367 90.5011 573.333 91.3439 571.833 92.8441C570.334 94.3443 569.491 96.379 569.491 98.5005V157.051C569.491 159.173 570.334 161.207 571.833 162.708C573.333 164.208 575.367 165.051 577.487 165.051C579.608 165.051 581.642 164.208 583.141 162.708C584.641 161.207 585.483 159.173 585.483 157.051V98.5005Z"
									fill="#D7DADC"
								></path>
								<path
									d="M467.223 53.9994C467.223 51.8779 466.381 49.8432 464.881 48.343C463.382 46.8428 461.348 46 459.227 46C457.107 46 455.073 46.8428 453.573 48.343C452.074 49.8432 451.232 51.8779 451.232 53.9994V89.7617C448.596 87.1123 445.451 85.0254 441.986 83.6273C438.521 82.2292 434.809 81.5489 431.074 81.6278C410.244 81.6278 392.841 100.786 392.841 124.314C392.841 147.842 409.706 167 430.805 167C434.654 167.094 438.483 166.411 442.062 164.99C445.641 163.569 448.897 161.441 451.635 158.732C451.92 159.74 452.403 160.682 453.057 161.501C453.711 162.32 454.522 163 455.442 163.501C456.362 164.002 457.373 164.314 458.416 164.418C459.458 164.523 460.511 164.418 461.512 164.109C463.062 163.643 464.436 162.72 465.455 161.461C466.474 160.202 467.09 158.665 467.223 157.051V53.9994ZM430.738 151.136C418.441 151.136 408.43 139.237 408.43 124.247C408.43 109.256 418.374 97.3578 430.738 97.3578C443.101 97.3578 452.979 109.323 452.979 124.247C452.979 139.17 443.101 150.799 430.805 150.799L430.738 151.136Z"
									fill="#D7DADC"
								></path>
								<path
									d="M550.812 53.9994C550.812 51.8779 549.969 49.8432 548.47 48.343C546.97 46.8428 544.936 46 542.816 46C541.769 46 540.732 46.2073 539.766 46.6102C538.799 47.013 537.922 47.6033 537.185 48.347C536.448 49.0907 535.865 49.9731 535.471 50.9433C535.076 51.9134 534.878 52.9521 534.887 53.9994V89.7617C532.242 87.1248 529.095 85.0461 525.633 83.6489C522.17 82.2517 518.462 81.5644 514.729 81.6278C493.899 81.6278 476.496 100.786 476.496 124.314C476.496 147.842 493.294 167 514.393 167C518.287 167.131 522.167 166.465 525.795 165.043C529.423 163.622 532.722 161.474 535.492 158.732C535.776 159.74 536.26 160.682 536.914 161.501C537.568 162.32 538.379 163 539.299 163.501C540.219 164.002 541.23 164.314 542.272 164.418C543.315 164.523 544.368 164.418 545.369 164.109C546.924 163.651 548.303 162.73 549.323 161.47C550.343 160.209 550.956 158.668 551.08 157.051L550.812 53.9994ZM514.326 151.136C502.029 151.136 492.085 139.237 492.085 124.247C492.085 109.256 501.962 97.3578 514.326 97.3578C526.689 97.3578 536.567 109.323 536.567 124.247C536.567 139.17 526.689 150.799 514.393 150.799L514.326 151.136Z"
									fill="#D7DADC"
								></path>
								<path
									d="M376.043 129.624C378.689 129.809 381.3 128.936 383.303 127.197C385.306 125.458 386.537 122.994 386.726 120.348V119.339C386.673 117.419 386.448 115.506 386.054 113.626C384.429 104.88 379.878 96.9483 373.15 91.1333C366.422 85.3183 357.916 81.9662 349.031 81.6278C328.201 81.6278 310.798 100.786 310.798 124.314C310.798 147.842 327.933 167 349.031 167C354.551 167.205 360.049 166.205 365.143 164.069C370.237 161.933 374.805 158.712 378.529 154.631C379.263 153.828 379.831 152.889 380.201 151.866C380.571 150.843 380.736 149.758 380.686 148.671C380.636 147.585 380.372 146.519 379.91 145.534C379.448 144.55 378.796 143.666 377.991 142.934L377.252 142.329C375.609 141.307 373.671 140.864 371.747 141.071C369.823 141.278 368.024 142.124 366.636 143.472C361.923 148.108 355.637 150.796 349.031 151.001C343.462 150.571 338.221 148.193 334.228 144.284C330.235 140.376 327.745 135.186 327.193 129.624H376.043ZM349.166 97.6267C354.072 97.964 358.739 99.8715 362.478 103.067C366.217 106.263 368.829 110.578 369.928 115.373H328.134C329.236 110.567 331.858 106.245 335.611 103.048C339.363 99.8513 344.046 97.95 348.964 97.6267H349.166Z"
									fill="#D7DADC"
								></path>
								<path
									d="M311.604 89.8962C311.613 87.9899 310.94 86.1433 309.709 84.689C308.477 83.2347 306.766 82.2683 304.885 81.9639C299.583 81.0237 294.127 81.4979 289.066 83.3389C284.005 85.18 279.519 88.3227 276.059 92.4506V91.3751C275.876 89.3714 274.951 87.5086 273.465 86.1523C271.979 84.796 270.041 84.044 268.03 84.044C266.018 84.044 264.08 84.796 262.594 86.1523C261.109 87.5086 260.184 89.3714 260 91.3751V157.051C259.975 159.133 260.736 161.148 262.131 162.694C263.526 164.239 265.453 165.201 267.526 165.387C269.625 165.516 271.692 164.813 273.276 163.429C274.861 162.044 275.837 160.091 275.992 157.992C276.025 157.679 276.025 157.364 275.992 157.051V123.44C275.811 120.238 276.264 117.032 277.326 114.005C278.387 110.979 280.037 108.193 282.178 105.806C284.32 103.42 286.912 101.48 289.806 100.1C292.7 98.7192 295.838 97.9244 299.039 97.7612C300.248 97.694 301.459 97.694 302.668 97.7612H304.28C306.265 97.6093 308.12 96.7161 309.477 95.259C310.834 93.802 311.593 91.8876 311.604 89.8962Z"
									fill="#D7DADC"
								></path>
							</g>
							<path
								d="M105.5 211C163.766 211 211 163.766 211 105.5C211 47.234 163.766 0 105.5 0C47.234 0 0 47.234 0 105.5C0 163.766 47.234 211 105.5 211Z"
								fill="#FF4500"
							></path>
							<path
								d="M175.869 105.5C175.761 102.53 174.796 99.6555 173.09 97.2221C171.384 94.7887 169.011 92.9006 166.257 91.7855C163.503 90.6703 160.484 90.3757 157.566 90.9372C154.648 91.4987 151.955 92.8923 149.811 94.95C137.809 86.7918 123.702 82.2847 109.193 81.9735L116.051 49.0575L138.628 53.805C138.896 56.2999 140.045 58.6174 141.868 60.3416C143.691 62.0658 146.069 63.0837 148.575 63.2126C151.081 63.3416 153.551 62.5731 155.542 61.0451C157.532 59.5171 158.913 57.3297 159.436 54.8755C159.959 52.4214 159.59 49.8611 158.395 47.6544C157.201 45.4477 155.259 43.7389 152.918 42.835C150.577 41.931 147.991 41.8909 145.623 42.722C143.256 43.553 141.262 45.2008 139.999 47.3695L114.152 42.2C113.729 42.1073 113.292 42.0993 112.866 42.1767C112.441 42.2541 112.034 42.4152 111.671 42.6507C111.308 42.8862 110.995 43.1915 110.751 43.5487C110.507 43.906 110.336 44.3082 110.248 44.732L102.441 81.3405C87.7545 81.5619 73.4529 86.0724 61.2964 94.317C59.67 92.7867 57.7303 91.6284 55.6118 90.9223C53.4933 90.2162 51.2465 89.9792 49.0273 90.2277C46.8081 90.4762 44.6694 91.2043 42.7595 92.3615C40.8496 93.5187 39.2142 95.0773 37.9666 96.9294C36.7189 98.7815 35.8889 100.883 35.5341 103.087C35.1792 105.292 35.308 107.548 35.9115 109.698C36.515 111.848 37.5788 113.841 39.0291 115.539C40.4795 117.237 42.2817 118.599 44.3109 119.531C44.1921 121.077 44.1921 122.628 44.3109 124.173C44.3109 147.805 71.8464 167.006 105.817 167.006C139.788 167.006 167.324 147.805 167.324 124.173C167.443 122.628 167.443 121.077 167.324 119.531C169.927 118.238 172.111 116.233 173.624 113.75C175.136 111.267 175.914 108.407 175.869 105.5ZM70.3694 116.05C70.3694 113.963 70.9881 111.924 72.1474 110.189C73.3066 108.454 74.9543 107.102 76.8821 106.303C78.8098 105.505 80.9311 105.296 82.9776 105.703C85.0241 106.11 86.9039 107.115 88.3794 108.59C89.8548 110.065 90.8596 111.945 91.2667 113.992C91.6737 116.038 91.4648 118.16 90.6663 120.087C89.8678 122.015 88.5156 123.663 86.7807 124.822C85.0457 125.981 83.006 126.6 80.9194 126.6C79.5339 126.6 78.1621 126.327 76.8821 125.797C75.6021 125.267 74.4391 124.49 73.4594 123.51C72.4798 122.53 71.7026 121.367 71.1725 120.087C70.6423 118.807 70.3694 117.435 70.3694 116.05ZM131.665 145.062C124.18 150.703 114.971 153.574 105.606 153.186C96.2421 153.574 87.0329 150.703 79.5479 145.062C79.0993 144.516 78.87 143.822 78.9047 143.116C78.9394 142.409 79.2355 141.741 79.7356 141.241C80.2356 140.741 80.9037 140.445 81.61 140.41C82.3163 140.376 83.0103 140.605 83.5569 141.053C89.8999 145.706 97.6424 148.051 105.501 147.7C113.369 148.128 121.148 145.858 127.55 141.265C128.11 140.719 128.863 140.418 129.645 140.428C130.032 140.433 130.414 140.514 130.77 140.666C131.125 140.819 131.447 141.04 131.718 141.317C131.988 141.594 132.201 141.922 132.344 142.281C132.488 142.641 132.559 143.025 132.554 143.412C132.549 143.799 132.468 144.181 132.316 144.537C132.163 144.892 131.942 145.214 131.665 145.484V145.062ZM129.766 127.022C127.679 127.022 125.64 126.403 123.905 125.244C122.17 124.085 120.817 122.437 120.019 120.509C119.22 118.582 119.012 116.46 119.419 114.414C119.826 112.367 120.83 110.487 122.306 109.012C123.781 107.537 125.661 106.532 127.708 106.125C129.754 105.718 131.875 105.927 133.803 106.725C135.731 107.524 137.379 108.876 138.538 110.611C139.697 112.346 140.316 114.385 140.316 116.472C140.373 117.901 140.139 119.328 139.628 120.664C139.117 122 138.339 123.218 137.343 124.245C136.346 125.271 135.151 126.084 133.83 126.634C132.51 127.184 131.091 127.459 129.66 127.444L129.766 127.022Z"
								fill="white"
							></path>
							<defs>
								<clipPath id="clip0_180_2">
									<rect width="383" height="121" fill="white" transform="translate(260 46)"></rect>
								</clipPath>
							</defs>
						</svg>
					</a> */}
				</section>
				<section>
					<Heading align="center">A Tale of a Developer</Heading>
					<div className="relative -z-20 mx-auto max-w-6xl rounded-2xl bg-muted-100 p-6">
						<div className="absolute left-1/2 -z-10 h-[calc(100%-48px)] w-0.5 bg-muted-300" />
						<Good>
							You come up with what seems like a great idea for a startup. You sleep on it and it still sounds good, so you come up with a nice domain name and buy it. You’re
							excited to start building!
						</Good>
						<Bad>
							But before you do, you need to decide on a framework. You spend <span className="font-bold text-red-500">1 hour</span> looking at what most people are using and
							decide on NextJS. It’s well supported, lots of people use it, has good docs.
						</Bad>
						<Good>You run npx create-next-app@latest, tell it to install TS, ESLint, Tailwind, App Router, a few other configs and get going.</Good>
						<Good>You start by building the public and marketing pages you’ve mocked up, to present your new thing to the world.</Good>
						<Bad>
							But you quickly realize you’re gonna need email marketing. It’s not installed yet, and you know you’ll want to research the best Marketing Email Providers with a
							generous free tier, so <span className="font-bold text-red-500">you leave it for after</span> you’re done with the public and marketing pages. It might cost you a
							few subscribers, but no big deal.
						</Bad>
						<Good>Work, work, work. Ok, the public and marketing pages are done.</Good>
						<Bad>
							A bit of a frustrating and tiring experience because, even though these were mostly static UI components, the UI library you're using is a little too low-level
							and mixes design and functionality, forcing you to mentally switch context between the two.
						</Bad>
						<Good>But it's done. You're tired but happy! Time to integrate with an Email Marketing Provider.</Good>
						<Bad>
							You spend <span className="font-bold text-red-500">4 hours</span> researching the best ones, decide on one with a generous free tier, and spend{' '}
							<span className="font-bold text-red-500">1 hour</span> creating a beautiful newsletter component that sends the user’s email address to the backend.
						</Bad>
						<Good>
							Now that you have the user’s email on the backend you ask yourself if you want single or double opt in. You know you’re less likely to receive spam complaints
							from users receiving your emails with double opt in.
						</Good>
						<Bad>But it’s more complicated, and you’re tired - and this is just a startup anyway. Single opt in it is.</Bad>
						<Good>You go to sleep feeling proud of having finished the public and marketing part of your app.</Good>
						<Good>A new day dawns. You’re feeling motivated to continue building your new project. </Good>
						<Bad>
							But it’s time to think about the hardcore stuff: database, data model, authentication, permissions, user flows, business logic, deployment pipeline 😮‍💨 ufff this
							is going to take some work... You take a deep breath and get going.
						</Bad>
						<Good>Work, work, work.</Good>
						<Bad>
							<span className="font-bold text-red-500">Two days have passed</span>. Your went for MongoDB and Mongoose.
						</Bad>
						<Good>
							The schema is ready to go. Basic authentication with registration and login is working. Time for protected routes, profile page, email and password change flows.
							Another deep breath... let's go!
						</Good>
						<Good>Work, work, work.</Good>
						<Bad>
							<span className="font-bold text-red-500">Two more days have passed</span>.
						</Bad>
						<Good>Authentication is done and you're proud. Registration, login, and email and password changes are working.</Good>
						<Bad>There's no Two-Factor Authentication or Single-Sign On, but this is a startup anyway. We'll do that later if it succeeds.</Bad>
						<Good>Ok, you're almost ready for the interesting stuff: building the actual app.</Good>
						<Bad>
							But before you do, you need to get this thing online. So you spend <span className="font-bold text-red-500">2 more hours</span> researching the best CI/CD
							techniques and which features each cloud provider offers.
						</Bad>
						<Bad>
							<span className="font-bold text-red-500">Two more days have passed</span>.
						</Bad>
						<Good>You now have a CI/CD pipeline you're feeling proud of, deploying on Vercel servers. It's quick and easy.</Good>
						<Bad>
							<span className="font-bold text-red-500">A week has passed since you've started</span> and you're now ready to start building your app.
						</Bad>
						<Good>Finally! With an incredible amount of sustained excitement, you're eager to get started.</Good>
						<Good>
							You build your app, show it to your users and, incredibly, it succeeds! People actually start using it, amazing! Dreams of profitability start to materialize and
							it's time to install Analytics. This looks like a no-brainer decision, use what everyone else uses.
						</Good>
						<Bad>
							So you install Google Analytics. And a <span className="font-bold text-red-500">cookie banner</span> to comply with GDPR.
						</Bad>
						<Good>You're on a roll, happily pushing new features until...</Good>
						<Bad>
							Uh oh, user activity starts to drop abruptly :/ What the hell's going on? Damn it, you probably have an error that's breaking the app. You spend{' '}
							<span className="font-bold text-red-500">2 hours</span> frantically searching for the bug but you can't find it so you need to install a monitoring tool that
							supports session replay urgently before enough users leave and you have no failed sessions to debug.
						</Bad>
						<Bad>
							Work, work, work. <span className="font-bold text-red-500">2 hours later</span> you push a commit with the monitoring tool's code!
						</Bad>
						<Good>
							There's still a few users left, so you can do a session replay and find the exact sequence of actions that lead to the bug and correct it! Ufff 😮‍💨 crisis averted
							😅
						</Good>
						<Bad>You send an apology email to your users and they're happy to see you're responsive.</Bad>
						<Good>Would have been better if this bug was caught early, but hey, could have been worse.</Good>
						<Bad>
							The same goes for uptime issues, performance issues, memory leaks, SEO, automated testing, linting, type checking, developer experience and so many other aspects
							of development that are not directly related to actually building your stuff... And this process is almost the same every. single. time.
						</Bad>
						<img src={arrow} alt="Arrow" className="absolute -bottom-[130px] left-1/2 h-56 w-56 -translate-x-1/2 -rotate-[138deg]" />
					</div>
					<Heading as="h2" align="center" className="mt-24">
						Or you could <span className="inline-block -rotate-2 bg-brand/40 px-2">get</span> <span className="whitespace-nowrap">✨ ShipFast ✨</span>
					</Heading>
					<div className="mx-auto max-w-2xl">
						<Text size="lg" align="center" className="mt-8 text-muted-600">
							It's a boilerplate that comes with all of this stuff already integrated, so you can focus on building your app.
						</Text>
					</div>
				</section>
				<Flex wrap justify="center" gap="14">
					<div>
						<Heading as="h2" size="2xl" align="center" className="mt-24">
							<span className="inline-block -rotate-2 bg-brand/40 px-2">Without</span> ShipFast 👇
						</Heading>
						<div className="text-center">
							<ul className="inline-block list-inside space-y-1 rounded-xl bg-red-50 p-10 text-muted-500 dark:text-muted-400">
								<li className="flex">
									<span className="font-bold text-red-500">1 hour</span>&nbsp;looking at frameworks
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">3 hours</span>&nbsp;dealing with state management
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">5 hours</span>&nbsp;to integrate email marketing
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">2 hours</span>&nbsp;to integrate transactional email
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">2 hours</span>&nbsp;setting up your db schema
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">4 hours</span>&nbsp;setting up authentication
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">1 hour</span>&nbsp;for protected routes
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">4 hours</span>&nbsp;integrating payments
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">3 hours</span>&nbsp;creating your CI/CD pipeline
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">2 hours</span>&nbsp;for DNS records
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">4 hours</span>&nbsp;on SEO tags
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">1 hour</span>&nbsp;integrating analytics
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">1 hour</span>&nbsp;integrating error monitoring
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">1 hour</span>&nbsp;integrating performance monitoring
								</li>
								<li className="flex">
									<span className="font-bold text-red-500">+ &infin;</span>&nbsp;overthinking...
								</li>
								<li className="flex pt-4 text-lg">
									<strong>
										= <span className="text-red-500">34+ hours</span>&nbsp;of headaches
									</strong>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<Heading as="h2" size="2xl" align="center" className="mt-24">
							<span className="inline-block -rotate-2 bg-brand/40 px-2">With</span> ShipFast 👇
						</Heading>
						<div className="text-center">
							<ul className="inline-block list-inside space-y-1 rounded-xl bg-green-50 p-10 text-muted-500 dark:text-muted-400">
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 1 hour</span>: Remix as the framework of choice
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 3 hours</span>: no need for state management tools with Remix
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 5 hours</span>: Subscribe users with MailerLite
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 2 hours</span>: Send beautiful emails with Resend, built with React Email
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 2 hours</span>: integrated Prisma, SQLite, and LiteFS
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 4 hours</span>: register, login, magic links, 2FA, SSO, and more
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 1 hour</span>: built-in functions to protect routes
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 4 hours</span>: payment integration with Stripe
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 3 hours</span>: complete CI/CD pipeline with Fly.io
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 2 hours</span>: Guide on proper DNS setup
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 4 hours</span>: All built-in routes are fully SEO-optimized
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 1 hour</span>: ethical analytics with Fathom
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 1 hour</span>: error monitoring with Sentry.io
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save 1 hour</span>: performance monitoring with Grafana
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									<span className="font-bold text-green-500">Save ∞ hours</span>: solid opinions to hit the ground running
								</li>
								<li className="flex pt-4 text-lg">
									<strong>
										= <span className="text-green-500">34+ hours</span> saved, <span className="text-green-500">zero</span> headaches
									</strong>
								</li>
							</ul>
						</div>
					</div>
				</Flex>
				<Text size="lg" className="mx-auto mt-4 max-w-3xl text-center text-muted-600">
					Spend your time building your app, not configuring tools and integrating APIs.
				</Text>

				<Heading as="h2" size="3xl" className="mt-14 text-center">
					The tech stack 🥞
				</Heading>
				<Text size="xl" className="mx-auto mt-4 max-w-3xl text-center">
					Here's all the tech you get with ShipFast and why it's awesome.
				</Text>
				<Tabs.Root defaultValue="email" className="mt-14 w-full">
					<Tabs.List className="w-full overflow-x-auto">
						<Tabs.Trigger value="email">Email</Tabs.Trigger>
						<Tabs.Trigger value="payments">Payments</Tabs.Trigger>
						<Tabs.Trigger value="auth">Auth</Tabs.Trigger>
						<Tabs.Trigger value="db">DB</Tabs.Trigger>
						<Tabs.Trigger value="seo">SEO</Tabs.Trigger>
						<Tabs.Trigger value="style">Style</Tabs.Trigger>
						<Tabs.Trigger value="cicd">CD/CI</Tabs.Trigger>
						<Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
						<Tabs.Trigger value="monitor">Monitor</Tabs.Trigger>
						<Tabs.Trigger value="more">More</Tabs.Trigger>
					</Tabs.List>
					<div className="mt-2 rounded-lg border bg-green-50 px-6 pb-6 text-muted-500">
						<Tabs.Content value="email">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Create Emails
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Craft beautiful emails with&nbsp;<strong>React Email</strong> ✨
									</li>
								</ul>
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Send Emails
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Send transactional emails with&nbsp;<strong>Resend</strong>
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Webhook to receive & forward emails
									</li>
								</ul>
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Email Marketing
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Collect marketing emails with&nbsp;<strong>MailerLite</strong>&nbsp;(GDPR compliant)
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Send marketing emails to your subscribers
									</li>
								</ul>
								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 4 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With React Email, Resend, and MailerLite
								</Text>
								<Text size="xs">Don't like MailerLite? ShipFast is modular. Easily swap out for another Marketing Email Provider.</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="payments">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Payments
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Create checkout sessions
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Webhooks to update user's account after payment
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Tips to setup your account & reduce chargebacks
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 4 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With Stripe
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="auth">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Authentication
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Registration & Login with cookie-based sessions
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Role-based permissions
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Private/protected routes
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Forgot and reset password with Time-Based One-Time Passwords (TOTP)
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Two-Factor Authentication (2FA) with support for authenticator apps
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 6 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="db">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Database
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Prisma schema to make your life easier
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										SQLite database with LiteFS
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Custom built image hosting (
										<a href="https://x.com/theandrecasal/status/1673628830617960449?s=20" target="_blank" rel="noreferrer" className="underline">
											35% faster than the file system
										</a>
										)
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Compatible with&nbsp;
										<a href="https://www.prisma.io/docs/concepts/database-connectors" target="_blank" rel="noreferrer" className="underline">
											other databases
										</a>
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 6 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With Prisma, SQLite, and LiteFS
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="seo">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Search Engine Optimization
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										All meta tags to rank on Google
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										OpenGraph tags to share on social media
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Automated sitemap generation to fasten Google indexing
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Structured data markup for Rich Snippets
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										SEO-optimized UI components
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 10 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="style">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Styling
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Light, Dark, and System mode (without a flash of incorrect theme)
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Decoupled design and development: design in parallel or later.
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 8 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With{' '}
									<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="underline">
										TailwindCSS
									</a>
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="cicd">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Continuous Integration/Continuous Deployment
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Automatic Linting, Type checking, and testing on every push
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Unit testing with Vitest
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										End-to-end testing with Playwright
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										GitHub Actions integration
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Deployment to Fly.io
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 4 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With{' '}
									<a href="https://github.com/features/actions" target="_blank" rel="noreferrer" className="underline">
										GitHub Actions
									</a>{' '}
									and{' '}
									<a href="https://fly.io/" target="_blank" rel="noreferrer" className="underline">
										Fly.io
									</a>
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="analytics">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Analytics
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Fully GDPR compliant analytics with Fathom Analytics
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										No need for annoying cookie banners
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Protection against other people using your script (by accident or otherwise)
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Exclude your own visits on your domain
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 4 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With{' '}
									<a href="https://usefathom.com/ref/CENIUT" target="_blank" rel="noreferrer" className="underline">
										Fathom
									</a>
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="monitor">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Monitoring
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										99% uptime with healthcheck endpoint
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Error monitoring with Sentry
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Running app monitoring with Grafana
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 4 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With{' '}
									<a href="https://sentry.io" target="_blank" rel="noreferrer" className="underline">
										Sentry
									</a>{' '}
									and Fly.io's built-in&nbsp;
									<a href="https://grafana.com/" target="_blank" rel="noreferrer" className="underline">
										Grafana
									</a>
									.
								</Text>
							</div>
						</Tabs.Content>
						<Tabs.Content value="more" className="flex flex-col">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Fast apps
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Forget state management libraries
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Forget the slow request waterfalls from NextJS
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: &infin; hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With{' '}
									<a href="https://remix.run/" target="_blank" rel="noreferrer" className="underline">
										Remix
									</a>
									.
								</Text>
							</div>
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Developer Experience
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Built-in VS Code extensions to hit the ground running
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										All external services are mocked in localhost
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										No need to have an internet connection
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Develop at full speed. Push when ready.
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: &infin;
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With{' '}
									<a href="https://mswjs.io/" target="_blank" rel="noreferrer" className="underline">
										MSW
									</a>
									.
								</Text>
							</div>
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Accessibility
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Components adhere to the&nbsp;
										<a href="https://www.w3.org/TR/wai-aria-practices-1.2/" target="_blank" rel="noreferrer" className="underline">
											WAI-ARIA design patterns
										</a>
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Components have keyboard navigation when it makes sense
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Component API makes it impossible to break accessibility patterns
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: 3 hours
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
								<Text size="sm" className="mt-space-12">
									With{' '}
									<Link to="/ui" className="underline">
										andrecasal/ui
									</Link>
								</Text>
							</div>

							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									...and more
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-muted-400">
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Caching, both in-memory and SQLite-based
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Progressively Enhanced and fully type-safe forms with Conform
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Runtime schema validation with Zod
									</li>
									<li className="flex">
										<span>
											<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
										</span>
										Discord community
									</li>
								</ul>

								<Text size="sm" className="mt-space-12 font-bold text-green-500">
									Time saved: &infin;
								</Text>
								<Text size="sm" className="font-bold text-green-500">
									Headaches: none
								</Text>
							</div>
						</Tabs.Content>
					</div>
				</Tabs.Root>
			</Container>
			<BackgroundBlur>
				<Container>
					<Grid cols="2" gapX="10" className="my-60">
						<div>
							<Text size="4xl" weight="bold" className="max-w-3xl">
								Hey, it's André 👋
							</Text>
							<Text size="md" className="mt-8">
								I've built ShipFast to:
							</Text>
							<ul className="mt-space-6 max-w-2xl list-inside space-y-1  dark:text-muted-400">
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									Save time and focus on what matters: building a business
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									Spend zero time overthinking
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									Avoid headaches (like authentication bugs)
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									Get profitable fast — the more you ship, the more you learn, the more you earn
								</li>
							</ul>
						</div>
						<div className="mt-16 sm:mt-24 lg:mt-0">
							<img src="/img/andre.jpg" alt="André Casal" height="100px" className="aspect-[6/5] rounded-2xl object-cover" />
						</div>
					</Grid>
				</Container>
			</BackgroundBlur>
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-4xl text-center">
							<h2 className="text-base font-semibold leading-7 text-brand" id="pricing">
								Pricing
							</h2>
							<p className="mt-2 text-4xl font-bold tracking-tight text-muted-900 sm:text-5xl">Save hours of repetitive code, ship fast, get profitable!</p>
						</div>
						<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-600">The killer Remix starter that you've always wanted!</p>
						<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8">
							{tiers.map(tier => (
								<div key={tier.id} className={cn(tier.mostPopular ? 'ring-2 ring-brand' : 'ring-1 ring-muted-200', 'rounded-3xl p-8 xl:p-10')}>
									<div className="flex items-center justify-between gap-x-4">
										<h3 id={tier.id} className={cn(tier.mostPopular ? 'text-brand' : 'text-muted-900', 'text-lg font-semibold leading-8')}>
											{tier.name}
										</h3>
										{tier.mostPopular ? <p className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand">Most popular</p> : null}
										{tier.soon ? <p className="rounded-full bg-muted-100 px-2.5 py-1 text-xs font-semibold leading-5 text-muted-500">Soon</p> : null}
									</div>
									<p className="mt-4 text-sm leading-6 text-muted-600">{tier.description}</p>
									{tier.discounted ? (
										<p className="mt-6 flex items-baseline gap-x-1">
											<span className="text-md font-bold tracking-tight text-muted-900 line-through">
												{tier.price}
												<span className="font-semibold leading-6 text-muted-600">€</span>
											</span>
											<span className="text-3xl font-bold tracking-tight text-muted-900">{tier.discounted}</span>
											<span className="text-sm font-semibold leading-6 text-muted-600">€</span>
										</p>
									) : (
										<p className="mt-6 flex items-baseline gap-x-1">
											<span className="text-4xl font-bold tracking-tight text-muted-900">{tier.price}</span>
											<span className="text-sm font-semibold leading-6 text-muted-600">€</span>
										</p>
									)}

									<a
										href={tier.href}
										aria-describedby={tier.id}
										className={cn(
											tier.mostPopular ? 'bg-brand text-white shadow-sm hover:bg-brand-muted' : 'text-brand ring-1 ring-inset ring-brand/20 hover:bg-brand/30',
											'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
											tier.soon ? 'cursor-not-allowed' : '',
										)}
									>
										Get ShipFast
									</a>
									<Text size="xs" align="center">
										Pay once. Build unlimited projects.
									</Text>
									<ul className="mt-8 space-y-3 text-sm leading-6 text-muted-600 xl:mt-10">
										{tier.features.map(feature => (
											<li key={feature} className="flex gap-x-2">
												<span>
													<Icon name="check" size="md" className="inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
												</span>
												{feature}
											</li>
										))}
										{tier.lacks?.map(feature => (
											<li key={feature} className="flex gap-x-2">
												<span>
													<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
												</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="">
					<div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
						<div className="lg:grid lg:grid-cols-12 lg:gap-8">
							<div className="lg:col-span-5">
								<h2 className="text-2xl font-bold leading-10 tracking-tight text-muted-900">Frequently asked questions</h2>
								<p className="mt-4 text-base leading-7 text-muted-600">
									Have other questions? Contact me on{' '}
									<a href="https://twitter.com/theandrecasal" target="_blank" rel="noreferrer" className="underline">
										X
									</a>{' '}
									or by {/* eslint-disable */}
									<a href="mailto:andre@andrecasal.com" target="_blank" rel="noreferrer" className="underline">
										email
									</a>
									.
								</p>
							</div>
							<div className="mt-10 lg:col-span-7 lg:mt-0">
								<dl className="space-y-10">
									{faqs.map(faq => (
										<div key={faq.question}>
											<dt className="text-base font-semibold leading-7 text-muted-900">{faq.question}</dt>
											<dd className="mt-2 text-base leading-7 text-muted-600">{faq.answer}</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className="rounded-2xl bg-muted-200">
					<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="text-3xl font-bold tracking-tight text-muted-900 sm:text-4xl">Boost your app, launch, earn</h2>
							<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-600">Don't waste time with boilerplate.</p>
							<p className="mx-auto max-w-xl text-lg leading-8 text-muted-600">Hit the ground running with best-in-class tools.</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="https://buy.stripe.com/eVa9B31Mqa811C8eUV"
									className="rounded-md bg-brand px-14 py-4 text-lg font-semibold text-white shadow-sm hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
								>
									Get ShipFast
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}

export default ShipFast

const Good = ({ children }: any) => {
	return (
		<Text size="lg" className="mt-8 max-w-2xl rounded-xl border border-green-200 bg-green-50 p-4 text-foreground dark:border-green-700 dark:bg-green-900">
			{children}
		</Text>
	)
}

const Bad = ({ children }: any) => {
	return (
		<Text size="lg" className="ml-auto mt-8 max-w-2xl rounded-xl border border-red-200 bg-red-50 p-4 text-foreground dark:border-red-700 dark:bg-red-900">
			{children}
		</Text>
	)
}
