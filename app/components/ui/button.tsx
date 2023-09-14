import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/tailwind-merge.ts'

const buttonVariants = cva(
	'inline-flex whitespace-nowrap items-center justify-center rounded-md text-size-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-brand text-muted-50 hover:bg-brand/90 border',
				secondary: 'bg-muted-50 text-muted-800 hover:bg-muted-100 border',
				danger: 'bg-danger-background text-danger-foreground hover:bg-danger-background/90',
				outline: 'border border-muted-200 bg-background hover:bg-muted-100 hover:text-muted-900',
				ghost: 'hover:bg-muted-100 hover:text-muted-900',
				link: 'text-brand underline-offset-4 hover:underline',
			},
			size: {
				wide: 'px-4 py-2 w-full',
				lg: 'h-14 px-10 text-size-md',
				normal: 'h-10 px-4 py-2',
				sm: 'h-9 px-3',
				pill: 'text-size-sm p-2 leading-3 rounded-full font-medium sm:px-3',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'normal',
		},
	},
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
