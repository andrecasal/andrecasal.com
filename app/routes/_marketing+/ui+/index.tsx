import { Text } from '~/components/ui/text.tsx'

const UI = () => {
	return (
		<>
			<Text heading="h1" size="4xl">
				andrecasal/ui 😄 🎉
			</Text>
			<Text heading="h2" size="2xl" className="mt-14">
				Why
			</Text>
			<Text size="md" className="mt-2">
				Because I was unsatisfied with the current state of UI libraries:
			</Text>
			<ul className="ml-4 mt-4 list-disc">
				<li>
					<a href="https://reach.tech/" target="_blank" rel="noreferrer" className="underline">
						Reach UI
					</a>{' '}
					isn't fully developed (
					<a href="https://twitter.com/ryanflorence/status/1695584081675989489?s=20" target="_blank" rel="noreferrer" className="underline">
						Ryan decided to learn Guitar instead
					</a>{' '}
					🤭)
				</li>
				<li>
					<a href="https://www.radix-ui.com/primitives" target="_blank" rel="noreferrer" className="underline">
						Radix UI
					</a>{' '}
					is awesome, but too low level.
				</li>
				<li>
					<a href="https://www.radix-ui.com" target="_blank" rel="noreferrer" className="underline">
						Radix Themes
					</a>{' '}
					is a good attempt at abstracting away Radix UI's complexity, but is using plain old CSS (instead of utility classes) 🤢 and you need an extra CSS file for each component
					🤮
				</li>
				<li>
					<a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="underline">
						shadcn/ui
					</a>{' '}
					doesn't abstract enough, making it almost as low level as Radix UI and lacks many components.
				</li>
			</ul>
			<Text heading="h2" size="2xl" className="mt-14">
				Goal
			</Text>
			<Text size="md" className="mt-2">
				The andrecasal/ui library aims to:
			</Text>
			<ul className="ml-4 mt-4 list-disc">
				<li>Be fully accessible, but abstract away Radix UI's composability into simpler prop-controlled components.</li>
				<li>Be complete enough that you can build most UIs without having to create any new components.</li>
				<li>Give you complete design control through CSS variables.</li>
				<li>Give you complete code control. This isn't published on NPM. Copy the code, it's yours 🤗</li>
				<li>
					Give you a clear separation of concerns between design and functionality. Focused on design? Open the CSS file (or the ThemePanel component when it's built). Focused on
					functionality? Open your component's code (and leave the custom classes alone 😄).
				</li>
			</ul>
			<Text size="md" className="mt-14">
				One last note about this not being an NPM package. The goal is to make the components so good that you don't need to change them. If we reach that stage, I'll make this a
				proper NPM package for the sake of development speed.
			</Text>
		</>
	)
}
export default UI
