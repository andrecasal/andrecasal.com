import { forwardRef, type ElementRef, type HTMLAttributes } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

const Kbd = forwardRef<ElementRef<'kbd'>, HTMLAttributes<ElementRef<'kbd'>>>(({ className, ...props }, ref) => <kbd ref={ref} className={cn('kbd', className)} {...props} />)
Kbd.displayName = 'Kbd'

export { Kbd }
