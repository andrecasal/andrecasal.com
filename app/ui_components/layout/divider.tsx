import * as DividerPrimitive from '@radix-ui/react-separator'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

const Divider = forwardRef<ElementRef<typeof DividerPrimitive.Root>, ComponentPropsWithoutRef<typeof DividerPrimitive.Root>>(
	({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
		<DividerPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn('divider shrink-0', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)}
			{...props}
		/>
	),
)
Divider.displayName = 'Divider'

export { Divider }
