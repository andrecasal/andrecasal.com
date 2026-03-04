import type { ActionFunctionArgs, LinksFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { parseWithZod } from '@conform-to/zod'
import { Resend } from 'resend'
import { z } from 'zod'
import { Newsletter as NewsletterComponent } from '~/components/newsletter.tsx'
import { getEssays } from '~/routes/_marketing+/essays/_index.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { validateCSRF } from '~/utils/csrf.server.ts'
import { checkHoneypot } from '~/utils/honeypot.server.ts'
import { emailSchema } from '~/utils/user-validation.ts'

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://andrecasal.com/newsletter' }]

export default function Newsletter() {
	const essays = getEssays()

	return (
		<Container>
			<div className="mx-auto max-w-2xl py-16 sm:py-24">
				<NewsletterComponent
					title="Get notified when I publish"
					description="One deep essay per month on code architecture, product strategy, and first-principles thinking. Each one takes weeks to research. No fluff, no spam."
				/>

				{essays.length > 0 ? (
					<div className="mt-16 border-t border-muted-200 pt-16">
						<H2 size="lg" className="font-semibold text-muted-400">
							Recent essays
						</H2>
						<ul className="mt-6 space-y-8">
							{essays.map(essay => (
								<li key={essay.href} className="border-l-2 border-muted-200 pl-6">
									<P size="xs" className="font-semibold uppercase tracking-wider text-brand">
										{essay.pillars.join(' · ')}
									</P>
									<P size="lg" className="mt-1 font-semibold">
										{essay.title}
									</P>
									<P size="md" className="mt-1 text-muted-500">
										{essay.description}
									</P>
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</Container>
	)
}

export const newsletterEmailQueryParam = 'email'
export const newsletterOTPQueryParam = 'code'
export const newsletterVerificationType = 'newsletter'

export const newsletterSchema = z.object({
	email: emailSchema,
})

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()

	// Check for bots
	await validateCSRF(formData, request.headers)
	checkHoneypot(formData, '/newsletter')

	// Parse form
	const submission = parseWithZod(formData, { schema: newsletterSchema })
	if (submission.status !== 'success') {
		return json({ result: submission.reply() }, { status: submission.status === 'error' ? 400 : 200 })
	}

	// Extract data
	const { email } = submission.value

	// Subscribe to newsletter
	const resend = new Resend(process.env.RESEND_API_KEY)
	const result = await resend.contacts.create({
		email,
		unsubscribed: false,
		audienceId: process.env.RESEND_GENERAL_AUDIENCE,
	})
	if (result.error) {
		console.error('🔴 Error subscribing to newsletter:', JSON.stringify(result))
		return json({ status: 'error', result: submission.reply() } as const, { status: 400 })
	}

	// Everything ok
	return json({ status: 'success', result: submission.reply() } as const)
}
