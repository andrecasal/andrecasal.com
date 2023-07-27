import { Container, Html, Link, Tailwind, Text } from '@react-email/components'
import tailwindConfig from '../../../../tailwind.config.ts'

export const WelcomeAboardTheNewsletter = ({ onboardingUrl, otp }: { onboardingUrl: string; otp: string }) => {
	return (
		<Tailwind config={tailwindConfig as any}>
			<Html lang="en" dir="ltr">
				<Container>
					<h1>
						<Text>Welcome to André Casal's newsletter!</Text>
					</h1>
					<p>
						<Text>
							Here's your verification code: <strong>{otp}</strong>
						</Text>
					</p>
					<p>
						<Text>
							Or click the link to get started: <Link href={onboardingUrl}>{onboardingUrl}</Link>
						</Text>
					</p>
				</Container>
			</Html>
		</Tailwind>
	)
}
