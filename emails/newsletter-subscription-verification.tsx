import { VerifyNewsletterSubscriptionEmail } from '../app/routes/_marketing+/newsletter/email/verify.server.tsx'

export default function Email() {
	const newsletterNameQueryParam = 'name'
	const newsletterEmailQueryParam = 'email'
	const newsletterOTPQueryParam = 'code'
	const otp = '123456'

	const newsletterVerifyURL = new URL(`http://localhost:3000/newsletter/verify`)
	newsletterVerifyURL.searchParams.set(newsletterNameQueryParam, 'André')
	newsletterVerifyURL.searchParams.set(newsletterEmailQueryParam, 'andre@andrecasal.com')
	newsletterVerifyURL.searchParams.set(newsletterOTPQueryParam, '123456')
	const onboardingUrl = newsletterVerifyURL.toString()

	return <VerifyNewsletterSubscriptionEmail name="John Doe" onboardingUrl={onboardingUrl} otp={otp} />
}
