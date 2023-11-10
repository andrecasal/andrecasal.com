import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import fluidSpaceSizingImage from './fluid-space-sizing.png'
import { Link } from '@remix-run/react'
import { Kbd } from '../../ui+/components/typography/kbd.tsx'
import { type Post } from '../_index.tsx'
import { H1 } from '../../ui+/components/typography/h1.tsx'
import { H2 } from '../../ui+/components/typography/h2.tsx'

export const post: Post = {
	title: 'Fluid Space Sizing',
	description: 'Learn about the cement that holds the bricks of components together: space.',
	imageUrl: fluidSpaceSizingImage,
	date: '2023-09-25',
	href: '/articles/fluid-space-sizing',
	topics: ['Spacing', 'CSS', 'Design Systems'],
}

const FluidSpaceSizing = () => {
	return (
		<>
			<H1 size="4xl" className="mt-10">
				{post.title}
			</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={fluidSpaceSizingImage} alt="Fluid typography sizing with modular scales" className="rounded-2xl object-cover" />
				<H2 size="4xl" className="mt-10">
					Introduction
				</H2>
				<Text size="xl" className="mt-8">
					This article assumes you've read the{' '}
					<Link to="/articles/fluid-typography-sizing-with-modular-scales" className="underline">
						Fluid Typography Sizing and Scales
					</Link>{' '}
					first.
				</Text>
				<Text size="xl" className="mt-8">
					Spacing is the cement that holds together the bricks of components on a UI. The importance of good spacing is hard to overstate: it's the most important aspect of design.
					And the difference between an exquisitely elegant design and a graceless one. So it's no wonder designers are rightly taught to pay great attention to whitespace.
				</Text>
				<Text size="xl" className="mt-8">
					However, it remains one of the most unnecessarily unsystematized aspects of web design and development. Most designers still space things out by hand:{' '}
					<Kbd>Shift + Left</Kbd>, <Kbd>Shift + Right</Kbd>, <Kbd>Shift + Up</Kbd>, and <Kbd>Shift + Down</Kbd> to move things around by increments of 10px and counting 10, 20, 30
					in their heads is the bread and butter of spacing.
				</Text>
				<Text size="xl" className="mt-8">
					As for developers, spacing is handled with hard-coded utility classes 🥴, infinitely growing BEM classes 🤢, or, God forbid, plain old ah hoc CSS 🤮. Out of all of these,
					utility classes is the least worse: if there's a clear spacing scale agreed upon between developer and designer, it's relatively easy to implement a given design. But if
					the designer decides to change a spacing rule that runs across the entire ui, you're going to have a hard time identifying all the instances that pertain to that spacing
					rule and update them to something else.
				</Text>
				<Text size="xl" className="mt-8">
					Why is that? Because, even if you're using utility classes, those spacing rules have been hard-coded in the UI's components.
				</Text>
				<Text size="xl" className="mt-8">
					We can do better.
				</Text>
				<Text size="xl" className="mt-8">
					Let's give spacing the same well-thought-out treatment that we gave typography with a hand-picked scale and fluid space sizing. This enables clear communication between
					designer and developer, preserves the designer's complete control over spacing, even after the implementation is complete, and greatly speeds up development.
				</Text>
				<H2 size="4xl" className="mt-16">
					Modular scale
				</H2>
				<Text size="xl" className="mt-8">
					For the same reason we're not going to use a modular scale for typography, we're not going to use a modular scale for spacing. The reason is that modular scales are too
					limited and you could try different ratios and equations, but at that point you’re just trying to pick a scale that happens to match the sizes you already know you want.
				</Text>
				<H2 size="4xl" className="mt-16">
					Hand-picked scale
				</H2>
				<Text size="xl" className="mt-8">
					It's more pragmatic to hand-pick the values because this approach grants the designer complete control over the number and variety of space sizes.
				</Text>
				<Text size="xl" className="mt-8">
					Let's take a look at TailwindCSS's spacing scale.
				</Text>
				<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
									Name
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Size
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Pixels
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Visual representation
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">0</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-px bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">0.5</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.125rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-0.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">1</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.25rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-1 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">1.5</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.375rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-1.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-2 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2.5</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.625rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-2.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">3</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.75rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-3 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">3.5</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.875rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-3.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">4</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-4 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">5</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.25rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">6</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-6 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">7</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.75rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">28px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-7 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">8</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">32px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-8 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">9</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.25rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">36px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-9 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">10</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">40px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-10 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">11</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.75rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">44px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-11 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">12</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">48px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-12 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">14</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">56px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-14 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">16</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">64px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-16 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">20</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">80px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-20 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">24</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">96px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-24 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">28</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">7rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">112px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-28 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">32</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">128px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-32 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">36</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">9rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">144px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-36 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">40</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">160px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-40 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">44</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">11rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">176px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-44 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">48</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">192px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-48 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">52</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">13rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">208px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-52 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">56</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">224px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-56 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">60</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">15rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">240px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-60 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">64</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">256px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-64 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">72</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">18rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">288px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-72 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">80</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">320px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-80 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">96</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">384px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-96 bg-brand" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Text size="xl" className="mt-8">
					This is a comprehensive enough scale, however a few notes.
				</Text>
				<Text size="xl" className="mt-8">
					First, there's one major no-go: semantics are tied with implementation. The names of the steps in the scale (1, 1.5, 2, 2.5, etc) are tied to multiples of 4px, which is
					an implementation detail. In order for the designer to have complete control over the design after the implementation is done, semantics and implementation have to be
					decoupled. This is absolutely crucial for development speed.
				</Text>
				<Text size="xl" className="mt-8">
					The other awkward thing is that we have half steps (0.5, 1.5, 2.5, etc) on the lower end of the scale because we need multiples of 2px, and we skip steps (64, 72, 80,
					etc) on the higher end of the scale because we don't need those multiples of 4px. This inconsistency makes for a harder-to-communicate scale and an awkward developer
					experience where if the designer asks you to step a component's spacing up, you don't go from 64 to 65, but from 64 to 72 🤦‍♂️.
				</Text>
				<Text size="xl" className="mt-8">
					Let's do better.
				</Text>
				<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
									Name
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Size
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Pixels
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Visual representation
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">0</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">1</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-px bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.125rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-0.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">3</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.25rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-1 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">4</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.375rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-1.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">5</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-2 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">6</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.625rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-2.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">7</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.75rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-3 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">8</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.875rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-3.5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">9</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-4 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">10</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.25rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">11</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-6 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">12</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.75rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">28px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-7 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">13</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">32px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-8 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">14</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.25rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">36px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-9 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">15</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">40px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-10 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">16</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.75rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">44px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-11 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">17</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">48px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-12 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">18</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3.5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">56px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-14 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">19</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">64px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-16 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">20</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">5rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">80px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-20 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">21</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">96px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-24 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">22</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">7rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">112px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-28 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">23</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">128px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-32 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">24</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">9rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">144px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-36 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">25</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">160px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-40 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">26</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">11rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">176px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-44 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">27</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">192px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-48 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">28</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">13rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">208px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-52 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">29</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">224px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-56 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">30</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">15rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">240px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-60 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">31</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">256px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-64 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">32</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">18rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">288px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-72 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">33</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">320px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-80 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">34</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24rem</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">384px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-96 bg-brand" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Text size="xl" className="mt-8">
					This simple change is deceptively powerful.
				</Text>
				<Text size="xl" className="mt-8">
					First, the designer doesn't have to think about absolute values (4px, 10px, 16px, etc), but relative ones ("this should be more spaced out than that by 2 steps", "that
					should be more spaced out than this by 4 steps", etc). Eventually the designer has to converge on absolute values, of course, but as long as the designer starts with a
					somewhat decent scale, the flexibility to think in relative terms is a huge speed booster, specially in the early phases of design.
				</Text>
				<Text size="xl" className="mt-8">
					Also, if the designer gets the relative values right - which is much easier than to get the absolute values right - the implementation will not change: step 30 will still
					be step 30, whether the designer decides later that that means 240px or 244px. This frees the developer to develop at full speed and, given an initial mockup,{' '}
					<strong>in parallel</strong>, without having to wait for the designer to get the values right.
				</Text>
				<Text size="xl" className="mt-8">
					Finally, by giving the designer complete control over the absolute values, we eliminate an entire category of back-and-forth work between designer and developer! The only
					possible mistakes or changes that require coordination between the two are those that involve a different relative step. But this is a much smaller set of changes and it
					would most likely involve changing a single class on a single component, for example.
				</Text>
				<H2 size="4xl" className="mt-16">
					Breakpoint-based space sizing
				</H2>
				<Text size="xl" className="mt-8">
					As is the case with typography, we're not going to use breakpoint-based sizing because it creates a jarring user experience and an unsustainable burden on designers and
					developers.
				</Text>
				<H2 size="4xl" className="mt-16">
					Fluid space sizing
				</H2>
				<Text size="xl" className="mt-8">
					As is the case with typography, if we're going to change the sizing at different viewport widths, we don't need as many steps, because a space of 384px would always be
					too overwhelming (it would overflow, in fact), on a 320px wide viewport.
				</Text>
				<Text size="xl" className="mt-8">
					And we need no variation in the lower steps, some from step 15 onwards, and more variation in the higher steps because of the two opposing forces between the need to
					increase the spacing on larger screens to keep the design balanced and the fact that users don't resize their browser windows to see the same content bigger, but to see
					more content - and therefore we don't want to just scale up the entire UI (that'd be a terrible UX).
				</Text>
				<Text size="xl" className="mt-8">
					So let's cap the scale at step 20 and add a min and a max space size.
				</Text>
				<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
									Name
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Pixels (min)
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Pixels (max)
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Visual representation
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">0</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-0 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">1</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-1 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-2 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">3</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-3 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">4</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-4 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">5</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-5 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">6</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-6 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">7</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-7 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">8</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-8 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">9</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-9 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">10</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-10 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">11</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-11 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">12</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">28px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">28px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-12 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">13</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">32px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">32px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-13 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">14</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">36px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">36px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-14 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">15</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">40px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">48px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-15 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">16</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">48px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">64px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-16 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">17</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">64px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">96px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-17 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">18</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">80px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">144px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-18 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">19</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">128px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">256px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-19 bg-brand" />
								</td>
							</tr>
							<tr>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">20</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">160px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">416px</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									<div className="h-4 w-space-20 bg-brand" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Text size="xl" className="mt-8">
					Resize your browser window to see how the bars change size starting from step 15 onwards.
				</Text>
				<H2 size="4xl" className="mt-16">
					Note on inversion of control
				</H2>
				<Text size="xl" className="mt-8">
					The technique we're using here is generally referred to, in software engineering, as "inversion of control". We create an abstraction (the scale) and implement our UI
					using it. This allows the designer to retain complete control over the specific values each step in the scale maps to.
				</Text>
				<H2 size="4xl" className="mt-16">
					Conclusion
				</H2>
				<Text size="xl" className="mt-8">
					In conclusion, as is the case with typography, between modular or hand-picked scales, hand-picked scales offer the right amount of control, while between breakpoint-based
					and fluid space sizing, fluid space sizing offers a significantly more efficient design and development process. This allows the developer to start working right after
					mockups are available, while giving the designer complete control over spacing, and offers a smoother (let's call it "fluid" 😉) user experience.
				</Text>
				<Text size="xl" className="mt-8">
					The knowledge I'm sharing in these articles is encoded in my{' '}
					<Link to="/ui" className="underline">
						andrecasal/ui
					</Link>{' '}
					component library. All you need from the designer is a mockup and potentially some layout rules (i.e. what to do as the viewport width increases), and you can hit the
					ground running building your app. Refine the design details later!
				</Text>
			</div>
		</>
	)
}
export default FluidSpaceSizing
