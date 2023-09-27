import { json } from '@remix-run/node'
import { Heading } from '../components/typography/heading.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { Link, useLoaderData } from '@remix-run/react'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/typography/heading.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const headingSource = `<Heading size="6xl">Heading 6xl</Heading>
<Heading size="5xl">Heading 5xl</Heading>
<Heading size="4xl">Heading 4xl</Heading>
<Heading size="3xl">Heading 3xl</Heading>
<Heading size="2xl">Heading 2xl</Heading>
<Heading size="xl">Heading xl</Heading>
<Heading size="lg">Heading lg</Heading>
<Heading size="md">Heading md</Heading>
<Heading size="sm">Heading sm</Heading>
<Heading size="xs">Heading xs</Heading>`
	const trackingSource = `/* Default tracking. Can be overridden by the 'tracking' prop on the <Heading /> and <Text /> components) */
--text-size-xs-tracking: 0em;
--text-size-sm-tracking: 0em;
--text-size-md-tracking: 0em;
--text-size-lg-tracking: 0em;
--text-size-xl-tracking: 0em;
--text-size-2xl-tracking: -0.025em;
--text-size-3xl-tracking: -0.025em;
--text-size-4xl-tracking: -0.025em;
--text-size-5xl-tracking: -0.05em;
--text-size-6xl-tracking: -0.05em;`
	const stylingSource = `--container-min-width: 20; /* 320px */
--container-max-width: 96; /* 1536px */

--text-size-deltaX: calc(var(--container-max-width) - var(--container-min-width));
/* 6xl */
--text-size-6xl-min-font-size: 4.5; /* 👈 you can edit this value (in rem) */
--text-size-6xl-max-font-size: 8; /* 👈 you can edit this value (in rem) */
--text-size-6xl-deltaY: calc(var(--text-size-6xl-max-font-size) - var(--text-size-6xl-min-font-size));
--text-size-6xl-gradient: calc(var(--text-size-6xl-deltaY) / var(--text-size-deltaX));
--text-size-6xl-intercept: calc(var(--text-size-6xl-min-font-size) - (var(--text-size-6xl-gradient) * var(--container-min-width)));
--text-size-6xl-font-size: calc(var(--text-size-6xl-gradient) * 100vw + var(--text-size-6xl-intercept) * 1rem);
--text-size-6xl: clamp(calc(var(--text-size-6xl-min-font-size) * 1rem), var(--text-size-6xl-font-size), calc(var(--text-size-6xl-max-font-size) * 1rem));

/* 5xl */
--text-size-5xl-min-font-size: 3; /* 👈 you can edit this value (in rem) */
--text-size-5xl-max-font-size: 6; /* 👈 you can edit this value (in rem) */
--text-size-5xl-deltaY: calc(var(--text-size-5xl-max-font-size) - var(--text-size-5xl-min-font-size));
--text-size-5xl-gradient: calc(var(--text-size-5xl-deltaY) / var(--text-size-deltaX));
--text-size-5xl-intercept: calc(var(--text-size-5xl-min-font-size) - (var(--text-size-5xl-gradient) * var(--container-min-width)));
--text-size-5xl-font-size: calc(var(--text-size-5xl-gradient) * 100vw + var(--text-size-5xl-intercept) * 1rem);
--text-size-5xl: clamp(calc(var(--text-size-5xl-min-font-size) * 1rem), var(--text-size-5xl-font-size), calc(var(--text-size-5xl-max-font-size) * 1rem));

/* 4xl */
--text-size-4xl-min-font-size: 2.25; /* 👈 you can edit this value (in rem) */
--text-size-4xl-max-font-size: 3.75; /* 👈 you can edit this value (in rem) */
--text-size-4xl-deltaY: calc(var(--text-size-4xl-max-font-size) - var(--text-size-4xl-min-font-size));
--text-size-4xl-gradient: calc(var(--text-size-4xl-deltaY) / var(--text-size-deltaX));
--text-size-4xl-intercept: calc(var(--text-size-4xl-min-font-size) - (var(--text-size-4xl-gradient) * var(--container-min-width)));
--text-size-4xl-font-size: calc(var(--text-size-4xl-gradient) * 100vw + var(--text-size-4xl-intercept) * 1rem);
--text-size-4xl: clamp(calc(var(--text-size-4xl-min-font-size) * 1rem), var(--text-size-4xl-font-size), calc(var(--text-size-4xl-max-font-size) * 1rem));

/* 3xl */
--text-size-3xl-min-font-size: 1.875; /* 👈 you can edit this value (in rem) */
--text-size-3xl-max-font-size: 2.25; /* 👈 you can edit this value (in rem) */
--text-size-3xl-deltaY: calc(var(--text-size-3xl-max-font-size) - var(--text-size-3xl-min-font-size));
--text-size-3xl-gradient: calc(var(--text-size-3xl-deltaY) / var(--text-size-deltaX));
--text-size-3xl-intercept: calc(var(--text-size-3xl-min-font-size) - (var(--text-size-3xl-gradient) * var(--container-min-width)));
--text-size-3xl-font-size: calc(var(--text-size-3xl-gradient) * 100vw + var(--text-size-3xl-intercept) * 1rem);
--text-size-3xl: clamp(calc(var(--text-size-3xl-min-font-size) * 1rem), var(--text-size-3xl-font-size), calc(var(--text-size-3xl-max-font-size) * 1rem));

/* 2xl */
--text-size-2xl-min-font-size: 1.5; /* 👈 you can edit this value (in rem) */
--text-size-2xl-max-font-size: 1.875; /* 👈 you can edit this value (in rem) */
--text-size-2xl-deltaY: calc(var(--text-size-2xl-max-font-size) - var(--text-size-2xl-min-font-size));
--text-size-2xl-gradient: calc(var(--text-size-2xl-deltaY) / var(--text-size-deltaX));
--text-size-2xl-intercept: calc(var(--text-size-2xl-min-font-size) - (var(--text-size-2xl-gradient) * var(--container-min-width)));
--text-size-2xl-font-size: calc(var(--text-size-2xl-gradient) * 100vw + var(--text-size-2xl-intercept) * 1rem);
--text-size-2xl: clamp(calc(var(--text-size-2xl-min-font-size) * 1rem), var(--text-size-2xl-font-size), calc(var(--text-size-2xl-max-font-size) * 1rem));

/* xl */
--text-size-xl-min-font-size: 1.25; /* 👈 you can edit this value (in rem) */
--text-size-xl-max-font-size: 1.5; /* 👈 you can edit this value (in rem) */
--text-size-xl-deltaY: calc(var(--text-size-xl-max-font-size) - var(--text-size-xl-min-font-size));
--text-size-xl-gradient: calc(var(--text-size-xl-deltaY) / var(--text-size-deltaX));
--text-size-xl-intercept: calc(var(--text-size-xl-min-font-size) - (var(--text-size-xl-gradient) * var(--container-min-width)));
--text-size-xl-font-size: calc(var(--text-size-xl-gradient) * 100vw + var(--text-size-xl-intercept) * 1rem);
--text-size-xl: clamp(calc(var(--text-size-xl-min-font-size) * 1rem), var(--text-size-xl-font-size), calc(var(--text-size-xl-max-font-size) * 1rem));

/* lg */
--text-size-lg-min-font-size: 1.125; /* 👈 you can edit this value (in rem) */
--text-size-lg-max-font-size: 1.25; /* 👈 you can edit this value (in rem) */
--text-size-lg-deltaY: calc(var(--text-size-lg-max-font-size) - var(--text-size-lg-min-font-size));
--text-size-lg-gradient: calc(var(--text-size-lg-deltaY) / var(--text-size-deltaX));
--text-size-lg-intercept: calc(var(--text-size-lg-min-font-size) - (var(--text-size-lg-gradient) * var(--container-min-width)));
--text-size-lg-font-size: calc(var(--text-size-lg-gradient) * 100vw + var(--text-size-lg-intercept) * 1rem);
--text-size-lg: clamp(calc(var(--text-size-lg-min-font-size) * 1rem), var(--text-size-lg-font-size), calc(var(--text-size-lg-max-font-size) * 1rem));

/* md */
--text-size-md-min-font-size: 1; /* 👈 you can edit this value (in rem) */
--text-size-md-max-font-size: 1.125; /* 👈 you can edit this value (in rem) */
--text-size-md-deltaY: calc(var(--text-size-md-max-font-size) - var(--text-size-md-min-font-size));
--text-size-md-gradient: calc(var(--text-size-md-deltaY) / var(--text-size-deltaX));
--text-size-md-intercept: calc(var(--text-size-md-min-font-size) - (var(--text-size-md-gradient) * var(--container-min-width)));
--text-size-md-font-size: calc(var(--text-size-md-gradient) * 100vw + var(--text-size-md-intercept) * 1rem);
--text-size-md: clamp(calc(var(--text-size-md-min-font-size) * 1rem), var(--text-size-md-font-size), calc(var(--text-size-md-max-font-size) * 1rem));

/* sm */
--text-size-sm-min-font-size: 0.875; /* 👈 you can edit this value (in rem) */
--text-size-sm-max-font-size: 1; /* 👈 you can edit this value (in rem) */
--text-size-sm-deltaY: calc(var(--text-size-sm-max-font-size) - var(--text-size-sm-min-font-size));
--text-size-sm-gradient: calc(var(--text-size-sm-deltaY) / var(--text-size-deltaX));
--text-size-sm-intercept: calc(var(--text-size-sm-min-font-size) - (var(--text-size-sm-gradient) * var(--container-min-width)));
--text-size-sm-font-size: calc(var(--text-size-sm-gradient) * 100vw + var(--text-size-sm-intercept) * 1rem);
--text-size-sm: clamp(calc(var(--text-size-sm-min-font-size) * 1rem), var(--text-size-sm-font-size), calc(var(--text-size-sm-max-font-size) * 1rem));

/* xs */
--text-size-xs-min-font-size: 0.75; /* 👈 you can edit this value (in rem) */
--text-size-xs-max-font-size: 0.875; /* 👈 you can edit this value (in rem) */
--text-size-xs-deltaY: calc(var(--text-size-xs-max-font-size) - var(--text-size-xs-min-font-size));
--text-size-xs-gradient: calc(var(--text-size-xs-deltaY) / var(--text-size-deltaX));
--text-size-xs-intercept: calc(var(--text-size-xs-min-font-size) - (var(--text-size-xs-gradient) * var(--container-min-width)));
--text-size-xs-font-size: calc(var(--text-size-xs-gradient) * 100vw + var(--text-size-xs-intercept) * 1rem);
--text-size-xs: clamp(calc(var(--text-size-xs-min-font-size) * 1rem), var(--text-size-xs-font-size), calc(var(--text-size-xs-max-font-size) * 1rem));

/* Line height (this depends on paragraph length) */
--text-size-xs-line-height: clamp(1.125rem, 6.2vw, 1.75rem); /* 12px <-> 14px => 18px <-> 28px */
--text-size-sm-line-height: clamp(1.25rem, 6.2vw, 2rem); /* 20px <-> 32px */
--text-size-md-line-height: clamp(1.5rem, 6vw, 2.25rem); /* 24px <-> 36px */
--text-size-lg-line-height: clamp(1.75rem, 5.8vw, 2.25rem); /* 28px <-> 36px */
--text-size-xl-line-height: clamp(2rem, 6.5vw, 2.5rem); /* 32px <-> 40px */
--text-size-2xl-line-height: 1.5;
--text-size-3xl-line-height: 1.5;
--text-size-4xl-line-height: 1.2;
--text-size-5xl-line-height: 1.2;
--text-size-6xl-line-height: 1.2;

/* Default tracking. Can be overridden by the 'tracking' prop on the <Heading /> and <Text /> components) */
--text-size-xs-tracking: 0em;
--text-size-sm-tracking: 0em;
--text-size-md-tracking: 0em;
--text-size-lg-tracking: 0em;
--text-size-xl-tracking: 0em;
--text-size-2xl-tracking: -0.025em;
--text-size-3xl-tracking: -0.025em;
--text-size-4xl-tracking: -0.025em;
--text-size-5xl-tracking: -0.05em;
--text-size-6xl-tracking: -0.05em;`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Heading
			</Heading>
			<Text className="mt-4">A semantic heading element that allows control of typographic attributes.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Allows control of the typographic attributes of size, weight, alignment, and tracking.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Clear separation of concerns between semantics and design.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={headingSource} filename="HeadingExample" extension="tsx" className="mt-4" />
			<Text className="mt-4">Here's the heading component in action.</Text>
			<Heading size="6xl">Heading 6xl</Heading>
			<Heading size="5xl">Heading 5xl</Heading>
			<Heading size="4xl">Heading 4xl</Heading>
			<Heading size="3xl">Heading 3xl</Heading>
			<Heading size="2xl">Heading 2xl</Heading>
			<Heading size="xl">Heading xl</Heading>
			<Heading size="lg">Heading lg</Heading>
			<Heading size="md">Heading md</Heading>
			<Heading size="sm">Heading sm</Heading>
			<Heading size="xs">Heading xs</Heading>

			<Heading as="h2" size="xl" className="mt-8">
				Props
			</Heading>
			<div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
				<table className="min-w-full divide-y divide-gray-300">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
								Prop
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Type
							</th>
							<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Default
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">as</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'h1'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">size</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'4xl'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">weight</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
								'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'bold'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">align</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'left' | 'center' | 'right'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'left'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">tracking</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'tighter', 'tight', 'normal', 'wide', 'wider', 'widest'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">undefined</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Text className="mt-4">The tracking's default value depends on the size prop and is controlled through CSS variables.</Text>
			<CodeBlock code={trackingSource} filename="tailwind" extension="css" className="mt-4" />

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="heading" extension="tsx" className="mt-4" />

			<Heading as="h2" size="3xl" className="mt-8">
				Styling
			</Heading>
			<Text className="mt-4">
				The typographic styling is actually pretty simple once you wrap your head around it. For an explanation check out the{' '}
				<Link to="/articles/fluid-typography-sizing-with-modular-scales" className="underline">
					Fluid Typography Sizing and Scales article
				</Link>
				.
			</Text>
			<CodeBlock code={stylingSource} filename="tailwind" extension="css" className="mt-4" />
		</>
	)
}
export default HeadingRoute
