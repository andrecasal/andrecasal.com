import { Text } from '~/components/ui/text.tsx'

const Installation = () => {
	return (
		<>
			<Text heading="h2" size="4xl" className="mt-8 lg:mt-0">
				Installation
			</Text>
			<Text size="md" className="mt-2">
				Installation is straightforward, even if a bit cumbersome for now: copy and paste all the components into their own files.
			</Text>
			<Text size="md" className="mt-2">
				I'll open source my website soon, so you can more easily copy+paste all components at once, and see how I use the library. I'll also create a CLI to make this process easier.
			</Text>
		</>
	)
}
export default Installation
