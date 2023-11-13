import { forwardRef, type ElementRef, type ComponentPropsWithoutRef, type ReactElement } from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import cg from 'classgroup'
import { cn } from '~/utils/tailwind-merge.ts'
import { Icon } from './icon.tsx'
import { Button } from './button.tsx'
import { P } from '~/routes/_marketing+/ui+/components/typography/p.tsx'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = forwardRef<ElementRef<typeof ToastPrimitives.Viewport>, ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>>(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport ref={ref} className={cn('fixed inset-0 z-[100] mx-auto flex w-full max-w-content flex-col-reverse gap-2 p-container', className)} {...props} />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
	cg({
		cn: {
			default: 'group pointer-events-auto overflow-hidden',
			position: 'relative',
			layout: 'w-full max-w-sm p-4',
			flexAsChild: 'self-center',
			flex: {
				default: 'flex align-end items-start justify-between space-x-4',
				sm: 'sm:self-end',
			},
			ring: 'ring-1 ring-black ring-opacity-5',
			border: 'rounded-lg',
			shadow: 'shadow-lg',
			animations:
				'transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
		},
	}).cn,
	{
		variants: {
			variant: {
				default: 'bg-background',
				danger: 'danger group bg-danger-background text-danger-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

const Toast = forwardRef<ElementRef<typeof ToastPrimitives.Root>, ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>>(
	({ className, variant, ...props }, ref) => {
		return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
	},
)
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = forwardRef<ElementRef<typeof ToastPrimitives.Action>, ComponentPropsWithoutRef<typeof ToastPrimitives.Action>>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(
			'hover:bg-secondary group-[.danger]:border-muted/40 group-[.danger]:hover:border-danger/30 group-[.danger]:hover:bg-danger group-[.danger]:focus:ring-danger inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-size-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.danger]:hover:text-danger-foreground',
			className,
		)}
		{...props}
	/>
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = forwardRef<ElementRef<typeof ToastPrimitives.Close>, ComponentPropsWithoutRef<typeof ToastPrimitives.Close>>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close ref={ref} className={cn('group-[.danger]:text-danger-foreground group-[.danger]:hover:text-danger-title', className)} toast-close="" asChild {...props}>
		<Button variant="ghost" size="icon" className="-m-1.5">
			<Icon name="cross-1" />
		</Button>
	</ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = forwardRef<ElementRef<typeof ToastPrimitives.Title>, ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>(({ className, children, ...props }, ref) => (
	<ToastPrimitives.Title ref={ref} {...props} asChild>
		<P size="sm" className="font-medium text-muted-900 group-[.danger]:text-danger-title">
			{children}
		</P>
	</ToastPrimitives.Title>
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = forwardRef<ElementRef<typeof ToastPrimitives.Description>, ComponentPropsWithoutRef<typeof ToastPrimitives.Description>>(
	({ className, children, ...props }, ref) => (
		<ToastPrimitives.Description ref={ref} {...props}>
			<P size="sm" className="text-muted-500 group-[.danger]:text-danger-foreground">
				{children}
			</P>
		</ToastPrimitives.Description>
	),
)
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = ReactElement<typeof ToastAction>

export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction }
