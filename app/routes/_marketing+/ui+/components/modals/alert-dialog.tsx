import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { Icon } from '~/components/ui/icon.tsx'
import { cn } from '~/utils/tailwind-merge.ts'
import { VisuallyHidden } from '../layout/visually-hidden.tsx'

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogOverlay = forwardRef<ElementRef<typeof AlertDialogPrimitive.Overlay>, ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Overlay ref={ref} className={cn('overlay fixed inset-0 z-50', className)} {...props} />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = forwardRef<ElementRef<typeof AlertDialogPrimitive.Content>, ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>>(
	({ className, children, ...props }, ref) => (
		<AlertDialogPrimitive.Portal>
			<AlertDialogOverlay />
			<AlertDialogPrimitive.Content ref={ref} className={cn('dialog fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]', className)} {...props}>
				{children}
				<AlertDialogPrimitive.Cancel className="dialog-x-button">
					<Icon name="x-mark" />
					<VisuallyHidden>Close</VisuallyHidden>
				</AlertDialogPrimitive.Cancel>
			</AlertDialogPrimitive.Content>
		</AlertDialogPrimitive.Portal>
	),
)
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogTitle = forwardRef<ElementRef<typeof AlertDialogPrimitive.Title>, ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = forwardRef<ElementRef<typeof AlertDialogPrimitive.Description>, ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>(
	({ className, ...props }, ref) => <AlertDialogPrimitive.Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />,
)
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const AlertDialogCancel = AlertDialogPrimitive.Cancel

const AlertDialogAction = forwardRef<ElementRef<typeof AlertDialogPrimitive.Action>, ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Action ref={ref} className={cn(className)} {...props} />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction }
