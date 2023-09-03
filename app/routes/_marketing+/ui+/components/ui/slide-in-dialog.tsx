import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef, type ElementRef } from 'react'
import { Icon } from '~/components/ui/icon.tsx'
import { cn } from '~/utils/misc.ts'

const SlideInDialog = DialogPrimitive.Root

const SlideInDialogTrigger = ({ children, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>) => {
	return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>
}

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

interface SlideInDialogProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof slideInDialogVariants> {
	title: string
	description?: string
}

const SlideInDialogContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, SlideInDialogProps>(({ side, title, description, className, children, ...props }, ref) => {
	return (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay />
			<DialogPrimitive.Content ref={ref} className={cn(slideInDialogVariants({ side }), className)} {...props}>
				<VisuallyHidden.Root asChild>
					<DialogPrimitive.Title>{title}</DialogPrimitive.Title>
				</VisuallyHidden.Root>

				{description ? (
					<VisuallyHidden.Root asChild>
						<DialogPrimitive.Description>{description}</DialogPrimitive.Description>
					</VisuallyHidden.Root>
				) : null}

				<div className="flex justify-end">
					<DialogPrimitive.Close className="box-content flex h-6 min-h-tap w-6 min-w-tap cursor-pointer items-center justify-center rounded-lg p-2.5">
						<span className="sr-only">Close slide-in menu</span>
						<Icon name="x-mark" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
					</DialogPrimitive.Close>
				</div>

				{children}
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	)
})

export { SlideInDialog, SlideInDialogTrigger, SlideInDialogContent }
