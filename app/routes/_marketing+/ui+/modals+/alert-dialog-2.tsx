import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Kbd } from '../components/typography/kbd.tsx'
import { Code } from '../components/typography/code.tsx'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogAction } from '../components/modals/alert-dialog.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Flex } from '../components/layout/flex.tsx'

const component = {
	name: 'Alert Dialog',
	shortName: 'AlertDialog',
	fileName: 'alert-dialog',
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
	usage: `<AlertDialog>
	<AlertDialogTrigger asChild>
		<Button variant="secondary">Open dialog</Button>
	</AlertDialogTrigger>
	<AlertDialogContent>
		<AlertDialogTitle>Edit profile</AlertDialogTitle>
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
				<AlertDialogCancel asChild>
					<Button variant="secondary">Cancel</Button>
				</AlertDialogCancel>
				<AlertDialogAction asChild>
					<Button variant="primary" type="submit">
						Save
					</Button>
				</AlertDialogAction>
			</Flex>
		</form>
	</AlertDialogContent>
</AlertDialog>`,
	props: [
		{ name: 'defaultOpen', type: 'boolean', default: 'undefined' },
		{ name: 'open', type: 'boolean', default: 'undefined' },
		{ name: 'onOpenChange', type: 'function', default: 'undefined' },
	],
	parts: [
		{ name: 'AlertDialog', description: 'Contains all the parts of an alert dialog.' },
		{ name: 'AlertDialogTrigger', description: 'The button that opens the alert dialog.' },
		{ name: 'AlertDialogContent', description: 'The content of the alert dialog.' },
		{ name: 'AlertDialogTitle', description: 'The title of the alert dialog.' },
		{ name: 'AlertDialogDescription', description: 'The description of the alert dialog.' },
		{ name: 'AlertDialogCancel', description: 'The cancel button of the alert dialog.' },
		{ name: 'AlertDialogAction', description: 'The action button of the alert dialog.' },
	],
	styling: `/* ### Layout ### */
@layer components {
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

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, `/_marketing+/ui+/components/modals/${component.fileName}.tsx`)
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const AlertDialogRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, shortName, fileName, features, keyboard, usage, parts, props, styling } = component

	return (
		<>
			<Heading as="h1" className="mt-8">
				{name}
			</Heading>
			<Text className="mt-4">A modal dialog that interrupts the user with important content and expects a cancel or action response.</Text>
			<Text className="mt-4">
				The difference between a <Code>{'<Dialog />'}</Code> and an <Code>{'<AlertDialog />'}</Code> is that the latter is always modal, traps focus automatically, focuses the close
				button by default (to avoid destructive actions by mistake), and because it expects a response, has a <Code>Cancel</Code> and an <Code>Action</Code> button instead of a{' '}
				<Code>Close</Code> button.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				{features.map(feature => (
					<li key={feature} className="flex items-center">
						<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
						{feature}
					</li>
				))}
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Keyboard interactions
			</Heading>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-muted-300">
					<thead className="bg-muted-300">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-muted-900 sm:pl-6">
								Key
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-muted-900">
								Description
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-muted-200 bg-muted-200">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<Kbd>Space</Kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">Opens/closes the dialog.</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<Kbd>Enter</Kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">Opens/closes the dialog.</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<Kbd>Tab</Kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">Moves focus to the next focusable element.</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<Kbd>Shift + Tab</Kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">Moves focus to the previous focusable element.</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
								<Kbd>Esc</Kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">Closes the dialog and moves focus to the Trigger.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename={`${shortName}Example`} extension="tsx" className="mt-4" />
			<Text className="mt-4">
				Here's the <Code>{`<${shortName} />`}</Code> component in action.
			</Text>
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
				Note: Because I wanted to show you an accurate example, the "Yes, delete account" button will actually submit the form, but because this page doesn't handle any POST
				requests, it will just reload.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Props
			</Heading>
			<Heading as="h3" size="xl" className="mt-8">
				AlertDialog
			</Heading>
			<Text className="mt-4">Contains all the parts of an alert dialog.</Text>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">defaultOpen</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">open</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">onOpenChange</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">function</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h3" size="xl" className="mt-8">
				AlertDialogTrigger
			</Heading>
			<Text className="mt-4">The button that opens the alert dialog.</Text>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">asChild</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-gray-300">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Data attribute
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Values
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">[data-state]</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">"open" | "closed"</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h3" size="xl" className="mt-8">
				DialogContent
			</Heading>
			<Text className="mt-4">Contains content to be rendered in the open alert dialog.</Text>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">asChild</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">forceMount</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">onOpenAutoFocus</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">function</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">onCloseAutoFocus</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">function</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">onEscapeKeyDown</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">function</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-gray-300">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Data attribute
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Values
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">[data-state]</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">"open" | "closed"</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h3" size="xl" className="mt-8">
				DialogTitle
			</Heading>
			<Text className="mt-4">An accessible title to be announced when the dialog is opened.</Text>
			<Text className="mt-4">
				If you want to hide the title, wrap it with <Code>{'<VisuallyHidden asChild>'}</Code>.
			</Text>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">asChild</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h3" size="xl" className="mt-8">
				DialogDescription
			</Heading>
			<Text className="mt-4">An accessible description to be announced when the dialog is opened.</Text>
			<Text className="mt-4">
				If you want to hide the description, wrap it with <Code>{'<VisuallyHidden asChild>'}</Code>.
			</Text>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">asChild</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h3" size="xl" className="mt-8">
				DialogClose
			</Heading>
			<Text className="mt-4">The button that closes the dialog.</Text>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">asChild</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename={fileName} extension="tsx" className="mt-4" />

			<Heading as="h2" size="3xl" className="mt-8">
				Styling
			</Heading>
			<CodeBlock code={styling} filename="tailwind" extension="css" className="mt-4" />
		</>
	)
}
export default AlertDialogRoute
