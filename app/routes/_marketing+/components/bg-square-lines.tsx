import type { HTMLAttributes, PropsWithChildren } from 'react'

const BackgroundSquareLines = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<>
			<div className="relative isolate" {...props}>
				<div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-background sm:h-32" aria-hidden="true" />
				<svg className="absolute inset-0 -z-20 h-full w-full stroke-muted-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
					<defs>
						<pattern id="square-pattern" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
							<path d="M100 200V.5M.5 .5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y={-1} className="overflow-visible fill-muted-100">
						<path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
					</svg>
					<rect width="100%" height="100%" strokeWidth={0} fill="url(#square-pattern)" />
				</svg>
				<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background sm:h-32" aria-hidden="true" />
				{children}
			</div>
		</>
	)
}

export default BackgroundSquareLines
