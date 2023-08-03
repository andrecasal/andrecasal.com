import type { HTMLAttributes, PropsWithChildren } from 'react'

const BackgroundDiagonal = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-b from-muted-200/20 pt-14" {...props}>
			<div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-background sm:h-32" aria-hidden="true" />
			<div
				className="absolute inset-y-0 right-1/2 -z-20 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-background shadow-xl shadow-muted-600/10 ring-1 ring-muted-50 sm:-mr-80 lg:-mr-96"
				aria-hidden="true"
			/>
			<div className="absolute inset-x-0 bottom-0 -z-10 h-14 bg-gradient-to-t from-background sm:h-16" aria-hidden="true" />
			{children}
		</div>
	)
}

export default BackgroundDiagonal
