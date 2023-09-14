import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
	classGroups: {
		colors: [{ 'text-muted': ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] }],
		spacing: [{ 'text-size': ['6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'] }],
	},
})

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
