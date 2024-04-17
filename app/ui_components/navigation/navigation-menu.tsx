import { type ElementRef, forwardRef, type ComponentPropsWithoutRef } from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cn } from '~/utils/tailwind-merge.ts'
import { Link } from '@remix-run/react'

/* NavigationMenu */
const NavigationMenu = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Root>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>>(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Root ref={ref} {...props}>
			<NavigationMenuPrimitive.List className={cn('navigation-menu', className)}>{children}</NavigationMenuPrimitive.List>
		</NavigationMenuPrimitive.Root>
	),
)
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

/* NavigationMenuItem */
const NavigationMenuItem = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Item>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Item ref={ref} className={cn('navigation-menu-item', className)} {...props} />
))
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName

/* NavigationMenuLink */
const NavigationMenuLink = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Link>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> & { href: string }>(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Link ref={ref} className={cn('navigation-menu-link', className)} {...props} asChild>
			<Link to={props.href}>{children}</Link>
		</NavigationMenuPrimitive.Link>
	),
)
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName

/* NavigationMenuTrigger */
const NavigationMenuTrigger = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Trigger>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>>(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Trigger ref={ref} className={cn('navigation-menu-trigger', className)} {...props}>
			{children}
		</NavigationMenuPrimitive.Trigger>
	),
)
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

/* NavigationMenuContent */
const NavigationMenuContent = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Content>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>>(
	({ className, ...props }, ref) => <NavigationMenuPrimitive.Content ref={ref} className={cn('navigation-menu-content', className)} {...props} />,
)
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

/* NavigationMenuIndicator */
const NavigationMenuIndicator = NavigationMenuPrimitive.Indicator

export { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuIndicator }
