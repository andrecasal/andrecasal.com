import { type HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/misc.ts'
import { Slot } from '@radix-ui/react-slot'

const headingVariants = cva('', {
	variants: {
		size: {
			'2xl': 'text-heading-xl sm:text-heading-2xl',
			xl: 'text-heading-lg sm:text-heading-xl',
			lg: 'text-heading-md sm:text-heading-lg',
			md: 'text-heading-sm sm:text-heading-md',
			sm: 'text-heading-xs sm:text-heading-sm',
			xs: 'text-heading-2xs sm:text-heading-xs',
			'2xs': 'text-heading-3xs sm:text-heading-2xs',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
	asChild?: boolean
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ level, size, className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : level
	return <Comp className={cn(headingVariants({ size, className }))} ref={ref} {...props} />
})
Heading.displayName = 'Heading'

export { Heading, headingVariants }
