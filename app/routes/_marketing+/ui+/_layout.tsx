import { SlideInDialog, SlideInDialogTrigger, SlideInDialogContent } from './components/ui/slide-in-dialog.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { NavLink, Outlet } from '@remix-run/react'
import { Heading } from './components/typography/heading.tsx'
import { useState } from 'react'
import { Flex } from './components/layout/flex.tsx'
import { ScrollArea } from './components/layout/scroll-area.tsx'

const SideMenu = ({ setIsOpen }: { setIsOpen?: (a: boolean) => void }) => {
	const navigation = [
		{
			name: 'Getting Started',
			items: [
				{ name: 'Why', href: '/ui/why', done: true },
				{ name: 'Architecture', href: '/ui/architecture', done: true },
				{ name: 'Design Principles', href: '/ui/design-principles', done: true },
				{ name: 'Development Principles', href: '/ui/development-principles', done: true },
				{ name: 'Taxonomy', href: '/ui/taxonomy', done: true },
				/* { name: 'Nomenclature', href: '/ui/nomenclature', done: true }, */
			],
		},
		{
			name: 'Theme',
			items: [
				{ name: 'Overview', href: '/ui/theme/overview', done: true },
				{ name: 'Dark Mode', href: '/ui/theme/dark-mode', done: true },
			],
		},
		{
			name: 'Layout',
			items: [
				{ name: 'Flex', href: '/ui/layout/flex', done: true },
				{ name: 'Grid', href: '/ui/layout/grid', done: true },
				{ name: 'Container', href: '/ui/layout/container', done: true },
				{ name: 'Sticky', href: '/ui/layout/sticky', done: true },
				{ name: 'Scroll Area', href: '/ui/layout/scroll-area', done: true },
				{ name: 'Divider', href: '/ui/layout/divider', done: true },
				{ name: 'Aspect Ratio', href: '/ui/layout/aspect-ratio', done: true },
				{ name: 'Visually Hidden', href: '/ui/layout/visually-hidden', done: true },
			],
		},
		{
			name: 'Modals',
			items: [
				{ name: 'Dialog', href: '/ui/modals/dialog', done: true },
				{ name: 'Alert Dialog', href: '/ui/modals/alert-dialog', done: true },
				{ name: 'Drawer', href: '/ui/modals/drawer', done: true },
				{ name: 'Dropdown Menu', href: '/ui/modals/dropdown-menu', done: false },
				{ name: 'Upload Dialog', href: '/ui/modals/upload-dialog', done: false },
				{ name: 'Search Dialog', href: '/ui/modals/search-dialog', done: false },
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
				{ name: 'A', href: '/ui/navigation/a', done: false },
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
				{ name: 'H1', href: '/ui/typography/h1', done: false },
				{ name: 'H2', href: '/ui/typography/h2', done: false },
				{ name: 'H3', href: '/ui/typography/h3', done: false },
				{ name: 'H4', href: '/ui/typography/h4', done: false },
				{ name: 'H5', href: '/ui/typography/h5', done: false },
				{ name: 'H6', href: '/ui/typography/h6', done: false },
				{ name: 'P', href: '/ui/typography/p', done: false },
				{ name: 'Span', href: '/ui/typography/span', done: false },
				{ name: 'Em', href: '/ui/typography/em', done: false },
				{ name: 'Strong', href: '/ui/typography/strong', done: false },
				{ name: 'Quote', href: '/ui/typography/quote', done: false },
				{ name: 'Blockquote', href: '/ui/typography/blockquote', done: false },
				{ name: 'Ul', href: '/ui/typography/ul', done: false },
				{ name: 'Ol', href: '/ui/typography/ol', done: false },
				{ name: 'Li', href: '/ui/typography/li', done: false },
				{ name: 'Kbd', href: '/ui/typography/kbd', done: true },
				{ name: 'Code', href: '/ui/typography/Code', done: true },
				{ name: 'Table of Contents', href: '/ui/typography/table-of-contents', done: false },
			],
		},
		{
			name: 'Media',
			items: [
				{ name: 'Icon', href: '/ui/media/icon', done: false },
				{ name: 'Avatar', href: '/ui/media/avatar', done: false },
				{ name: 'Avatar Group', href: '/ui/media/avatar-group', done: false },
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
				{ name: 'Progress Bar', href: '/ui/status/progress-bar', done: false },
			],
		},
		{
			name: 'Actions',
			items: [
				{ name: 'Button', href: '/ui/actions/button', done: false },
				{ name: 'Burger Button', href: '/ui/actions/burger-button', done: false },
				{ name: 'Button Group', href: '/ui/actions/button-group', done: false },
			],
		},
		{
			name: 'Data Display',
			items: [
				{ name: 'Article Preview', href: '/ui/data-display/article-preview', done: false },
				{ name: 'Badge', href: '/ui/data-display/badge', done: false },
				{ name: 'Card', href: '/ui/data-display/card', done: false },
				{ name: 'Command Line', href: '/ui/data-display/command-line', done: true },
				{ name: 'Table', href: '/ui/data-display/table', done: false },
				{ name: 'Tag', href: '/ui/data-display/tag', done: false },
				{ name: 'Tag Group', href: '/ui/data-display/tag-group', done: false },
				{ name: 'Tag Picker', href: '/ui/data-display/tag-picker', done: false },
				{ name: 'Testimonial', href: '/ui/data-display/testimonial', done: false },
				{ name: 'Product Tile', href: '/ui/data-display/product-tile', done: false },
				{ name: 'Skeleton', href: '/ui/data-display/skeleton', done: false },
				{ name: 'Statistic', href: '/ui/data-display/statistic', done: false },
			],
		},
		{
			name: 'Form elements',
			items: [
				{ name: 'Address Input', href: '/ui/form-elements/address-input', done: false },
				{ name: 'Checkbox', href: '/ui/form-elements/checkbox', done: false },
				{ name: 'Calendar Input', href: '/ui/form-elements/calendar-input', done: false },
				{ name: 'Calendar Range Input', href: '/ui/form-elements/calendar-range-input', done: false },
				{ name: 'Color Picker', href: '/ui/form-elements/color-picker', done: false },
				{ name: 'Currency Input', href: '/ui/form-elements/currency-input', done: false },
				{ name: 'Credit Card Input', href: '/ui/form-elements/credit-card-input', done: false },
				{ name: 'Date Input', href: '/ui/form-elements/date-input', done: false },
				{ name: 'Date Picker', href: '/ui/form-elements/date-picker', done: false },
				{ name: 'Date Range Input', href: '/ui/form-elements/date-range-input', done: false },
				{ name: 'Date Range Picker', href: '/ui/form-elements/date-range-picker', done: false },
				{ name: 'Fieldset', href: '/ui/form-elements/fieldset', done: false },
				{ name: 'File Input', href: '/ui/form-elements/file-input', done: false },
				{ name: 'File Dropzone', href: '/ui/form-elements/file-dropzone', done: false },
				{ name: 'File Picker', href: '/ui/form-elements/file-picker', done: false },
				{ name: 'Label', href: '/ui/form-elements/label', done: false },
				{ name: 'Pin Input', href: '/ui/form-elements/pin-input', done: false },
				{ name: 'Phone Number Input', href: '/ui/form-elements/phone-number-input', done: false },
				{ name: 'Radio Button', href: '/ui/form-elements/radio-button', done: false },
				{ name: 'Radio Group', href: '/ui/form-elements/radio-group', done: false },
				{ name: 'Range Slider', href: '/ui/form-elements/range-slider', done: false },
				{ name: 'Rating', href: '/ui/form-elements/rating', done: false },
				{ name: 'Search Input', href: '/ui/form-elements/search-input', done: false },
				{ name: 'Switch', href: '/ui/form-elements/switch', done: false },
				{ name: 'Segmented Control', href: '/ui/form-elements/segmented-control', done: false },
				{ name: 'Select', href: '/ui/form-elements/select', done: false },
				{ name: 'Slider', href: '/ui/form-elements/slider', done: false },
				{ name: 'Text Input', href: '/ui/form-elements/text-input', done: false },
				{ name: 'Textarea', href: '/ui/form-elements/textarea', done: false },
				{ name: 'Toggle', href: '/ui/form-elements/toggle', done: false },
				{ name: 'Toggle Group', href: '/ui/form-elements/toggle-group', done: false },
				{ name: 'URL Input', href: '/ui/form-elements/url-input', done: false },
			],
		},
	]

	const completed = navigation.reduce((acc, { items }) => acc + items.filter(({ done }) => done).length, 0)
	const total = navigation.reduce((acc, { items }) => acc + items.length, 0)
	const percentage = Math.round((completed / total) * 100)

	return (
		<ScrollArea>
			<div className="px-6 pb-10">
				<p className="mt-5 text-muted-400">{`${percentage}% complete`}</p>
				{navigation.map(({ name, items }) => (
					<div key={name}>
						<Heading as="h2" size="xs" className="mt-5 text-muted-400">
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
				<Flex justify="between" gap="6">
					<div className="sticky top-0 hidden max-h-[calc(100vh-var(--header-height))] w-1/4 overflow-y-auto rounded-xl border lg:block">
						<SideMenu />
					</div>
					<div className="w-3/4">
						<Outlet />
					</div>
				</Flex>
			</Container>
		</>
	)
}
export default UI
