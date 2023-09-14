import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils/misc.ts'

const headingVariants = cva('', {
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

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = { as?: HeadingType } & VariantProps<typeof headingVariants> & { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>

/**
 * A Heading component.
 *
 * @param {HeadingType} [as='h1'] - The HTML heading element type (h1, h2, h3, h4, h5, or h6).
 * @param {string} [weight='bold'] - The font weight of the heading (thin, extralight, light, normal, medium, semibold, bold, extrabold, or black).
 * @param {string} [size='4xl'] - The size variant of the heading (4xl, 3xl, 2xl, xl, lg, md, sm, xs).
 * @param {string} [align='left'] - The text alignment of the heading (left, center, or right).
 * @param {ReactNode} children - The content to be displayed within the heading.
 * @param {string} className - Additional CSS classes to be applied to the heading.
 * @param {HTMLAttributes<HTMLHeadingElement>} props - Additional HTML attributes to be passed to the underlying heading element.
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ as = 'h1', size = '4xl', weight = 'bold', align = 'left', tracking, children, className, ...props }, ref) => {
	const Comp = as
	return (
		<Comp ref={ref} className={cn(headingVariants({ size, weight, align, tracking }), className)} {...props}>
			{children}
		</Comp>
	)
})
Heading.displayName = 'Heading'

export { Heading }
