import type { HTMLAttributes, PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'

const flexVariants = cva('flex', {
	variants: {
		direction: {
			row: 'flex-row',
			col: 'flex-col',
		},
		justify: {
			start: 'justify-start',
			center: 'justify-center',
			end: 'justify-end',
			between: 'justify-between',
		},
		align: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			baseline: 'items-baseline',
			stretch: 'items-stretch',
		},
		gap: {
			'0': 'gap-space-0',
			'1': 'gap-space-1',
			'2': 'gap-space-2',
			'3': 'gap-space-3',
			'4': 'gap-space-4',
			'5': 'gap-space-5',
			'6': 'gap-space-6',
			'7': 'gap-space-7',
			'8': 'gap-space-8',
			'9': 'gap-space-9',
			'10': 'gap-space-10',
			'11': 'gap-space-11',
			'12': 'gap-space-12',
			'13': 'gap-space-13',
			'14': 'gap-space-14',
			'15': 'gap-space-15',
			'16': 'gap-space-16',
			'17': 'gap-space-17',
			'18': 'gap-space-18',
			'19': 'gap-space-19',
			'20': 'gap-space-20',
		},
	},
})

type FlexProps = { inline?: boolean; wrap?: boolean } & VariantProps<typeof flexVariants> & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const Flex = forwardRef<HTMLDivElement, FlexProps>(({ inline = false, wrap = false, direction = 'row', justify, align, gap, className, ...props }, ref) => {
	return <div ref={ref} className={cn(flexVariants({ direction, align, justify, gap }), inline ? `inline-flex` : ``, wrap ? `flex-wrap` : ``, className)} {...props} />
})
Flex.displayName = 'Flex'

export { Flex }
