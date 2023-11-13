import { json } from '@remix-run/node'
import { CodeBlock } from '~/components/ui/code-block.tsx'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { promises as fs } from 'fs'
import { useLoaderData } from '@remix-run/react'
import { Icon } from '~/components/ui/icon.tsx'
import { Tabs } from '../components/ui/tabs.tsx'
import { Flex } from '../components/layout/flex.tsx'
import { H1 } from '../components/typography/h1.tsx'
import { H2 } from '../components/typography/h2.tsx'
import { P } from '../components/typography/p.tsx'

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
			<H2 size="2xl">
				Login
			</H2>
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
			<H2 size="2xl">
				Register
			</H2>
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
			<H1 className="mt-8">Tabs</H1>
			<P className="mt-4">Set of content sections to be displayed one at a time.</P>

			<H2 size="3xl" className="mt-8">
				Features
			</H2>
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

			<H2 size="3xl" className="mt-8">
				Usage
			</H2>
			<CodeBlock code={usageExample} filename="TabsExample" extension="tsx" className="mt-4" />
			<P>Here are the tabs in action.</P>
			<Tabs.Root defaultValue="login" className="mt-4">
				<Tabs.List>
					<Tabs.Trigger value="login">Login</Tabs.Trigger>
					<Tabs.Trigger value="register">Register</Tabs.Trigger>
				</Tabs.List>
				<div className="mt-space-4 rounded-lg border p-space-8">
					<Tabs.Content value="login">
						<H2 size="2xl">Login</H2>
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
						<H2 size="2xl">Register</H2>
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

			<H2 size="3xl" className="mt-8">
				Source
			</H2>
			<CodeBlock code={source} filename="tabs" extension="tsx" className="mt-4" />
		</>
	)
}
export default HeadingRoute
