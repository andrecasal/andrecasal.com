import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Code } from '../components/typography/code.tsx'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '../components/modals/dialog.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { Description, Features, Source, readSource, type componentProps, Parts, Usage, Keyboard, Styling } from '../sections/sections.tsx'

const component: componentProps = {
	name: 'Dialog',
	shortName: 'Dialog',
	fileName: 'dialog',
	category: 'modals',
	description: [
		'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
		'The term “modal” is sometimes used to mean “dialog”, but this is a misnomer. A modal window describes parts of a UI. An element is considered modal if it blocks interaction with the rest of the application.',
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
			name: 'Dialog',
			description: 'Contains all the parts of a dialog.',
			props: [
				{ name: 'defaultOpen', type: 'boolean', default: 'undefined' },
				{ name: 'open', type: 'boolean', default: 'undefined' },
				{ name: 'onOpenChange', type: 'function', default: 'undefined' },
				{ name: 'modal', type: 'boolean', default: 'true' },
			],
		},
		{
			name: 'DialogTrigger',
			description: 'The button that opens the dialog.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
			data: [{ name: 'state', values: ['open', 'closed'] }],
		},
		{
			name: 'DialogContent',
			description: 'Contains content to be rendered in the open dialog.',
			props: [
				{ name: 'asChild', type: 'boolean', default: 'false' },
				{ name: 'forceMount', type: 'boolean', default: 'undefined' },
				{ name: 'onOpenAutoFocus', type: 'function', default: 'undefined' },
				{ name: 'onCloseAutoFocus', type: 'function', default: 'undefined' },
				{ name: 'onEscapeKeyDown', type: 'function', default: 'undefined' },
				{ name: 'onPointerDownOutside', type: 'function', default: 'undefined' },
				{ name: 'onInteractOutside', type: 'function', default: 'undefined' },
			],
			data: [{ name: 'state', values: ['open', 'closed'] }],
		},
		{
			name: 'DialogTitle',
			description: 'Contains the title of the dialog.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
		{
			name: 'DialogClose',
			description: 'The button that closes the dialog.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
		{
			name: 'DialogAction',
			description: 'The button that closes the dialog.',
		},
	],
	usage: `<Dialog>
	<DialogTrigger asChild>
		<Button variant="secondary">Open dialog</Button>
	</DialogTrigger>
	<DialogContent>
		<DialogTitle>Edit profile</DialogTitle>
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
				<DialogClose asChild>
					<Button variant="secondary">Cancel</Button>
				</DialogClose>
				<Button variant="primary" type="submit">
					Save
				</Button>
			</Flex>
		</form>
	</DialogContent>
</Dialog>`,
	styling: `/* ### Layout ### */
@layer components {
	...

	/* Modal Overlay */
	.overlay {
		@apply bg-background/80 backdrop-blur-sm;
	}

	/* Dialog */
	.dialog {
		@apply grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full;
	}

	.dialog-close-button {
		@apply absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-foreground data-[state=open]:text-muted-500;
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
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="secondary">Open dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>Edit profile</DialogTitle>
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
							<DialogClose asChild>
								<Button variant="secondary">Cancel</Button>
							</DialogClose>
							<Button variant="primary" type="submit">
								Save
							</Button>
						</Flex>
					</form>
				</DialogContent>
			</Dialog>
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
