import type { HTMLAttributes, PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'

const gridVariants = cva('grid', {
	variants: {
		flow: {
			row: 'grid-flow-row',
			col: 'grid-flow-col',
			'row-dense': 'grid-flow-row-dense',
			'col-dense': 'grid-flow-col-dense',
		},
		justify: {
			start: 'justify-items-start',
			center: 'justify-items-center',
			end: 'justify-items-end',
			stretch: 'justify-items-stretch',
		},
		align: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			baseline: 'items-baseline',
			stretch: 'items-stretch',
		},
		gapX: {
			'0': 'gap-x-space-0',
			'1': 'gap-x-space-1',
			'2': 'gap-x-space-2',
			'3': 'gap-x-space-3',
			'4': 'gap-x-space-4',
			'5': 'gap-x-space-5',
			'6': 'gap-x-space-6',
			'7': 'gap-x-space-7',
			'8': 'gap-x-space-8',
			'9': 'gap-x-space-9',
			'10': 'gap-x-space-10',
			'11': 'gap-x-space-11',
			'12': 'gap-x-space-12',
			'13': 'gap-x-space-13',
			'14': 'gap-x-space-14',
			'15': 'gap-x-space-15',
			'16': 'gap-x-space-16',
			'17': 'gap-x-space-17',
			'18': 'gap-x-space-18',
			'19': 'gap-x-space-19',
			'20': 'gap-x-space-20',
		},
		gapY: {
			'0': 'gap-y-space-0',
			'1': 'gap-y-space-1',
			'2': 'gap-y-space-2',
			'3': 'gap-y-space-3',
			'4': 'gap-y-space-4',
			'5': 'gap-y-space-5',
			'6': 'gap-y-space-6',
			'7': 'gap-y-space-7',
			'8': 'gap-y-space-8',
			'9': 'gap-y-space-9',
			'10': 'gap-y-space-10',
			'11': 'gap-y-space-11',
			'12': 'gap-y-space-12',
			'13': 'gap-y-space-13',
			'14': 'gap-y-space-14',
			'15': 'gap-y-space-15',
			'16': 'gap-y-space-16',
			'17': 'gap-y-space-17',
			'18': 'gap-y-space-18',
			'19': 'gap-y-space-19',
			'20': 'gap-y-space-20',
		},
	},
})

type GridProps = { inline?: boolean; cols?: string; rows?: string } & VariantProps<typeof gridVariants> & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const Grid = forwardRef<HTMLDivElement, GridProps>(({ inline = false, cols, rows, flow = 'row', justify = 'start', align = 'start', gapX = '0', gapY = '0', className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(gridVariants({ flow, justify, align, gapX, gapY }), inline ? `inline-grid` : ``, className)}
			style={{
				gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
				gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
			}}
			{...props}
		/>
	)
})
Grid.displayName = 'Grid'

export { Grid }
