import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

type UlProps = { children: ReactNode } & HTMLAttributes<HTMLUListElement>

const Ul = forwardRef<HTMLUListElement, UlProps>(({ className, ...props }, ref) => <ul ref={ref} className={cn('ul', className)} {...props} />)
Ul.displayName = 'Ul'

export { Ul }
