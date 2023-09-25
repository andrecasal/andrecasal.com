import { forwardRef, type ElementRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

/**
 * Marks text to denote textual user input.
 */
const Kbd = forwardRef<ElementRef<'kbd'>, { children: ReactNode } & HTMLAttributes<ElementRef<'kbd'>>>(({ children, className, ...props }, ref) => {
	return (
		<kbd ref={ref} className={cn('rounded-lg border border-muted-200 bg-muted-50 p-1.5 font-mono text-xs shadow-sm', className)} {...props}>
			{children}
		</kbd>
	)
})
Kbd.displayName = 'Kbd'

export { Kbd }
