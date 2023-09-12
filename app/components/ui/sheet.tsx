import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, type HTMLAttributes, useState } from 'react'

//import { cn } from '~/utils/components.ts'
import { cn } from '~/utils/misc.ts'

const TaskSheet = ({ task, options }: { task: Task; options: Options }) => {
	// 👈 import the types
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button size="icon" variant="default">
					<Icon name="editpen" size="xs" />
				</Button>
			</SheetTrigger>
		</Sheet>
	)
}

const StateControlledSheetTrigger = SheetPrimitive.Trigger

const StateControlledSheetClose = SheetPrimitive.Close

const StateControlledSheetPortal = ({ className, ...props }: SheetPrimitive.DialogPortalProps) => <SheetPrimitive.Portal className={cn(className)} {...props} />
StateControlledSheetPortal.displayName = SheetPrimitive.Portal.displayName

const StateControlledSheetOverlay = forwardRef<ElementRef<typeof SheetPrimitive.Overlay>, ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
StateControlledSheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
	'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
				right: 'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	},
)

interface SheetContentProps extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {}

const StateControlledSheetContent = forwardRef<ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(({ side = 'right', className, children, ...props }, ref) => (
	<StateControlledSheetPortal>
		<StateControlledSheetOverlay />
		<SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
			{children}
			<SheetPrimitive.Close className="data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
				<span className="">Close</span>
			</SheetPrimitive.Close>
		</SheetPrimitive.Content>
	</StateControlledSheetPortal>
))
StateControlledSheetContent.displayName = SheetPrimitive.Content.displayName

const StateControlledSheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)
StateControlledSheetHeader.displayName = 'SheetHeader'

const StateControlledSheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
StateControlledSheetFooter.displayName = 'SheetFooter'

const StateControlledSheetTitle = forwardRef<ElementRef<typeof SheetPrimitive.Title>, ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title ref={ref} className={cn('text-lg font-semibold text-foreground', className)} {...props} />
))
StateControlledSheetTitle.displayName = SheetPrimitive.Title.displayName

const StateControlledSheetDescription = forwardRef<ElementRef<typeof SheetPrimitive.Description>, ComponentPropsWithoutRef<typeof SheetPrimitive.Description>>(
	({ className, ...props }, ref) => <SheetPrimitive.Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />,
)
StateControlledSheetDescription.displayName = SheetPrimitive.Description.displayName

export {
	StateControlledSheet,
	StateControlledSheetTrigger,
	StateControlledSheetClose,
	StateControlledSheetContent,
	StateControlledSheetHeader,
	StateControlledSheetFooter,
	StateControlledSheetTitle,
	StateControlledSheetDescription,
}
