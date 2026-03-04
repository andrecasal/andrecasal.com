import type { LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://andrecasal.com/privacy' }]

export default function Privacy() {
	return (
		<Container>
			<div className="mx-auto max-w-2xl py-16 sm:py-24">
				<H1 size="4xl" className="font-bold tracking-tight">
					Privacy Policy
				</H1>
				<P size="sm" className="mt-2 text-muted-400">
					Last updated: February 2026
				</P>

				<div className="mt-12 space-y-10">
					<section>
						<H2 size="xl" className="font-semibold">
							What I collect
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							If you subscribe to the newsletter, I store your email address. That's it. I don't use tracking cookies, I don't sell your data, and I don't share your
							information with third parties.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							Analytics
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							I use privacy-friendly analytics to understand which pages are visited. This data is aggregated and does not personally identify you.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							Newsletter
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							The newsletter is powered by Resend. When you subscribe, your email address is stored with Resend to deliver emails. You can unsubscribe at any time using
							the link in any email.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							Cookies
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							This site uses only essential cookies for functionality like theme preference. No advertising or tracking cookies are used.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							Contact
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							If you have questions about this policy, reach out on{' '}
							<a href="https://twitter.com/andrecasaldev" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4 hover:text-brand">
								X
							</a>{' '}
							or{' '}
							<a href="https://linkedin.com/in/andrecasal" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4 hover:text-brand">
								LinkedIn
							</a>
							.
						</P>
					</section>
				</div>
			</div>
		</Container>
	)
}
