import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { type LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Heading } from '~/routes/_marketing+/ui+/components/typography/heading.tsx'
import { Kbd } from '~/routes/_marketing+/ui+/components/typography/kbd.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Code } from '~/routes/_marketing+/ui+/components/typography/code.tsx'
import invariant from 'tiny-invariant'



const components: { [key: string]: componentProps[] } = {
	layout: [
		{
			name: 'Flex',
			shortName: 'Flex',
			fileName: 'flex',
			description: ['Component for creating unidimensional flex layouts.'],
			features: [
				'Flexbox layout.',
				'Flex direction can be set to column or row.',
				'Flex items can be aligned horizontally and vertically.',
				'Flex items can be spaced horizontally and vertically.',
			],
			usage: `<Flex inline gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="center" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="end" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex justify="between" gap="6" className="mt-4 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="center" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="end" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
	<div className="h-10 w-10 rounded-sm bg-slate-600" />
</Flex>
<Flex align="stretch" gap="6" className="mt-4 h-32 rounded-md bg-slate-200 p-4">
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
	<div className="w-10 rounded-sm bg-slate-600" />
</Flex>`,
			parts: [
				{
					name: 'Flex',
					description: 'Contains all the parts of a flex layout.',
					props: [
						{ name: 'direction', type: '"row" | "col"', default: '"row"' },
						{ name: 'gap', type: 'string', default: 'undefined' },
						{ name: 'justify', type: '"start" | "center" | "end" | "between" | "around" | "evenly"', default: 'undefined' },
						{ name: 'align', type: '"start" | "center" | "end" | "stretch"', default: 'undefined' },
					],
					data: [{ name: '[data-orientation]', values: '"horizontal" | "vertical"' }],
				},
			],
		},
	],
	modals: [
		{
			name: 'Alert Dialog',
			shortName: 'AlertDialog',
			fileName: 'alert-dialog',
			description: 'A modal dialog that interrupts the user with important content and expects a cancel or action response.',
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
			parts: [
				{
					name: 'AlertDialog',
					description: 'Contains all the parts of an alert dialog.',
					props: [
						{ name: 'defaultOpen', type: 'boolean', default: 'undefined' },
						{ name: 'open', type: 'boolean', default: 'undefined' },
						{ name: 'onOpenChange', type: 'function', default: 'undefined' },
					],
					data: [{ name: '[data-state]', values: '"open" | "closed"' }],
				},
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
		},
	],
}

export const loader = async ({ params }: LoaderArgs) => {
	const { category, component } = params
	invariant(category, 'Category is required')
	invariant(component, 'Component is required')
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, `/_marketing+/ui+/components/${category}/${component}.tsx`)
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ category, component, source })
}

const getComponentData = (category: string, component: string): componentProps => components[category].find(({ fileName }) => fileName === component)!

const Component = () => {
	const { category, component, source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, keyboard, usage, styling }: componentProps = getComponentData(category, component)

	return (
		<>
			<Heading as="h1" className="mt-8">
				{name}
			</Heading>
			<Text className="mt-4">{description}</Text>
			<Text className="mt-4">
				The difference between a <Code>{'<Dialog />'}</Code> and an <Code>{'<AlertDialog />'}</Code> is that the latter is always modal, traps focus automatically, focuses the close
				button by default (to avoid destructive actions by mistake), and because it expects a response, has a <Code>Cancel</Code> and an <Code>Action</Code> button instead of a{' '}
				<Code>Close</Code> button.
			</Text>

			{features ? (
				<>
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
				</>
			) : null}

			{keyboard ? (
				<>
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
								{keyboard.map(({ key, description }) => (
									<tr key="key">
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-muted-900 sm:pl-6">
											<Kbd>{key}</Kbd>
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-muted-500">{description}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			) : null}

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename={`${shortName}Example`} extension="tsx" className="mt-4" />
			<Text className="mt-4">
				Here's the <Code>{`<${shortName} />`}</Code> component in action.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Parts and API
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

			{styling ? (
				<>
					<Heading as="h2" size="3xl" className="mt-8">
						Styling
					</Heading>
					<CodeBlock code={styling} filename="tailwind" extension="css" className="mt-4" />
				</>
			) : null}
		</>
	)
}
export default Component

export function ErrorBoundary() {
	return <p>That component does not exist.</p>
}
