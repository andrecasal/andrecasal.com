import { type ElementRef, forwardRef, type ComponentPropsWithoutRef } from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'

import { cn } from '~/utils/misc.ts'
import { Icon } from './icon.tsx'

/* NavigationMenu */
const NavigationMenu = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Root>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>>(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Root ref={ref} className={cn('relative z-10', className)} {...props}>
			{children}
			{/* <NavigationMenuViewport /> */}
		</NavigationMenuPrimitive.Root>
	),
)
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

/* NavigationMenuViewport */
const NavigationMenuViewport = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Viewport>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>>(
	({ className, ...props }, ref) => (
		<div className={cn('')}>
			<NavigationMenuPrimitive.Viewport
				className={cn(
					'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg border bg-background p-4 text-foreground shadow-lg transition-[width,_height] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
					className,
				)}
				ref={ref}
				{...props}
			/>
		</div>
	),
)
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

/* NavigationMenuList */
const NavigationMenuList = forwardRef<ElementRef<typeof NavigationMenuPrimitive.List>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List ref={ref} className={cn(className)} {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

/* NavigationMenuItem */
const NavigationMenuItem = NavigationMenuPrimitive.Item

/* NavigationMenuTrigger */
const navigationMenuTriggerStyle = cva(
	'group relative inline-flex w-max items-center justify-center transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-muted-100/50 data-[state=open]:bg-muted-100/50',
)

const NavigationMenuTrigger = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Trigger>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>>(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), className)} {...props}>
			{children} <Icon name="chevron-down" className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
		</NavigationMenuPrimitive.Trigger>
	),
)
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

/* NavigationMenuContent */
const NavigationMenuContent = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Content>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>>(
	({ className, ...props }, ref) => (
		<NavigationMenuPrimitive.Content
			ref={ref}
			className={cn(
				'absolute top-full rounded-lg bg-background p-3 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
				className,
			)}
			{...props}
		/>
	),
)
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

/* NavigationMenuLink */
const NavigationMenuLink = NavigationMenuPrimitive.Link

/* NavigationMenuIndicator */
const NavigationMenuIndicator = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Indicator>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>>(
	({ className, ...props }, ref) => (
		<NavigationMenuPrimitive.Indicator
			ref={ref}
			className={cn(
				'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
				className,
			)}
			{...props}
		>
			<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-muted-100 shadow-md" />
		</NavigationMenuPrimitive.Indicator>
	),
)
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
}
