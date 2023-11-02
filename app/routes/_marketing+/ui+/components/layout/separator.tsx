import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

const Separator = forwardRef<ElementRef<typeof SeparatorPrimitive.Root>, ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(
	({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn('shrink-0 bg-muted-500', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)}
			{...props}
		/>
	),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
