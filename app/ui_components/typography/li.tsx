import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

type LiProps = { children: ReactNode } & HTMLAttributes<HTMLLIElement>

const Li = forwardRef<HTMLLIElement, LiProps>(({ className, ...props }, ref) => <li ref={ref} className={cn('li', className)} {...props} />)
Li.displayName = 'Li'

export { Li }
