import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Container } from '~/components/ui/container.tsx'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '~/components/ui/navigation-menu.tsx'
import { Separator } from '~/components/ui/separator.tsx'
import { NavLink, useRouteLoaderData } from '@remix-run/react'
import { ThemeSwitch } from '~/routes/resources+/theme/index.tsx'
import { type SerializeFrom } from '@remix-run/node'
import { type loader as rootLoader } from '~/root.tsx'
import { Icon } from './ui/icon.tsx'

export default function Header() {
	const data = useRouteLoaderData('root') as SerializeFrom<typeof rootLoader>
	const [open, setOpen] = useState(false)

	const navigation = [
		{ name: 'Mentorship', href: '/full-stack-web-dev-mentor' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Courses', href: '/courses' },
		{ name: 'About', href: '/about' },
	]

	return (
		<Container>
			<Dialog.Root open={open} onOpenChange={setOpen}>
				<header>
					<NavigationMenu>
						<NavigationMenuList className="flex items-baseline justify-between py-4 sm:py-6 lg:py-8">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink
										to="/"
										className="relative -m-3 block p-3 text-body-xl font-semibold leading-7 text-foreground after:absolute after:bottom-2 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:after:max-w-full aria-[current]:after:max-w-full"
									>
										André Casal
									</NavLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<div className="flex gap-x-8 lg:hidden">
								<ThemeSwitch id="desktop" userPreference={data.requestInfo.session.theme} />
								<Dialog.Trigger className="-m-2.5 flex items-center justify-center rounded-md p-2.5 text-muted-700">
									<span className="sr-only">Open main menu</span>
									<Icon name="bars-3" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
								</Dialog.Trigger>
							</div>
							<div className="hidden lg:flex lg:gap-x-8">
								{navigation.map(link => (
									<NavigationMenuItem key={link.href}>
										<NavigationMenuLink asChild>
											<NavLink
												to={link.href}
												className="relative block px-3 text-base font-semibold leading-7 text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:after:max-w-full aria-[current]:after:max-w-full"
											>
												{link.name}
											</NavLink>
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
								<Separator className="border-muted-900/15 flex items-center border-l" decorative orientation="vertical" />
								<ThemeSwitch id="mobile" userPreference={data.requestInfo.session.theme} />
							</div>
						</NavigationMenuList>
					</NavigationMenu>
					<Dialog.Content className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-4 py-4 sm:max-w-sm sm:px-6 sm:py-6 sm:ring-1 sm:ring-muted-900/10 lg:hidden">
						<NavigationMenu>
							<NavigationMenuList className="">
								<div className="flex items-baseline justify-between">
									<NavigationMenuItem>
										<NavigationMenuLink asChild>
											<NavLink
												to="/"
												className="relative -m-3 block p-3 text-body-xl font-semibold leading-7 text-foreground after:absolute after:bottom-2 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:after:max-w-full aria-[current]:after:max-w-full"
												onClick={() => setOpen(false)}
											>
												André Casal
											</NavLink>
										</NavigationMenuLink>
									</NavigationMenuItem>
									<Dialog.Close className="-m-2.5 flex items-center justify-center rounded-md p-2.5 text-muted-700">
										<span className="sr-only">Close menu</span>
										<Icon name="x-mark" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
									</Dialog.Close>
								</div>
								<div className="mt-6 flow-root">
									<div className="-my-6 divide-y divide-muted-500/10">
										<div className="space-y-2 py-6">
											{navigation.map(link => (
												<NavigationMenuItem key={link.href}>
													<NavigationMenuLink asChild>
														<NavLink
															to={link.href}
															className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
															onClick={() => setOpen(false)}
														>
															{link.name}
														</NavLink>
													</NavigationMenuLink>
												</NavigationMenuItem>
											))}
										</div>
									</div>
								</div>
							</NavigationMenuList>
						</NavigationMenu>
					</Dialog.Content>
				</header>
			</Dialog.Root>
		</Container>
	)
}
