import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Code } from '../components/typography/code.tsx'
import { Link } from '@remix-run/react'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { H1 } from '../components/typography/h1.tsx'
import { H2 } from '../components/typography/h2.tsx'

const Architecture = () => {
	const darkModeStyles = `/* Colors */
@layer base {
	:root {
		--color-background: 0 0% 100%;
		--color-foreground: 0 0% 0%;
		--color-brand: 41 96.1% 40.4%;
		--color-brand-muted: 45 93.4% 47.5%;
		--color-success-title: 143 64.2% 24.1%;
		--color-success-foreground: 142 71.8% 29.2%;
		--color-success-background: 138 76.5% 96.7%;
		--color-info-title: 226 70.7% 40.2%;
		--color-info-foreground: 224 76.3% 48%;
		--color-info-background: 214 100% 96.9%;
		--color-warning-title: 32 81% 28.8%;
		--color-warning-foreground: 35 91.7% 32.9%;
		--color-warning-background: 55 91.7% 95.3%;
		--color-danger-title: 0 70% 35.3%;
		--color-danger-foreground: 0 73.7% 41.8%;
		--color-danger-background: 0 85.7% 97.3%;
		--color-muted-50: 210 20% 98%;
		--color-muted-100: 220 14.3% 95.9%;
		--color-muted-200: 220 13% 91%;
		--color-muted-300: 216 12.2% 83.9%;
		--color-muted-400: 218 10.6% 64.9%;
		--color-muted-500: 220 8.9% 46.1%;
		--color-muted-600: 215 13.8% 34.1%;
		--color-muted-700: 217 19.1% 26.7%;
		--color-muted-800: 215 27.9% 16.9%;
		--color-muted-900: 221 39.3% 11%;
		--color-muted-950: 224 71.4% 4.1%;
		--color-ring: 243 75.4% 58.6%;
	}

	.dark {
		--color-background: 224 35.7% 4.1%;
		--color-foreground: 0 0% 100%;
		--color-danger-foreground: 0 73.7% 61.8%;
		--color-muted-50: 224 71.4% 4.1%;
		--color-muted-100: 221 39.3% 11%;
		--color-muted-200: 215 27.9% 16.9%;
		--color-muted-300: 217 19.1% 26.7%;
		--color-muted-400: 215 13.8% 34.1%;
		--color-muted-500: 220 8.9% 46.1%;
		--color-muted-600: 218 10.6% 64.9%;
		--color-muted-700: 216 12.2% 83.9%;
		--color-muted-800: 220 13% 91%;
		--color-muted-900: 220 14.3% 95.9%;
		--color-muted-950: 210 20% 98%;
		--color-ring: 239 86.4% 59.6%;

		--color-info-title: 226 70.7% 40.2%;
		--color-info-foreground: 224 76.3% 48%;
		--color-info-background: 221 39.3% 11%;
	}
}`
	return (
		<Container>
			<H1 size="3xl">Dark Mode</H1>
			<Text size="md" className="mt-2">
				Dark mode is controlled using the <Code>.dark</Code> class applied to either {'<html>'} or {'<body>'}. It's up to you to correctly set this class based on the user's
				preference. Both the{' '}
				<a
					href="https://github.com/epicweb-dev/epic-stack/blob/d43c8dcd2541c64b86fd755b8ff8b02ff0164d3d/app/root.tsx#L367C1-L375C1"
					target="_blank"
					rel="noreferrer"
					className="underline"
				>
					Epic Stack
				</a>{' '}
				and{' '}
				<Link to="/ship-fast" className="underline">
					ShipFast
				</Link>{' '}
				come with a <Code>useTheme()</Code> hook that you can use to easily set the class.
			</Text>

			<H2 size="3xl" className="mt-8">
				Styles
			</H2>
			<Text size="md" className="mt-2">
				Dark mode styles are defined by redefining the CSS variables in the <Code>tailwind.css</Code> file when a <Code>.dark</Code> class is applied. For example, here's how we
				change the colors when dark mode is enabled:
			</Text>
			<CodeBlock code={darkModeStyles} filename="tailwind" extension="css" className="mt-4" />
		</Container>
	)
}
export default Architecture
