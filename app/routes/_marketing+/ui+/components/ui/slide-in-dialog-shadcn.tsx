import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { cn } from '~/utils/misc.ts'

/**
 * The `SlideInDialog` needs to have a simple interface. Let's make this happen.
 * <SlideInDialog side="right"></SlideInDialog>
 * I would want to have the fewest possible composable components as possible.
 * If I have to choose between a title prop and a <SlideInDialogTitle> component, I would choose the prop.
 * But I'd feel more confident if Radix Themes would do the same.
 *
 * The title is mandatory, so it should be a prop.
 * The description is optional, so it should be an optional prop.
 */

const SlideInDialog = DialogPrimitive.Root

const SlideInDialogTrigger = DialogPrimitive.Trigger

const SlideInDialogClose = DialogPrimitive.Close

const SlideInDialogPortal = ({ className, ...props }: DialogPrimitive.DialogPortalProps) => <DialogPrimitive.Portal className={cn(className)} {...props} />
SlideInDialogPortal.displayName = DialogPrimitive.Portal.displayName

const SlideInDialogOverlay = forwardRef<ElementRef<typeof DialogPrimitive.Overlay>, ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
SlideInDialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const slideInDialogVariants = cva(
	'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
				right: 'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	},
)

interface SlideInDialogContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof slideInDialogVariants> {}

const SlideInDialogContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, SlideInDialogContentProps>(({ side = 'right', className, children, ...props }, ref) => (
	<SlideInDialogPortal>
		<SlideInDialogOverlay />
		<DialogPrimitive.Content ref={ref} className={cn(slideInDialogVariants({ side }), className)} {...props}>
			{children}
			<DialogPrimitive.Close className="data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
				<span>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</SlideInDialogPortal>
))
SlideInDialogContent.displayName = DialogPrimitive.Content.displayName

const SlideInDialogTitle = forwardRef<ElementRef<typeof DialogPrimitive.Title>, ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold text-foreground', className)} {...props} />
))
SlideInDialogTitle.displayName = DialogPrimitive.Title.displayName

const SlideInDialogDescription = forwardRef<ElementRef<typeof DialogPrimitive.Description>, ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
))
SlideInDialogDescription.displayName = DialogPrimitive.Description.displayName

export { SlideInDialog, SlideInDialogTrigger, SlideInDialogContent, SlideInDialogTitle, SlideInDialogDescription, SlideInDialogClose }
