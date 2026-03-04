import type { LinksFunction } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://andrecasal.com/terms' }]

export default function Terms() {
	return (
		<Container>
			<div className="mx-auto max-w-2xl py-16 sm:py-24">
				<H1 size="4xl" className="font-bold tracking-tight">
					Terms of Use
				</H1>
				<P size="sm" className="mt-2 text-muted-400">
					Last updated: February 2026
				</P>

				<div className="mt-12 space-y-10">
					<section>
						<H2 size="xl" className="font-semibold">
							Content
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							All essays and content on this site are written by André Casal and are protected by copyright. You may share links to any content freely. Reproducing full
							essays without permission is not allowed.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							Newsletter
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							By subscribing to the newsletter, you agree to receive emails from me. You can unsubscribe at any time. I will never share your email with third parties.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							Disclaimer
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							The content on this site represents my personal opinions and is provided for informational purposes. While I strive for accuracy, I make no guarantees about
							the completeness or correctness of any content.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							External links
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							This site may contain links to external websites. I am not responsible for the content or practices of those sites.
						</P>
					</section>

					<section>
						<H2 size="xl" className="font-semibold">
							Contact
						</H2>
						<P size="md" className="mt-4 text-muted-600">
							If you have questions about these terms, reach out on{' '}
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
