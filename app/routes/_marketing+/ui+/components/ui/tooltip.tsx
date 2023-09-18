import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { type ElementRef, forwardRef, type ComponentPropsWithoutRef, useState } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>

const Tooltip = forwardRef<ElementRef<typeof TooltipPrimitive.Content>, TooltipProps>(({ content, className, children }, ref) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<TooltipPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
			<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Portal /* container={container} forceMount={forceMount} */>
				<TooltipPrimitive.Content
					sideOffset={4}
					collisionPadding={10}
					ref={ref}
					className={cn('rounded-md bg-tooltip-background px-2 text-size-tooltip text-tooltip-foreground', className)}
				>
					{content}
					<TooltipPrimitive.Arrow className="fill-tooltip-background" />
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	)
})
export { Tooltip }
