import type { HTMLAttributes, PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

const Sticky = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(({ className, ...props }, ref) => {
	return <div ref={ref} className={cn(`sticky`, className)} {...props} />
})
Sticky.displayName = 'Sticky'

export { Sticky }
