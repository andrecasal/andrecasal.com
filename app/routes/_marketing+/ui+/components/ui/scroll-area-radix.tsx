import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { extractMarginProps, withMarginProps, withBreakpoints, radiusProp } from '../helpers.ts'
import type { MarginProps, GetPropDefTypes, PropDef } from '../helpers.ts'
import { type ComponentPropsWithRef, type ElementRef, forwardRef } from 'react'
import { cn } from '~/utils/misc.ts'

const sizes = ['1', '2', '3'] as const
const scrollbarsValues = ['vertical', 'horizontal', 'both'] as const

const scrollAreaPropDefs = {
	size: { type: 'enum', values: sizes, default: '1', responsive: true },
	radius: radiusProp,
	scrollbars: { type: 'enum', values: scrollbarsValues, default: 'both' },
} satisfies {
	size: PropDef<(typeof sizes)[number]>
	radius: typeof radiusProp
	scrollbars: PropDef<(typeof scrollbarsValues)[number]>
}

export { scrollAreaPropDefs }

type ScrollAreaElement = ElementRef<typeof ScrollAreaPrimitive.Viewport>
type ScrollAreaOwnProps = GetPropDefTypes<typeof scrollAreaPropDefs>
interface ScrollAreaProps
	extends ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root>,
		Omit<ComponentPropsWithRef<typeof ScrollAreaPrimitive.Viewport>, 'dir'>,
		MarginProps,
		ScrollAreaOwnProps {}
const ScrollArea = forwardRef<ScrollAreaElement, ScrollAreaProps>((props, forwardedRef) => {
	const { rest: marginRest, ...marginProps } = extractMarginProps(props)
	const {
		className,
		style,
		type,
		scrollHideDelay = type !== 'scroll' ? 0 : undefined,
		dir,
		size = scrollAreaPropDefs.size.default,
		radius = scrollAreaPropDefs.radius.default,
		scrollbars = scrollAreaPropDefs.scrollbars.default,
		...viewportProps
	} = marginRest
	return (
		<ScrollAreaPrimitive.Root type={type} scrollHideDelay={scrollHideDelay} className={cn('rt-ScrollAreaRoot', className, withMarginProps(marginProps))} style={style}>
			<ScrollAreaPrimitive.Viewport {...viewportProps} ref={forwardedRef} className="rt-ScrollAreaViewport" />
			<div className="rt-ScrollAreaViewportFocusRing" />

			{scrollbars !== 'vertical' ? (
				<ScrollAreaPrimitive.Scrollbar data-radius={radius} orientation="horizontal" className={cn('rt-ScrollAreaScrollbar', withBreakpoints(size, 'rt-r-size'))}>
					<ScrollAreaPrimitive.Thumb className="rt-ScrollAreaThumb" />
				</ScrollAreaPrimitive.Scrollbar>
			) : null}

			{scrollbars !== 'horizontal' ? (
				<ScrollAreaPrimitive.Scrollbar data-radius={radius} orientation="vertical" className={cn('rt-ScrollAreaScrollbar', withBreakpoints(size, 'rt-r-size'))}>
					<ScrollAreaPrimitive.Thumb className="rt-ScrollAreaThumb" />
				</ScrollAreaPrimitive.Scrollbar>
			) : null}

			{scrollbars === 'both' ? <ScrollAreaPrimitive.Corner className="rt-ScrollAreaCorner" /> : null}
		</ScrollAreaPrimitive.Root>
	)
})
ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
export type { ScrollAreaProps }
