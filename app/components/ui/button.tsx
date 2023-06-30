import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/misc.ts'

const buttonVariants = cva(
	'inline-flex items-center whitespace-nowrap justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-brand text-background hover:bg-brand/90',
				secondary: 'bg-muted-200 text-muted-800 hover:bg-muted-200/80',
				destructive: 'bg-danger-background text-danger-foreground hover:bg-danger-background/90',
				outline: 'border border-muted-200 bg-background hover:bg-muted-100 hover:text-muted-900',
				ghost: 'hover:bg-muted-100 hover:text-muted-900',
				link: 'text-brand underline-offset-4 hover:underline',
			},
			size: {
				sm: 'h-9 px-3',
				normal: 'h-10 px-4 py-2',
				lg: 'h-11 px-8',
				wide: 'px-24 py-5',
				pill: 'px-12 py-3 leading-3',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'normal',
		},
	},
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
