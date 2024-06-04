import { Fragment, useRef, useState } from 'react'
import { Container } from '~/ui_components/layout/container.tsx'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '~/components/ui/dialog.tsx'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '~/components/ui/navigation-menu.tsx'
import { Separator } from '~/components/ui/separator.tsx'
import { Link, NavLink, useRouteLoaderData } from '@remix-run/react'
import { ThemeSwitch } from '~/routes/resources+/theme/index.tsx'
import { type SerializeFrom } from '@remix-run/node'
import { type loader as rootLoader } from '~/root.tsx'
import { Icon } from './ui/icon.tsx'
import { useIsomorphicLayoutEffect } from '~/hooks/useIsomorphicLayoutEffect.ts'

const prefetch = 'intent'

const navigation: { name: string; href: string; external?: boolean; children?: { name: string; href: string }[] }[] = [
	{ name: 'Articles', href: '/articles' },
	{ name: 'Mentorship', href: '/mentorship' },
	{ name: 'VerveUI', href: 'https://verveui.pro', external: true },
	{ name: 'ShipFast', href: '/ship-fast' },
	{ name: 'VS Code', href: '/courses/mastery-for-vs-code' },
	/* { name: 'About', href: '/courses', children: [
		{ name: 'About André', href: '/about' },
		{ name: 'Uses', href: '/uses' },
		{ name: 'Transparency', href: '/transparency' },
	]} */
]

export default function Header() {
	const data = useRouteLoaderData('root') as SerializeFrom<typeof rootLoader>
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLDivElement | null>(null)

	useIsomorphicLayoutEffect(() => {
		if (!ref.current) return
		const styles = window.getComputedStyle(ref.current)
		const fullHeight = ref.current.offsetHeight + parseInt(styles.marginTop) + parseInt(styles.marginBottom)
		document.documentElement.style.setProperty(`--header-height`, `${fullHeight}px`)
	})

	return (
		<Container className="mb-8" ref={ref}>
			<Dialog open={open} onOpenChange={setOpen}>
				<header>
					<NavigationMenu>
						<NavigationMenuList className="group flex list-none items-baseline justify-between pt-4 sm:pt-6 lg:pt-8">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<NavLink
										prefetch={prefetch}
										to="/"
										className="relative -m-3 block rounded-md p-3 text-size-sm font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 hover:bg-muted-100 aria-[current]:after:max-w-full"
									>
										André Casal
									</NavLink>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<div className="hidden lg:flex lg:gap-x-6">
								{navigation.map(({ name, href, external, children }) => (
									<Fragment key={name}>
										{!children ? (
											<NavigationMenuItem>
												<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
													<NavLink
														prefetch={prefetch}
														to={href}
														className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
													>
														{name} {external ? <Icon name="paper-plane" className="-mt-1 inline-block h-4 w-4" /> : null}
													</NavLink>
												</NavigationMenuLink>
											</NavigationMenuItem>
										) : (
											<NavigationMenuItem>
												<NavigationMenuTrigger className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">{name}</NavigationMenuTrigger>
												<NavigationMenuContent className="absolute top-full rounded-lg border bg-background p-3">
													<NavigationMenuList>
														{children.map(({ name, href }) => (
															<NavigationMenuItem key={name}>
																<NavigationMenuLink asChild className="rounded-md px-4 py-3 text-size-sm font-semibold hover:bg-muted-100">
																	<Link
																		prefetch={prefetch}
																		to={href}
																		className="relative block after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-0.5 after:max-w-0 after:bg-foreground after:transition-max-width after:duration-500 aria-[current]:after:max-w-full"
																	>
																		{name}
																	</Link>
																</NavigationMenuLink>
															</NavigationMenuItem>
														))}
													</NavigationMenuList>
												</NavigationMenuContent>
											</NavigationMenuItem>
										)}
									</Fragment>
								))}
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
					<DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-container sm:max-w-sm sm:ring-1 sm:ring-muted-900/10 lg:hidden">
						<NavigationMenu orientation="vertical" className="py-4 ">
							<NavigationMenuList>
								<div className="flex items-baseline justify-between">
									<NavigationMenuItem>
										<NavigationMenuLink asChild>
											<NavLink
												prefetch={prefetch}
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
											{navigation.map(({ name, href, children }) => (
												<Fragment key={name}>
													{!children ? (
														<NavigationMenuItem>
															<NavigationMenuLink asChild>
																<NavLink
																	prefetch={prefetch}
																	to={href}
																	className="block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
																	onClick={() => setOpen(false)}
																>
																	{name}
																</NavLink>
															</NavigationMenuLink>
														</NavigationMenuItem>
													) : (
														<NavigationMenuItem>
															<NavigationMenuTrigger className="block w-full rounded-lg px-3 py-2 text-left text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100">
																{name}
															</NavigationMenuTrigger>
															<NavigationMenuContent className="py-2">
																<NavigationMenuList>
																	{children.map(({ name, href }) => (
																		<NavigationMenuItem key={name}>
																			<NavigationMenuLink asChild>
																				<NavLink
																					to={href}
																					className="ml-6 block rounded-lg px-3 py-2 text-size-sm font-semibold text-muted-900 hover:bg-muted-50 aria-[current]:bg-muted-100"
																					end
																					onClick={() => setOpen(false)}
																				>
																					{name}
																				</NavLink>
																			</NavigationMenuLink>
																		</NavigationMenuItem>
																	))}
																</NavigationMenuList>
															</NavigationMenuContent>
														</NavigationMenuItem>
													)}
												</Fragment>
											))}
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
