import type { Config } from 'tailwindcss'
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
				'size-6xl': ['var(--typography-size-6xl)', { lineHeight: 'var(--typography-size-6xl-line-height)' }],
				'size-5xl': ['var(--typography-size-5xl)', { lineHeight: 'var(--typography-size-5xl-line-height)' }],
				'size-4xl': ['var(--typography-size-4xl)', { lineHeight: 'var(--typography-size-4xl-line-height)' }],
				'size-3xl': ['var(--typography-size-3xl)', { lineHeight: 'var(--typography-size-3xl-line-height)' }],
				'size-2xl': ['var(--typography-size-2xl)', { lineHeight: 'var(--typography-size-2xl-line-height)' }],
				'size-xl': ['var(--typography-size-xl)', { lineHeight: 'var(--typography-size-xl-line-height)' }],
				'size-lg': ['var(--typography-size-lg)', { lineHeight: 'var(--typography-size-lg-line-height)' }],
				'size-md': ['var(--typography-size-md)', { lineHeight: 'var(--typography-size-md-line-height)' }],
				'size-sm': ['var(--typography-size-sm)', { lineHeight: 'var(--typography-size-sm-line-height)' }],
				'size-xs': ['var(--typography-size-xs)', { lineHeight: 'var(--typography-size-xs-line-height)' }],
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
} satisfies Config
