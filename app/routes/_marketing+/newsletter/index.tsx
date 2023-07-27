import { Container } from '~/components/ui/container.tsx'
import { json, type ActionArgs, redirect } from '@remix-run/node'
import { parse } from '@conform-to/zod'
import { z } from 'zod'
import { emailSchema, nameSchema } from '~/utils/user-validation.ts'
import { generateTOTP } from '~/utils/totp.server.ts'
import { getDomainUrl } from '~/utils/misc.ts'
import { prisma } from '~/utils/db.server.ts'
import { sendEmail } from '~/utils/email.server.ts'
import { WelcomeAboardTheNewsletter } from './email.server.tsx'
import { Newsletter as NewsletterComponent } from '~/components/newsletter.tsx'

export const newsletterNameQueryParam = 'name'
export const newsletterEmailQueryParam = 'email'
export const newsletterOTPQueryParam = 'code'
export const newsletterVerificationType = 'newsletter'

export const newsletterSchema = z.object({
	name: nameSchema,
	email: emailSchema,
})

const Newsletter = () => {
	return (
		<Container className="relative isolate mt-32 sm:mt-56">
			<NewsletterComponent
				title="Get exclusive web dev tips that I only share with email subscribers"
				description="Golden nuggets of code knowledge you can read in 5 minutes. Delivered to your inbox every 2 weeks."
			/>
		</Container>
	)
}

export default Newsletter

export const verificationType = 'newsletter'

export async function action({ request }: ActionArgs) {
	const formData = await request.formData()
	const submission = parse(formData, { schema: newsletterSchema })
	if (submission.intent !== 'submit') {
		return json({ submission } as const)
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
		where: { type: verificationType, target: email },
	})
	await prisma.verification.create({
		data: {
			type: verificationType,
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
	const redirectTo = new URL(newsletterVerifyURL.toString())
	newsletterVerifyURL.searchParams.set(newsletterOTPQueryParam, otp)

	const response = await sendEmail({
		to: email,
		subject: `Welcome aboard!`,
		react: <WelcomeAboardTheNewsletter onboardingUrl={newsletterVerifyURL.toString()} otp={otp} />,
	})

	if (response.status === 'success') {
		return redirect(redirectTo.pathname + redirectTo.search)
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
