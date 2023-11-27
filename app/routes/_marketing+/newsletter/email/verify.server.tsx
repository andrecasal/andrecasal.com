import {
	//Row, // <table>, <tbody>, and <tr> tags
	Section, // <table>, <tbody>, <tr>, and <td> tags
	//Column, // <td> tag
	Heading, // <h1> - <h6> tags
	//Hr, // <hr> tag
	//Img, // <img> tag
	// Note: All email clients can display .png, .gif, and .jpg images. Unfortunately, .svg images are not well supported, regardless of how they’re referenced, so avoid using these. See Can I Email for more information.
	Link, // <a> tag
	Button, // A link that is styled to look like a button.
	// Semantics: Quite often in the email world we talk about buttons, when actually we mean links. Behind the scenes this is a <a> tag, that is styled like a <button> tag.
	Text, // <p> tag
} from '@react-email/components'
import { EmailRoot } from '~/components/email-root.tsx'

export const VerifyNewsletterSubscriptionEmail = ({ name, onboardingUrl, otp }: { name: string; onboardingUrl: string; otp: string }) => {
	return (
		<EmailRoot subjectLine="Action Required: Confirm Your Email Address Now" previewText="Complete your subscription by confirming your email address. Just one click away!">
			<Section>
				<Heading as="h1" className="my-14 text-3xl font-bold">
					Confirm Your Email Address
				</Heading>
				<Text className="text-base">Hi {name},</Text>
				<Text className="text-base">Thank you for subscribing to André Casal's newsletter! To ensure you receive our updates and exclusive content, please confirm your email address by clicking the button below:</Text>
				<Button href={onboardingUrl} className="mt-2 rounded bg-[#ca8b04] px-8 py-4 text-center text-xl leading-5 text-white hover:bg-[#ca8b04]/90">
					Confirm Your Email Address
				</Button>
				<Text className="mt-20 text-sm text-gray-400">Alternatively you can also copy+paste this code into the page:</Text>
				<Text className="mt-6 text-lg font-bold text-gray-400">{otp}</Text>
				<Text className="mt-20 text-xs text-gray-400">
					If you didn't subscribe to{' '}
					<Link href="https://andrecasal.com/newsletter" target="_blank" className="font-semibold text-[#ca8b04]">
						André Casal's newsletter
					</Link>
					, just delete this email and everything will go back to the way it was.
				</Text>
			</Section>
		</EmailRoot>
	)
}
