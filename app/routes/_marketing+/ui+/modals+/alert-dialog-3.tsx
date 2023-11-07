/* import { Component } from '../$category.$component.tsx' */

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

/* const AlertDialogRoute = () => {
	return <Component />
}
export default AlertDialogRoute */
