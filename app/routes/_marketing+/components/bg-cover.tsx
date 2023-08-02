import type { HTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '~/utils/misc.ts'

const BackgroundCover = ({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
	return (
		<div className={cn('relative isolate overflow-hidden pt-14', className)} {...props}>
			<svg width="100%" height="100%" className="absolute inset-0 -z-20">
				<pattern id="cloth_pattern" width="10px" height="10px" patternUnits="userSpaceOnUse">
					<image
						id="image0_1_4"
						width="20"
						height="20"
						href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABCSURBVHgB7dOxDQAgDAPBHyX7L+VRACFKGpCLFI6UJrGuM4DWFvep8x8POSsmzFgFa4hhxvbdiQkzlqYE+8w1b8oEnW93iQ2t11kAAAAASUVORK5CYII="
					/>
				</pattern>
				<defs>
					<radialGradient id="radial_pattern">
						<stop offset="0%" stopColor="#39375C" />
						<stop offset="100%" />
					</radialGradient>
				</defs>
				<rect width="100%" height="100%" fill="url(#radial_pattern)" />
				<rect width="100%" height="100%" fill="url(#cloth_pattern)" className="opacity-30" />
			</svg>

			{children}
		</div>
	)
}

export default BackgroundCover
