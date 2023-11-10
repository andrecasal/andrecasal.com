import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Link } from '@remix-run/react'
import { H1 } from './components/typography/h1.tsx'
import { H2 } from './components/typography/h2.tsx'

const UI = () => {
	return (
		<>
			<H1 size="4xl">andrecasal/ui</H1>
			<H2 size="3xl" className="mt-14">
				Why
			</H2>
			<Text size="lg" className="mt-4">
				<strong>Quality</strong>, <strong>speed</strong> and <strong>decoupling design from development</strong>. As a full-stack web dev{' '}
				<Link to="/mentorship" className="underline">
					mentor
				</Link>{' '}
				and entrepreneur, I wanted to build high-quality UIs as fast as possible. This requires a well-thought-out library that has a simple but powerful API that promotes best
				practices, has accessibility and usability built-in, and most importantly, decouples design from development, something I haven't seen any library do correctly yet.
			</Text>
			<H2 size="3xl" className="mt-8">
				Why not use an existing library?
			</H2>
			<Text size="lg" className="mt-4">
				Current libraries are awesome, but I can do better. I don't want to be arrogant here, I'm mostly standing on the shoulders of giants, specially{' '}
				<a href="https://www.radix-ui.com/primitives" target="_blank" rel="noreferrer" className="underline">
					Radix UI
				</a>
				. But Radix is a low-level library focused on accessibility, meant to be composed into higher order components that abstract away its details.
			</Text>
			<Text size="lg" className="mt-4">
				<a href="https://www.radix-ui.com/" target="_blank" rel="noreferrer" className="underline">
					Radix Themes
				</a>{' '}
				is a good attempt at abstracting away these low-level details, and I take a lot of inspiration from it, but doesn't enforce the best practice of utility classes and the
				documentation shows it being used with a vanilla CSS file for each component, which is less than optimal. According to{' '}
				<a href="https://github.com/radix-ui/themes/discussions/95#discussioncomment-7230949" target="_blank" rel="noreferrer" className="underline">
					@vladmoroz
				</a>
				, you're meant to decide on your own styling solution, but there's no documentation on how to do that. It also doesn't have some components that Radix UI has, like the
				Accordion component, which is confusing.
			</Text>
			<Text size="lg" className="mt-4">
				<a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="underline">
					shadcn/ui
				</a>{' '}
				is awesome, but it's <strong>mostly</strong> just a styling layer on top of Radix UI so it inherits most of its low-level complexity. Some components slightly abstract away
				Radix UI's low-level complexity, while others add it unnecessary 😭
			</Text>
			<Text size="lg" className="mt-4">
				<a href="https://reach.tech/" target="_blank" rel="noreferrer" className="underline">
					Reach UI
				</a>{' '}
				stopped being developed{' '}
				<a href="https://twitter.com/ryanflorence/status/1689028551423733760" target="_blank" rel="noreferrer" className="underline">
					due to Covid
				</a>{' '}
				and Ryan{' '}
				<a href="https://twitter.com/ryanflorence/status/1695584081675989489?s=20" target="_blank" rel="noreferrer" className="underline">
					decided to learn the Guitar instead
				</a>{' '}
				😅
			</Text>
			<Text size="lg" className="mt-4">
				So I'm building my own. Before andrecasal/ui's ready, I highly recommend{' '}
				<a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="underline">
					shadcn/ui
				</a>
				.
			</Text>
			<H2 size="3xl" className="mt-14">
				Goal
			</H2>
			<Text size="lg" className="mt-4">
				The andrecasal/ui library aims to be a high-quality library that allows you to create complex UIs very fast. This means it needs to be easy to understand, easy to use, and
				needs a clear separation of concerns between design and functionality.
			</Text>
			<Text size="lg" className="mt-4">
				When you're focused on coding the UI, you don't care about how it looks, but you need to know you'll have complete control over it in the future. Likewise, when you're
				focused on design, you don't want to be bothered with code and functionality.
			</Text>
			<Text size="lg" className="mt-4">
				This clear separation of concerns is achieved by colocating all of the design variables in the tailwind.css file. If you're a designer, all you need is to change those values
				to achieve the design results you're looking for. If you're a developer, you can focus on the code and functionality without having to worry about the design at all, knowing
				the designer has complete control over it.
			</Text>
			<Text size="lg" className="mt-4">
				To understand how this works, take a look at the{' '}
				<Link to="/ui/architecture" className="underline">
					architecture
				</Link>{' '}
				section.
			</Text>
			<H2 size="3xl" className="mt-14">
				NPM package
			</H2>
			<Text size="lg" className="mt-4">
				The goal is to make the components so good that you seldom need to change them. When we reach that stage, I'll make this a proper NPM package for the sake of installation
				speed as well.
			</Text>
		</>
	)
}
export default UI
