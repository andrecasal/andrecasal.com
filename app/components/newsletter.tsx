import { Button } from '~/components/ui/button.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'
import { useFetcher, useNavigation } from '@remix-run/react'
import { useForm } from '@conform-to/react'
import { type action, newsletterSchema } from '~/routes/_marketing+/newsletter.tsx'
import { parse } from '@conform-to/zod'
import { cn } from '~/utils/tailwind-merge.ts'
import guide from '~/routes/_marketing+/images/guide-to-modern-full-stack-web-dev.png'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Player } from '@lottiefiles/react-lottie-player'
import * as newsletterAnimation from '~/components/newsletter-animation.json'
import { useEffect, useRef, useState } from 'react'
import { AuthenticityTokenInput } from 'remix-utils/csrf/react'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { Flex } from '~/ui_components/layout/flex.tsx'

type NewsletterProps = {
	className?: string
	title: string
	description: string
	buttonText: string
}

const Newsletter = ({ className, title, description, buttonText }: NewsletterProps) => {
	const fetcher = useFetcher<typeof action>()
	const navigation = useNavigation()
	const [form, { email }] = useForm({
		lastSubmission: fetcher.data?.submission,
		shouldValidate: 'onBlur',
		onValidate: ({ formData }) => parse(formData, { schema: newsletterSchema }),
	})
	const playerRef = useRef<Player>(null)
	const [state, setState] = useState<'initial' | 'animating' | 'finished'>('initial')

	useEffect(() => {
		if (fetcher.data?.status === 'success') {
			setState('animating')
			playerRef.current?.play()
		}
	}, [fetcher.data])

	return (
		<div className={cn('mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2', className)}>
			<div className="flex flex-col justify-between">
				<H2 size="2xl">{title}</H2>
				<P size="lg" className="mt-4 text-muted-400">
					{description}
				</P>
				<div className="my-4 flex h-44 gap-4">
					<img src={guide} alt="Guide to full-stack web development" className="m-4 h-full -rotate-3 transform-gpu rounded-lg shadow-xl" />
					<P size="lg" className="mt-4 text-muted-400">
						Once you subscribe you'll get my free guide to modern full-stack web development and solve analysis paralysis from choosing which tools to use.
					</P>
				</div>
				<div className="mt-8 grid">
					<fetcher.Form
						method="post"
						action="/newsletter"
						className={`col-start-1 row-start-1 ${state === 'initial' ? ' opacity-100' : 'pointer-events-none opacity-0'}`}
						{...form.props}
					>
						<AuthenticityTokenInput />
						<HoneypotInputs />
						<Flex gap="6" className="w-full">
							<Flex direction="col" className="w-full">
								<VisuallyHidden>
									<Label htmlFor="email-address">Email address</Label>
								</VisuallyHidden>
								<Input
									id="email-address"
									type="email"
									placeholder="Enter your email"
									name="email"
									autoComplete="email"
									required
									defaultValue={email.defaultValue}
									className={email.error ? 'border-danger-foreground' : ''}
								/>
								<P size="xs" className="ml-3.5 text-danger-foreground">
									{email.error}&nbsp;
								</P>
							</Flex>
							<Button type="submit" disabled={navigation.state === 'submitting'} className="px-8">
								{buttonText}
							</Button>
						</Flex>
					</fetcher.Form>
					<div className={`col-start-1 row-start-1 transition-opacity ${state === 'animating' ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
						<Player
							src={newsletterAnimation}
							style={{ height: '300px', width: '300px' }}
							keepLastFrame={true}
							ref={playerRef}
							onEvent={event => {
								if (event === 'complete') {
									setState('finished')
								}
							}}
						/>
					</div>
					<div
						id="data-test-newsletter-finished-animation"
						className={`col-start-1 row-start-1 mt-space-15 transition-opacity ${state === 'finished' ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
					>
						<P align="center" className="mt-space-6">
							Got it, thanks!
						</P>
						<Button
							size="wide"
							variant="link"
							className="text-foreground underline"
							onClick={() => {
								form.ref.current?.reset()
								playerRef.current?.stop()
								setState('initial')
							}}
						>
							Restart
						</Button>
					</div>
				</div>
			</div>
			<div className="space-y-8">
				<figure className="col-span-2 flex flex-col rounded-2xl shadow-lg ring-1 ring-muted-900/5">
					<blockquote className="flex p-12 text-xl font-semibold leading-8 tracking-tight text-muted-900">
						<P>“I thought the website was good. But the newsletter? Even better!”</P>
					</blockquote>
					<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
						<div className="flex-auto">
							<P size="sm" className="font-semibold">
								Keeran Flanegan
							</P>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	)
}

export { Newsletter }
