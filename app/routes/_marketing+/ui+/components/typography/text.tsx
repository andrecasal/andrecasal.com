import { type HTMLAttributes, forwardRef, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/misc.ts'

const textVariants = cva('', {
	variants: {
		size: {
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
	},
})

type TextType = 'p' | 'span' | 'div'

type TextProps = { as?: TextType } & VariantProps<typeof textVariants> & { children: ReactNode } & HTMLAttributes<HTMLParagraphElement>

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ as = 'p', size = 'md', weight = 'bold', align = 'left', children, className, ...props }, ref) => {
	const Comp = as
	return (
		<Comp ref={ref} className={cn(textVariants({ size, weight, align }), className)} {...props}>
			{children}
		</Comp>
	)
})
Text.displayName = 'Text'

export { Text, textVariants }
