import { forwardRef, type ElementRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

/**
 * Marks text as keyboard or voice (or another entry device) input.
 */
const Kbd = forwardRef<ElementRef<'kbd'>, { children: ReactNode } & HTMLAttributes<ElementRef<'kbd'>>>(({ children, className, ...props }, ref) => {
	return (
		<kbd ref={ref} className={cn('kbd', className)} {...props}>
			{children}
		</kbd>
	)
})
Kbd.displayName = 'Kbd'

export { Kbd }
