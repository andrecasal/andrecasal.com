import { Icon } from '~/components/ui/icon.tsx'
import { Container } from './ui+/components/layout/container.tsx'
import { Heading } from './ui+/components/typography/heading.tsx'
import { Text } from './ui+/components/typography/text.tsx'

const ShipFast = () => {
	return (
		<Container>
			<Heading as="h1" className="mt-8 max-w-3xl">
				Ship your startup in days, not weeks.
			</Heading>
			<Text size="xl" className="mt-4 max-w-3xl">
				The <strong>Remix</strong> boilerplate with all you need to build your SaaS, AI tool, or any other web app. From idea to production in <strong>1 minute</strong>.
			</Text>

			<ul className="mx-auto my-32 w-96 list-inside space-y-1 rounded-md bg-red-50 p-6 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
					</span>
					<span className="font-bold text-red-500">4 hours</span>&nbsp;to set up emails
				</li>
				<li className="flex">
					<span>
						<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
					</span>
					<span className="font-bold text-red-500">3 hours</span>&nbsp;designing a pricing section
				</li>
				<li className="flex">
					<span>
						<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
					</span>
					<span className="font-bold text-red-500">2 hours</span>&nbsp;to handle Stripe webhooks
				</li>
				<li className="flex">
					<span>
						<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
					</span>
					<span className="font-bold text-red-500">4 hours</span>&nbsp;for SEO tags
				</li>
				<li className="flex">
					<span>
						<Icon name="cross-1" size="md" className="mr-2 inline-block h-5 w-5 rounded-full  text-red-500" />
					</span>
					<span className="font-bold text-red-500">1 hour</span>&nbsp;applying for Google Oauth
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
				<li className="pt-4 text-lg">
					<strong>
						= <span className="text-red-500">18+ hours</span>&nbsp;of headaches
					</strong>
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8 text-center">
				Supercharge your app instantly, launch faster, make $
			</Heading>
			<Text size="xl" className="mx-auto mt-4 max-w-3xl text-center">
				Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs. ShipFast provides you with the boilerplate code you
				need to launch, FAST.
			</Text>
			<div className="text-center">
				<ul className="mt-10 inline-block list-inside space-y-1 rounded-md bg-green-50 p-6 text-gray-500 dark:text-gray-400">
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">Save 2 hours</span>&nbsp;on transactional emails with Resend
					</li>
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">Save 2 hours</span>&nbsp;on marketing emails with MailerLite
					</li>
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">Save 3 hours</span>&nbsp;to handle Stripe webhooks
					</li>
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">4 hours</span>&nbsp;for SEO tags
					</li>
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">1 hour</span>&nbsp;applying for Google Oauth
					</li>
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">2 hours</span>&nbsp;for DNS records
					</li>
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">2 hours</span>&nbsp;for protected API routes
					</li>
					<li className="flex">
						<span>
							<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
						</span>
						<span className="font-bold text-green-500">+ &infin;</span>&nbsp;overthinking...
					</li>
					<li className="pt-4 text-lg">
						<strong>
							= <span className="text-green-500">18+ hours</span>&nbsp;of headaches
						</strong>
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default ShipFast
