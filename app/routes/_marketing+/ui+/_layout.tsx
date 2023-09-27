import { SlideInDialog, SlideInDialogTrigger, SlideInDialogContent } from './components/ui/slide-in-dialog.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { ScrollArea } from './components/ui/scroll-area.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { NavLink, Outlet } from '@remix-run/react'
import { Heading } from './components/typography/heading.tsx'
import { useState } from 'react'

const SideMenu = ({ setIsOpen }: { setIsOpen?: (a: boolean) => void }) => {
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
		{ name: 'Container', href: '/ui/layout/container', disabled: false },
		{ name: 'Flex', href: '/ui/layout/flex', disabled: false },
		{ name: 'Grid', href: '/ui/layout/grid', disabled: true },
		{ name: 'Section', href: '/ui/layout/section', disabled: true },
		{ name: 'Box', href: '/ui/layout/box', disabled: true },
	]

	const typography = [
		{ name: 'Text', href: '/ui/typography/text', disabled: false },
		{ name: 'Heading', href: '/ui/typography/heading', disabled: false },
		{ name: 'Blockquote', href: '/ui/typography/blockquote', disabled: true },
		{ name: 'Command Line', href: '/ui/typography/command-line', disabled: false },
		{ name: 'Em', href: '/ui/typography/em', disabled: true },
		{ name: 'Kbd', href: '/ui/typography/kbd', disabled: false },
		{ name: 'Link', href: '/ui/typography/link', disabled: true },
		{ name: 'Quote', href: '/ui/typography/quote', disabled: true },
		{ name: 'Strong', href: '/ui/typography/strong', disabled: true },
	]

	const components = [
		{ name: 'Accordion', href: '/ui/ui/accordion', disabled: true },
		{ name: 'Alert', href: '/ui/ui/alert', disabled: true },
		{ name: 'Alert Dialog', href: '/ui/ui/alert-dialog', disabled: true },
		{ name: 'Aspect Ratio', href: '/ui/ui/aspect-ratio', disabled: true },
		{ name: 'Avatar', href: '/ui/ui/avatar', disabled: true },
		{ name: 'Badge', href: '/ui/ui/badge', disabled: true },
		{ name: 'Button', href: '/ui/ui/button', disabled: true },
		{ name: 'Calendar', href: '/ui/ui/calendar', disabled: true },
		{ name: 'Card', href: '/ui/ui/card', disabled: true },
		{ name: 'Checkbox', href: '/ui/ui/checkbox', disabled: true },
		{ name: 'Collapsible', href: '/ui/ui/collapsible', disabled: true },
		{ name: 'Combobox', href: '/ui/ui/combobox', disabled: true },
		{ name: 'Command', href: '/ui/ui/command', disabled: true },
		{ name: 'Context Menu', href: '/ui/ui/context-menu', disabled: true },
		{ name: 'Data Table', href: '/ui/ui/data-table', disabled: true },
		{ name: 'Date Picker', href: '/ui/ui/date-picker', disabled: true },
		{ name: 'Dialog', href: '/ui/ui/dialog', disabled: true },
		{ name: 'Dropdown Menu', href: '/ui/ui/dropdown-menu', disabled: true },
		{ name: 'Form', href: '/ui/ui/form', disabled: true },
		{ name: 'Hover Card', href: '/ui/ui/hover-card', disabled: true },
		{ name: 'Input', href: '/ui/ui/input', disabled: true },
		{ name: 'Label', href: '/ui/ui/label', disabled: true },
		{ name: 'Menubar', href: '/ui/ui/menubar', disabled: true },
		{ name: 'Navigation Menu', href: '/ui/ui/navigation-menu', disabled: true },
		{ name: 'Popover', href: '/ui/ui/popover', disabled: true },
		{ name: 'Progress', href: '/ui/ui/progress', disabled: true },
		{ name: 'Radio Group', href: '/ui/ui/radio-group', disabled: true },
		{ name: 'Scroll Area', href: '/ui/ui/scroll-area', disabled: true },
		{ name: 'Select', href: '/ui/ui/select', disabled: true },
		{ name: 'Separator', href: '/ui/ui/separator', disabled: true },
		{ name: 'Skeleton', href: '/ui/ui/skeleton', disabled: true },
		{ name: 'Slider', href: '/ui/ui/slider', disabled: true },
		{ name: 'Slide-in Dialog', href: '/ui/ui/slide-in-dialog', disabled: true },
		{ name: 'Switch', href: '/ui/ui/switch', disabled: true },
		{ name: 'Table', href: '/ui/ui/table', disabled: true },
		{ name: 'Tabs', href: '/ui/ui/tabs', disabled: true },
		{ name: 'Textarea', href: '/ui/ui/textarea', disabled: true },
		{ name: 'Toast', href: '/ui/ui/toast', disabled: true },
		{ name: 'Toggle', href: '/ui/ui/toggle', disabled: true },
		{ name: 'Tooltip', href: '/ui/ui/tooltip', disabled: false },
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
						<BoldNavLink key={link.href} {...link} onClick={() => (setIsOpen ? setIsOpen(false) : undefined)} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Theme
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{theme.map(link => (
						<BoldNavLink key={link.href} {...link} onClick={() => (setIsOpen ? setIsOpen(false) : undefined)} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Layout
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{layout.map(link => (
						<BoldNavLink key={link.href} {...link} onClick={() => (setIsOpen ? setIsOpen(false) : undefined)} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Typography
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{typography.map(link => (
						<BoldNavLink key={link.href} {...link} onClick={() => (setIsOpen ? setIsOpen(false) : undefined)} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Components
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{components.map(link => (
						<BoldNavLink key={link.href} {...link} onClick={() => (setIsOpen ? setIsOpen(false) : undefined)} />
					))}
				</div>
				<Heading as="h2" size="xs" className="mt-7 text-muted-400">
					Utilities
				</Heading>
				<div className="mt-2 flex flex-col text-sm">
					{utilities.map(link => (
						<BoldNavLink key={link.href} {...link} onClick={() => (setIsOpen ? setIsOpen(false) : undefined)} />
					))}
				</div>
			</div>
		</ScrollArea>
	)
}

type BoldNavLinkProps = {
	name: string
	href: string
	disabled: boolean
	onClick: () => void
}

const BoldNavLink = ({ name, href, disabled, onClick, ...props }: BoldNavLinkProps) => {
	return disabled ? (
		<Text size="sm" className="-mx-2 cursor-not-allowed rounded p-2 text-muted-400" {...props}>
			{name} (soon)
		</Text>
	) : (
		<NavLink to={href} className="-mx-2 rounded p-2 aria-[current]:font-bold" onClick={() => onClick()} {...props}>
			{name}
		</NavLink>
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
