import type { HTMLAttributes, PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { cn } from '~/utils/misc.ts'

const Container = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(({ className, ...props }, ref) => {
	return <div ref={ref} className={cn('max-w-container px-container sm:px-container-sm lg:px-container-lg mx-auto w-full', className)} {...props} />
})
Container.displayName = 'Container'

export { Container }
