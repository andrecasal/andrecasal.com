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
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '../components/modals/dialog.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Flex } from '../components/layout/flex.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/modals/dialog.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const DialogRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usage = `<Dialog>
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
</Dialog>`
	const stylingSource = `/* ### Layout ### */
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
}`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Dialog
			</Heading>
			<Text className="mt-4">A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</Text>
			<Text className="mt-4">
				The term "modal" is sometimes used to mean "dialog", but this is a misnomer. A modal window describes parts of a UI. An element is considered modal if it blocks interaction
				with the rest of the application.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Supports modal and non-modal modes.
				</li>
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Focus is automatically trapped when modal.
				</li>
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Can be controlled or uncontrolled.
				</li>
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Manages screen reader announcements with Title and Description components.
				</li>
				<li className="flex items-center">
					<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
					Esc closes the component automatically.
				</li>
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
								<Kbd>Escape</Kbd>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">Closes the dialog and moves focus to the Trigger.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename="DialogExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">
				Here's the <Code>{'<Dialog />'}</Code> component in action.
			</Text>
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
				Note: Because I wanted to show you an accurate example, the save button will actually submit the form, but because this page doesn't handle any POST requests, it will just
				reload.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Props
			</Heading>
			<Heading as="h3" size="xl" className="mt-8">
				Dialog
			</Heading>
			<Text className="mt-4">Contains all the parts of a dialog.</Text>
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
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">modal</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">true</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h3" size="xl" className="mt-8">
				DialogTrigger
			</Heading>
			<Text className="mt-4">The button that opens the dialog.</Text>
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
			<Text className="mt-4">Contains content to be rendered in the open dialog.</Text>
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
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">onPointerDownOutside</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">function</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">onInteractOutside</td>
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
			<CodeBlock code={source} filename="dialog" extension="tsx" className="mt-4" />

			<Heading as="h2" size="3xl" className="mt-8">
				Styling
			</Heading>
			<CodeBlock code={stylingSource} filename="tailwind" extension="css" className="mt-4" />
		</>
	)
}
export default DialogRoute
