import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import architecture from './images/architecture.jpg'
import designSystem from './images/design-system.webp'
import { Heading } from './components/typography/heading.tsx'

const Architecture = () => {
	return (
		<Container>
			<Heading as="h1" size="3xl">
				Architecture
			</Heading>
			<Text size="md" className="mt-2">
				Here's an image to help you understand how andrecasal/ui works.
			</Text>
			<Text size="md" className="mt-2">
				The library only encompasses design tokens and components for now, but I will add patterns later.
			</Text>
			<figure className="mt-8">
				<img src={designSystem} alt="andrecasal/ui design system" className="rounded-xl" />
				<figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
					Image taken from https://uxdesign.cc/atomic-design-2022-what-we-can-learn-from-eames-and-other-design-giants-4d8e2f579daa
				</figcaption>
			</figure>
			<Text size="md" className="mt-2">
				And here's a drawing to help you understand how to set design tokens and how they propagate through the system.
			</Text>
			<Text size="md" className="mt-2">
				Right click and choose "Open image in new tab" to see it in full size.
			</Text>
			<figure className="mt-8">
				<img src={architecture} alt="andrecasal/ui architecture" className="rounded-xl" />
				<figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">andrecasal/ui architecture</figcaption>
			</figure>
			<Heading as="h2" size="2xl" className="mt-14">
				Theme Panel
			</Heading>
			<Text size="md" className="mt-2">
				The Theme Panel is a drop in component that allows you to preview the theme configuration in real time. This is probably the last component I'll build.
			</Text>
			<Heading as="h2" size="2xl" className="mt-14">
				Full theme control with CSS variables
			</Heading>
			<Text size="md" className="mt-2">
				The theme is completely controlled by CSS variables. These CSS variables are colocated in a single CSS file.
			</Text>
			<Heading as="h2" size="2xl" className="mt-14">
				Custom utility-based TailwindCSS classes
			</Heading>
			<Text size="md" className="mt-2">
				These CSS variables drive custom, prefixed, utility-based TailwindCSS classes. This has a few benefits:
			</Text>
			<ul className="ml-4 mt-2 list-disc">
				<li>
					<Text size="md">It becomes obvious which classes are original to TailwindCSS and which are controlled by CSS variables.</Text>
				</li>
				<li>
					<Text size="md">The usual utility-based benefits (small codebase, no classes you don't know whether or not you can delete, etc)</Text>
				</li>
				<li>
					<Text size="md">Theme transitions without a Flash Of Incorrect Theme</Text>
				</li>
			</ul>
			<Heading as="h2" size="2xl" className="mt-14">
				Components use the custom classes
			</Heading>
			<Text size="md" className="mt-2">
				Because the components use these custom classes, they become theme controlled. Additionally, you still have the full power of the usual TailwindCSS classes at your disposal
				to use inside the components and other parts of your app.
			</Text>
		</Container>
	)
}
export default Architecture
