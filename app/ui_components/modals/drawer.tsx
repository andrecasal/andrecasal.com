import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { Icon } from '~/components/ui/icon.tsx'
import { cn } from '~/utils/tailwind-merge.ts'
import { VisuallyHidden } from '../layout/visually-hidden.tsx'

const Drawer = DialogPrimitive.Root

const DrawerTrigger = DialogPrimitive.Trigger

const DrawerClose = DialogPrimitive.Close

const DrawerPortal = DialogPrimitive.Portal

const DrawerOverlay = forwardRef<ElementRef<typeof DialogPrimitive.Overlay>, ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay className={cn('drawer-overlay fixed inset-0 z-50', className)} {...props} ref={ref} />
))
DrawerOverlay.displayName = DialogPrimitive.Overlay.displayName

const drawerVariants = cva('fixed z-50 drawer', {
	variants: {
		side: {
			top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
			bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
			left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
			right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
		},
	},
	defaultVariants: {
		side: 'right',
	},
})

interface DrawerContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof drawerVariants> {}

const DrawerContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, DrawerContentProps>(({ side = 'right', className, children, ...props }, ref) => (
	<DrawerPortal>
		<DrawerOverlay />
		<DialogPrimitive.Content ref={ref} className={cn(drawerVariants({ side }), className)} {...props}>
			{children}
			<DialogPrimitive.Close className="drawer-x-button">
				<Icon name="x-mark" />
				<VisuallyHidden>Close</VisuallyHidden>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DrawerPortal>
))
DrawerContent.displayName = DialogPrimitive.Content.displayName

const DrawerTitle = forwardRef<ElementRef<typeof DialogPrimitive.Title>, ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title ref={ref} className={cn('text-size-lg font-semibold', className)} {...props} />
))
DrawerTitle.displayName = DialogPrimitive.Title.displayName

const DrawerDescription = forwardRef<ElementRef<typeof DialogPrimitive.Description>, ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description ref={ref} className={cn('text-size-sm text-muted-500', className)} {...props} />
))
DrawerDescription.displayName = DialogPrimitive.Description.displayName

export { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerDescription, DrawerClose }
