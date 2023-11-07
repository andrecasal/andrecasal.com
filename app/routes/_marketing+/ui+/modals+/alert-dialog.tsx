import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Code } from '../components/typography/code.tsx'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogAction } from '../components/modals/alert-dialog.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { Description, Features, Source, readSource, type componentProps, Usage, Keyboard, Styling, PartsTitle, Part } from '../sections/sections.tsx'

const component: componentProps = {
	name: 'Alert Dialog',
	shortName: 'AlertDialog',
	fileName: 'alert-dialog',
	category: 'modals',
	description: [
		'A modal dialog that interrupts the user with important content and expects a response.',
		'The term “modal” is sometimes used to mean “dialog”, but this is a misnomer. A modal window describes parts of a UI. An element is considered modal if it blocks interaction with the rest of the application.',
	],
	features: [
		'Focus is automatically trapped.',
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
			name: 'AlertDialog',
			description: 'Contains all the parts of an alert dialog.',
			props: [
				{ name: 'defaultOpen', type: 'boolean', default: 'undefined' },
				{ name: 'open', type: 'boolean', default: 'undefined' },
				{ name: 'onOpenChange', type: 'function', default: 'undefined' },
			],
		},
		{
			name: 'AlertDialogTrigger',
			description: 'The button that opens the dialog.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
			data: [{ name: 'state', values: ['open', 'closed'] }],
		},
		{
			name: 'AlertDialogContent',
			description: 'Contains content to be rendered when the alert dialog is open.',
			props: [
				{ name: 'asChild', type: 'boolean', default: 'false' },
				{ name: 'forceMount', type: 'boolean', default: 'undefined' },
				{ name: 'onOpenAutoFocus', type: 'function', default: 'undefined' },
				{ name: 'onCloseAutoFocus', type: 'function', default: 'undefined' },
				{ name: 'onEscapeKeyDown', type: 'function', default: 'undefined' },
			],
			data: [{ name: 'state', values: ['open', 'closed'] }],
		},
		{
			name: 'AlertDialogTitle',
			description: 'An accessible name to be announced when the alert dialog is opened.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
		{
			name: 'AlertDialogDescription',
			description: 'An accessible description to be announced when the alert dialog is opened.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
		{
			name: 'AlertDialogCancel',
			description: 'A single button that closes the dialog. This button should be distinguished visually from AlertDialogAction buttons.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
		{
			name: 'AlertDialogAction',
			description: 'The button that closes the dialog. These buttons should be distinguished visually from the AlertDialogCancel button.',
			props: [{ name: 'asChild', type: 'boolean', default: 'false' }],
		},
	],
	usage: `<AlertDialog>
	<AlertDialogTrigger asChild>
		<Button variant="danger">Delete account</Button>
	</AlertDialogTrigger>
	<AlertDialogContent>
		<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
		<Text className="mt-4">This action cannot be undone. This will permanently delete your account and all your data.</Text>
		<form>
			<Flex justify="end" gap="6">
				<AlertDialogCancel asChild>
					<Button variant="secondary">Cancel</Button>
				</AlertDialogCancel>
				<AlertDialogAction asChild>
					<Button variant="danger" type="submit">
						Yes, delete account
					</Button>
				</AlertDialogAction>
			</Flex>
		</form>
	</AlertDialogContent>
</AlertDialog>`,
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

	.dialog-x-button {
		@apply absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-foreground data-[state=open]:text-muted-500;
	}
}`,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const AlertDialogRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, keyboard, usage, parts, styling } = component

	return (
		<>
			<Description name={name} description={description} />
			<Text className="mt-4">
				The difference between a <Code>{'<Dialog />'}</Code> and an <Code>{'<AlertDialog />'}</Code> is that the latter is always modal, traps focus automatically, focuses the close
				button by default (to avoid destructive actions by mistake), and because it expects a response, has a <Code>Cancel</Code> and an <Code>Action</Code> button instead of a{' '}
				<Code>Close</Code> button.
			</Text>
			<Features features={features} />
			<Keyboard keyboard={keyboard} />

			<PartsTitle />
			<Part {...parts.find(({ name }) => name === 'AlertDialog')!} />
			<Part {...parts.find(({ name }) => name === 'AlertDialogTrigger')!} />
			<Part {...parts.find(({ name }) => name === 'AlertDialogContent')!} />
			<Part {...parts.find(({ name }) => name === 'AlertDialogTitle')!} />
			<Text className="mt-4">
				If you want to hide the title, wrap it with <Code>{'<VisuallyHidden asChild>'}</Code>.
			</Text>
			<Part {...parts.find(({ name }) => name === 'AlertDialogDescription')!} />
			<Text className="mt-4">
				If you want to hide the description, wrap it with <Code>{'<VisuallyHidden asChild>'}</Code>.
			</Text>
			<Part {...parts.find(({ name }) => name === 'AlertDialogCancel')!} />
			<Part {...parts.find(({ name }) => name === 'AlertDialogAction')!} />
			<Usage usage={usage} shortName={shortName} />
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="danger">Delete account</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<Text className="mt-4">This action cannot be undone. This will permanently delete your account and all your data.</Text>
					<form>
						<Flex justify="end" gap="6">
							<AlertDialogCancel asChild>
								<Button variant="secondary">Cancel</Button>
							</AlertDialogCancel>
							<AlertDialogAction asChild>
								<Button variant="danger" type="submit">
									Yes, delete account
								</Button>
							</AlertDialogAction>
						</Flex>
					</form>
				</AlertDialogContent>
			</AlertDialog>
			<Text className="mt-4">
				Note: Because I wanted to show you an accurate example, the "Yes, delete account" button will actually submit the form, but because this page doesn't handle any{' '}
				<Code>POST</Code>
				requests, it will just reload.
			</Text>

			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
			<Text className="mt-4">
				Note: The <Code>overlay</Code> class applies to all modals, and the <Code>dialog</Code> and <Code>dialog-x-button</Code> classes apply to both <Code>{'<Dialog />'}</Code> and{' '}
				<Code>{'<AlertDialog />'}</Code> components.
			</Text>
		</>
	)
}
export default AlertDialogRoute
