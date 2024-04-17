import { Resend } from 'resend'
import { type LinksFunction, json, type ActionArgs } from '@remix-run/node'
import { parse } from '@conform-to/zod'
import { z } from 'zod'
import { emailSchema } from '~/utils/user-validation.ts'
import { Newsletter as NewsletterComponent } from '~/components/newsletter.tsx'
import { validateCSRF } from '~/utils/csrf.server.ts'
import { checkHoneypot } from '~/utils/honeypot.server.ts'
import { Container } from '~/ui_components/layout/container.tsx'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: 'https://andrecasal.com/newsletter' }]
}

export default function Newsletter() {
	return (
		<Container>
			<NewsletterComponent
				className="mt-32 sm:mt-44"
				title="Get exclusive web dev tips that I only share with email subscribers"
				description="Golden nuggets of code knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks."
				buttonText="I want my tips"
			/>
		</Container>
	)
}

export const newsletterEmailQueryParam = 'email'
export const newsletterOTPQueryParam = 'code'
export const newsletterVerificationType = 'newsletter'

export const newsletterSchema = z.object({
	email: emailSchema,
})

export async function action({ request }: ActionArgs) {
	const formData = await request.formData()

	// Check for bots
	await validateCSRF(formData, request.headers)
	checkHoneypot(formData, '/newsletter')

	// Parse form
	const submission = parse(formData, { schema: newsletterSchema })
	if (submission.intent !== 'submit') {
		return json({ status: 'error', submission } as const)
	}
	if (!submission.value) {
		return json({ status: 'error', submission } as const, { status: 400 })
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
		return json({ status: 'error', submission } as const, { status: 400 })
	}

	// Everything ok
	return json({ status: 'success', submission } as const)
}
