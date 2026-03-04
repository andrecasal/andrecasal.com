import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

type HrProps = HTMLAttributes<HTMLHRElement>

const Hr = forwardRef<HTMLHRElement, HrProps>(({ className, ...props }, ref) => {
	return <hr ref={ref} className={cn('hr', className)} {...props} />
})
Hr.displayName = 'Hr'

export { Hr }
