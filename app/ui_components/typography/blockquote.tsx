import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

type BlockquoteProps = HTMLAttributes<HTMLQuoteElement>

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(({ className, ...props }, ref) => {
	return <blockquote ref={ref} className={cn('blockquote', className)} {...props} />
})
Blockquote.displayName = 'Blockquote'

export { Blockquote }
