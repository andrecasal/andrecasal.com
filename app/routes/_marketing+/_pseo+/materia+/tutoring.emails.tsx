import { Button, Container, Heading, Html, Tailwind, Text } from '@react-email/components'
import tailwindConfig from '../../../../../tailwind.config.ts'

export function ResourcesEmail({ subject, resourcesURL }: { subject: string; resourcesURL: string }) {
	return (
		<Tailwind config={tailwindConfig as any}>
			<Html lang="en" dir="ltr">
				<Container>
					<Heading as="h1">Recursos para estudantes de {subject}!</Heading>
					<Text>Fico muito feliz por teres decidido melhorar as tuas habilidades de programação! Para te ajudar, envio-te alguns recursos que poderão ser úteis para ti.</Text>
					<Button href={resourcesURL} style={{ color: '#303638', padding: '10px 20px' }}>
						Clica aqui para acederes ao recursos
					</Button>
				</Container>
			</Html>
		</Tailwind>
	)
}
