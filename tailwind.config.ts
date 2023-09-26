import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
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
				tooltip: {
					background: 'hsl(var(--tooltip-color-background) / <alpha-value>)',
					foreground: 'hsl(var(--tooltip-color-foreground) / <alpha-value>)',
				},
				ring: 'hsl(var(--color-ring) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				code: ['var(--font-code)', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				'size-6xl': ['var(--text-size-6xl)', { lineHeight: 'var(--text-line-height-6xl)', letterSpacing: 'var(--text-tracking-6xl)' }],
				'size-5xl': ['var(--text-size-5xl)', { lineHeight: 'var(--text-line-height-5xl)', letterSpacing: 'var(--text-tracking-5xl)' }],
				'size-4xl': ['var(--text-size-4xl)', { lineHeight: 'var(--text-line-height-4xl)', letterSpacing: 'var(--text-tracking-4xl)' }],
				'size-3xl': ['var(--text-size-3xl)', { lineHeight: 'var(--text-line-height-3xl)', letterSpacing: 'var(--text-tracking-3xl)' }],
				'size-2xl': ['var(--text-size-2xl)', { lineHeight: 'var(--text-line-height-2xl)', letterSpacing: 'var(--text-tracking-2xl)' }],
				'size-xl': ['var(--text-size-xl)', { lineHeight: 'var(--text-line-height-xl)', letterSpacing: 'var(--text-tracking-xl)' }],
				'size-lg': ['var(--text-size-lg)', { lineHeight: 'var(--text-line-height-lg)', letterSpacing: 'var(--text-tracking-lg)' }],
				'size-md': ['var(--text-size-md)', { lineHeight: 'var(--text-line-height-md)', letterSpacing: 'var(--text-tracking-md)' }],
				'size-sm': ['var(--text-size-sm)', { lineHeight: 'var(--text-line-height-sm)', letterSpacing: 'var(--text-tracking-sm)' }],
				'size-xs': ['var(--text-size-xs)', { lineHeight: 'var(--text-line-height-xs)', letterSpacing: 'var(--text-tracking-xs)' }],
				'size-tooltip': 'var(--tooltip-text-size)',
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
				'space-20': 'var(--space-20)',
				'space-19': 'var(--space-19)',
				'space-18': 'var(--space-18)',
				'space-17': 'var(--space-17)',
				'space-16': 'var(--space-16)',
				'space-15': 'var(--space-15)',
				'space-14': 'var(--space-14)',
				'space-13': 'var(--space-13)',
				'space-12': 'var(--space-12)',
				'space-11': 'var(--space-11)',
				'space-10': 'var(--space-10)',
				'space-9': 'var(--space-9)',
				'space-8': 'var(--space-8)',
				'space-7': 'var(--space-7)',
				'space-6': 'var(--space-6)',
				'space-5': 'var(--space-5)',
				'space-4': 'var(--space-4)',
				'space-3': 'var(--space-3)',
				'space-2': 'var(--space-2)',
				'space-1': 'var(--space-1)',
				'space-0': 'var(--space-0)',
			},
			maxWidth: {
				container: 'calc(var(--content-max-width) * 1rem)',
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
