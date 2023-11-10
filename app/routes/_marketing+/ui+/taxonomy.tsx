import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { H1 } from './components/typography/h1.tsx'
import { H2 } from './components/typography/h2.tsx'
import { H3 } from './components/typography/h3.tsx'

const UILibraries = [
	{ name: 'Material UI', url: 'https://mui.com/components/' },
	{ name: 'Chakra', url: 'https://chakra-ui.com/docs/components' },
	{ name: 'Ant Design', url: 'https://ant.design/components/overview/' },
	{ name: 'Blueprint', url: 'https://blueprintjs.com/docs/#core' },
	{ name: 'Semantic UI React', url: 'https://react.semantic-ui.com/' },
	{ name: 'Retool', url: 'https://retool.com/components' },
	{ name: 'Grommet', url: 'https://v2.grommet.io/components' },
	{ name: 'Mantine', url: 'https://mantine.dev/getting-started/' },
	{ name: 'Prime React', url: 'https://primereact.org/installation/' },
	{ name: 'Gestalt', url: 'https://gestalt.pinterest.systems/web/overview' },
	{ name: 'Horizon', url: 'https://horizon-ui.com/documentation/docs/introduction' },
	{ name: 'Radix Themes', url: 'https://www.radix-ui.com/themes/docs/overview/getting-started' },
	{ name: 'React Aria', url: 'https://react-spectrum.adobe.com/react-aria/react-aria-components.html' },
]

const Taxonomy = () => {
	return (
		<>
			<H1 size="3xl" className="mt-8 lg:mt-0">
				Taxonomy
			</H1>

			<H2 size="xl" className="mt-14">
				What is taxonomy?
			</H2>
			<Text size="md" className="mt-2">
				Taxonomy is the science of categorization. Let's unpack that.
			</Text>
			<Text size="md" className="mt-2">
				Being a science means we gain knowledge by coming up with and testing hypotheses. <em>Of categorization</em> means that the hypotheses are of the criteria that distinguishes
				one classification from another.
			</Text>

			<H2 size="xl" className="mt-14">
				Why bother?
			</H2>
			<Text size="md" className="mt-2">
				Why bother with taxonomy, i.e. why have categories that clearly distinguish between components?
			</Text>
			<Text size="md" className="mt-2">
				Here's why:
			</Text>
			<ul className="list-disc pl-5">
				<li>For a clearer mental model.</li>
				<li>To make the UI library as easy to understand as possible.</li>
				<li>To ease the search and choosing of components.</li>
				<li>For a common language between designers and developers.</li>
			</ul>

			<H2 size="xl" className="mt-14">
				Practical considerations
			</H2>
			<Text size="md" className="mt-2">
				We can pepper in some practical considerations like avoiding categories that are too broad or too narrow. Categories that contain all (or too many) items or that contain one
				(or very few) items defeat the purpose of categorizing in the first place: to make it easier to find things.
			</Text>

			<H2 size="xl" className="mt-14">
				The research
			</H2>
			<Text size="md" className="mt-2">
				I went over the following UI libraries in search for components and their categories:
			</Text>
			<ul className="list-disc pl-5">
				{UILibraries.map(({ name, url }) => (
					<li key={name}>
						<a href={url} target="_blank" rel="noreferrer" className="underline">
							{name}
						</a>
					</li>
				))}
			</ul>
			<Text size="md" className="mt-2">
				I also tried finding formal research, but could only find{' '}
				<a href="https://lbd.udc.es/jornadas2011/actas/JISBD/JISBD/S2/Regulares/jisbd2011_submission_123.pdf" target="_blank" rel="noreferrer" className="underline">
					this
				</a>{' '}
				outdated paper from 2011.
			</Text>
			<Text size="md" className="mt-2">
				From this research I compiled a list of categories and components and tried finding the best fit between components and categories, having a clear definition for each
				category:
			</Text>
			<ul className="mt-2 list-disc pl-5">
				<li>
					<strong>Layout</strong> - components that pertain to app structure.
				</li>
				<li>
					<strong>Modals</strong> - components that block interaction with the rest of the app.
				</li>
				<li>
					<strong>Overlays</strong> - components that float on top of the app.
				</li>
				<li>
					<strong>Navigations</strong> - components to switch between app routes.
				</li>
				<li>
					<strong>Disclosure</strong> - components that conditionally show or hide information.
				</li>
				<li>
					<strong>Typography</strong> - components that pertain to text features.
				</li>
				<li>
					<strong>Media</strong> - components that pertain to image, video, and audio.
				</li>
				<li>
					<strong>Notifications</strong> - components that pertain to peripheral messages.
				</li>
				<li>
					<strong>Status</strong> - components that pertain to the state of the app.
				</li>
				<li>
					<strong>Data Display</strong> - components to display complex data structures.
				</li>
				<li>
					<strong>Data Entry</strong> - components for data input.
				</li>
			</ul>
			<Text size="md" className="mt-2">
				Check the sidebar to your left to see all the components and their categories.
			</Text>

			<H2 size="xl" className="mt-14">
				Current violations to clear taxonomy I'd love help fixing 🙏
			</H2>
			<Text size="md" className="mt-2">
				You can join the discussion on{' '}
				<a href="https://github.com/andrecasal/andrecasal.com/discussions/11" target="_blank" rel="noreferrer" className="underline">
					GitHub
				</a>
				.
			</Text>

			<H3 size="lg" className="mt-2">
				Button
			</H3>
			<Text size="md" className="mt-2">
				I'm not entirely happy with having the {'<Button />'} component inside "Data Entry", because a button fires an action: submit this form, open this modal, etc. Buttons
				shouldn't be used for navigations though, that's what {'<Link />'} is for.
			</Text>
			<Text size="md" className="mt-2">
				But I'm also not happy with having a category called "Actions" with only one item in it. So I'm going with "Data Entry" for now.
			</Text>

			<H3 size="lg" className="mt-14">
				Label and Fieldset
			</H3>
			<Text size="md" className="mt-2">
				{'<Label />'} and {'<Fieldset />'} aren't "Data Entry" at all 😅. A possible alternative for "Data Entry" could be "Form elements", as things that go inside a {'<form />'}.
			</Text>
		</>
	)
}
export default Taxonomy
