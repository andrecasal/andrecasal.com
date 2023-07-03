import { Button } from '~/components/ui/button.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'

const Newsletter = () => {
	return (
		<Container>
			<div className="relative isolate pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pb-32 lg:pt-16">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="flex max-w-xl flex-col justify-between lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Subscribe to the newsletter</h2>
						<p className="mt-4 text-body-md text-muted-400">Subscribe to the newsletter to get notified when new articles are published.</p>
						<div className="mt-6 flex gap-x-4">
							<Label htmlFor="email-address" className="sr-only">
								Email address
							</Label>
							<Input id="email-address" name="email" type="email" autoComplete="email" required placeholder="Enter your email" />
							<Button type="submit">Sign me up</Button>
						</div>
					</div>
					<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-foreground/5 p-2 ring-1 ring-foreground/10">
								<Icon name="bolt" className="h-6 w-6" aria-hidden="true" />
							</div>
							<dt className="mt-4 font-semibold">Optimal solutions</dt>
							<dd className="mt-2 text-muted-600">Learn about the best solutions and alternatives to common problems.</dd>
						</div>
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-foreground/5 p-2 ring-1 ring-foreground/10">
								<Icon name="code" className="h-6 w-6" aria-hidden="true" />
							</div>
							<dt className="mt-4 font-semibold">Real code</dt>
							<dd className="mt-2 text-muted-600">I provide you with useful code you can copy+paste.</dd>
						</div>
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-foreground/5 p-2 ring-1 ring-foreground/10">
								<Icon name="bell" className="h-6 w-6" aria-hidden="true" />
							</div>
							<dt className="mt-4 font-semibold">Stay notified</dt>
							<dd className="mt-2 text-muted-600">Stay updated with the latest insights in full-stack web dev.</dd>
						</div>
					</dl>
				</div>
			</div>
		</Container>
	)
}

export default Newsletter
