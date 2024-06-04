import { useEffect } from 'react'
import { type ToastMessage } from './flash-session.server.ts'
import { toast } from '~/components/ui/use-toast.ts'

export const useToast = (message?: ToastMessage) => {
	useEffect(() => {
		if (message) {
			toast({
				variant: 'default',
				title: message.title,
				description: message.description,
			})
		}
	}, [message])
}
