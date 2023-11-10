import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Code } from '../components/typography/code.tsx'

import { Button } from '~/components/ui/button.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from '../components/modals/drawer.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Keyboard, Styling } from '../sections/sections.tsx'

const component: componentProps = {
	name: 'Drawer',
	shortName: 'Drawer',
	fileName: 'drawer',
	category: 'modals',
	description: [
		'A contextual dialog that slides in from the edge of the screen.',
		"Use it when you need users to complete a task or view details without leaving the current context. Because it's contextual, the overlay should not visually obscure the underlying content.",
	],
	features: [
		'Supports modal and non-modal modes.',
		'Focus is automatically trapped when modal.',
		'Can be controlled or uncontrolled.',
		'Manages screen reader announcements with Title and Description components.',
		'Esc closes the component automatically.',
	],
	keyboard: [
		{ key: 'Space', description: 'Opens/closes the dialog.' },
		{ key: 'Enter', description: 'Opens/closes the dialog.' },
		{ key: 'Tab', description: 'Moves focus to the next focusable element.' },
		{ key: 'Shift + Tab', description: 'Moves focus to the previous focusable element.' },
		{ key: 'Esc', description: 'Closes the dialog and moves focus to the Trigger.' },
	],
	parts: [
		{
			name: 'Drawer',
			description: 'Contains all the parts of a drawer.',
			props: [
				{ name: 'defaultOpen', type: 'boolean', default: 'undefined' },
				{ name: 'open', type: 'boolean', default: 'undefined' },
				{ name: 'onOpenChange', type: 'function', default: 'undefined' },
				{ name: 'modal', type: 'boolean', default: 'true' },
			],
		},
		{
			name: 'DrawerTrigger',
			description: 'The button that opens the drawer.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
			data: [{ name: 'state', values: ['open', 'closed'] }],
		},
		{
			name: 'DrawerContent',
			description: 'Contains content to be rendered when the drawer is open.',
			props: [
				{ name: 'side', type: 'string', default: 'right' },
				{ name: 'asChild', type: 'boolean', default: 'false' },
				{ name: 'forceMount', type: 'boolean', default: 'undefined' },
				{ name: 'onOpenAutoFocus', type: 'function', default: 'undefined' },
				{ name: 'onCloseAutoFocus', type: 'function', default: 'undefined' },
				{ name: 'onEscapeKeyDown', type: 'function', default: 'undefined' },
				{ name: 'onOutsideClick', type: 'function', default: 'undefined' },
				{ name: 'onInteractOutside', type: 'function', default: 'undefined' },
			],
			data: [{ name: 'state', values: ['open', 'closed'] }],
		},
		{
			name: 'DrawerTitle',
			description: 'An accessible name to be announced when the drawer is opened.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
		{
			name: 'DrawerDescription',
			description: 'An optional accessible description to be announced when the drawer is opened.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
		{
			name: 'DrawerClose',
			description: 'A single button that closes the drawer.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
	],
	usage: `<Drawer>
	<DrawerTrigger asChild>
		<Button variant="secondary">Open Drawer</Button>
	</DrawerTrigger>
	<DrawerContent>
		<DrawerTitle>Edit profile</DrawerTitle>
		<Text className="mt-4">Make changes to your profile here. Click save when you're done.</Text>
		<form>
			<fieldset className="mb-5 flex items-center gap-5">
				<label htmlFor="name" className="w-48 text-right">
					Name
				</label>
				<Input id="name" type="text" defaultValue="André Casal" />
			</fieldset>
			<fieldset className="mb-5 flex items-center gap-5">
				<label htmlFor="twitter-handle" className="w-48 text-right">
					Username
				</label>
				<Input id="twitter-handle" type="text" defaultValue="@theandrecasal" />
			</fieldset>
			<Flex justify="end" gap="6">
				<DrawerClose asChild>
					<Button variant="secondary">Cancel</Button>
				</DrawerClose>
				<Button variant="primary" type="submit">
					Save
				</Button>
			</Flex>
		</form>
	</DrawerContent>
</Drawer>`,
	styling: `/* ### Modals ### */
@layer components {
	/* Drawer */
	.drawer-overlay {
		/* Don't obscure the content underneath */
		@apply bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0;
	}
	.drawer {
		@apply gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500;
	}
	.drawer-x-button {
		@apply absolute right-4 top-4 min-h-tap min-w-tap rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-foreground data-[state=open]:text-muted-500;
	}
}`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const DialogRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, features, keyboard, parts, usage, shortName, fileName, styling } = component

	return (
		<>
			<Description name={name} description={description} />
			<Features features={features} />
			<Keyboard keyboard={keyboard} />
			<Parts parts={parts} />
			<Usage usage={usage} shortName={shortName} />
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="secondary">Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerTitle>Edit profile</DrawerTitle>
					<Text className="mt-4">Make changes to your profile here. Click save when you're done.</Text>
					<form className="mt-10">
						<fieldset className="mb-5 flex items-center gap-5">
							<label htmlFor="name" className="w-48 text-right">
								Name
							</label>
							<Input id="name" type="text" defaultValue="André Casal" />
						</fieldset>
						<fieldset className="mb-5 flex items-center gap-5">
							<label htmlFor="twitter-handle" className="w-48 text-right">
								Username
							</label>
							<Input id="twitter-handle" type="text" defaultValue="@theandrecasal" />
						</fieldset>
						<Flex justify="end" gap="6">
							<DrawerClose asChild>
								<Button variant="secondary">Cancel</Button>
							</DrawerClose>
							<Button variant="primary" type="submit">
								Save
							</Button>
						</Flex>
					</form>
				</DrawerContent>
			</Drawer>
			<Text className="mt-4">
				Note: Because I wanted to show you an accurate example, the save button will actually submit the form, but because this page doesn't handle any <Code>POST</Code> requests, it
				will just reload.
			</Text>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
		</>
	)
}
export default DialogRoute
