import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Heading } from './components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'

const Installation = () => {
	const tailwindConfigCode = `import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				background: 'hsl(var(--color-background) / <alpha-value>)',
				foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
				brand: {
					DEFAULT: 'hsl(var(--color-brand) / <alpha-value>)',
					muted: 'hsl(var(--color-brand-muted) / <alpha-value>)',
				},
				muted: {
					50: 'hsl(var(--color-muted-50) / <alpha-value>)',
					100: 'hsl(var(--color-muted-100) / <alpha-value>)',
					200: 'hsl(var(--color-muted-200) / <alpha-value>)',
					300: 'hsl(var(--color-muted-300) / <alpha-value>)',
					400: 'hsl(var(--color-muted-400) / <alpha-value>)',
					500: 'hsl(var(--color-muted-500) / <alpha-value>)',
					600: 'hsl(var(--color-muted-600) / <alpha-value>)',
					700: 'hsl(var(--color-muted-700) / <alpha-value>)',
					800: 'hsl(var(--color-muted-800) / <alpha-value>)',
					900: 'hsl(var(--color-muted-900) / <alpha-value>)',
					950: 'hsl(var(--color-muted-950) / <alpha-value>)',
				},
				success: {
					foreground: 'hsl(var(--color-success-foreground) / <alpha-value>)',
					title: 'hsl(var(--color-success-title) / <alpha-value>)',
					background: 'hsl(var(--color-success-background) / <alpha-value>)',
				},
				info: {
					foreground: 'hsl(var(--color-info-foreground) / <alpha-value>)',
					title: 'hsl(var(--color-info-title) / <alpha-value>)',
					background: 'hsl(var(--color-info-background) / <alpha-value>)',
				},
				warning: {
					foreground: 'hsl(var(--color-warning-foreground) / <alpha-value>)',
					title: 'hsl(var(--color-warning-title) / <alpha-value>)',
					background: 'hsl(var(--color-warning-background) / <alpha-value>)',
				},
				danger: {
					foreground: 'hsl(var(--color-danger-foreground) / <alpha-value>)',
					title: 'hsl(var(--color-danger-title) / <alpha-value>)',
					background: 'hsl(var(--color-danger-background) / <alpha-value>)',
				},
				ring: 'hsl(var(--color-ring) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				code: ['var(--font-code)', ...defaultTheme.fontFamily.mono],
			},
			backgroundImage: {
				diamonds:
					'repeating-linear-gradient(-45deg, hsl(var(--color-background)), hsl(var(--color-background)) 4px, transparent 4px, transparent 10px), repeating-linear-gradient(45deg, hsl(var(--color-background)), hsl(var(--color-background)) 4px, hsl(var(--color-muted-200)) 4px, hsl(var(--color-muted-200)) 10px)',
			},
			borderRadius: {
				lg: 'calc(var(--radius))',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontSize: {
				'size-4xl': ['var(--text-size-4xl)', { lineHeight: 'var(--text-size-4xl-line-height)' }],
				'size-3xl': ['var(--text-size-3xl)', { lineHeight: 'var(--text-size-3xl-line-height)' }],
				'size-2xl': ['var(--text-size-2xl)', { lineHeight: 'var(--text-size-2xl-line-height)' }],
				'size-xl': ['var(--text-size-xl)', { lineHeight: 'var(--text-size-xl-line-height)' }],
				'size-lg': ['var(--text-size-lg)', { lineHeight: 'var(--text-size-lg-line-height)' }],
				'size-md': ['var(--text-size-md)', { lineHeight: 'var(--text-size-md-line-height)' }],
				'size-sm': ['var(--text-size-sm)', { lineHeight: 'var(--text-size-sm-line-height)' }],
				'size-xs': ['var(--text-size-xs)', { lineHeight: 'var(--text-size-xs-line-height)' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			transitionProperty: {
				width: 'width',
				'max-width': 'max-width',
			},
			spacing: {
				container: 'var(--container-padding-x)',
				'container-sm': 'calc(var(--container-padding-x) + 0.5rem)',
				'container-lg': 'calc(var(--container-padding-x) + 1rem)',
			},
			maxWidth: {
				container: 'var(--container-max-width)',
			},
			minWidth: {
				tap: 'var(--min-tap-target)',
			},
			minHeight: {
				tap: 'var(--min-tap-target)',
			},
			gridTemplateColumns: {
				responsive: 'repeat(auto-fit, minmax(14rem, 1fr))',
			},
		},
	},
	plugins: [animatePlugin, radixPlugin],
} satisfies Config`
	const tailwindCSSCode = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		color-scheme: light;

		--font-sans: Inter;
		--font-code: 'Fira Code VF';

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

		--container-max-width: 80rem; /* 1280px */
		--container-padding-x: 1rem;

		/* Tell the browser to interpolate between the two scales, based on the current viewport width */
		/* Use this fluid type calculator: https://utopia.fyi/type/calculator/?c=320,16,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
		--text-size-4xl: clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem);
		--text-size-4xl-line-height: clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem);
		--text-size-3xl: clamp(2.07rem, calc(1.73rem + 1.7vw), 3.05rem);
		--text-size-3xl-line-height: clamp(2.07rem, calc(1.73rem + 1.7vw), 3.05rem);
		--text-size-2xl: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem);
		--text-size-2xl-line-height: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem);
		--text-size-xl: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem);
		--text-size-xl-line-height: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem);
		--text-size-lg: clamp(1.2rem, calc(1.07rem + 0.63vw), 1.56rem);
		--text-size-lg-line-height: clamp(1.2rem, calc(1.07rem + 0.63vw), 1.56rem);
		--text-size-md: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);
		--text-size-md-line-height: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);
		--text-size-sm: clamp(0.83rem, calc(0.78rem + 0.29vw), 1rem);
		--text-size-sm-line-height: clamp(0.83rem, calc(0.78rem + 0.29vw), 1rem);
		--text-size-xs: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);
		--text-size-xs-line-height: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);

		--radius: 0.375rem;
		--min-tap-target: 24px;
	}

	.dark {
		color-scheme: dark;
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
}

@media (pointer: coarse) {
	:root {
		--min-tap-target: 44px;
	}
}`
	const utilsCode = `import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
	classGroups: {
		colors: [{ 'text-muted': ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] }],
		spacing: [{ 'text-size': ['6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'] }],
	},
})

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}`

	return (
		<>
			<Heading as="h2" size="3xl" className="mt-8 lg:mt-0">
				Installation
			</Heading>
			<Text size="md" className="mt-8">
				This library requires TailwindCSS:{' '}
				<Text as="span" weight="bold">
					npm install -D tailwindcss
				</Text>
				.
			</Text>
			<Text size="md" className="mt-8">
				Here's my tailwind.config.ts. You'll need this for the custom Tailwind classes the library uses.
			</Text>
			<CodeBlock code={tailwindConfigCode} filename="tailwind.config" extension="ts" className="mt-8" />

			<Text size="md" className="mt-8">
				You'll also need the CSS file those classes use.
			</Text>
			<CodeBlock code={tailwindCSSCode} filename="tailwind" extension="css" className="mt-8" />

			<Text size="md" className="mt-8">
				Finally you'll also need the cn() function. The extendTailwindMerge() is there to tell twMerge to which class groups the 'text-muted' and 'text-size' classes belong to
				(otherwise it doesn't know how to resolve the conflicts).
			</Text>
			<CodeBlock code={utilsCode} filename="tailwind" extension="css" className="mt-8" />

			<Text size="md" className="mt-8">
				You can download the repo. You'll find all components{' '}
				<a href="https://github.com/andrecasal/andrecasal.com/tree/main/app/routes/_marketing%2B/ui%2B/components" target="_blank" className="underline" rel="noreferrer">
					here
				</a>
				.
			</Text>
		</>
	)
}
export default Installation
