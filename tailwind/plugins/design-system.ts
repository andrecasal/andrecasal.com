import plugin from 'tailwindcss/plugin.js'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export const designSystem = plugin(
	function ({ addBase }) {
		addBase({
			':root': {
				colorScheme: 'light',
				'--color-background': '0 0% 100%',
				'--color-foreground': '0 0% 0%',
				'--color-brand': '41 96.1% 40.4%',
				'--color-brand-muted': '45 93.4% 47.5%',
				'--color-success-title': '143 64.2% 24.1%',
				'--color-success-foreground': '142 71.8% 29.2%',
				'--color-success-background': '138 76.5% 96.7%',
				'--color-info-title': '226 70.7% 40.2%',
				'--color-info-foreground': '224 76.3% 48%',
				'--color-info-background': '214 100% 96.9%',
				'--color-warning-title': '32 81% 28.8%',
				'--color-warning-foreground': '35 91.7% 32.9%',
				'--color-warning-background': '55 91.7% 95.3%',
				'--color-danger-title': '0 70% 35.3%',
				'--color-danger-foreground': '0 73.7% 41.8%',
				'--color-danger-background': '0 85.7% 97.3%',
				'--color-muted-50': '210 20% 98%',
				'--color-muted-100': '220 14.3% 95.9%',
				'--color-muted-200': '220 13% 91%',
				'--color-muted-300': '216 12.2% 83.9%',
				'--color-muted-400': '218 10.6% 64.9%',
				'--color-muted-500': '220 8.9% 46.1%',
				'--color-muted-600': '215 13.8% 34.1%',
				'--color-muted-700': '217 19.1% 26.7%',
				'--color-muted-800': '215 27.9% 16.9%',
				'--color-muted-900': '221 39.3% 11%',
				'--color-muted-950': '224 71.4% 4.1%',
				'--color-ring': '243 75.4% 58.6%',
				'--radius': '0.375rem',
				'--min-tap-target': '24px',
			},
			'.dark': {
				colorScheme: 'dark',
				'--color-background': '0 0% 0%',
				'--color-foreground': '0 0% 100%',
				'--color-brand': '41 96.1% 40.4%',
				'---color-brand-muted': '45 93.4% 47.5%',
				'--color-success-title': '143 64.2% 24.1%',
				'--color-success-foreground': '142 71.8% 29.2%',
				'--color-success-background': '138 76.5% 96.7%',
				'--color-info-title': '226 70.7% 40.2%',
				'--color-info-foreground': '224 76.3% 48%',
				'--color-info-background': '214 100% 96.9%',
				'--color-warning-title': '32 81% 28.8%',
				'--color-warning-foreground': '35 91.7% 32.9%',
				'--color-warning-background': '55 91.7% 95.3%',
				'--color-danger-title': '0 70% 35.3%',
				'--color-danger-foreground': '0 73.7% 61.8%',
				'--color-danger-background': '0 85.7% 97.3%',
				'--color-muted-50': '224 71.4% 4.1%',
				'--color-muted-100': '221 39.3% 11%',
				'--color-muted-200': '215 27.9% 16.9%',
				'--color-muted-300': '217 19.1% 26.7%',
				'--color-muted-400': '215 13.8% 34.1%',
				'--color-muted-500': '220 8.9% 46.1%',
				'--color-muted-600': '218 10.6% 64.9%',
				'--color-muted-700': '216 12.2% 83.9%',
				'--color-muted-800': '220 13% 91%',
				'--color-muted-900': '220 14.3% 95.9%',
				'--color-muted-950': '210 20% 98%',
				'--color-ring': '239 86.4% 59.6%',
			},
			'@media (pointer: coarse)': {
				':root': {
					'--min-tap-target': '44px',
				},
			},
		})
	},
	{
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
					ring: 'hsl(var(--color-ring) / <alpha-value>)',
				},
				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)',
				},
				backgroundImage: {
					diamonds:
						'repeating-linear-gradient(-45deg, hsl(var(--color-background)), hsl(var(--color-background)) 4px, transparent 4px, transparent 10px), repeating-linear-gradient(45deg, hsl(var(--color-background)), hsl(var(--color-background)) 4px, hsl(var(--color-muted-200)) 4px, hsl(var(--color-muted-200)) 10px)',
				},
				fontFamily: {
					sans: ['Inter', ...defaultTheme.fontFamily.sans],
				},
				fontSize: {
					// 1rem = 16px
					/** 80px size / 84px high / bold */
					mega: ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
					/** 56px size / 62px high / bold */
					h1: ['3.5rem', { lineHeight: '3.875rem', fontWeight: '700' }],
					/** 40px size / 48px high / bold */
					h2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
					/** 32px size / 36px high / bold */
					h3: ['2rem', { lineHeight: '2.25rem', fontWeight: '700' }],
					/** 28px size / 36px high / bold */
					h4: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
					/** 24px size / 32px high / bold */
					h5: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
					/** 16px size / 20px high / bold */
					h6: ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],

					/** 32px size / 36px high / normal */
					'body-2xl': ['2rem', { lineHeight: '2.25rem' }],
					/** 28px size / 36px high / normal */
					'body-xl': ['1.75rem', { lineHeight: '2.25rem' }],
					/** 24px size / 32px high / normal */
					'body-lg': ['1.5rem', { lineHeight: '2rem' }],
					/** 20px size / 28px high / normal */
					'body-md': ['1.25rem', { lineHeight: '1.75rem' }],
					/** 16px size / 20px high / normal */
					'body-sm': ['1rem', { lineHeight: '1.25rem' }],
					/** 14px size / 18px high / normal */
					'body-xs': ['0.875rem', { lineHeight: '1.125rem' }],
					/** 12px size / 16px high / normal */
					'body-2xs': ['0.75rem', { lineHeight: '1rem' }],

					/** 18px size / 24px high / semibold */
					caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
					/** 12px size / 16px high / bold */
					button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
				},
				transitionProperty: {
					width: 'width',
					'max-width': 'max-width',
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
	},
)
