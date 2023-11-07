import { Icon } from '~/components/ui/icon.tsx'
import { Heading } from '~/routes/_marketing+/ui+/components/typography/heading.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Kbd } from '../components/typography/kbd.tsx'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { Code } from '../components/typography/code.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'

export type componentProps = {
	name: string
	shortName: string
	fileName: string
	category: string
	description: string[]
	features?: string[]
	keyboard?: {
		key: string
		description: string
	}[]
	usage: string
	parts: {
		name: string
		description: string
		props?: {
			name: string
			type: string
			default: string
		}[]
		data?: {
			name: string
			values: string[]
		}[]
	}[]
	styling?: string
}

export const readSource = async ({ category, fileName }: { category: string; fileName: string }) => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, `/_marketing+/ui+/components/${category}/${fileName}.tsx`)
	return await fs.readFile(filePath, 'utf-8')
}

export const Description = ({ name, description }: { name: componentProps['name']; description: componentProps['description'] }) => {
	return (
		<>
			<Heading as="h1" className="mt-8">
				{name}
			</Heading>
			{description.map((text, i) => (
				<Text key={i} className="mt-4">
					{text}
				</Text>
			))}
		</>
	)
}

export const Features = ({ features }: { features: componentProps['features'] }) => {
	return features ? (
		<>
			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				{features.map(feature => (
					<li key={feature} className="flex items-center">
						<Icon name="check" size="md" className="mr-2 inline-block rounded-full bg-green-500 text-white" />
						{feature}
					</li>
				))}
			</ul>
		</>
	) : null
}

export const Keyboard = ({ keyboard }: { keyboard: componentProps['keyboard'] }) => {
	return keyboard ? (
		<>
			<Heading as="h2" size="3xl" className="mt-8">
				Keyboard interactions
			</Heading>
			<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
						{keyboard.map(({ key, description }) => (
							<tr key={key}>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
									<Kbd>{key}</Kbd>
								</td>
								<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{description}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	) : null
}

export const PartsTitle = () => {
	return (
		<Heading as="h2" size="3xl" className="mt-8">
			Parts and their API
		</Heading>
	)
}

export const Part = ({ name, description, props, data }: componentProps['parts'][0]) => {
	return (
		<>
			<Heading as="h3" size="xl" className="mt-8">
				{name}
			</Heading>
			<Text className="mt-4">{description}</Text>
			{props ? (
				<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							{props.map(({ name, type, default: defaultValue }) => (
								<tr key={name}>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{name}</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{type}</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{defaultValue}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : null}
			{data ? (
				<div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
							{data.map(({ name, values }) => (
								<tr key={name}>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{`[data-${name}]`}</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{values.map(value => `"${value}"`).join(' | ')}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : null}
		</>
	)
}

export const Parts = ({ parts }: { parts: componentProps['parts'] }) => {
	return (
		<>
			<PartsTitle />
			{parts.map(({ name, description, props, data }) => (
				<Part key={name} name={name} description={description} props={props} data={data} />
			))}
		</>
	)
}

export const Usage = ({ usage, shortName }: { usage: componentProps['usage']; shortName: componentProps['shortName'] }) => {
	return (
		<>
			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usage} filename={`${shortName}Example`} extension="tsx" className="mt-4" />
			<Text className="mt-4">
				Here's the <Code>{`<${shortName} />`}</Code> component in action.
			</Text>
		</>
	)
}

export const Source = ({ source, fileName }: { source: string; fileName: componentProps['fileName'] }) => {
	return (
		<>
			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename={fileName} extension="tsx" className="mt-4" />
		</>
	)
}

export const Styling = ({ styling }: { styling: componentProps['styling'] }) => {
	return styling ? (
		<>
			<Heading as="h2" size="3xl" className="mt-8">
				Styling
			</Heading>
			<CodeBlock code={styling} filename="tailwind" extension="css" className="mt-4" />
		</>
	) : null
}
