import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'

const h5Variants = cva('', {
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

type h5Props = VariantProps<typeof h5Variants> & HTMLAttributes<HTMLHeadingElement>

/**
 * A h5 component.
 *
 * @param {string} [size='lg'] - The size variant of the h5 (4xl, 3xl, 2xl, xl, lg, md, sm, xs).
 * @param {string} [weight='bold'] - The font weight of the h5 (thin, extralight, light, normal, medium, semibold, bold, extrabold, or black).
 * @param {string} [align='left'] - The text alignment of the h5 (left, center, or right).
 * @param {string} [tracking] - The letter spacing of the h5 (tighter, tight, normal, wide, wider, or widest).
 */
const H5 = forwardRef<HTMLHeadingElement, h5Props>(({ size = 'lg', weight = 'bold', align = 'left', tracking, className, ...props }, ref) => (
	<h5 ref={ref} className={cn(h5Variants({ size, weight, align, tracking }), className)} {...props} />
))
H5.displayName = 'H5'

export { H5 }
