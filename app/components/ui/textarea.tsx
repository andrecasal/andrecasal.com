import * as React from 'react'

import { cn } from '~/utils/tailwind-merge.ts'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				'flex min-h-[80px] w-full rounded-md border border-muted-200 bg-background px-3 py-2 text-size-sm ring-offset-background placeholder:text-muted-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-danger-foreground',
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'

export { Textarea }
