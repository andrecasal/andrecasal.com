import { SlideInDialog, SlideInDialogTrigger, SlideInDialogContent } from './components/ui/slide-in-dialog.tsx'
import { Container } from '~/components/ui/container.tsx'
import { ScrollArea } from './components/ui/scroll-area.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { NavLink, Outlet } from '@remix-run/react'
import { Heading } from './components/typography/heading.tsx'

const SideMenu = () => {
	const gettingStarted = [
		{ name: 'Installation', href: '/ui/installation', disabled: false },
		{ name: 'Architecture', href: '/ui/architecture', disabled: false },
		{ name: 'Design Principles', href: '/ui/design-principles', disabled: false },
		{ name: 'Development Principles', href: '/ui/development-principles', disabled: false },
	]

	const theme = [
		{ name: 'Overview', href: '/ui/theme/overview', disabled: true },
		{ name: 'Dark Mode', href: '/ui/theme/dark-mode', disabled: true },
	]

	const layout = [
		{ name: 'Box', href: '/ui/layout/box', disabled: true },
		{ name: 'Flex', href: '/ui/layout/flex', disabled: true },
		{ name: 'Grid', href: '/ui/layout/grid', disabled: true },
		{ name: 'Container', href: '/ui/layout/container', disabled: true },
		{ name: 'Section', href: '/ui/layout/section', disabled: true },
	]

	const typography = [
		{ name: 'Text', href: '/ui/typography/text', disabled: false },
		{ name: 'Heading', href: '/ui/typography/heading', disabled: false },
		{ name: 'Blockquote', href: '/ui/typography/blockquote', disabled: true },
		{ name: 'Code', href: '/ui/typography/code', disabled: true },
		{ name: 'Em', href: '/ui/typography/em', disabled: true },
		{ name: 'Kbd', href: '/ui/typography/kbd', disabled: true },
		{ name: 'Link', href: '/ui/typography/link', disabled: true },
		{ name: 'Quote', href: '/ui/typography/quote', disabled: true },
		{ name: 'Strong', href: '/ui/typography/strong', disabled: true },
	]

	const components = [
		{ name: 'Accordion', href: '/ui/components/accordion', disabled: true },
		{ name: 'Alert', href: '/ui/components/alert', disabled: true },
		{ name: 'Alert Dialog', href: '/ui/components/alert-dialog', disabled: true },
		{ name: 'Aspect Ratio', href: '/ui/components/aspect-ratio', disabled: true },
		{ name: 'Avatar', href: '/ui/components/avatar', disabled: true },
		{ name: 'Badge', href: '/ui/components/badge', disabled: true },
		{ name: 'Button', href: '/ui/components/button', disabled: true },
		{ name: 'Calendar', href: '/ui/components/calendar', disabled: true },
		{ name: 'Card', href: '/ui/components/card', disabled: true },
		{ name: 'Checkbox', href: '/ui/components/checkbox', disabled: true },
		{ name: 'Collapsible', href: '/ui/components/collapsible', disabled: true },
		{ name: 'Combobox', href: '/ui/components/combobox', disabled: true },
		{ name: 'Command', href: '/ui/components/command', disabled: true },
		{ name: 'Context Menu', href: '/ui/components/context-menu', disabled: true },
		{ name: 'Data Table', href: '/ui/components/data-table', disabled: true },
		{ name: 'Date Picker', href: '/ui/components/date-picker', disabled: true },
		{ name: 'Dialog', href: '/ui/components/dialog', disabled: true },
		{ name: 'Dropdown Menu', href: '/ui/components/dropdown-menu', disabled: true },
		{ name: 'Form', href: '/ui/components/form', disabled: true },
		{ name: 'Hover Card', href: '/ui/components/hover-card', disabled: true },
		{ name: 'Input', href: '/ui/components/input', disabled: true },
		{ name: 'Label', href: '/ui/components/label', disabled: true },
		{ name: 'Menubar', href: '/ui/components/menubar', disabled: true },
		{ name: 'Navigation Menu', href: '/ui/components/navigation-menu', disabled: true },
		{ name: 'Popover', href: '/ui/components/popover', disabled: true },
		{ name: 'Progress', href: '/ui/components/progress', disabled: true },
		{ name: 'Radio Group', href: '/ui/components/radio-group', disabled: true },
		{ name: 'Scroll Area', href: '/ui/components/scroll-area', disabled: true },
		{ name: 'Select', href: '/ui/components/select', disabled: true },
		{ name: 'Separator', href: '/ui/components/separator', disabled: true },
		{ name: 'Skeleton', href: '/ui/components/skeleton', disabled: true },
		{ name: 'Slider', href: '/ui/components/slider', disabled: true },
		{ name: 'Slide-in Dialog', href: '/ui/components/slide-in-dialog', disabled: true },
		{ name: 'Switch', href: '/ui/components/switch', disabled: true },
		{ name: 'Table', href: '/ui/components/table', disabled: true },
		{ name: 'Tabs', href: '/ui/components/tabs', disabled: true },
		{ name: 'Textarea', href: '/ui/components/textarea', disabled: true },
		{ name: 'Toast', href: '/ui/components/toast', disabled: true },
		{ name: 'Toggle', href: '/ui/components/toggle', disabled: true },
		{ name: 'Tooltip', href: '/ui/components/tooltip', disabled: true },
	]

	const utilities = [
		{ name: 'Accessible Icon', href: '/ui/utilities/accessible-icon', disabled: true },
		{ name: 'Portal', href: '/ui/utilities/portal', disabled: true },
		{ name: 'Slot', href: '/ui/utilities/slot', disabled: true },
		{ name: 'Visually Hidden', href: '/ui/utilities/visually-hidden', disabled: true },
	]

	return (
		<ScrollArea>
			<div className="px-6 pb-10">
				<Heading as="h2" size="xs" className="mt-10 text-muted-400">
					Getting started
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{gettingStarted.map(link => (
						<BoldNavLink key={link.href} {...link} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Theme
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{theme.map(link => (
						<BoldNavLink key={link.href} {...link} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Layout
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{layout.map(link => (
						<BoldNavLink key={link.href} {...link} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Typography
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{typography.map(link => (
						<BoldNavLink key={link.href} {...link} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Components
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{components.map(link => (
						<BoldNavLink key={link.href} {...link} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Utilities
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{utilities.map(link => (
						<BoldNavLink key={link.href} {...link} />
					))}
				</div>
			</div>
		</ScrollArea>
	)
}

const BoldNavLink = ({ name, href, disabled }: { name: string; href: string; disabled: boolean }) => {
	return disabled ? (
		<Text size="sm" className="-mx-2 cursor-not-allowed rounded p-2 text-muted-400">
			{name} (soon)
		</Text>
	) : (
		<NavLink to={href} className="-mx-2 rounded p-2 aria-[current]:font-bold">
			{name}
		</NavLink>
	)
}

const UI = () => {
	return (
		<>
			<div className="shadow-sm">
				<SlideInDialog>
					<SlideInDialogTrigger className="box-content flex h-6 min-h-tap w-6 min-w-tap cursor-pointer items-center justify-start gap-2 rounded-lg p-2.5 lg:hidden">
						<Icon name="bars-3" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
						<span className="whitespace-nowrap">Open side menu</span>
					</SlideInDialogTrigger>
					<SlideInDialogContent side="left" title="andrecasal/ui side menu" className="lg:hidden">
						<SideMenu />
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
