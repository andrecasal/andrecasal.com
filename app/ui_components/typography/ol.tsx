import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

type OlProps = { children: ReactNode } & HTMLAttributes<HTMLOListElement>

const Ol = forwardRef<HTMLOListElement, OlProps>(({ className, ...props }, ref) => <ol ref={ref} className={cn('ol', className)} {...props} />)
Ol.displayName = 'Ol'

export { Ol }
