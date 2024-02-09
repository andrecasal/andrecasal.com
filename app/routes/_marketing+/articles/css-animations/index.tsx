import cssAnimations from './css-animations.png'
import chromeCubicBezierCurveEditor from './chrome-cubic-bezier-curve-editor.png'
import { type Post } from '../_index.tsx'
import { H1 } from '../../ui+/components/typography/h1.tsx'
import { H2 } from '../../ui+/components/typography/h2.tsx'
import { P } from '../../ui+/components/typography/p.tsx'
import { Code } from '../../ui+/components/typography/code.tsx'
import { H3 } from '../../ui+/components/typography/h3.tsx'
import { H4 } from '../../ui+/components/typography/h4.tsx'
import type { LinksFunction } from '@remix-run/node'

import styles from './animation.css'
import { CodeBlock } from '~/components/ui/code-block.tsx'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const post: Post = {
	title: 'CSS Animations',
	description: 'Learn about how to make cool Apple-like animations in CSS',
	imageUrl: cssAnimations,
	date: '2024-02-07',
	href: '/articles/css-animations',
	topics: ['CSS', 'Animations'],
}

const FluidSpaceSizing = () => {
	return (
		<>
			<H1 className="mt-10">{post.title}</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={cssAnimations} alt="Fluid typography sizing with modular scales" className="rounded-2xl object-cover" />
				<H2 size="4xl" className="mt-10">
					Introduction
				</H2>
				<P size="xl" className="mt-8">
					There are two ways to animate things in CSS: with the <Code>transition</Code> and the <Code>animation</Code> properties. <Code>animation</Code> is essentially a sequence
					of <Code>transition</Code>'s. <Code>animation</Code> can do everything <Code>transition</Code> can do and much more.
				</P>
				<P size="xl" className="mt-8">
					Here are the limitations of <Code>transition</Code>:
				</P>
				<ul className="mt-8 list-disc pl-5 text-size-xl">
					<li>Only goes from one state to another, without intermediate states</li>
					<li>Cannot go back to its initial state</li>
					<li>Cannot loop</li>
					<li>
						Cannot start automatically, it needs to be triggered by an event (like <Code>:hover</Code>)
					</li>
				</ul>
				<P size="xl" className="mt-8">
					My advice is to learn animations and completely forget about transitions. This being said, we still need to know how transitions work so we understand them when we see
					them, and are able to convert them to animations.
				</P>

				<H2 size="4xl" className="mt-16">
					Transitions
				</H2>
				<P size="xl" className="mt-8">
					Transitions have the following properties:
				</P>
				<ul className="mt-8 list-disc pl-5 text-size-xl">
					<li>
						<Code>transition-property</Code> - the property to transition
					</li>
					<li>
						<Code>transition-duration</Code> - the duration of the transition
					</li>
					<li>
						<Code>transition-timing-function</Code> - the timing function to use
					</li>
					<li>
						<Code>transition-delay</Code> - the delay before the transition starts
					</li>
				</ul>
				<P size="xl" className="mt-8">
					Or its shorthand property:
					<br />
					<Code>{'transition: <property> <duration> <timing-function> <delay>;'}</Code>
				</P>
				<P size="xl" className="mt-8">
					<Code>transition-duration</Code> and <Code>transition-delay</Code> are pretty self-explanatory, but <Code>transition-property</Code> and{' '}
					<Code>transition-timing-function</Code> deserve a few comments.
				</P>

				<H3 className="mt-16">transition-property</H3>
				<P size="xl" className="mt-8">
					So what properties are animatable?{' '}
					<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target="_blank" rel="noreferrer" className="underline">
						MDN says
					</a>{' '}
					<q cite="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">all CSS properties are animatable unless otherwise specified</q>, which logically is
					the same as saying nothing, but in practice it means almost all of them. If you get into trouble visit this{' '}
					<a href="https://www.w3schools.com/cssref/css_animatable.php" target="_blank" rel="noreferrer" className="underline">
						w3schools
					</a>{' '}
					page to confirm if the property you're trying to animate is animatable.
				</P>

				<H3 className="mt-16">transition-timing-function</H3>
				<P size="xl" className="mt-8">
					All timing functions are either cubic bezier curves or step functions. The cubic bezier curves are the most common and are defined by four numbers between 0 and 1. When
					defining a cubic bezier curve in CSS, the first and last points are already set at the origin and the top right corner, so you only need to define the two middle points.
					The first number is the x coordinate of the first middle point, the second number is the y coordinate of the first middle point, the third number is the x coordinate of
					the second middle point, and the fourth number is the y coordinate of the second middle point.
				</P>
				<P size="xl" className="mt-8">
					Watch{' '}
					<a href="https://www.youtube.com/watch?v=aVwxzDHniEw&t=116s" target="_blank" rel="noreferrer" className="underline">
						this awesome video on The Beauty of Bezier Curves
					</a>{' '}
					to see how they work.
				</P>
				<P size="xl" className="mt-8">
					If you want to play with cubic bezier curves, just open up the dev tools on Chrome, select any DOM element, add <Code>transition: linear;</Code> to it, and press the
					squiggly line with the purple background. You'll see a cubic bezier curve editor. Check out the screenshot below.
				</P>
				<img src={chromeCubicBezierCurveEditor} alt="Cubic Bezier Curve Editor in Chrome" className="mt-8 rounded-2xl border object-cover shadow-xl" />
				<P size="xl" className="mt-8">
					As for the step functions, unless you want a stop motion effect, they aren't used very often because they make the animation janky. Check the MDN docs on{' '}
					<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function" target="_blank" rel="noreferrer" className="underline">
						<Code>transition-timing-function</Code>
					</a>{' '}
					to see how to use the steps function.
				</P>

				<H4 className="mt-16">Built-in values</H4>
				<P size="xl" className="mt-8">
					The <Code>transition-timing-function</Code> comes with the following built-in values. Hover to see a small animation of the timing function.
				</P>
				<ul className="mt-8 list-disc pl-5 text-size-xl">
					<li>
						<Code className="inline-block transition duration-1000 [transition-timing-function:ease] hover:translate-x-10">ease</Code>{' '}
						<span className="text-sm">
							= <Code>cubic-bezier(0.25, 0.1, 0.25, 1.0)</Code>
						</span>
					</li>
					<li>
						<Code className="inline-block transition duration-1000 [transition-timing-function:ease-in] hover:translate-x-10">ease-in</Code>{' '}
						<span className="text-sm">
							= <Code>cubic-bezier(0.42, 0, 1.0, 1.0)</Code>
						</span>
					</li>
					<li>
						<Code className="inline-block transition duration-1000 [transition-timing-function:ease-out] hover:translate-x-10">ease-out</Code>{' '}
						<span className="text-sm">
							= <Code>cubic-bezier(0, 0, 0.58, 1.0)</Code>
						</span>
					</li>
					<li>
						<Code className="inline-block transition duration-1000 [transition-timing-function:ease-in-out] hover:translate-x-10">ease-in-out</Code>{' '}
						<span className="text-sm">
							= <Code>cubic-bezier(0.42, 0, 0.58, 1.0)</Code>
						</span>
					</li>
					<li>
						<Code className="inline-block transition duration-1000 [transition-timing-function:linear] hover:translate-x-10">linear</Code>{' '}
						<span className="text-sm">
							= <Code>cubic-bezier(0.0, 0.0, 1.0, 1.0)</Code>
						</span>
					</li>
					<li>
						<Code className="inline-block transition duration-1000 [transition-timing-function:step-start] hover:translate-x-10">step-start</Code>{' '}
						<span className="text-sm">
							= <Code>steps(1, jump-start)</Code>
						</span>
					</li>
					<li>
						<Code className="inline-block transition duration-1000 [transition-timing-function:step-end] hover:translate-x-10">step-end</Code>{' '}
						<span className="text-sm">
							= <Code>steps(1, jump-end)</Code>
						</span>
					</li>
				</ul>

				<H2 size="4xl" className="mt-16">
					Animations
				</H2>
				<P size="xl" className="mt-8">
					Animations are more interesting, because they can start automatically, loop, and have intermediate states. They have the following properties:
				</P>
				<ul className="mt-8 list-disc pl-5 text-size-xl">
					<li>
						<Code>animation-duration</Code> - the duration of the transition
					</li>
					<li>
						<Code>animation-timing-function</Code> - the timing function to use
					</li>
					<li>
						<Code>animation-delay</Code> - the delay before the transition starts
					</li>
					<li>
						<Code>animation-iteration-count</Code> - the number of times the animation should play
					</li>
					<li>
						<Code>animation-direction</Code> - the direction of the transition
					</li>
					<li>
						<Code>animation-fill-mode</Code> - whether to apply the styles of the first/last keyframe when the animation starts/ends
					</li>
					<li>
						<Code>animation-play-state</Code> - whether the animation is running or paused
					</li>
					<li>
						<Code>animation-timeline</Code> - the timeline to use (experimental)
					</li>
					<li>
						<Code>animation-name</Code> - the name of the keyframes (I'll explain this in a bit)
					</li>
				</ul>
				<P size="xl" className="mt-8">
					Or its shorthand property:
					<br />
					<Code>{'animation: <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode> <play-state> <name>;'}</Code>
				</P>
				<P size="xl" className="mt-8">
					Duration, timing function, and delay we already covered in the transitions section. Let's talk about the other properties.
				</P>

				<H3 className="mt-16">animation-iteration-count</H3>
				<P size="xl" className="mt-8">
					Iteration count is merely the number of times the animation should play. It can be an integer, a decimal, or the keyword <Code>infinite</Code> to make it loop forever.
				</P>
				<P size="xl" className="mt-8">
					For example, <Code>animation-iteration-count: 2;</Code> will make the animation play twice, <Code>animation-iteration-count: 2.5;</Code> will make the animation play
					twice and a half, and <Code>animation-iteration-count: infinite;</Code> will make the animation loop forever.
				</P>

				<H3 className="mt-16">animation-direction</H3>
				<P size="xl" className="mt-8">
					<Code>animation-direction</Code> could be normal, reverse, alternate, or alternate-reverse. The default is normal, which means the animation plays forward. Reverse means
					the animation plays backwards. Alternate means the animation plays forward, then backwards, then forward, and so on. Alternate-reverse means the animation plays
					backwards, then forwards, then backwards, and so on.
				</P>

				<H3 className="mt-16">animation-fill-mode</H3>
				<P size="xl" className="mt-8">
					<Code>animation-fill-mode</Code> only matters if your animation eventually stops. If you set <Code>animation-iteration-count: infinite;</Code>, then this does not matter.{' '}
					<Code>animation-fill-mode</Code> could be <Code>none</Code>, <Code>forwards</Code>, <Code>backwards</Code>, or <Code>both</Code>.
				</P>
				<P size="xl" className="mt-8">
					The default is none, which means the animation doesn't apply any styles to the element when it's not playing.
				</P>
				<P size="xl" className="mt-8">
					Forwards means the styles of the last keyframe are applied to the element when the animation is not playing.
				</P>
				<P size="xl" className="mt-8">
					Backwards means the styles of the first keyframe are applied to the element while the animation is delayed. Is you don't set a delay, this is the same as none.
				</P>
				<P size="xl" className="mt-8">
					Both means both forwards and backwards are applied.
				</P>
				<P size="xl" className="mt-8">
					Think of the fill mode as the state of the element before and after the animation. If you want the element to be in the same state before and after the animation, use
					both. If you want the element to be in the state of the first keyframe before the animation and in the state of the last keyframe after the animation, use backwards. If
					you want the element to be in the state of the last keyframe after the animation, use forwards. If you don't want the element to be in any state before or after the
					animation, use none.
				</P>
				<P size="xl" className="mt-8">
					Below you can see the difference between the fill modes. Refresh the page to see the animations again.
				</P>
				<div className="mt-8">
					<div
						className="flex h-24 w-24 items-center justify-center bg-red-200"
						style={{
							animation: `4s linear 4s 1 normal none running myanimation`,
						}}
					>
						none
					</div>
					<div
						className="flex h-24 w-24 items-center justify-center bg-green-200"
						style={{
							animation: `4s linear 4s 1 normal forwards running myanimation`,
						}}
					>
						forwards
					</div>
					<div
						className="flex h-24 w-24 items-center justify-center bg-blue-200"
						style={{
							animation: `4s linear 4s 1 normal backwards running myanimation`,
						}}
					>
						backwards
					</div>
					<div
						className="flex h-24 w-24 items-center justify-center bg-yellow-200"
						style={{
							animation: `4s linear 4s 1 normal both running myanimation`,
						}}
					>
						both
					</div>
				</div>
				<P size="xl" className="mt-8">
					Notice how <Code>forwards</Code> applies the last keyframe to the element when the animation finishes, <Code>backwards</Code> applies the first keyframe to the element
					during its delay, and <Code>both</Code>
					does both.
				</P>

				<H3 className="mt-16">animation-play-state</H3>
				<P size="xl" className="mt-8">
					<Code>animation-play-state</Code> could be <Code>running</Code> or <Code>paused</Code>. The default is running, which means the animation is playing. Setting it to{' '}
					<Code>paused</Code> will pause the animation at its current state and if you set <Code>running</Code> again, it will continue from where it left off.
				</P>

				<H3 className="mt-16">animation-timeline (experimental)</H3>
				<P size="xl" className="mt-8">
					<div className="rounded-xl border bg-info-background p-8 shadow-sm">
						<P className="text-info-title">This is an experimental technology.</P>
						<P>
							Check the{' '}
							<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline#browser_compatibility" target="_blank" rel="noreferrer" className="underline">
								Browser Compatibility Table
							</a>{' '}
							to see which browsers currently support this.
						</P>
					</div>
				</P>
				<P size="xl" className="mt-8">
					<Code>animation-timeline</Code> allows you to replace the default time-based timeline of the animation with either the amount of scroll of a given element (including the
					entire page) or the view progress of a given element, which is progressed through based on the change in visibility of an element (known as the subject) inside a
					scroller. The visibility of the subject inside the scroller is tracked — by default, the timeline is at 0% when the subject is first visible at one edge of the scroller,
					and 100% when it reaches the opposite edge. This allows for some pretty cool scroll- or view-driven effects.
				</P>
				<P size="xl" className="mt-8">
					The square below is animated according to its view progress timeline. Scroll the page to see the animation.
				</P>
				<div>
					<div className="h-24 w-24 bg-emerald-500 [animation-timeline:view()] [animation:myanimation_both_ease-in]" />
				</div>

				<H3 className="mt-16">animation-name</H3>
				<P size="xl" className="mt-8">
					This is simply the name of the <Code>@keyframe</Code> rule that defines the animation. If the name does not match a <Code>@keyframe</Code> at-rule, no properties are
					animated.
				</P>
				<P size="xl" className="mt-8">
					This <Code>@keyframe</Code> rule is where the power of animations come from. It allows you to define as many animation steps as you want, and for each step, you can
					animate whatever properties are animatable.
				</P>

				<H3 className="mt-16">@keyframes</H3>
				<P size="xl" className="mt-8">
					The <Code>@keyframe</Code> syntax is pretty straightforward. You define the name of the animation, then how many steps you want using percentages, and then the properties
					you want to animate at each step. There are also the built-in keywords <Code>from</Code> and <Code>to</Code>, which correspond to <Code>0%</Code> and <Code>100%</Code>,
					respectively.
				</P>
				<CodeBlock
					className="mt-8"
					code={`@keyframes myanimation {
	0% {
		background: red;
	}
	100% {
		transform: translateX(50px);
	}
}`}
					filename="animation"
					extension="css"
				/>

				<H2 size="4xl" className="mt-10">
					Insights
				</H2>
				<P size="xl" className="mt-8">
					So, before we dive into how to do this in React and TailwindCSS, let's draw some insights from this. If your animation iteration count is set to <Code>infinite</Code>,
					the fill mode does not matter. Also most animations use the default delay (0s), direction (normal), fill mode (none), and play state (running). So, for most animations,
					you only need to set the duration, timing function, iteration count as <Code>infinite</Code>, and name.
				</P>
				<P size="xl" className="mt-8">
					Instead of this
					<br />
					<Code>{'animation: <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode> <play-state> <name>;'}</Code>
				</P>
				<P size="xl" className="mt-8">
					Use this:
					<br />
					<Code>{'animation: <duration> <timing-function> infinite <name>;'}</Code>
				</P>
				<P size="xl" className="mt-8">
					Here's an example of an animation made with <Code>{'animation: 2s ease-in-out infinite myanimation;'}</Code>.
				</P>
				<div className="mt-8">
					<div className="h-24 w-24 bg-emerald-500 [animation:2s_ease-in-out_infinite_myanimation]" />
				</div>

				<H2 size="4xl" className="mt-10">
					React and TailwindCSS
				</H2>
				<P size="xl" className="mt-8">
					Tailwind only comes with 4 built-in animations: <Code>animate-spin</Code>, <Code>animate-ping</Code>, <Code>animate-pulse</Code>, and <Code>animate-bounce</Code>.
				</P>
				<P size="xl" className="mt-8">
					Here's how they look like.
				</P>
				<div className="gap-size-14 mt-8 flex justify-between">
					<div className="h-24 w-24 animate-spin bg-emerald-500" />
					<div className="h-24 w-24 animate-ping bg-emerald-500" />
					<div className="h-24 w-24 animate-pulse bg-emerald-500" />
					<div className="h-24 w-24 animate-bounce bg-emerald-500" />
				</div>
				<P size="xl" className="mt-8">
					So how do you create your own animations in React and TailwindCSS?
				</P>
				<P size="xl" className="mt-8">
					Because TailwindCSS doesn't support granular control over animations, we need to use arbitrary properties for this. This is pretty simple, just use square brackets to
					define the animation properties, remove all the spaces you can remove and replace the ones you can't with underscores (_).
				</P>
				<P size="xl" className="mt-8">
					For example, <Code>{'animation: 2s ease-in-out infinite myanimation;'}</Code> can be set in a TailwindCSS class like this:
				</P>
				<CodeBlock
					className="mt-8"
					code={`<div className="mt-8">
	<div className="h-24 w-24 bg-emerald-500 [animation:2s_ease-in-out_infinite_myanimation]" />
</div>`}
					filename="react-tailwind-example"
					extension="tsx"
				/>
				<P size="xl" className="mt-8">
					Which gives you this:
				</P>
				<div className="mt-8">
					<div className="h-24 w-24 bg-emerald-500 [animation:2s_ease-in-out_infinite_myanimation]" />
				</div>
				<P size="xl" className="mt-8">
					But where is that <Code>myanimation</Code> coming from? It's coming from a <Code>@keyframes</Code> rule that needs to be defined in a CSS file, and that depends on your
					framework. Here's how I'm doing this for this particular blog post, using Remix:
				</P>
				<CodeBlock
					className="mt-8"
					code={`import type { LinksFunction } from '@remix-run/node'

import styles from './animation.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]`}
					filename="blog-post"
					extension="tsx"
				/>
				<P size="xl" className="mt-8">
					And that <Code>animation.css</Code> file, has of course, the <Code>@keyframe</Code> at-rule I've shown you above.
				</P>

				<H2 size="4xl" className="mt-10">
					Conclusion
				</H2>
				<P size="xl" className="mt-8">
					So, if you're using React, TailwindCSS, and Remix, you can create your own animations by using arbitrary properties and defining the <Code>@keyframes</Code> in a CSS
					file. Here's everything you need:
				</P>
				<P size="xl" className="mt-8">
					1. Use a TailwindCSS arbitrary property to apply the animation:
				</P>
				<CodeBlock className="mt-8" code={`<div className="[animation:2s_ease-in-out_infinite_myanimation]">`} filename="arbitrary-property" extension="tsx" />
				<P size="xl" className="mt-8">
					2. Create a CSS file with the <Code>@keyframes</Code> rule:
				</P>
				<CodeBlock
					className="mt-8"
					code={`@keyframes myanimation {
	0% {
		background: red;
	}
	100% {
		transform: translateX(50px);
	}
}`}
					filename="animation"
					extension="css"
				/>
				<P size="xl" className="mt-8">
					3. Link the CSS file in your Remix route:
				</P>
				<CodeBlock
					className="mt-8"
					code={`import type { LinksFunction } from '@remix-run/node'

import styles from './animation.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]`}
					filename="blog-post"
					extension="tsx"
				/>
				<P size="xl" className="mt-8">
					And you're done 🎉
				</P>
			</div>
		</>
	)
}
export default FluidSpaceSizing
