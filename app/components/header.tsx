import { useState } from 'react'
import { Container } from '~/components/ui/container.tsx'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '~/components/ui/dialog.tsx'
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

	return (
		<Container className="mb-8">
			<Dialog open={open} onOpenChange={setOpen}>
				<header>
					<NavigationMenu>
						<NavigationMenuList className="group flex list-none items-baseline justify-between pt-4 sm:pt-6 lg:pt-8">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink
										to="/"
										className="relative -m-3 block rounded-md p-3 text-body-xl font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:bg-muted-100 aria-[current]:after:max-w-full"
									>
										André Casal
									</NavLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<div className="flex gap-x-8 lg:hidden">
								<ThemeSwitch id="desktop" userPreference={data.requestInfo.session.theme} />
								<DialogTrigger className="box-content flex h-6 min-h-tap w-6 min-w-tap cursor-pointer items-center justify-center rounded-lg p-2.5">
									<span className="sr-only">Open main menu</span>
									<Icon name="bars-3" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
								</DialogTrigger>
							</div>
							<div className="hidden lg:flex lg:gap-x-8">
								<NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-body-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/full-stack-web-dev-mentor"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											Mentorship
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-body-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/blog"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											Blog
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="relative rounded-md px-4 py-3 hover:bg-muted-100">
										<NavigationMenuLink asChild className="text-body-sm font-semibold hover:bg-muted-100">
											<NavLink
												to="/courses"
												className="block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
											>
												Courses
											</NavLink>
										</NavigationMenuLink>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="p-6 md:w-[400px] lg:w-[500px]">
											<NavLink
												to="/courses/mastery-for-vs-code"
												className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none hover:bg-muted-100 focus:bg-muted-100 focus:shadow-md"
											>
												<div className="mb-2 text-body-md font-medium">Mastery for VS Code</div>
												<p className="text-muted-foreground text-body-sm leading-tight">
													This course is designed to help you master VS Code. You'll learn how to use VS Code to its fullest potential, and you'll be able to do so
													in a way that's fun and engaging.
												</p>
											</NavLink>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-body-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/about"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											About
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<Separator className="h-auto" orientation="vertical" />
								<ThemeSwitch id="mobile" userPreference={data.requestInfo.session.theme} />
							</div>
						</NavigationMenuList>
					</NavigationMenu>
					<DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-container py-4 sm:max-w-sm sm:px-container-sm sm:py-6 sm:ring-1 sm:ring-muted-900/10 lg:hidden lg:px-container-lg">
						<NavigationMenu orientation="vertical">
							<NavigationMenuList>
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
									<DialogClose className="box-content flex h-6 min-h-tap w-6 min-w-tap cursor-pointer items-center justify-center rounded-lg p-2.5">
										<span className="sr-only">Close menu</span>
										<Icon name="x-mark" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
									</DialogClose>
								</div>
								<div className="mt-6 flow-root">
									<div className="-my-6 divide-y divide-muted-500/10">
										<div className="space-y-2 py-6">
											<NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/full-stack-web-dev-mentor"
														className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Mentorship
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/blog"
														className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Blog
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/courses"
														className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Courses
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/about"
														className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														About
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem>
										</div>
									</div>
								</div>
							</NavigationMenuList>
						</NavigationMenu>
					</DialogContent>
				</header>
			</Dialog>
		</Container>
	)
}
