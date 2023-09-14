import { type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'

const badgeVariants = cva('rounded-full ring-1 ring-inset inline-block', {
	variants: {
		variant: {
			info: 'text-info-foreground bg-info-background ring-info-foreground/20',
			warning: 'text-warning-foreground bg-warning-background ring-warning-foreground/20',
			danger: 'text-danger-foreground bg-danger-background ring-danger-foreground/20',
			success: 'text-success-foreground bg-success-background ring-success-foreground/20',
			muted: 'text-muted-600 bg-muted-50 ring-muted-200',
			outline: 'text-foreground bg-background ring-foreground/20',
		},
		size: {
			md: 'text-size-sm px-4 py-2 font-semibold ',
			sm: 'text-size-xs px-3 py-1.5 font-medium',
		},
	},
	defaultVariants: {
		variant: 'info',
		size: 'md',
	},
})

interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
export type { BadgeProps }
