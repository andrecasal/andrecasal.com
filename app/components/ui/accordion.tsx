import { forwardRef, type ElementRef, type ComponentPropsWithoutRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '~/utils/tailwind-merge.ts'
import { Icon } from './icon.tsx'

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef<ElementRef<typeof AccordionPrimitive.Item>, ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} className={cn('', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<ElementRef<typeof AccordionPrimitive.Trigger>, ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180', className)}
			{...props}
		>
			{children}
			<Icon name="chevron-down" className="h-4 w-4 shrink-0 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef<ElementRef<typeof AccordionPrimitive.Content>, ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', className)}
		{...props}
	>
		<div className="pb-4 pt-0">{children}</div>
	</AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
