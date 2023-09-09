import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'

const HeadingRoute = () => {
	const headingSource = `import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils/misc.ts'

const headingVariants = cva('', {
	variants: {
		size: {
			'4xl': 'text-size-4xl',
			'3xl': 'text-size-3xl',
			'2xl': 'text-size-2xl',
			xl: 'text-size-xl',
			lg: 'text-size-lg',
			md: 'text-size-md',
			sm: 'text-size-sm',
			xs: 'text-size-xs',
		},
		weight: {
			black: 'font-black',
			extrabold: 'font-extrabold',
			bold: 'font-bold',
			semibold: 'font-semibold',
			medium: 'font-medium',
			normal: 'font-normal',
			light: 'font-light',
			extralight: 'font-extralight',
			thin: 'font-thin',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},
	},
	defaultVariants: {
		weight: 'bold',
		align: 'left',
	},
})

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = { as?: HeadingType } & VariantProps<typeof headingVariants> & { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>

/**
 * A Heading component.
 *
 * @param {HeadingType} [as='h1'] - The HTML heading element type (h1, h2, h3, h4, h5, or h6).
 * @param {string} [weight='bold'] - The font weight of the heading (thin, extralight, light, normal, medium, semibold, bold, extrabold, or black).
 * @param {string} [size='4xl'] - The size variant of the heading (4xl, 3xl, 2xl, xl, lg, md, sm, xs).
 * @param {string} [align='left'] - The text alignment of the heading (left, center, or right).
 * @param {ReactNode} children - The content to be displayed within the heading.
 * @param {string} className - Additional CSS classes to be applied to the heading.
 * @param {HTMLAttributes<HTMLHeadingElement>} props - Additional HTML attributes to be passed to the underlying heading element.
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ as = 'h1', size = '4xl', weight = 'bold', align = 'left', children, className, ...props }, ref) => {
	const Comp = as
	return (
		<Comp ref={ref} className={cn(headingVariants({ size, weight, align }), className)} {...props}>
			{children}
		</Comp>
	)
})
Heading.displayName = 'Heading'

export { Heading }`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Heading Component
			</Heading>
			<p className="mt-4">A semantic heading element that allows customization of size, weight, alignment, and other typographic properties.</p>

			<Heading as="h2" size="xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={headingSource} filename="heading" extension="tsx" className="mt-4" />

			<Heading as="h2" size="xl" className="mt-8">
				Usage Example
			</Heading>
			<CodeBlock code={`<Heading as="h1">The quick brown fox jumps over the lazy dog</Heading>`} filename="HeadingExample" extension="tsx" className="mt-4" />

			<Heading as="h2" size="xl" className="mt-8">
				Props
			</Heading>
			<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-gray-300">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Prop
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Type
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Default
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">as</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'h1'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">weight</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
								'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'bold'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">size</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'4xl'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">align</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'left' | 'center' | 'right'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'left'</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
export default HeadingRoute
