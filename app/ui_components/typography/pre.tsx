import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

type PreProps = HTMLAttributes<HTMLPreElement>

const Pre = forwardRef<HTMLPreElement, PreProps>(({ className, ...props }, ref) => {
	return <pre ref={ref} className={cn('pre', className)} {...props} />
})
Pre.displayName = 'Pre'

export { Pre }
