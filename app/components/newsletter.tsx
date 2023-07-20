import { Button } from '~/components/ui/button.tsx'
import { Text } from '~/components/ui/text.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'
import { cn } from '~/utils/misc.ts'

const Newsletter = ({ className, title, description }: { className?: string; title: string; description: string }) => {
	return (
		<>
			<div className={cn('mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2', className)}>
				<div className="flex flex-col justify-between">
					<Text heading="h2" size="3xl" className="sm:text-size-4xl">
						{title}
					</Text>
					<Text size="lg" className="mt-4 text-muted-400">
						{description}
					</Text>
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
						<Button type="submit">I want my tips</Button>
					</div>
				</div>
				<div className="space-y-8 xl:contents xl:space-y-0">
					<figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-muted-900/5 xl:col-start-2 xl:row-end-1">
						<blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-muted-900">
							<p>“I thought the website was good. But the newsletter? Even better!”</p>
						</blockquote>
						<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
							{/* <img
									className="h-10 w-10 flex-none rounded-full bg-muted-50"
									src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=1024&amp;h=1024&amp;q=80"
									alt=""
								/> */}
							<Icon name="person" className="h-10 w-10 flex-none rounded-full bg-muted-50" />
							<div className="flex-auto">
								<Text size="sm" className="font-semibold">
									Zayd Flanegan
								</Text>
								<Text size="sm" className="text-muted-600">
									@zaydflanegan
								</Text>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</>
	)
}

export { Newsletter }
