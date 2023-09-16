import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { type ElementRef, forwardRef, type ComponentPropsWithoutRef, useState } from 'react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { cn } from '~/utils/tailwind-merge.ts'

type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>

const Tooltip = forwardRef<ElementRef<typeof TooltipPrimitive.Content>, TooltipProps>(({ content, className, children }, ref) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<TooltipPrimitive.Root open={isOpen} onOpenChange={setIsOpen} delayDuration={0}>
			<TooltipPrimitive.Trigger tabIndex={0} asChild>
				<span onClick={() => setIsOpen(true)}>{children}</span>
			</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Portal /* container={container} forceMount={forceMount} */>
				<TooltipPrimitive.Content
					sideOffset={4}
					collisionPadding={10}
					ref={ref}
					className={cn('text-tooltip rounded-md bg-tooltip-background px-2 text-tooltip-foreground', className)}
				>
					<Text size="xs">{content}</Text>
					<TooltipPrimitive.Arrow className="fill-tooltip-background" />
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	)
})
export { Tooltip }
