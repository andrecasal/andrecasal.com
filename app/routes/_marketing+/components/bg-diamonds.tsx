import { type HTMLAttributes, type PropsWithChildren } from 'react'

const DiamondBackground = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div className="relative" {...props}>
			<div className="absolute inset-x-0 top-0 -z-10 h-12 bg-gradient-to-b from-background sm:h-16" aria-hidden="true" />
			<div className="absolute inset-0 -z-20 transform-gpu bg-diamonds" aria-hidden="true" />
			<div className="absolute inset-x-0 bottom-0 -z-10 h-12 bg-gradient-to-t from-background sm:h-16" aria-hidden="true" />
			{children}
		</div>
	)
}

export default DiamondBackground
