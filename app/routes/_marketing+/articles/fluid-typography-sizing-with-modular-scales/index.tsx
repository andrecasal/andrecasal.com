import { CodeBlock } from '~/components/ui/code-block.tsx'
import fluidTypographySizingWithModularScales from './fluid-typography.png'
import { type CSSProperties } from 'react'
import { type Post } from '../_index.tsx'
import { H1 } from '../../ui+/components/typography/h1.tsx'
import { H2 } from '../../ui+/components/typography/h2.tsx'
import { P } from '../../ui+/components/typography/p.tsx'
import { type LinksFunction } from '@remix-run/node'

export const post: Post = {
	title: 'Fluid Typography Sizing and Scales',
	description: 'Learn how you can size typography fluidly and why hand-picked scales are better than modular scales.',
	imageUrl: fluidTypographySizingWithModularScales,
	date: '2023-09-11',
	href: '/articles/fluid-typography-sizing-with-modular-scales',
	topics: ['Typography', 'CSS', 'Design Systems'],
}

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com${post.href}` }]
}

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

	@media screen and (min-width: 640px) {
		--text-size-xs: 12.5501618122977px;
		--text-size-sm: 14.5501618122977px;
		--text-size-md: 16.5501618122977px;
		--text-size-lg: 18.5501618122977px;
		--text-size-xl: 21.1003236245954px;
		--text-size-2xl: 25.6504854368933px;
		--text-size-3xl: 31.6504854368933px;
		--text-size-4xl: 42.6019417475728px;
		--text-size-5xl: 61.2038834951456px;
		--text-size-6xl: 78.705501618123px;
	}

	@media screen and (min-width: 768px) {
		--text-size-xs: 12.757281553398px;
		--text-size-sm: 14.757281553398px;
		--text-size-md: 16.757281553398px;
		--text-size-lg: 18.757281553398px;
		--text-size-xl: 21.5145631067961px;
		--text-size-2xl: 26.2718446601942px;
		--text-size-3xl: 32.2718446601942px;
		--text-size-4xl: 45.0873786407767px;
		--text-size-5xl: 66.1747572815534px;
		--text-size-6xl: 85.747572815534px;
	}

	@media screen and (min-width: 1024px) {
		--text-size-xs: 13.1715210355987px;
		--text-size-sm: 15.1715210355987px;
		--text-size-md: 17.1715210355987px;
		--text-size-lg: 19.1715210355987px;
		--text-size-xl: 22.3430420711974px;
		--text-size-2xl: 27.5145631067962px;
		--text-size-3xl: 33.5145631067962px;
		--text-size-4xl: 50.0582524271844px;
		--text-size-5xl: 76.116504854369px;
		--text-size-6xl: 99.8317152103561px;
	}

	@media screen and (min-width: 1280px) {
		--text-size-xs: 13.2701754385965px;
		--text-size-sm: 15.2701754385965px;
		--text-size-md: 17.2701754385965px;
		--text-size-lg: 19.2701754385965px;
		--text-size-xl: 22.5403508771929px;
		--text-size-2xl: 27.8105263157894px;
		--text-size-3xl: 33.8105263157894px;
		--text-size-4xl: 51.2421052631579px;
		--text-size-5xl: 78.4842105263158px;
		--text-size-6xl: 103.185964912281px;
	}

	@media screen and (min-width: 1536px) {
		--text-size-xs: 14px;
		--text-size-sm: 16px;
		--text-size-md: 18px;
		--text-size-lg: 20px;
		--text-size-xl: 24px;
		--text-size-2xl: 30px;
		--text-size-3xl: 36px;
		--text-size-4xl: 60px;
		--text-size-5xl: 96px;
		--text-size-6xl: 128px;
	}
}`

	const fluidTypeSizing = `:root {
	--container-min-width: 20; /* 320px */
	--container-max-width: 96; /* 1536px */

	--text-size-deltaX: calc(var(--container-max-width) - var(--container-min-width));
	/* 6xl */
	--text-size-6xl-min-font-size: 4.500; /* 👈 you can edit this value (in rem) */
	--text-size-6xl-max-font-size: 8.000; /* 👈 you can edit this value (in rem) */
	--text-size-6xl-deltaY: calc(var(--text-size-6xl-max-font-size) - var(--text-size-6xl-min-font-size));
	--text-size-6xl-gradient: calc(var(--text-size-6xl-deltaY) / var(--text-size-deltaX));
	--text-size-6xl-intercept: calc(var(--text-size-6xl-min-font-size) - (var(--text-size-6xl-gradient) * var(--container-min-width)));
	--text-size-6xl-font-size: calc(var(--text-size-6xl-gradient) * 100vw + var(--text-size-6xl-intercept) *  1rem);
	--text-size-6xl: clamp(calc(var(--text-size-6xl-min-font-size) * 1rem), var(--text-size-6xl-font-size), calc(var(--text-size-6xl-max-font-size) * 1rem));

	/* 5xl */
	--text-size-5xl-min-font-size: 3.000; /* 👈 you can edit this value (in rem) */
	--text-size-5xl-max-font-size: 6.000; /* 👈 you can edit this value (in rem) */
	--text-size-5xl-deltaY: calc(var(--text-size-5xl-max-font-size) - var(--text-size-5xl-min-font-size));
	--text-size-5xl-gradient: calc(var(--text-size-5xl-deltaY) / var(--text-size-deltaX));
	--text-size-5xl-intercept: calc(var(--text-size-5xl-min-font-size) - (var(--text-size-5xl-gradient) * var(--container-min-width)));
	--text-size-5xl-font-size: calc(var(--text-size-5xl-gradient) * 100vw + var(--text-size-5xl-intercept) * 1rem);
	--text-size-5xl: clamp(calc(var(--text-size-5xl-min-font-size) * 1rem), var(--text-size-5xl-font-size), calc(var(--text-size-5xl-max-font-size) * 1rem));
	
	/* 4xl */
	--text-size-4xl-min-font-size: 2.250; /* 👈 you can edit this value (in rem) */
	--text-size-4xl-max-font-size: 3.750; /* 👈 you can edit this value (in rem) */
	--text-size-4xl-deltaY: calc(var(--text-size-4xl-max-font-size) - var(--text-size-4xl-min-font-size));
	--text-size-4xl-gradient: calc(var(--text-size-4xl-deltaY) / var(--text-size-deltaX));
	--text-size-4xl-intercept: calc(var(--text-size-4xl-min-font-size) - (var(--text-size-4xl-gradient) * var(--container-min-width)));
	--text-size-4xl-font-size: calc(var(--text-size-4xl-gradient) * 100vw + var(--text-size-4xl-intercept) * 1rem);
	--text-size-4xl: clamp(calc(var(--text-size-4xl-min-font-size) * 1rem), var(--text-size-4xl-font-size), calc(var(--text-size-4xl-max-font-size) * 1rem));

	/* 3xl */
	--text-size-3xl-min-font-size: 1.875; /* 👈 you can edit this value (in rem) */
	--text-size-3xl-max-font-size: 2.250; /* 👈 you can edit this value (in rem) */
	--text-size-3xl-deltaY: calc(var(--text-size-3xl-max-font-size) - var(--text-size-3xl-min-font-size));
	--text-size-3xl-gradient: calc(var(--text-size-3xl-deltaY) / var(--text-size-deltaX));
	--text-size-3xl-intercept: calc(var(--text-size-3xl-min-font-size) - (var(--text-size-3xl-gradient) * var(--container-min-width)));
	--text-size-3xl-font-size: calc(var(--text-size-3xl-gradient) * 100vw + var(--text-size-3xl-intercept) * 1rem);
	--text-size-3xl: clamp(calc(var(--text-size-3xl-min-font-size) * 1rem), var(--text-size-3xl-font-size), calc(var(--text-size-3xl-max-font-size) * 1rem));

	/* 2xl */
	--text-size-2xl-min-font-size: 1.500; /* 👈 you can edit this value (in rem) */
	--text-size-2xl-max-font-size: 1.875; /* 👈 you can edit this value (in rem) */
	--text-size-2xl-deltaY: calc(var(--text-size-2xl-max-font-size) - var(--text-size-2xl-min-font-size));
	--text-size-2xl-gradient: calc(var(--text-size-2xl-deltaY) / var(--text-size-deltaX));
	--text-size-2xl-intercept: calc(var(--text-size-2xl-min-font-size) - (var(--text-size-2xl-gradient) * var(--container-min-width)));
	--text-size-2xl-font-size: calc(var(--text-size-2xl-gradient) * 100vw + var(--text-size-2xl-intercept) * 1rem);
	--text-size-2xl: clamp(calc(var(--text-size-2xl-min-font-size) * 1rem), var(--text-size-2xl-font-size), calc(var(--text-size-2xl-max-font-size) * 1rem));

	/* xl */
	--text-size-xl-min-font-size: 1.250; /* 👈 you can edit this value (in rem) */
	--text-size-xl-max-font-size: 1.500; /* 👈 you can edit this value (in rem) */
	--text-size-xl-deltaY: calc(var(--text-size-xl-max-font-size) - var(--text-size-xl-min-font-size));
	--text-size-xl-gradient: calc(var(--text-size-xl-deltaY) / var(--text-size-deltaX));
	--text-size-xl-intercept: calc(var(--text-size-xl-min-font-size) - (var(--text-size-xl-gradient) * var(--container-min-width)));
	--text-size-xl-font-size: calc(var(--text-size-xl-gradient) * 100vw + var(--text-size-xl-intercept) * 1rem);
	--text-size-xl: clamp(calc(var(--text-size-xl-min-font-size) * 1rem), var(--text-size-xl-font-size), calc(var(--text-size-xl-max-font-size) * 1rem));

	/* lg */
	--text-size-lg-min-font-size: 1.125; /* 👈 you can edit this value (in rem) */
	--text-size-lg-max-font-size: 1.250; /* 👈 you can edit this value (in rem) */
	--text-size-lg-deltaY: calc(var(--text-size-lg-max-font-size) - var(--text-size-lg-min-font-size));
	--text-size-lg-gradient: calc(var(--text-size-lg-deltaY) / var(--text-size-deltaX));
	--text-size-lg-intercept: calc(var(--text-size-lg-min-font-size) - (var(--text-size-lg-gradient) * var(--container-min-width)));
	--text-size-lg-font-size: calc(var(--text-size-lg-gradient) * 100vw + var(--text-size-lg-intercept) * 1rem);
	--text-size-lg: clamp(calc(var(--text-size-lg-min-font-size) * 1rem), var(--text-size-lg-font-size), calc(var(--text-size-lg-max-font-size) * 1rem));

	/* md */
	--text-size-md-min-font-size: 1.000; /* 👈 you can edit this value (in rem) */
	--text-size-md-max-font-size: 1.125; /* 👈 you can edit this value (in rem) */
	--text-size-md-deltaY: calc(var(--text-size-md-max-font-size) - var(--text-size-md-min-font-size));
	--text-size-md-gradient: calc(var(--text-size-md-deltaY) / var(--text-size-deltaX));
	--text-size-md-intercept: calc(var(--text-size-md-min-font-size) - (var(--text-size-md-gradient) * var(--container-min-width)));
	--text-size-md-font-size: calc(var(--text-size-md-gradient) * 100vw + var(--text-size-md-intercept) * 1rem);
	--text-size-md: clamp(calc(var(--text-size-md-min-font-size) * 1rem), var(--text-size-md-font-size), calc(var(--text-size-md-max-font-size) * 1rem));

	/* sm */
	--text-size-sm-min-font-size: 0.875; /* 👈 you can edit this value (in rem) */
	--text-size-sm-max-font-size: 1.000; /* 👈 you can edit this value (in rem) */
	--text-size-sm-deltaY: calc(var(--text-size-sm-max-font-size) - var(--text-size-sm-min-font-size));
	--text-size-sm-gradient: calc(var(--text-size-sm-deltaY) / var(--text-size-deltaX));
	--text-size-sm-intercept: calc(var(--text-size-sm-min-font-size) - (var(--text-size-sm-gradient) * var(--container-min-width)));
	--text-size-sm-font-size: calc(var(--text-size-sm-gradient) * 100vw + var(--text-size-sm-intercept) * 1rem);
	--text-size-sm: clamp(calc(var(--text-size-sm-min-font-size) * 1rem), var(--text-size-sm-font-size), calc(var(--text-size-sm-max-font-size) * 1rem));

	/* xs */
	--text-size-xs-min-font-size: 0.750; /* 👈 you can edit this value (in rem) */
	--text-size-xs-max-font-size: 0.875; /* 👈 you can edit this value (in rem) */
	--text-size-xs-deltaY: calc(var(--text-size-xs-max-font-size) - var(--text-size-xs-min-font-size));
	--text-size-xs-gradient: calc(var(--text-size-xs-deltaY) / var(--text-size-deltaX));
	--text-size-xs-intercept: calc(var(--text-size-xs-min-font-size) - (var(--text-size-xs-gradient) * var(--container-min-width)));
	--text-size-xs-font-size: calc(var(--text-size-xs-gradient) * 100vw + var(--text-size-xs-intercept) * 1rem);
	--text-size-xs: clamp(calc(var(--text-size-xs-min-font-size) * 1rem), var(--text-size-xs-font-size), calc(var(--text-size-xs-max-font-size) * 1rem));
}`

	return (
		<>
			<H1 size="4xl" className="mt-10">
				{post.title}
			</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={fluidTypographySizingWithModularScales} alt="Fluid typography sizing with modular scales" className="rounded-2xl object-cover" />
				<H2 size="4xl" className="mt-10">
					Introduction
				</H2>
				<P size="xl" className="mt-8">
					Typography is a fundamental aspect of web design, and choosing the right sizes for your fonts is important for creating visually appealing and readable content. However,
					traditionally, web designers rely on hand-picked font sizes and a set of breakpoints to control how those sizes vary across screen widths.
				</P>
				<P size="xl" className="mt-8">
					Developers today are often handed a collection of mockups for mobile (320px), large mobile (640px), tablet (768px), small desktop (1024px), medium desktop (1280px), and
					large desktop (1536px). The effort expended by designers and developers in generating so many discrete artifacts is an inefficient use of time and resources. It also
					perpetuates the archaic practice of creating device-specific websites.
				</P>
				<P size="xl" className="mt-8">
					Often, developers are left to guess at the logic of sizing, if any, used in the design process. This usually leads to a high number of hacky (and often similar) values in
					the codebase, needlessly increasing the development effort and the complexity of the project.
				</P>
				<P size="xl" className="mt-8">
					In this article, we'll delve into two key notions: modular vs hand-picked scales and breakpoint-based vs fluid type sizing.
				</P>

				<H2 size="4xl" className="mt-16">
					Modular scale
				</H2>
				<P size="xl" className="mt-4">
					One popular method for establishing a typography scale is to use a modular scale, based on a specific ratio. Ratios like 4:5, 2:3, or the "golden ratio" of 1:1.618 are
					commonly used. Typically, you start with a base font size, often 16px (a common default for browsers), and then apply your chosen ratio to calculate the subsequent sizes
					in your scale.
				</P>
				<P size="xl" className="mt-4">
					While the mathematical elegance of this approach is appealing, it has a deal-breaking limitation: limited size options. You could try different ratios and equations, but
					at that point you’re just trying to pick a scale that happens to match the sizes you already know you want.
				</P>
				<CodeBlock code={modularScale} filename="modular-scale" extension="css" className="mt-8" />
				<P size="xl" className="mt-4">
					Here's the modular scale in action.
				</P>
			</div>
			<div
				className="mt-4 leading-none"
				style={
					{
						'--base-font-size': '16px',
						'--ratio': 1.25,
						'--text-size-9xl':
							'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-8xl':
							'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-7xl':
							'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-6xl': 'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-5xl': 'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-4xl': 'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-3xl': 'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-2xl': 'calc(var(--base-font-size) * var(--ratio) * var(--ratio) * var(--ratio))',
						'--text-size-xl': 'calc(var(--base-font-size) * var(--ratio) * var(--ratio))',
						'--text-size-lg': 'calc(var(--base-font-size) * var(--ratio))',
						'--text-size-md': 'calc(var(--base-font-size))',
						'--text-size-sm': 'calc(var(--base-font-size) / var(--ratio))',
						'--text-size-xs': 'calc(var(--base-font-size) / var(--ratio) / var(--ratio))',
					} as CSSProperties
				}
			>
				<p className="text-[length:var(--text-size-9xl)]">Text at 9xl</p>
				<p className="text-[length:var(--text-size-8xl)]">Text at 8xl</p>
				<p className="text-[length:var(--text-size-7xl)]">Text at 7xl</p>
				<p className="text-[length:var(--text-size-6xl)]">Text at 6xl</p>
				<p className="text-[length:var(--text-size-5xl)]">Text at 5xl</p>
				<p className="text-[length:var(--text-size-4xl)]">Text at 4xl</p>
				<p className="text-[length:var(--text-size-3xl)]">Text at 3xl</p>
				<p className="text-[length:var(--text-size-2xl)]">Text at 2xl</p>
				<p className="text-[length:var(--text-size-xl)]">Text at xl</p>
				<p className="text-[length:var(--text-size-lg)]">Text at lg</p>
				<p className="text-[length:var(--text-size-md)]">Text at md</p>
				<p className="text-[length:var(--text-size-sm)]">Text at sm</p>
				<p className="text-[length:var(--text-size-xs)]">Text at xs</p>
			</div>

			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<H2 size="4xl" className="mt-16">
					Hand-picked scale
				</H2>

				<P size="xl" className="mt-4">
					When it comes to interface design, it's more pragmatic to hand-pick the values. This approach grants you complete control over the number and variety of sizes.
				</P>
				<P size="xl" className="mt-4">
					A good example of a scale that works well with most projects and aligns nicely with its own spacing is{' '}
					<a href="https://tailwindcss.com/docs/font-size" target="_blank" rel="noreferrer">
						TailwindCSS's typographic scale
					</a>
					.
				</P>
				<CodeBlock code={tailwindCSSScale} filename="tailwind" extension="css" className="mt-8" />
				<P size="xl" className="mt-4">
					Here's TailwindCSS's hand-picked typographic scale in action.
				</P>
				<div className="mt-4">
					<p className="text-9xl">Text at 9xl</p>
					<p className="text-8xl">Text at 8xl</p>
					<p className="text-7xl">Text at 7xl</p>
					<p className="text-6xl">Text at 6xl</p>
					<p className="text-5xl">Text at 5xl</p>
					<p className="text-4xl">Text at 4xl</p>
					<p className="text-3xl">Text at 3xl</p>
					<p className="text-2xl">Text at 2xl</p>
					<p className="text-xl">Text at xl</p>
					<p className="text-lg">Text at lg</p>
					<p className="text-md">Text at md</p>
					<p className="text-sm">Text at sm</p>
					<p className="text-xs">Text at xs</p>
				</div>
				<P size="xl" className="mt-4">
					Most of the text on a website is body text. Notice how you have more choices for appropriate body text sizes between xs and xl with this hand-picked scale.
				</P>

				<H2 size="4xl" className="mt-16">
					Breakpoint-based type sizing
				</H2>
				<P size="xl" className="mt-8">
					The first thing you need to understand about breakpoint-based type sizing is that if we're going to change the font size at different screen sizes, we don't need as many
					steps. A font size larger than 60px will never be used on a mobile screen - that would be too overwhelming. Instead, we'll cap the steps off at the 6xl step and have it
					scale up as the screen width increases.
				</P>
				<P size="xl" className="mt-8">
					Another thing to note is that the widest variations occur at the higher steps. It's nice to be able to adapt the lower steps if we want to, but as a general rule, small
					text looks good at any screen width. It's at the higher steps that the text starts to look too underwhelming on large screens.
				</P>
				<P size="xl" className="mt-8">
					This change in variation is explained by two opposing forces: the need to increase the font size to prevent underwhelming and awkward sizes on larger screens and the fact
					that users don't resize their browser windows to see the same content bigger, but to see more content. So, as a general rule, headings vary in size quite a bit so that
					the design remains balanced, while body text doesn't vary as much so users can see more of it.
				</P>
				<CodeBlock code={breakpointBasedTypeSizing} filename="breakpoint-based-type-sizing" extension="css" className="mt-8" />
				<P size="xl" className="mt-4">
					Here's the breakpoint-based type sizing in action. Notice how the text size increases suddenly as the screen width increases, creating a jarring experience, more
					noticeable on the larger steps.
				</P>
				<div className="mt-4">
					<p className="text-[60px] sm:text-[78.705501618123px] md:text-[85.747572815534px] lg:text-[99.8317152103561px] xl:text-[103.185964912281px] 2xl:text-[128px]">
						Text at 6xl
					</p>
					<p className="text-[48px] sm:text-[61.2038834951456px] md:text-[66.1747572815534px] lg:text-[76.116504854369px] xl:text-[78.4842105263158px] 2xl:text-[96px]">
						Text at 5xl
					</p>
					<p className="text-[36px] sm:text-[42.6019417475728px] md:text-[45.0873786407767px] lg:text-[50.0582524271844px] xl:text-[51.2421052631579px] 2xl:text-[60px]">
						Text at 4xl
					</p>
					<p className="text-[30px] sm:text-[31.6504854368933px] md:text-[32.2718446601942px] lg:text-[33.5145631067962px] xl:text-[33.8105263157894px] 2xl:text-[36px]">
						Text at 3xl
					</p>
					<p className="text-[24px] sm:text-[25.6504854368933px] md:text-[26.2718446601942px] lg:text-[27.5145631067962px] xl:text-[27.8105263157894px] 2xl:text-[30px]">
						Text at 2xl
					</p>
					<p className="text-[20px] sm:text-[21.1003236245954px] md:text-[21.5145631067961px] lg:text-[22.3430420711974px] xl:text-[22.5403508771929px] 2xl:text-[24px]">
						Text at xl
					</p>
					<p className="text-[18px] sm:text-[18.5501618122977px] md:text-[18.757281553398px] lg:text-[19.1715210355987px] xl:text-[19.2701754385965px] 2xl:text-[20px]">
						Text at lg
					</p>
					<p className="text-[16px] sm:text-[16.5501618122977px] md:text-[16.757281553398px] lg:text-[17.1715210355987px] xl:text-[17.2701754385965px] 2xl:text-[18px]">
						Text at md
					</p>
					<p className="text-[14px] sm:text-[14.5501618122977px] md:text-[14.757281553398px] lg:text-[15.1715210355987px] xl:text-[15.2701754385965px] 2xl:text-[16px]">
						Text at sm
					</p>
					<p className="text-[12px] sm:text-[12.5501618122977px] md:text-[12.757281553398px] lg:text-[13.1715210355987px] xl:text-[13.2701754385965px] 2xl:text-[14px]">
						Text at xs
					</p>
				</div>
				<P size="xl" className="mt-4">
					There are two major problems with this technique: the effort required to design all those mockups is tremendous and designers usually prefer to play with round pixel
					units instead of fractional values, for good reasons I won't get into here.
				</P>
				<P size="xl" className="mt-4">
					Look at that xs step. It's 12px on small screens and 14px on large screens, a 2px difference, but there are 4 breakpoints in between. What round values should the
					designer choose for those middle breakpoints? Well, either 12px, 13px, or 14px. But it's guaranteed there will be repetition. This is a weird situation where the right
					value is really a fractional one, but the designer is forced to choose a round value, and the developer is left guessing at the logic - if any - behind those values.
				</P>
				<P size="xl" className="mt-4">
					I don't want to get too technical here, but fractional pixel values are not a problem for web developers - most screens today either have more than one physical pixel per
					virtual pixel or employ anti-alias on the surrounding pixels to make the text look crisp at any subpixel value. This is automatically handled by the browser and OS.
				</P>

				<H2 size="4xl" className="mt-16">
					Fluid type sizing
				</H2>
				<P size="xl" className="mt-8">
					The{' '}
					<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp" target="_blank" rel="noreferrer" className="underline">
						clamp() function
					</a>
					, introduced in CSS, offers a more fluid and responsive approach to typography sizing. It allows designers to define a minimum and maximum font size range, ensuring that
					text scales smoothly between these values based on the viewport size.
				</P>
				<P size="xl" className="mt-4">
					For example, you can use the <code>clamp(16px, 5vw, 24px)</code> to set a font size that is 5% of the viewport width, 16 pixels on small screens, and a maximum of 24
					pixels on larger screens. This results in a seamless transition of font sizes as the screen size changes, providing a better reading experience for users.
				</P>
				<P size="xl" className="mt-4">
					However, this vw unit isn't ideal: the font can start to grow too soon, too late, too slow, or too fast. What you want is a linear growth rate from the minimum viewport
					size, 320px say, to the maximum width the website will have, 1536px say. Imagine the font size on the y axis and the viewport width on the x axis. Here's how we can use
					CSS variables and the calc() function to calculate the exact growth rate we want between those two points, using the general equation of a straight line: y = mx + c.
				</P>
				<CodeBlock code={fluidTypeSizing} filename="stylesheet" extension="css" className="mt-8" />
				<P size="xl" className="mt-4">
					Here's the fluid type sizing in action. Notice how the text size increases smoothly as the screen width increases, more noticeable on the larger steps.
				</P>
				<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
					<p className="text-size-6xl">Text at 6xl</p>
					<p className="text-size-5xl">Text at 5xl</p>
					<p className="text-size-4xl">Text at 4xl</p>
					<p className="text-size-3xl">Text at 3xl</p>
					<p className="text-size-2xl">Text at 2xl</p>
					<p className="text-size-xl">Text at xl</p>
					<p className="text-size-lg">Text at lg</p>
					<p className="text-size-md">Text at md</p>
					<p className="text-size-sm">Text at sm</p>
					<p className="text-size-xs">Text at xs</p>
				</div>
				<P size="xl" className="mt-4">
					The design process to implement fluid typography is rather simple for both designers and developers. Designers only have to draw two mockups: one for small screens and
					one for large screens. While the developer only needs to tell the browser to interpolate between the two scales, based on the current viewport width.
				</P>
				<H2 size="4xl" className="mt-16">
					A note on layout shift
				</H2>
				<P size="xl" className="mt-4">
					You might notice that, as you resize the browser window, the text moves up and down quite a bit here. There's two reasons for this. One is layout shift: users don't
					resize their browser windows to see the same content bigger, but to see more content, so as you increase the window's width, things that used to take up a single column
					now take multiple columns instead, taking more space horizontally and pulling the content upwards.
				</P>
				<P size="xl" className="mt-4">
					The other reason is that the text's line height also changes, so even if you only had text, like in this blog post, without any layout shifts, the text below would still
					move up and down as you resize the window.
				</P>
				<P size="xl" className="mt-4">
					This effect compounds vertically, so the more you move away from the top, the more noticeable this effect is.
				</P>
				<P size="xl" className="mt-4">
					If you wish to see this effect without the text moving up and down too much, visit any other page on this website that contains large text and see how it resizes smoothly
					as you resize the browser window.
				</P>
				<H2 size="4xl" className="mt-16">
					Note on accessibility
				</H2>
				<P size="xl" className="mt-4">
					Whatever techniques you use for typographic scales and viewport width-based sizing, you should always make sure to use rem units for font sizes, so that users can change
					the base font size in their browser settings.
				</P>
				<H2 size="4xl" className="mt-16">
					The map of the terrain
				</H2>
				<P size="xl" className="mt-4">
					Before we go, let's zoom out and look at the big picture. Typography on the web has the following concerns: font family, font size, paragraph length, line height, letter
					spacing, and vertical alignment. Until I write articles on the other topics, here's a quick list of what you need to know (without explanations).
				</P>
				<ul className="mt-8 list-disc pl-5">
					<li>
						<P size="xl">Font family: ignore typefaces with less than 5 weights.</P>
					</li>
					<li>
						<P size="xl">Font size: treated in this article.</P>
					</li>
					<li>
						<P size="xl">Paragraph length: Make sure body text stays between 45 and 75 characters.</P>
					</li>
					<li>
						<P size="xl">Line height: scale it proportionally to paragraph length at 1.5em for 45 characters and 2em for 75 characters. Use ems, not rems.</P>
					</li>
					<li>
						<P size="xl">Letter spacing: big titles usually need tighter letter spacing, while body text doesn't.</P>
					</li>
					<li>
						<P size="xl">Vertical alignment: baseline, not center.</P>
					</li>
				</ul>
				<P size="xl" className="mt-4">
					Once you've learned about these topics, you've covered everything you need to know about typography to be an efficient web developer.
				</P>

				<H2 size="4xl" className="mt-16">
					Conclusion
				</H2>
				<P size="xl" className="mt-4">
					In conclusion, between modular or hand-picked scales, hand-picked scales offer the right amount of control, while between breakpoint-based and fluid type sizing, fluid
					type sizing offers a significantly more efficient design and development process, a smoother user experience, and solves the problem of fractional pixel values.
				</P>
			</div>
		</>
	)
}
export default FluidTypographySizingWithModularScales
