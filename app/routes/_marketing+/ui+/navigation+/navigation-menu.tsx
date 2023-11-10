import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Code } from '../components/typography/code.tsx'
import { Description, Features, Source, readSource, type componentProps, Usage, Keyboard, Styling, Parts } from '../sections/sections.tsx'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuIndicator } from '../components/navigation/navigation-menu.tsx'
import { Icon } from '~/components/ui/icon.tsx'

const component: componentProps = {
	name: 'Navigation Menu',
	shortName: 'NavigationMenu',
	fileName: 'navigation-menu',
	category: 'navigation',
	description: ['A collection of links for navigating websites.'],
	features: [
		'Can be controlled or uncontrolled.',
		'Flexible layout structure with managed tab focus.',
		'Supports submenus.',
		'Optional active item indicator.',
		'Full keyboard navigation.',
		'Exposes CSS variables for advanced animation.',
		'Supports custom timings.',
	],
	keyboard: [
		{ key: 'Space', description: 'When focus is on NavigationMenuTrigger, opens the content.' },
		{ key: 'Enter', description: 'When focus is on NavigationMenuTrigger, opens the content.' },
		{
			key: 'ArrowDown',
			description:
				'When horizontal and focus is on an open NavigationMenuTrigger, moves focus into NavigationMenuContent. Moves focus to the next NavigationMenuTrigger or NavigationMenuLink.',
		},
		{ key: 'ArrowUp', description: 'Moves focus to the previous NavigationMenu.Trigger or NavigationMenuLink.' },
		{
			key: 'ArrowRight',
			description:
				'When vertical and focus is on an open NavigationMenuTrigger, moves focus into its NavigationMenuContent. Moves focus to the next NavigationMenuTrigger or NavigationMenuLink.',
		},
		{
			key: 'ArrowLeft',
			description:
				'When vertical and focus is on an open NavigationMenuTrigger, moves focus into its NavigationMenuContent. Moves focus to the previous NavigationMenuTrigger or NavigationMenuLink.',
		},
		{ key: 'Home', description: 'Moves focus to the first NavigationMenuTrigger or NavigationMenuLink.' },
		{ key: 'End', description: 'Moves focus to the last NavigationMenuTrigger or NavigationMenuLink.' },
		{ key: 'Esc', description: 'Closes open NavigationMenuContent and moves focus to its NavigationMenuTrigger.' },
	],
	parts: [
		{
			name: 'NavigationMenu',
			description: 'Contains all the parts of a navigation menu.',
			props: [
				{ name: 'defaultValue', type: 'string', default: 'No default value' },
				{ name: 'value', type: 'string', default: 'No default value' },
				{ name: 'onValueChange', type: 'function', default: 'No default value' },
				{ name: 'delayDuration', type: 'number', default: '200' },
				{ name: 'skipDelayDuration', type: 'number', default: '300' },
				{ name: 'dir', type: 'enum: "ltr" | "rtl"', default: 'No default value' },
				{ name: 'orientation', type: 'enum: "horizontal" | "vertical"', default: '"horizontal"' },
			],
		},
	],
	usage: `<NavigationMenu>
	<NavigationMenuItem>
		<NavigationMenuLink href="https://www.google.com" target="_blank">
			Google
		</NavigationMenuLink>
	</NavigationMenuItem>

	<NavigationMenuItem>
		<NavigationMenuTrigger className="group">
			Learn <Icon name="chevron-down" className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
		</NavigationMenuTrigger>
		<NavigationMenuContent>
			<NavigationMenuLink href="https://www.google.com" target="_blank">
				Wow dude, amazing!
			</NavigationMenuLink>
		</NavigationMenuContent>
	</NavigationMenuItem>

	<NavigationMenuItem>
		<NavigationMenuTrigger className="group">
			Overview <Icon name="chevron-down" className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
		</NavigationMenuTrigger>
		<NavigationMenuContent>
			<NavigationMenuLink href="https://www.google.com" target="_blank">
				AndreCasal is a boss
			</NavigationMenuLink>
		</NavigationMenuContent>
	</NavigationMenuItem>

	<NavigationMenuIndicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=visible]:animate-in data-[state=hidden]:animate-out">
		<div className="relative top-[60%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] border bg-background shadow-lg" />
	</NavigationMenuIndicator>
</NavigationMenu>`,
	styling: ``,
}

export const loader = async () => json({ source: await readSource({ category: component.category, fileName: component.fileName }) })

const AlertDialogRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const { name, description, shortName, fileName, features, keyboard, usage, parts, styling } = component

	return (
		<>
			<Description name={name} description={description} />
			<Text className="mt-4">
				<Code>NavigationMenu</Code> should not be confused with <Code>DropDownMenu</Code> or <Code>ContextMenu</Code>, although this primitive shares the name menu in the colloquial
				sense to refer to a set of navigation links, it does not use the{' '}
				<a href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/" target="_blank" rel="noreferrer" className="underline">
					WAI-ARIA menu role
				</a>
				. This is because menu and menubars behave like native operating system menus most commonly found in desktop application windows, as such they feature complex functionality
				like composite focus management and first-character navigation.
			</Text>
			<Text className="mt-4">
				These features are often considered unnecessary for website navigation and at worst can confuse users who are familiar with established website patterns.
			</Text>
			<Text className="mt-4">
				See the{' '}
				<a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/" target="_blank" rel="noreferrer" className="underline">
					W3C Disclosure Navigation Menu
				</a>{' '}
				example for more information.
			</Text>
			<Features features={features} />
			<Keyboard keyboard={keyboard} />
			<Parts parts={parts} />
			<Usage usage={usage} shortName={shortName} />
			<NavigationMenu>
				<NavigationMenuItem>
					<NavigationMenuLink href="https://www.google.com" target="_blank">
						Google
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger className="group flex items-baseline">
						Learn <Icon name="chevron-down" className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink href="https://www.google.com" target="_blank">
							Wow dude, amazing!
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger className="group">
						Overview <Icon name="chevron-down" className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink href="https://www.google.com" target="_blank">
							AndreCasal is a boss
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuIndicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=visible]:animate-in data-[state=hidden]:animate-out">
					<div className="relative top-[60%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] border bg-background shadow-lg" />
				</NavigationMenuIndicator>
			</NavigationMenu>
			<Source source={source} fileName={fileName} />
			<Styling styling={styling} />
		</>
	)
}

export default AlertDialogRoute
