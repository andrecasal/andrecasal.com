import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import HeroAndre from './components/hero-andre.tsx'
import Brands from './components/brands.tsx'
import Newsletter from './components/newsletter.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Text } from '~/components/ui/text.tsx'
import { Spacer } from '~/components/spacer.tsx'
import { Link } from '@remix-run/react'

export const links: LinksFunction = () => {
	return [{ rel: 'preload', href: '/img/andre-at-piano.jpg', as: 'image' }].filter(Boolean)
}

export const meta: V2_MetaFunction = () => [{ title: 'André Casal' }]

export default function Index() {
	const features = [
		{
			name: 'Hot and spicy little tips',
			description: 'Spicy little golden nuggets of knowledge. Think of this as Instagram for web dev. Consume at leisure.',
			icon: 'fire',
			link: '/tips',
		},
		{
			name: 'In-depth articles',
			description: "If you feel like digging a little deeper and exploring a rabbit hole, read an article. It's worth taking notes on these ones.",
			icon: 'file-text',
			link: '/articles',
		},
		{
			name: 'Talks',
			description: "Talks have the same depth as the articles, except in video format. It's also worth to take notes on these ones, but feel free to merely be entertained.",
			icon: 'play',
			link: '/talks',
		},
		{
			name: 'Courses',
			description: "If you'd like to become an expert in a particular topic, you can always buy a course.",
			icon: 'trophy',
			link: '/courses',
		},
		{
			name: 'Mentorship',
			description: "If you're building something part- or full-time and you'd like to become better, you can hire me as your full-stack web dev mentor.",
			icon: 'rocket',
			link: '/mentorship',
		},
	]

	return (
		<>
			<HeroAndre />
			<Brands />
			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl lg:text-center">
						<Text heading="h2" size="md" className="text-brand">
							Everything you need to
						</Text>
						<Text size="3xl" className="mt-2 font-bold sm:text-size-4xl">
							Become a modern
							<br className="hidden sm:block" /> full-stack web developer
						</Text>
						<p className="mt-6 text-lg leading-8 text-muted-600">My website's content is organized in a rising progression of time and depth.</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<div key={feature.name}>
									<Link to={feature.link}>
										<Text size="md" asChild>
											<dt className="flex gap-2 font-bold text-muted-900">
												<Icon name={feature.icon as any} className="h-6 w-6 text-foreground" aria-hidden="true" />
												{feature.name}
											</dt>
										</Text>
										<Text size="md" asChild>
											<dd className="mt-2 text-muted-600">{feature.description}</dd>
										</Text>
									</Link>
								</div>
							))}
						</dl>
					</div>
				</div>
			</Container>
			<Newsletter />
			<Spacer size="2xl" />
		</>
	)
}
