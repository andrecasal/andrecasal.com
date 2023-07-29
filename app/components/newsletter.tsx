/* import { useForm } from '@conform-to/react' */
import { Button } from '~/components/ui/button.tsx'
import { Text } from '~/components/ui/text.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'
import { Form, useActionData, useNavigation } from '@remix-run/react'
import { useForm } from '@conform-to/react'
import { type action, newsletterSchema } from '~/routes/_marketing+/newsletter/index.tsx'
import { parse } from '@conform-to/zod'
import { cn } from '~/utils/misc.ts'

type NewsletterProps = {
	className?: string
	title: string
	description: string
	buttonText: string
}

const Newsletter = ({ className, title, description, buttonText }: NewsletterProps) => {
	const actionData = useActionData<typeof action>()
	const navigation = useNavigation()
	const [form, { name, email }] = useForm({
		lastSubmission: actionData?.submission,
		shouldValidate: 'onBlur',
		onValidate: ({ formData }) => parse(formData, { schema: newsletterSchema }),
	})

	return (
		<div className={cn('mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2', className)}>
			<div className="flex flex-col justify-between">
				<Text heading="h2" size="3xl" className="sm:text-size-4xl">
					{title}
				</Text>
				<Text size="lg" className="mt-4 text-muted-400">
					{description}
				</Text>
				<Form method="post" action="/newsletter" className="flex flex-col gap-y-4" {...form.props}>
					<div className="mt-6 grid grid-cols-3 gap-x-4">
						<div>
							<Label htmlFor="name" className="sr-only">
								Name
							</Label>
							<Input id="name" type="text" placeholder="Enter your name" name="name" required defaultValue={name.defaultValue} />
							<Text size="sm" className="text-danger-foreground">
								{name.error}
							</Text>
						</div>
						<div className="col-span-2">
							<Label htmlFor="email-address" className="sr-only">
								Email address
							</Label>
							<Input id="email-address" type="email" placeholder="Enter your email" name="email" autoComplete="email" required defaultValue={email.defaultValue} />
							<Text size="sm" className="text-danger-foreground">
								{email.error}
							</Text>
						</div>
					</div>
					<Button type="submit" disabled={navigation.state === 'submitting'}>
						{buttonText}
					</Button>
				</Form>
			</div>
			<div className="space-y-8 xl:contents xl:space-y-0">
				<figure className="col-span-2 flex flex-col rounded-2xl shadow-lg ring-1 ring-muted-900/5 xl:col-start-2 xl:row-end-1">
					<blockquote className="flex p-12 text-xl font-semibold leading-8 tracking-tight text-muted-900 xl:grow xl:items-center">
						<p>“I thought the website was good. But the newsletter? Even better!”</p>
					</blockquote>
					<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
						<div className="flex-auto">
							<Text size="sm" className="font-semibold">
								Keeran Flanegan
							</Text>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	)
}

export { Newsletter }
