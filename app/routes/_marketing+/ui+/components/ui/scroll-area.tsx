import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { cn } from '~/utils/misc.ts'

interface ScrollAreaProps extends ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
	scrollbars?: 'vertical' | 'horizontal' | 'both'
	type?: 'auto' | 'always' | 'scroll' | 'hover'
}

const ScrollArea = forwardRef<ElementRef<typeof ScrollAreaPrimitive.Viewport>, ScrollAreaProps>(({ scrollbars = 'vertical', type = 'hover', className, children, ...props }, ref) => (
	<ScrollAreaPrimitive.Root type={type} className={cn('flex h-full w-full flex-col overflow-hidden', className)} {...props}>
		<ScrollAreaPrimitive.Viewport ref={ref} className="h-full w-full overscroll-x-contain">
			{children}
		</ScrollAreaPrimitive.Viewport>

		{scrollbars !== 'horizontal' ? (
			<ScrollAreaPrimitive.Scrollbar orientation="vertical" className={cn('flex w-2.5 touch-none select-none flex-col border-l border-l-transparent p-px transition-colors')}>
				<ScrollAreaPrimitive.Thumb className="relative rounded-full bg-brand" />
			</ScrollAreaPrimitive.Scrollbar>
		) : null}

		{scrollbars !== 'vertical' ? (
			<ScrollAreaPrimitive.Scrollbar orientation="horizontal" className={cn('flex h-2.5 touch-none select-none flex-row border-t border-t-transparent p-px transition-colors')}>
				<ScrollAreaPrimitive.Thumb className="relative rounded-full bg-brand" />
			</ScrollAreaPrimitive.Scrollbar>
		) : null}

		{scrollbars === 'both' ? <ScrollAreaPrimitive.Corner /> : null}
	</ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export { ScrollArea }
