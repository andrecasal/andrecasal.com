import { json } from '@remix-run/node'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Heading } from '~/routes/_marketing+/ui+/components/typography/heading.tsx'
import { Text } from '~/routes/_marketing+/ui+/components/typography/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Tabs } from '../components/ui/tabs.tsx'
import { Flex } from '../components/layout/flex.tsx'

export const loader = async () => {
	const basePath = '../app/routes/'
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const filePath = path.join(__dirname, basePath, '/_marketing+/ui+/components/ui/tabs.tsx')
	const source = await fs.readFile(filePath, 'utf-8')
	return json({ source })
}

const HeadingRoute = () => {
	const { source } = useLoaderData<typeof loader>()
	const usageExample = `<Tabs.Root defaultValue="login" className="mt-4">
	<Tabs.List>
		<Tabs.Trigger value="login">Login</Tabs.Trigger>
		<Tabs.Trigger value="register">Register</Tabs.Trigger>
	</Tabs.List>
	<div className="mt-space-4 rounded-lg border p-space-8">
		<Tabs.Content value="login">
			<Heading as="h2" size="2xl">
				Login
			</Heading>
			<form>
				<Flex direction="col" gap="8" className="my-space-8">
					<div className="flex w-full flex-col gap-space-3">
						<label htmlFor="email">Email</label>
						<input id="email" type="email" className="rounded-md border" />
					</div>
					<div className="flex w-full flex-col gap-space-3">
						<label htmlFor="password">Password</label>
						<input id="password" type="password" className="rounded-md border" />
					</div>
					<button type="submit" className="w-full rounded-xl bg-muted-900 px-space-8 py-space-6 text-lg text-background hover:bg-muted-700">
						Login
					</button>
				</Flex>
			</form>
		</Tabs.Content>
		<Tabs.Content value="register">
			<Heading as="h2" size="2xl">
				Register
			</Heading>
			<form>
				<Flex direction="col" gap="8" className="my-space-8">
					<div className="flex w-full flex-col gap-space-3">
						<label htmlFor="email">Email</label>
						<input id="email" type="email" className="rounded-md border" />
					</div>
					<div className="flex w-full flex-col gap-space-3">
						<label htmlFor="password">Password</label>
						<input id="password" type="password" className="rounded-md border" />
					</div>
					<button type="submit" className="w-full rounded-xl bg-muted-900 px-space-8 py-space-6 text-lg text-background hover:bg-muted-700">
						Register
					</button>
				</Flex>
			</form>
		</Tabs.Content>
	</div>
</Tabs.Root>`

	return (
		<>
			<Heading as="h1" className="mt-8">
				Tabs
			</Heading>
			<Text className="mt-4">Set of content sections to be displayed one at a time.</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Features
			</Heading>
			<ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Can be controlled or uncontrolled.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Supports horizontal/vertical orientation.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Supports automatic/manual activation.
				</li>
				<li className="flex">
					<span>
						<Icon name="check" size="md" className="mr-2 inline-block h-5 w-5 rounded-full bg-green-500 text-white" />
					</span>
					Full keyboard navigation.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Usage
			</Heading>
			<CodeBlock code={usageExample} filename="TabsExample" extension="tsx" className="mt-4" />
			<Text>Here are the tabs in action.</Text>
			<Tabs.Root defaultValue="login" className="mt-4">
				<Tabs.List>
					<Tabs.Trigger value="login">Login</Tabs.Trigger>
					<Tabs.Trigger value="register">Register</Tabs.Trigger>
				</Tabs.List>
				<div className="mt-space-4 rounded-lg border p-space-8">
					<Tabs.Content value="login">
						<Heading as="h2" size="2xl">
							Login
						</Heading>
						<form>
							<Flex direction="col" gap="8" className="my-space-8">
								<div className="flex w-full flex-col gap-space-3">
									<label htmlFor="email">Email</label>
									<input id="email" type="email" className="rounded-md border" />
								</div>
								<div className="flex w-full flex-col gap-space-3">
									<label htmlFor="password">Password</label>
									<input id="password" type="password" className="rounded-md border" />
								</div>
								<button type="submit" className="w-full rounded-xl bg-muted-900 px-space-8 py-space-6 text-lg text-background hover:bg-muted-700">
									Login
								</button>
							</Flex>
						</form>
					</Tabs.Content>
					<Tabs.Content value="register">
						<Heading as="h2" size="2xl">
							Register
						</Heading>
						<form>
							<Flex direction="col" gap="8" className="my-space-8">
								<div className="flex w-full flex-col gap-space-3">
									<label htmlFor="email">Email</label>
									<input id="email" type="email" className="rounded-md border" />
								</div>
								<div className="flex w-full flex-col gap-space-3">
									<label htmlFor="password">Password</label>
									<input id="password" type="password" className="rounded-md border" />
								</div>
								<button type="submit" className="w-full rounded-xl bg-muted-900 px-space-8 py-space-6 text-lg text-background hover:bg-muted-700">
									Register
								</button>
							</Flex>
						</form>
					</Tabs.Content>
				</div>
			</Tabs.Root>

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
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">inline</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">boolean</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">false</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">direction</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'row' | 'col'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'row'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">justify</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start' | 'center' | 'end' | 'between' </td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">align</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start' | 'center' | 'end' | 'baseline' | 'stretch'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'start'</td>
						</tr>
						<tr>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">gap</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0' ... '20'</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">'0'</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Heading as="h2" size="3xl" className="mt-8">
				Notes
			</Heading>
			<Text className="mt-4">
				If you set <code>inline</code>, justify has no meaning because the <code>{'<Flex />'}</code> has the least width possible.
			</Text>
			<Text className="mt-4">
				If you set <code>align="stretch"</code>, the children shouldn't have a fixed height, because otherwise, they won't stretch.
			</Text>
			<Text className="mt-4">
				Flexbox loses a lot of its power if you use <code>flex-wrap: wrap</code>, so this option is omitted on purpose. If you need to wrap, you should probably use a grid instead.
			</Text>

			<Heading as="h2" size="3xl" className="mt-8">
				Accessibility
			</Heading>
			<Text className="mt-4">
				Changing visual order creates a disconnect between content and presentation and is, therefore, bad for accessibility. For this reason, I've purposely ommitted the following
				option:
			</Text>
			<ul className="ml-4 mt-2 list-disc">
				<li>
					<code>flow</code> does not support <code>row-dense</code> and <code>col-dense</code> options.
				</li>
			</ul>

			<Heading as="h2" size="3xl" className="mt-8">
				Source
			</Heading>
			<CodeBlock code={source} filename="flex" extension="tsx" className="mt-4" />
		</>
	)
}
export default HeadingRoute
