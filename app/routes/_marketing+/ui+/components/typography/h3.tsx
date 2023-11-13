import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'

const h3Variants = cva('', {
	variants: {
		size: {
			'6xl': 'text-size-6xl',
			'5xl': 'text-size-5xl',
			'4xl': 'text-size-4xl',
			'3xl': 'text-size-3xl',
			'2xl': 'text-size-2xl',
			xl: 'text-size-xl',
			lg: 'text-size-lg',
			md: 'text-size-md',
			sm: 'text-size-sm',
			xs: 'text-size-xs',
		},
		weight: {
			black: 'font-black',
			extrabold: 'font-extrabold',
			bold: 'font-bold',
			semibold: 'font-semibold',
			medium: 'font-medium',
			normal: 'font-normal',
			light: 'font-light',
			extralight: 'font-extralight',
			thin: 'font-thin',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},
		tracking: {
			tighter: 'tracking-tighter',
			tight: 'tracking-tight',
			normal: 'tracking-normal',
			wide: 'tracking-wide',
			wider: 'tracking-wider',
			widest: 'tracking-widest',
		},
	},
})

type h3Props = VariantProps<typeof h3Variants> & { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>

/**
 * A h3 component.
 *
 * @param {string} [size='2xl'] - The size variant of the h3 (4xl, 3xl, 2xl, xl, lg, md, sm, xs).
 * @param {string} [weight='bold'] - The font weight of the h3 (thin, extralight, light, normal, medium, semibold, bold, extrabold, or black).
 * @param {string} [align='left'] - The text alignment of the h3 (left, center, or right).
 * @param {string} [tracking] - The letter spacing of the h3 (tighter, tight, normal, wide, wider, or widest).
 */
const H3 = forwardRef<HTMLHeadingElement, h3Props>(({ size = '2xl', weight = 'bold', align = 'left', tracking, children, className, ...props }, ref) => {
	return (
		<h3 ref={ref} className={cn(h3Variants({ size, weight, align, tracking }), className)} {...props}>
			{children}
		</h3>
	)
})
H3.displayName = 'H3'

export { H3 }
