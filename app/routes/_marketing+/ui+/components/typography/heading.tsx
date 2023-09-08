import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils/misc.ts'

const headingVariants = cva('', {
	variants: {
		weight: {
			thin: 'font-thin',
			extralight: 'font-extralight',
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			extrabold: 'font-extrabold',
			black: 'font-black',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},
	},
	defaultVariants: {
		weight: 'bold',
		align: 'left',
	},
})

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = { as?: HeadingType } & VariantProps<typeof headingVariants> & { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>

/**
 * A Heading component.
 *
 * @param {HeadingType} [as='h1'] - The HTML heading element type (h1, h2, h3, h4, h5, or h6).
 * @param {string} [weight='bold'] - The font weight of the heading (thin, extralight, light, normal, medium, semibold, bold, extrabold, or black).
 * @param {string} [align='left'] - The text alignment of the heading (left, center, or right).
 * @param {ReactNode} children - The content to be displayed within the heading.
 * @param {string} className - Additional CSS classes to be applied to the heading.
 * @param {HTMLAttributes<HTMLHeadingElement>} props - Additional HTML attributes to be passed to the underlying heading element.
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ as = 'h1', weight = 'bold', align = 'left', children, className, ...props }, ref) => {
	const Comp = as
	return (
		<Comp ref={ref} className={cn(headingVariants({ weight, align }), className)} {...props}>
			{children}
		</Comp>
	)
})
Heading.displayName = 'Heading'

export { Heading }
