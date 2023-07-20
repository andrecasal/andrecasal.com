import { Button } from '~/components/ui/button.tsx'
import { Text } from '~/components/ui/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'

const Newsletter = ({ title, description }: { title: string; description: string }) => {
	return (
		<>
			<div className="flex flex-col justify-between">
				<Text heading="h2" size="3xl" className="sm:text-size-4xl">
					{title}
				</Text>
				<Text size="lg" className="mt-4 text-muted-400">
					{description}
				</Text>
				<div className="mt-6 flex gap-x-4 rounded-lg border bg-muted-50 p-4">
					<div>
						<Icon name="person" size="xl" className="mt-1 rounded-full bg-muted-100" />
					</div>
					<div className="flex flex-col gap-y-4">
						<blockquote>
							<Text size="xl">
								<q>I thought the website was good. But the newsletter? Even better!</q>
							</Text>
						</blockquote>
						<Text size="md">Zayd Flanegan, CTO at TimeTable</Text>
					</div>
				</div>
				<div className="flex flex-col gap-y-4">
					<div className="mt-6 flex gap-x-4">
						<Label htmlFor="name" className="sr-only">
							Name
						</Label>
						<Input id="name" name="name" type="text" required placeholder="Enter your name" />
						<Label htmlFor="email-address" className="sr-only">
							Email address
						</Label>
						<Input id="email-address" name="email" type="email" autoComplete="email" required placeholder="Enter your email" />
					</div>
					<Button type="submit">I want my gold</Button>
				</div>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
				{/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
				<div className="flex flex-col items-start">
					<div className="rounded-md bg-muted-50 p-2 ring-1 ring-muted-100">
						<Icon name="bolt" className="h-6 w-6" aria-hidden="true" />
					</div>
					<Text size="md" asChild>
						<dt className="mt-4 font-semibold">Optimal solutions</dt>
					</Text>
					<Text size="md" asChild>
						<dd className="mt-2 text-muted-600">Learn about the best solutions and alternatives to common problems.</dd>
					</Text>
				</div>
				<div className="flex flex-col items-start">
					<div className="rounded-md bg-muted-50 p-2 ring-1 ring-muted-100">
						<Icon name="code" className="h-6 w-6" aria-hidden="true" />
					</div>
					<Text size="md" asChild>
						<dt className="mt-4 font-semibold">Real code</dt>
					</Text>
					<Text size="md" asChild>
						<dd className="mt-2 text-muted-600">I provide you with useful code you can copy+paste.</dd>
					</Text>
				</div>
				<div className="flex flex-col items-start">
					<div className="rounded-md bg-muted-50 p-2 ring-1 ring-muted-100">
						<Icon name="bell" className="h-6 w-6" aria-hidden="true" />
					</div>
					<Text size="md" asChild>
						<dt className="mt-4 font-semibold">Stay notified</dt>
					</Text>
					<Text size="md" asChild>
						<dd className="mt-2 text-muted-600">Stay updated with the latest insights in full-stack web dev.</dd>
					</Text>
				</div>
			</dl> */}
			</div>
		</>
	)
}

export { Newsletter }
