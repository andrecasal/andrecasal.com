import { Container } from '~/ui_components/layout/container.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { H3 } from '~/ui_components/typography/h3.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { Span } from '~/ui_components/typography/span.tsx'
import { Icon } from './ui/icon'

const navigation = {
	social: [
		{
			name: 'X',
			href: 'https://twitter.com/andrecasaldev',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: 'https://github.com/andrecasal',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'YouTube',
			href: 'https://www.youtube.com/@andrecasal',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
	sitemap: [
		{ name: 'Homepage', href: '/' },
		{ name: 'Articles', href: '/articles' },
		{ name: 'Mentoring', href: '/mentorship' },
		{ name: 'LaunchFast', href: 'https://launchfast.pro', external: true },
		{ name: 'VerveUI', href: 'https://verveui.pro', external: true },
		{ name: 'Courses', href: '/courses' },
	],
	courses: [{ name: 'Mastery for VS Code', href: '/courses/mastery-for-vs-code' }],
}

const Footer = () => {
	return (
		<Container className="mt-12 sm:mt-36">
			<footer aria-labelledby="footer-heading">
				<h2 id="footer-heading" className="sr-only">
					Footer
				</h2>
				<div className="mt-8 border-t border-muted-900/10 pb-8 pt-8 sm:mt-12 sm:pt-12 lg:mt-16 lg:pt-16">
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<div className="space-y-8">
							<H2 size="2xl" className="font-semibold tracking-normal">
								André Casal
							</H2>
							<P size="md" className="text-muted-600">
								Making the world a better place by constructing elegant software.
							</P>
							<div className="flex space-x-6">
								{navigation.social.map(item => (
									<a key={item.name} href={item.href} target="_blank" className="text-muted-400 hover:text-muted-500" rel="noreferrer">
										<span className="sr-only">{item.name}</span>
										<item.icon className="h-6 w-6" aria-hidden="true" />
									</a>
								))}
							</div>
						</div>
						<div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
							<div>
								<H3 size="sm" className="font-semibold tracking-normal text-muted-900">
									Sitemap
								</H3>
								<ul className="mt-6 space-y-4">
									{navigation.sitemap.map(item => (
										<li key={item.name}>
											<Span size="sm">
												<a href={item.href} className="text-size-sm text-muted-600 hover:text-muted-900">
													{item.name} {item.external ? <Icon name="paper-plane" className="-mt-1 inline-block h-3 w-3 -rotate-45" /> : null}
												</a>
											</Span>
										</li>
									))}
								</ul>
							</div>
							<div className="md:mt-0 xl:mt-10">
								<H3 size="sm" className="font-semibold tracking-normal text-muted-900">
									Courses
								</H3>
								<ul className="mt-6 space-y-4">
									{navigation.courses.map(item => (
										<li key={item.name}>
											<Span size="sm">
												<a href={item.href} className="text-muted-600 hover:text-muted-900">
													{item.name}
												</a>
											</Span>
										</li>
									))}
								</ul>
							</div>
							{/* <div className="mt-10 md:mt-0">
								<H3 size="sm" className="font-semibold tracking-normal text-muted-900">
									Legal
								</H3>
								<ul className="mt-6 space-y-4">
									{navigation.legal.map(item => (
										<P key={item.name} size="sm" asChild>
											<li>
												<a href={item.href} className="text-size-sm text-muted-600 hover:text-muted-900">
													{item.name}
												</a>
											</li>
										</P>
									))}
								</ul>
							</div> */}
						</div>
					</div>
					<div className="mt-8 pt-4 sm:mt-10 lg:mt-12">
						<P size="xs" className="text-muted-500">
							All rights reserved &copy; André Casal {new Date().getFullYear()}
						</P>
					</div>
				</div>
			</footer>
		</Container>
	)
}

export default Footer
