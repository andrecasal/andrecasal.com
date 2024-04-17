import * as TabsPrimitive from '@radix-ui/react-tabs'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

const TabsRoot = forwardRef<ElementRef<typeof TabsPrimitive.Root>, ComponentPropsWithoutRef<typeof TabsPrimitive.Root>>(({ orientation, className, ...props }, forwardedRef) => {
	return <TabsPrimitive.Root ref={forwardedRef} orientation={orientation} className={cn('tabsroot', className)} {...props} />
})
TabsRoot.displayName = 'TabsRoot'

const TabsList = forwardRef<ElementRef<typeof TabsPrimitive.List>, ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, forwardedRef) => {
	return <TabsPrimitive.List ref={forwardedRef} className={cn('tabslist', className)} {...props} />
})
TabsList.displayName = 'TabsList'

const TabsTrigger = forwardRef<ElementRef<typeof TabsPrimitive.Trigger>, ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ children, className, ...props }, forwardedRef) => {
	return (
		<TabsPrimitive.Trigger ref={forwardedRef} className={cn('tabstrigger', className)} {...props}>
			{children}
		</TabsPrimitive.Trigger>
	)
})
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = forwardRef<ElementRef<typeof TabsPrimitive.Content>, ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, forwardedRef) => (
	<TabsPrimitive.Content ref={forwardedRef} className={cn('tabscontent', className)} {...props} />
))
TabsContent.displayName = 'TabsContent'

const Tabs = Object.assign(
	{},
	{
		Root: TabsRoot,
		List: TabsList,
		Trigger: TabsTrigger,
		Content: TabsContent,
	},
)

export { Tabs }
