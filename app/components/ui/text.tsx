import { type HTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/misc.ts'

const textVariants = cva('', {
	variants: {
		heading: {
			h1: 'font-bold tracking-tight',
			h2: 'font-bold tracking-tight',
			h3: 'font-bold tracking-tight',
			h4: 'font-bold tracking-tight',
			h5: 'font-bold tracking-tight',
			h6: 'font-bold tracking-tight',
			p: '',
		},
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
	},
	compoundVariants: [
		{ heading: 'p', size: '6xl', className: 'leading-none' },
		{ heading: 'p', size: '5xl', className: 'leading-none' },
		{ heading: 'p', size: '4xl', className: 'leading-10' },
		{ heading: 'p', size: '3xl', className: 'leading-9' },
		{ heading: 'p', size: '2xl', className: 'leading-9' },
		{ heading: 'p', size: 'xl', className: 'leading-8' },
		{ heading: 'p', size: 'lg', className: 'leading-8' },
		{ heading: 'p', size: 'md', className: 'leading-7' },
		{ heading: 'p', size: 'sm', className: 'leading-6' },
		{ heading: 'p', size: 'xs', className: 'leading-5' },
	],
	defaultVariants: {
		size: 'md',
		heading: 'p',
	},
})

export interface TextProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
	asChild?: boolean
	heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ size, heading = undefined, className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : heading ?? 'p'
	return <Comp className={cn(textVariants({ size, heading, className }))} ref={ref} {...props} />
})
Text.displayName = 'Text'

export { Text, textVariants }
