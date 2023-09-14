import type { HTMLAttributes, PropsWithChildren } from 'react'
import spicy from '../images/pickled-stardust.jpg'
import { cn } from '~/utils/tailwind-merge.ts'

const BackgroundSpicy = ({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div className={cn('relative isolate', className)} {...props}>
			<img src={spicy} alt="Spicy" className="absolute inset-0 -z-10 h-full w-full object-cover" aria-hidden="true" />
			{children}
		</div>
	)
}

export default BackgroundSpicy
