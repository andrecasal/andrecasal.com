import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '~/utils/misc.ts'

const Separator = forwardRef<ElementRef<typeof SeparatorPrimitive.Root>, ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(
	({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn('bg-muted-200', orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', className)}
			{...props}
		/>
	),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
