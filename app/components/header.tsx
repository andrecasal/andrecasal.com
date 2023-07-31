import { useState } from 'react'
import { Container } from '~/components/ui/container.tsx'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '~/components/ui/dialog.tsx'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '~/components/ui/navigation-menu.tsx'
import { Separator } from '~/components/ui/separator.tsx'
import { Link, NavLink, useRouteLoaderData } from '@remix-run/react'
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
										className="relative -m-3 block rounded-md p-3 text-size-sm font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:bg-muted-100 aria-[current]:after:max-w-full"
									>
										André Casal
									</NavLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<div className="hidden lg:flex lg:gap-x-6">
								{/* <NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/tips"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											Tips
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem> */}
								{/* <NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/shorts"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											Shorts
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem> */}
								{/* <NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/articles"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											Articles
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem> */}
								{/* <NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/talks"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											Talks
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem> */}
								<NavigationMenuItem>
									<NavigationMenuTrigger className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">Courses</NavigationMenuTrigger>
									<NavigationMenuContent className="absolute top-full rounded-lg border bg-background p-3">
										<NavigationMenuList>
											<NavigationMenuItem>
												<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
													<Link
														// eslint-disable-next-line remix-react-routes/require-valid-paths
														to="/courses"
														className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
													>
														All courses
													</Link>
												</NavigationMenuLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
													<Link
														to="/courses/mastery-for-vs-code"
														className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
													>
														Mastery for VS Code
													</Link>
												</NavigationMenuLink>
											</NavigationMenuItem>
										</NavigationMenuList>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
										<NavLink
											to="/mentorship"
											className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
										>
											Mentorship
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem>
								{/* <NavigationMenuItem>
									<NavigationMenuTrigger className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">About</NavigationMenuTrigger>
									<NavigationMenuContent className="absolute top-full rounded-lg border bg-background p-3">
										<NavigationMenuList>
											<NavigationMenuItem>
												<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
													<Link
														to="/about"
														className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
													>
														About André
													</Link>
												</NavigationMenuLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
													<Link
														to="/uses"
														className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
													>
														Uses
													</Link>
												</NavigationMenuLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
													<Link
														to="/transparency"
														className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
													>
														Transparency
													</Link>
												</NavigationMenuLink>
											</NavigationMenuItem>
										</NavigationMenuList>
									</NavigationMenuContent>
								</NavigationMenuItem> */}
								<Separator className="h-auto" orientation="vertical" />
								<ThemeSwitch id="mobile" userPreference={data.requestInfo.session.theme} />
							</div>
							<div className="flex gap-x-8 lg:hidden">
								<ThemeSwitch id="desktop" userPreference={data.requestInfo.session.theme} />
								<DialogTrigger className="box-content flex h-6 min-h-tap w-6 min-w-tap cursor-pointer items-center justify-center rounded-lg p-2.5">
									<span className="sr-only">Open main menu</span>
									<Icon name="bars-3" className="h-6 min-h-tap w-6 min-w-tap" aria-hidden="true" />
								</DialogTrigger>
							</div>
						</NavigationMenuList>
					</NavigationMenu>
					<DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-container sm:max-w-sm sm:px-container-sm sm:ring-1 sm:ring-muted-900/10 lg:hidden lg:px-container-lg">
						<NavigationMenu orientation="vertical" className="py-4 ">
							<NavigationMenuList>
								<div className="flex items-baseline justify-between">
									<NavigationMenuItem>
										<NavigationMenuLink asChild>
											<NavLink
												to="/"
												className="relative block rounded-md p-3 text-size-sm font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:bg-muted-100 aria-[current]:after:max-w-full"
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
											{/* <NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/tips"
														className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Tips
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem> */}
											{/* <NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/shorts"
														className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Shorts
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem> */}
											{/* <NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/articles"
														className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Articles
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem> */}
											{/* <NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/talks"
														className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Talks
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem> */}
											<NavigationMenuItem>
												<NavigationMenuTrigger className="block w-full rounded-lg px-3 py-2 text-left text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100">
													Courses
												</NavigationMenuTrigger>
												<NavigationMenuContent className="py-2">
													<NavigationMenuList>
														<NavigationMenuItem>
															<NavigationMenuLink asChild>
																<NavLink
																	// eslint-disable-next-line remix-react-routes/require-valid-paths
																	to="/courses"
																	className="ml-6 block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
																	end
																	onClick={() => setOpen(false)}
																>
																	All courses
																</NavLink>
															</NavigationMenuLink>
														</NavigationMenuItem>
														<NavigationMenuItem>
															<NavigationMenuLink asChild>
																<NavLink
																	to="/courses/mastery-for-vs-code"
																	className="ml-6 block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
																	onClick={() => setOpen(false)}
																>
																	Mastery for VS Code
																</NavLink>
															</NavigationMenuLink>
														</NavigationMenuItem>
													</NavigationMenuList>
												</NavigationMenuContent>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/mentorship"
														className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Mentorship
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem>
											{/* <NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/uses"
														className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														Uses
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem> */}
											{/* <NavigationMenuItem>
												<NavigationMenuLink asChild>
													<NavLink
														to="/about"
														className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
														onClick={() => setOpen(false)}
													>
														About
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem> */}
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
