import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-10 w-full rounded-md border border-muted-200 bg-background px-3 py-2 text-size-sm ring-offset-background file:border-0 file:bg-transparent file:text-size-sm file:font-medium placeholder:text-muted-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-danger-foreground',
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})
Input.displayName = 'Input'

export { Input }
