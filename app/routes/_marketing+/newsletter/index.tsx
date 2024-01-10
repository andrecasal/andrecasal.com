import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { json, type ActionArgs } from '@remix-run/node'
import { parse } from '@conform-to/zod'
import { z } from 'zod'
import { emailSchema, nameSchema } from '~/utils/user-validation.ts'
import { generateTOTP } from '~/utils/totp.server.ts'
import { getDomainUrl } from '~/utils/misc.ts'
import { prisma } from '~/utils/db.server.ts'
import { sendEmail } from '~/utils/email.server.ts'
import { VerifyNewsletterSubscriptionEmail } from './email/verify.server.tsx'
import { Newsletter as NewsletterComponent } from '~/components/newsletter.tsx'

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

export const newsletterNameQueryParam = 'name'
export const newsletterEmailQueryParam = 'email'
export const newsletterOTPQueryParam = 'code'
export const newsletterVerificationType = 'newsletter'

export const newsletterSchema = z.object({
	name: nameSchema,
	email: emailSchema,
})

export async function action({ request }: ActionArgs) {
	const formData = await request.formData()
	const submission = parse(formData, { schema: newsletterSchema })
	if (submission.intent !== 'submit') {
		return json({ status: 'error', submission } as const)
	}
	if (!submission.value) {
		return json({ status: 'error', submission } as const, { status: 400 })
	}
	const { name, email } = submission.value
	const thirtyMinutesInSeconds = 30 * 60
	const { otp, secret, algorithm, period, digits } = generateTOTP({
		algorithm: 'sha256',
		period: thirtyMinutesInSeconds,
	})

	// delete old verifications. Users should not have more than one verification
	// of a specific type for a specific target at a time.
	await prisma.verification.deleteMany({
		where: { type: newsletterVerificationType, target: email },
	})
	await prisma.verification.create({
		data: {
			type: newsletterVerificationType,
			target: email,
			algorithm,
			secret,
			period,
			digits,
			expiresAt: new Date(Date.now() + period * 1000),
		},
	})

	const newsletterVerifyURL = new URL(`${getDomainUrl(request)}/newsletter/verify`)
	newsletterVerifyURL.searchParams.set(newsletterNameQueryParam, name)
	newsletterVerifyURL.searchParams.set(newsletterEmailQueryParam, email)
	newsletterVerifyURL.searchParams.set(newsletterOTPQueryParam, otp)

	const response = await sendEmail({
		to: email,
		subject: `Action Required: Verify Your Email Address`,
		react: <VerifyNewsletterSubscriptionEmail name={name} onboardingUrl={newsletterVerifyURL.toString()} />,
	})

	if (response.status === 'success') {
		return json({ status: 'success', submission } as const)
	} else {
		submission.error[''] = response.error.message
		return json(
			{
				status: 'error',
				submission,
			} as const,
			{ status: 500 },
		)
	}
}
