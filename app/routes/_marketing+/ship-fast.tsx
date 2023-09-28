import { Icon } from '~/components/ui/icon.tsx'
import { Container } from './ui+/components/layout/container.tsx'
import { Heading } from './ui+/components/typography/heading.tsx'
import { Text } from './ui+/components/typography/text.tsx'
import { Tabs } from './ui+/components/ui/tabs.tsx'
import { Link } from '@remix-run/react'
import BackgroundBlur from './components/bg-blur.tsx'
import { Grid } from './ui+/components/layout/grid.tsx'
import { cn } from '~/utils/tailwind-merge.ts'

const ShipFast = () => {
	const tiers = [
		{
			soon: false,
			name: 'Presale',
			id: 'tier-presale',
			href: 'https://buy.stripe.com/eVa9B31Mqa811C8eUV',
			price: '249',
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
			mostPopular: true,
		},
		{
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
		},
	]

	return (
		<>
			<Container>
				<Heading as="h1" className="mt-8 max-w-3xl">
					Ship your startup in days, not weeks.
				</Heading>
				<Text size="xl" className="mt-4 max-w-3xl">
					The <strong>Remix</strong> boilerplate with all you need to build your SaaS, AI tool, or any other web app. From idea to production in <strong>1 minute</strong>.
				</Text>

				<div className="text-center">
					<ul className="my-32 inline-block list-inside space-y-1 rounded-md bg-red-50 px-32 py-10 text-gray-500 dark:text-gray-400">
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">4 hours</span>&nbsp;to set up emails
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">4 hours</span>&nbsp;integrating payments
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">8 hours</span>&nbsp;setting up authentication
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">2 hours</span>&nbsp;setting up your db schema
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">4 hours</span>&nbsp;on SEO tags
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">1 hour</span>&nbsp;integrating Tailwind
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">5 hours</span>&nbsp;creating your CI/CD pipeline
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">1 hour</span>&nbsp;integrating analytics
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full text-red-500" />
							</span>
							<span className="font-bold text-red-500">1 hour</span>&nbsp;integrating monitoring
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
							</span>
							<span className="font-bold text-red-500">2 hours</span>&nbsp;for DNS records
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
							</span>
							<span className="font-bold text-red-500">2 hours</span>&nbsp;for protected API routes
						</li>
						<li className="flex">
							<span>
								<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
							</span>
							<span className="font-bold text-red-500">+ &infin;</span>&nbsp;overthinking...
						</li>
						<li className="flex pt-4 text-lg">
							<strong>
								= <span className="text-red-500">34+ hours</span>&nbsp;of headaches
							</strong>
						</li>
					</ul>
				</div>

				<Heading as="h2" size="3xl" className="mt-8 text-center">
					Supercharge your app instantly, launch faster, make $
				</Heading>
				<Text size="xl" className="mx-auto mt-4 max-w-3xl text-center">
					Login users, process payments and send emails at lightspeed.
				</Text>
				<Text size="lg" className="mx-auto mt-4 max-w-3xl text-center">
					Spend your time building your startup, not integrating APIs. ShipFast provides you with the boilerplate code you need to launch, FAST.
				</Text>
				<Tabs.Root defaultValue="more" className="mt-14 w-full">
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
					<div className="mt-2 rounded-lg border bg-green-50 px-6 pb-6 text-gray-500">
						<Tabs.Content value="email">
							<div className="inline-block text-left">
								<Heading as="h2" size="2xl" align="left" className="mt-space-14 text-green-500">
									Create Emails
								</Heading>
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
								<ul className="mt-space-6 list-inside space-y-1 dark:text-gray-400">
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
					<Grid cols="2" className="my-60">
						<div>
							<Text size="4xl" weight="bold" className="max-w-3xl">
								Hey, it's André 👋
							</Text>
							<Text size="xl" className="mt-8">
								I love building apps!
							</Text>
							<Text size="xl">Web design and development is a hell of a ride.</Text>
							<Text size="lg" className="mt-8 max-w-3xl">
								But I've realized I'm always doing the same thing: setting up DNS records, integrating external services, setting up authentication and tests...
							</Text>
							<Text size="md" className="mt-8">
								So I've built ShipFast:
							</Text>
							<ul className="mt-space-6 max-w-2xl list-inside space-y-1  dark:text-gray-400">
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
									Avoid headaches like emails ending in spam or waiting 3 days for Google to approve
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									Get profitable fast—the more you ship, the more you learn, the more you earn
								</li>
								<li className="flex">
									<span>
										<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
									</span>
									Save time and focus on what matters: building a business
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
				<div className="bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-4xl text-center">
							<h2 className="text-base font-semibold leading-7 text-brand">Pricing</h2>
							<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Save hours of repetitive code, ship fast, get profitable!</p>
						</div>
						<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">The killer Remix starter that you've always wanted!</p>
						<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
							{tiers.map(tier => (
								<div key={tier.id} className={cn(tier.mostPopular ? 'ring-2 ring-brand' : 'ring-1 ring-gray-200', 'rounded-3xl p-8 xl:p-10')}>
									<div className="flex items-center justify-between gap-x-4">
										<h3 id={tier.id} className={cn(tier.mostPopular ? 'text-brand' : 'text-gray-900', 'text-lg font-semibold leading-8')}>
											{tier.name}
										</h3>
										{tier.mostPopular ? <p className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand">Most popular</p> : null}
										{tier.soon ? <p className="rounded-full bg-muted-100 px-2.5 py-1 text-xs font-semibold leading-5 text-muted-500">Soon</p> : null}
									</div>
									<p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
									{tier.discounted ? (
										<p className="mt-6 flex items-baseline gap-x-1">
											<span className="text-md font-bold tracking-tight text-gray-900 line-through">
												{tier.price}
												<span className="font-semibold leading-6 text-gray-600">€</span>
											</span>
											<span className="text-3xl font-bold tracking-tight text-gray-900">{tier.discounted}</span>
											<span className="text-sm font-semibold leading-6 text-gray-600">€</span>
										</p>
									) : (
										<p className="mt-6 flex items-baseline gap-x-1">
											<span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
											<span className="text-sm font-semibold leading-6 text-gray-600">€</span>
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
									<ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
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
				<div className="bg-white">
					<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Boost your app, launch, earn</h2>
							<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Don't waste time with boilerplate.</p>
							<p className="mx-auto max-w-xl text-lg leading-8 text-gray-600">Hit the ground running with best-in-class tools.</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="https://buy.stripe.com/eVa9B31Mqa811C8eUV"
									className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
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
