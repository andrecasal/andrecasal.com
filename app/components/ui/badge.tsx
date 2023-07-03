import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/misc.ts'

const badgeVariants = cva('rounded-full px-4 py-2 font-semibold ring-1 ring-inset text-body-2xs', {
	variants: {
		variant: {
			info: 'text-info-foreground bg-info-background hover:bg-info-background/80 ring-info-foreground/20',
			warning: 'text-warning-foreground bg-warning-background hover:bg-warning-background/80 ring-warning-foreground/20',
			danger: 'text-danger-foreground bg-danger-background hover:bg-danger-background/80 ring-danger-foreground/20',
			success: 'text-success-foreground bg-success-background hover:bg-success-background/80 ring-success-foreground/20',
			outline: 'text-foreground bg-background hover:bg-background/80 ring-foreground/20',
		},
	},
	defaultVariants: {
		variant: 'info',
	},
})

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
export type { BadgeProps }
