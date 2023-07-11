import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '~/components/ui/toast.tsx'
import { useToast } from '~/components/ui/use-toast.ts'

export function Toaster() {
	const { toasts } = useToast()

	return (
		<ToastProvider>
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<Toast key={id} {...props}>
						<div className="flex-1">
							{title && <ToastTitle>{title}</ToastTitle>}
							{description && <ToastDescription>{description}</ToastDescription>}
							{action}
						</div>
						<div className="ml-4 flex flex-shrink-0">
							<ToastClose />
						</div>
					</Toast>
				)
			})}
			<ToastViewport />
		</ToastProvider>
	)
}
