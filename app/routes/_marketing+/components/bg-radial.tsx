import type { HTMLAttributes, PropsWithChildren } from 'react'

const BackgroundRadial = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div className="relative isolate" {...props}>
			<svg
				viewBox="0 0 1024 1024"
				className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
				aria-hidden="true"
			>
				<circle cx={512} cy={512} r={512} className="fill-brand" fillOpacity="0.7" />
			</svg>
			{children}
		</div>
	)
}

export default BackgroundRadial
