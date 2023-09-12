import { CodeBlock } from '~/components/ui/code-block.tsx'
import { Heading } from '../../ui+/components/typography/heading.tsx'
import fluidTypographySizingWithModularScales from './fluid-typography.png'

export const title = 'Fluid Typography Sizing with Modular Scales'
export const description = 'Understand how you can size typography fluidly and with modular scales.'

const FluidTypographySizingWithModularScales = () => {
	const modularScale = `:root {
	--base-font-size: 16px;
	--ratio: 1.25; /* Adjust the ratio as needed */
	--text-size-xs: calc(var(--base-font-size) * pow(var(--ratio), -3));
	--text-size-sm: calc(var(--base-font-size) * pow(var(--ratio), -2));
	--text-size-md: var(--base-font-size);
	--text-size-lg: calc(var(--base-font-size) * var(--ratio));
	--text-size-xl: calc(var(--base-font-size) * pow(var(--ratio), 2));
	--text-size-2xl: calc(var(--base-font-size) * pow(var(--ratio), 3));
	--text-size-3xl: calc(var(--base-font-size) * pow(var(--ratio), 4));
	--text-size-4xl: calc(var(--base-font-size) * pow(var(--ratio), 5));

	/* Fix while the pow() function isn't well supported.
	 * See https://developer.mozilla.org/en-US/docs/Web/CSS/pow#browser_compatibility
	 */
	--text-size-xs: calc(var(--base-font-size) / var(--ratio) / var(--ratio));
	--text-size-sm: calc(var(--base-font-size) / var(--ratio));
	--text-size-md: calc(var(--base-font-size));
	--text-size-lg: calc(var(--base-font-size) * var(--ratio));
	--text-size-xl: calc(var(--base-font-size) * var(--ratio) * var(--ratio));
	--text-size-2xl: calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio));
	--text-size-3xl: calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio));
	--text-size-4xl: calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio)
}`

	const tailwindCSSScale = `.text-xs {
	font-size: 0.75rem /* 12px */;
	line-height: 1rem /* 16px */;
}
.text-sm {
	font-size: 0.875rem /* 14px */;
	line-height: 1.25rem /* 20px */;
}
.text-base {
	font-size: 1rem /* 16px */;
	line-height: 1.5rem /* 24px */;
}
.text-lg {
	font-size: 1.125rem /* 18px */;
	line-height: 1.75rem /* 28px */;
}
.text-xl {
	font-size: 1.25rem /* 20px */;
	line-height: 1.75rem /* 28px */;
}
.text-2xl {
	font-size: 1.5rem /* 24px */;
	line-height: 2rem /* 32px */;
}
.text-3xl {
	font-size: 1.875rem /* 30px */;
	line-height: 2.25rem /* 36px */;
}
.text-4xl {
	font-size: 2.25rem /* 36px */;
	line-height: 2.5rem /* 40px */;
}
.text-5xl {
	font-size: 3rem /* 48px */;
	line-height: 1;
}
.text-6xl {
	font-size: 3.75rem /* 60px */;
	line-height: 1;
}
.text-7xl {
	font-size: 4.5rem /* 72px */;
	line-height: 1;
}
.text-8xl {
	font-size: 6rem /* 96px */;
	line-height: 1;
}
.text-9xl {
	font-size: 8rem /* 128px */;
	line-height: 1;
}`

	const breakpointBasedTypeSizing = `:root {
	--text-size-xs: 12px;
	--text-size-sm: 14px;
	--text-size-md: 16px;
	--text-size-lg: 18px;
	--text-size-xl: 20px;
	--text-size-2xl: 24px;
	--text-size-3xl: 30px;
	--text-size-4xl: 36px;
	--text-size-5xl: 48px;
	--text-size-6xl: 60px;
	--text-size-7xl: 72px;
	--text-size-8xl: 96px;
	--text-size-9xl: 128px;

	/* Large mobile screens */
	@media screen and (min-width: 400px) {
		/* Override the sizes that need to be adapted */
	}

	/* Tablet screens */
	@media screen and (min-width: 768px) {
		/* Override the sizes that need to be adapted */
	}

	/* Small desktop screens */
	@media screen and (min-width: 1024px) {
		/* Override the sizes that need to be adapted */
	}

	/* Large desktop screens */
	@media screen and (min-width: 1440px) {
		/* Override the sizes that need to be adapted */
	}
}`

	const fluidTypeSizing = `/* @link https://utopia.fyi/type/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

:root {
	--text-size-xs: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.80rem);
	--text-size-sm: clamp(0.83rem, calc(0.78rem + 0.29vw), 1.00rem);
	--text-size-md: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);
	--text-size-lg: clamp(1.20rem, calc(1.07rem + 0.63vw), 1.56rem);
	--text-size-xl: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem);
	--text-size-2xl: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem);
	--text-size-3xl: clamp(2.07rem, calc(1.73rem + 1.70vw), 3.05rem);
	--text-size-4xl: clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem);
}`

	return (
		<>
			<Heading as="h1" size="3xl" className="mt-10">
				{title}
			</Heading>
			<div className="mt-8 max-w-2xl">
				<img src={fluidTypographySizingWithModularScales} alt="Fluid typography sizing with modular scales" className="rounded-2xl object-cover" />
				<Heading as="h2" size="2xl" className="mt-10">
					Introduction
				</Heading>
				<p className="mt-8">
					Typography is a fundamental aspect of web design, and choosing the right sizes for your fonts is important for creating visually appealing and readable content. However,
					traditionally, web designers rely on hand-picked font sizes and a set of breakpoints to control how those sizes vary across screen sizes.
				</p>
				<p className="mt-8">
					Developers today are often handed a collection of mockups for mobile (320px), large mobile (400px), tablet (768px), small desktop (1024px), and large desktop (1440px).
					The effort expended by designers and developers in generating so many discrete artifacts is an inefficient use of time and resources. It also perpetuates the archaic
					practice of creating device-specific websites.
				</p>
				<p className="mt-8">
					Often, developers are left to guess at the logic of sizing, if any, used in the design process. This usually leads to a high number of hacky (and often similar) values in
					the codebase, needlessly increasing the development effort and the complexity of the project.
				</p>
				<p className="mt-8">In this article, we'll delve into two key notions: modular vs hand-picked scales and breakpoint-based vs fluid type sizing.</p>

				<Heading as="h2" size="2xl" className="mt-16">
					Modular scale
				</Heading>
				<p className="mt-4">
					One popular method for establishing a typography scale is to use a modular scale, based on a specific ratio. Ratios like 4:5 (a "major third"), 2:3 (a "perfect fifth"),
					or the "golden ratio" of 1:1.618 are commonly used. Typically, you start with a base font size, often 16px (a common default for browsers), and then apply your chosen
					ratio to calculate the subsequent sizes in your scale.
				</p>
				<p className="mt-4">
					While the mathematical elegance of this approach is appealing, it has a deal-breaker limitation: limited size options. You could try different ratios and equations, but
					at that point you’re just trying to pick a scale that happens to match the sizes you already know you want.
				</p>
				<CodeBlock code={modularScale} filename="modular-scale" extension="css" className="mt-8" />

				<Heading as="h2" size="2xl" className="mt-16">
					Hand-picked scale
				</Heading>

				<p className="mt-4">
					When it comes to interface design, it's more pragmatic to hand-pick the values. This approach grants you complete control over the number and variety of sizes.
				</p>
				<p className="mt-4">
					A good example of a scale that works well with most projects and align nicely with its own spacing is{' '}
					<a href="https://tailwindcss.com/docs/font-size" target="_blank" rel="noreferrer">
						TailwindCSS's typographic scale
					</a>
					.
				</p>
				<CodeBlock code={tailwindCSSScale} filename="tailwind" extension="css" className="mt-8" />

				<Heading as="h2" size="2xl" className="mt-16">
					Breakpoint-based type sizing
				</Heading>
				<p className="mt-8">
					Traditionally, web designers rely on font sizes and a set of breakpoints to control how each of those sizes vary across screen sizes. Developers are often handed a
					collection of mockups for mobile (320px), large mobile (400px), tablet (768px), small desktop (1024px), and large desktop (1440px). Breakpoint-based type sizing is hacky
					and lacks a well-thought-out scaling strategy. The effort expended by designers and developers in generating so many discrete artifacts is an inefficient use of time and
					resources. The better we want it to work, the more stuff you need to design and develop.
				</p>
				<CodeBlock code={breakpointBasedTypeSizing} filename="breakpoint-based-type-sizing" extension="css" className="mt-8" />
				<p className="mt-4">This starts to become ridiculous 😅.</p>

				<Heading as="h2" size="2xl" className="mt-16">
					Fluid type sizing
				</Heading>
				<p className="mt-8">
					The{' '}
					<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp" target="_blank" rel="noreferrer" className="underline">
						clamp() function
					</a>
					, introduced in CSS, offers a more fluid and responsive approach to typography sizing. It allows designers to define a minimum and maximum font size range, ensuring that
					text scales smoothly between these values based on the viewport size. For example, you can use clamp(16px, 5vw, 24px) to set a font size that is 16 pixels on smaller
					screens, 5% of the viewport width on medium screens, and a maximum of 24 pixels on larger screens. This results in a seamless transition of font sizes as the screen size
					changes, providing a better reading experience for users.
				</p>
				<p className="mt-4">The design process to implement fluid typography is simple:</p>
				<ul className="ml-4 mt-4 list-disc">
					<li>Define a type scale for a small screen</li>
					<li>Define a type scale for a large screen</li>
					<li>Tell the browser to interpolate between the two scales, based on the current viewport width</li>
				</ul>
				<CodeBlock code={fluidTypeSizing} filename="stylesheet" extension="css" className="mt-8" />
				<p className="mt-4">
					Fluid type sizing has the browser, instead of the designer and developer, decide on the type size depending on the viewport width, making both designers and developers
					more efficient.
				</p>
			</div>
		</>
	)
}
export default FluidTypographySizingWithModularScales
