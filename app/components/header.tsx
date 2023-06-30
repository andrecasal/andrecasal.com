import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Container } from '~/components/ui/container.tsx'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '~/components/ui/navigation-menu.tsx'
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
		/* { name: 'Courses', href: '/courses' }, */
		{ name: 'About', href: '/about' },
	]

	return (
		<Container>
			<Dialog.Root open={open} onOpenChange={setOpen}>
				<header>
					<NavigationMenu>
						<NavigationMenuList className="flex items-baseline justify-between pt-4 sm:pt-6 lg:pt-8">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink
										to="/"
										className="relative -m-3 block rounded-md p-3 text-body-xl font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:bg-muted-100 focus:bg-muted-100 focus:outline-none aria-[current]:after:max-w-full"
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
										<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-body-sm font-semibold hover:bg-muted-100 focus:bg-muted-100 focus:outline-none">
											<NavLink
												to={link.href}
												className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
											>
												{link.name}
											</NavLink>
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
								<NavigationMenuItem>
									<NavigationMenuTrigger className="relative rounded-md px-4 py-3 hover:bg-muted-100 focus:bg-muted-100 focus:outline-none">
										<NavigationMenuLink asChild className="text-body-sm font-semibold hover:bg-muted-100 focus:bg-muted-100 focus:outline-none">
											<NavLink
												to="/courses"
												className="block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
											>
												Courses
											</NavLink>
										</NavigationMenuLink>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
											<li className="row-span-3">
												<NavLink
													to="/courses/mastery-for-vs-code"
													className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
												>
													<div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
													<p className="text-muted-foreground text-sm leading-tight">Beautifully designed components built with Radix UI and Tailwind CSS.</p>
												</NavLink>
											</li>
											<li title="Introduction">Re-usable components built using Radix UI and Tailwind CSS.</li>
											<li title="Installation">How to install dependencies and structure your app.</li>
											<li title="Typography">Styles for headings, paragraphs, lists...etc</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<Separator className="h-auto" orientation="vertical" />
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
