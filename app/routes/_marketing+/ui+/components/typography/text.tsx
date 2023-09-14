import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'

const textVariants = cva('', {
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

type TextType = 'p' | 'span' | 'div'

type TextProps = { as?: TextType } & VariantProps<typeof textVariants> & { children: ReactNode } & HTMLAttributes<HTMLParagraphElement>

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ as = 'p', size = 'md', weight = 'normal', align = 'left', tracking, children, className, ...props }, ref) => {
	const Comp = as
	return (
		<Comp ref={ref} className={cn(textVariants({ size, weight, align, tracking }), className)} {...props}>
			{children}
		</Comp>
	)
})
Text.displayName = 'Text'

export { Text, textVariants }
