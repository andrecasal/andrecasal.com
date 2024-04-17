import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'

const emVariants = cva('', {
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

type EmProps = VariantProps<typeof emVariants> & HTMLAttributes<HTMLElement>

/**
 * An em component with control for typographic attributes.
 *
 * @param {string} [size] - The size variant of the heading (4xl, 3xl, 2xl, xl, lg, md, sm, xs).
 * @param {string} [weight] - The font weight of the heading (thin, extralight, light, normal, medium, semibold, bold, extrabold, or black).
 * @param {string} [align] - The P alignment of the heading (left, center, or right).
 * @param {string} [tracking] - The letter spacing of the heading (tighter, tight, normal, wide, wider, or widest).
 */
const Em = forwardRef<HTMLElement, EmProps>(({ size, weight, align, tracking, className, ...props }, ref) => {
	return <em ref={ref} className={cn('em', emVariants({ size, weight, align, tracking }), className)} {...props} />
})
Em.displayName = 'Em'

export { Em }
