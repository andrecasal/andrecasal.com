import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '~/utils/misc.ts'

export type CheckboxProps = Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'type'> & {
	type?: string
}

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer h-4 w-4 shrink-0 rounded-sm border border-brand ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand data-[state=checked]:text-background',
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
			<svg viewBox="0 0 8 8">
				<path d="M1,4 L3,6 L7,2" stroke="currentColor" strokeWidth="1" fill="none" />
			</svg>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
