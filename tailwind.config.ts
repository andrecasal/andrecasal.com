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
				// 1rem = 16px
				/** 80px size / 84px high / bold */
				'title-2xl': ['5rem', { lineHeight: '5.25rem', fontWeight: '700', letterSpacing: '-0.025em' }],
				/** 56px size / 62px high / bold */
				'title-xl': ['3.5rem', { lineHeight: '3.875rem', fontWeight: '700', letterSpacing: '-0.025em' }],
				/** 40px size / 48px high / bold */
				'title-lg': ['2.5rem', { lineHeight: '3rem', fontWeight: '700', letterSpacing: '-0.025em' }],
				/** 32px size / 36px high / bold */
				'title-md': ['2rem', { lineHeight: '2.25rem', fontWeight: '700', letterSpacing: '-0.025em' }],
				/** 28px size / 36px high / bold */
				'title-sm': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700', letterSpacing: '-0.025em' }],
				/** 24px size / 32px high / bold */
				'title-xs': ['1.5rem', { lineHeight: '2rem', fontWeight: '700', letterSpacing: '-0.025em' }],
				/** 16px size / 20px high / bold */
				'title-2xs': ['1rem', { lineHeight: '1.25rem', fontWeight: '700', letterSpacing: '-0.025em' }],

				/** 32px size / 36px high / normal */
				'body-2xl': ['2rem', { lineHeight: '2.5rem' }],
				/** 28px size / 36px high / normal */
				'body-xl': ['1.75rem', { lineHeight: '2.25rem' }],
				/** 24px size / 32px high / normal */
				'body-lg': ['1.5rem', { lineHeight: '2.25rem' }],
				/** 20px size / 28px high / normal */
				'body-md': ['1.125rem', { lineHeight: '2rem' }],
				/** 16px size / 20px high / normal */
				'body-sm': ['1rem', { lineHeight: '1.75rem' }],
				/** 14px size / 18px high / normal */
				'body-xs': ['0.875rem', { lineHeight: '1.25rem' }],
				/** 12px size / 16px high / normal */
				'body-2xs': ['0.75rem', { lineHeight: '1.125rem' }],

				/** 18px size / 24px high / semibold */
				caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
				/** 12px size / 16px high / bold */
				button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
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
