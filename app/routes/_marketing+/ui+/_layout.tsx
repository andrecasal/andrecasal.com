import { SlideInDialog, SlideInDialogTrigger, SlideInDialogContent } from './components/ui/slide-in-dialog.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { ScrollArea } from './components/layout/scroll-area.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { NavLink, Outlet } from '@remix-run/react'
import { Heading } from './components/typography/heading.tsx'
import { useState } from 'react'

const SideMenu = ({ setIsOpen }: { setIsOpen?: (a: boolean) => void }) => {
	const navigation = [
		{
			name: 'Getting Started',
			items: [
				{ name: 'Why', href: '/ui/why', done: true },
				{ name: 'Architecture', href: '/ui/architecture', done: true },
				{ name: 'Design Principles', href: '/ui/design-principles', done: true },
				{ name: 'Development Principles', href: '/ui/development-principles', done: true },
				{ name: 'Taxonomy', href: '/ui/taxonomy', done: false },
			],
		},
		{
			name: 'Theme',
			items: [
				{ name: 'Overview', href: '/ui/theme/overview', done: false },
				{ name: 'Dark Mode', href: '/ui/theme/dark-mode', done: false },
			],
		},
		{
			name: 'Layout',
			items: [
				{ name: 'Container', href: '/ui/layout/container', done: true },
				{ name: 'Flex', href: '/ui/layout/flex', done: true },
				{ name: 'Grid', href: '/ui/layout/grid', done: true },
				{ name: 'Box', href: '/ui/layout/box', done: false },
				{ name: 'Sticky', href: '/ui/layout/sticky', done: false },
				{ name: 'Scroll Area', href: '/ui/layout/scroll-area', done: true },
				{ name: 'Separator', href: '/ui/layout/separator', done: false },
				{ name: 'Aspect Ratio', href: '/ui/layout/aspect-ratio', done: false },
				{ name: 'Visually Hidden', href: '/ui/layout/visually-hidden', done: false },
			],
		},
		{
			name: 'Modals',
			items: [
				{ name: 'Modal', href: '/ui/modals/modal', done: false },
				{ name: 'Dialog', href: '/ui/modals/dialog', done: false },
				{ name: 'Alert Dialog', href: '/ui/modals/alert-dialog', done: false },
				{ name: 'Drawer', href: '/ui/modals/drawer', done: false },
				{ name: 'Dropdown Menu', href: '/ui/modals/dropdown-menu', done: false },
			],
		},
		{
			name: 'Overlays',
			items: [
				{ name: 'Tooltip', href: '/ui/overlays/tooltip', done: false },
				{ name: 'Hover Card', href: '/ui/overlays/hover-card', done: false },
				{ name: 'Context Menu', href: '/ui/overlays/context-menu', done: false },
				{ name: 'Popover', href: '/ui/overlays/popover', done: false },
			],
		},
		{
			name: 'Navigation',
			items: [
				{ name: 'Link', href: '/ui/navigation/link', done: false },
				{ name: 'NavLink', href: '/ui/navigation/navlink', done: false },
				{ name: 'Navigation Menu', href: '/ui/navigation/navigation-menu', done: false },
				{ name: 'Breadcrumbs', href: '/ui/navigation/breadcrumbs', done: false },
				{ name: 'Pagination', href: '/ui/navigation/pagination', done: false },
				{ name: 'Stepper', href: '/ui/navigation/stepper', done: false },
			],
		},
		{
			name: 'Disclosure',
			items: [
				{ name: 'Collapsible', href: '/ui/disclosure/collapsible', done: false },
				{ name: 'Accordion', href: '/ui/disclosure/accordion', done: false },
				{ name: 'Tabs', href: '/ui/disclosure/tabs', done: true },
			],
		},
		{
			name: 'Typography',
			items: [
				{ name: 'Heading', href: '/ui/typography/heading', done: true },
				{ name: 'Text', href: '/ui/typography/text', done: true },
				{ name: 'Em', href: '/ui/typography/em', done: false },
				{ name: 'Strong', href: '/ui/typography/strong', done: false },
				{ name: 'Quote', href: '/ui/typography/quote', done: false },
				{ name: 'Blockquote', href: '/ui/typography/blockquote', done: false },
				{ name: 'List', href: '/ui/typography/list', done: false },
				{ name: 'Table of Contents', href: '/ui/typography/table-of-contents', done: false },
				{ name: 'Kbd', href: '/ui/typography/kbd', done: true },
				{ name: 'Code', href: '/ui/typography/Code', done: true },
			],
		},
		{
			name: 'Media',
			items: [
				{ name: 'Avatar', href: '/ui/media/avatar', done: false },
				{ name: 'Avatar Group', href: '/ui/media/avatar-group', done: false },
				{ name: 'Icon', href: '/ui/media/icon', done: false },
				{ name: 'Image', href: '/ui/media/image', done: false },
				{ name: 'Video', href: '/ui/media/video', done: false },
			],
		},
		{
			name: 'Notifications',
			items: [
				{ name: 'Notification', href: '/ui/notifications/notification', done: false },
				{ name: 'Notification Panel', href: '/ui/notifications/notification-panel', done: false },
				{ name: 'Toast', href: '/ui/notifications/toast', done: false },
				{ name: 'Alert', href: '/ui/notifications/alert', done: false },
			],
		},
		{
			name: 'Status',
			items: [
				{ name: 'Spinner', href: '/ui/status/spinner', done: false },
				{ name: 'ProgressBar', href: '/ui/status/progress-bar', done: false },
			],
		},
		{
			name: 'Data Display',
			items: [
				{ name: 'Badge', href: '/ui/data-display/badge', done: false },
				{ name: 'Calendar', href: '/ui/data-display/calendar', done: false },
				{ name: 'Card', href: '/ui/data-display/card', done: false },
				{ name: 'Tag', href: '/ui/data-display/tag', done: false },
				{ name: 'Tag Group', href: '/ui/data-display/tag group', done: false },
				{ name: 'Table', href: '/ui/data-display/table', done: false },
				{ name: 'Skeleton', href: '/ui/data-display/skeleton', done: false },
				{ name: 'Rail', href: '/ui/data-display/rail', done: false },
				{ name: 'Command Line', href: '/ui/data-display/command-line', done: true },
			],
		},
		{
			name: 'Data Entry',
			items: [
				{ name: 'Button', href: '/ui/data-entry/button', done: false },
				{ name: 'Burger Button', href: '/ui/data-entry/burger-button', done: false },
				{ name: 'Button Group', href: '/ui/data-entry/button-group', done: false },
				{ name: 'Checkbox', href: '/ui/data-entry/checkbox', done: false },
				{ name: 'Switch', href: '/ui/data-entry/switch', done: false },
				{ name: 'Toggle', href: '/ui/data-entry/toggle', done: false },
				{ name: 'Toggle Group', href: '/ui/data-entry/toggle-group', done: false },
				{ name: 'Segmented Control', href: '/ui/data-entry/segmented-control', done: false },
				{ name: 'Radio Button', href: '/ui/data-entry/radio-button', done: false },
				{ name: 'Radio Group', href: '/ui/data-entry/radio-group', done: false },
				{ name: 'Select', href: '/ui/data-entry/select', done: false },
				{ name: 'Slider', href: '/ui/data-entry/slider', done: false },
				{ name: 'Range Slider', href: '/ui/data-entry/range-slider', done: false },
				{ name: 'Label', href: '/ui/data-entry/label', done: false },
				{ name: 'Input', href: '/ui/data-entry/input', done: false },
				{ name: 'Color Picker', href: '/ui/data-entry/color-picker', done: false },
				{ name: 'Date Input', href: '/ui/data-entry/date-input', done: false },
				{ name: 'Calendar Input', href: '/ui/data-entry/calendar-input', done: false },
				{ name: 'Date Picker', href: '/ui/data-entry/date-picker', done: false },
				{ name: 'Calendar Range Input', href: '/ui/data-entry/calendar-range-input', done: false },
				{ name: 'Date Range Picker', href: '/ui/data-entry/date-range-picker', done: false },
				{ name: 'Pin Input', href: '/ui/data-entry/pin-input', done: false },
				{ name: 'Uploader', href: '/ui/data-entry/uploader', done: false },
				{ name: 'Textarea', href: '/ui/data-entry/textarea', done: false },
				{ name: 'Fieldset', href: '/ui/data-entry/fieldset', done: false },
				{ name: 'Rating', href: '/ui/data-entry/rating', done: false },
			],
		},
	]

	return (
		<ScrollArea>
			<div className="px-6 pb-10">
				{navigation.map(({ name, items }) => (
					<div key={name}>
						<Heading as="h2" size="xs" className="mt-10 text-muted-400">
							{name}
						</Heading>
						<div className="mt-2 flex flex-col text-sm">
							{items.map(link => (
								<BoldNavLink key={link.href} {...link} onClick={() => (setIsOpen ? setIsOpen(false) : undefined)} />
							))}
						</div>
					</div>
				))}
			</div>
		</ScrollArea>
	)
}

type BoldNavLinkProps = {
	name: string
	href: string
	done: boolean
	onClick: () => void
}

const BoldNavLink = ({ name, href, done, onClick, ...props }: BoldNavLinkProps) => {
	return done ? (
		<NavLink to={href} className="-mx-2 rounded p-2 aria-[current]:font-bold" onClick={() => onClick()} {...props}>
			{name}
		</NavLink>
	) : (
		<Text size="sm" className="-mx-2 cursor-not-allowed rounded p-2 text-muted-400" {...props}>
			{name} (soon)
		</Text>
	)
}

const UI = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className="shadow-sm">
				<SlideInDialog open={isOpen} onOpenChange={setIsOpen}>
					<SlideInDialogTrigger className="box-content flex h-6 min-h-tap w-6 min-w-tap cursor-pointer items-center justify-start gap-2 rounded-lg p-2.5 lg:hidden">
						<Icon name="bars-3" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
						<Text as="span" className="whitespace-nowrap">
							Open side menu
						</Text>
					</SlideInDialogTrigger>
					<SlideInDialogContent side="left" title="andrecasal/ui side menu" className="lg:hidden">
						<SideMenu setIsOpen={setIsOpen} />
					</SlideInDialogContent>
				</SlideInDialog>
			</div>
			<Container>
				<div className="grid w-full grid-cols-1 lg:grid-cols-[18rem_minmax(0,_1fr)]">
					<div className="hidden h-[calc(100vh-var(--header-height))] rounded-lg border lg:block">
						<SideMenu />
					</div>
					<div className="px-4 sm:px-6 lg:px-8">
						<Outlet />
					</div>
				</div>
			</Container>
		</>
	)
}
export default UI
