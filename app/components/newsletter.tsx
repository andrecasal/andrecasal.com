import { Button } from '~/components/ui/button.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'
import { useFetcher, useNavigation } from '@remix-run/react'
import { useForm } from '@conform-to/react'
import { type action, newsletterSchema } from '~/routes/_marketing+/newsletter/index.tsx'
import { parse } from '@conform-to/zod'
import { cn } from '~/utils/tailwind-merge.ts'
import guide from '~/routes/_marketing+/images/guide-to-modern-full-stack-web-dev.png'
import { H2 } from '~/routes/_marketing+/ui+/components/typography/h2.tsx'
import { P } from '~/routes/_marketing+/ui+/components/typography/p.tsx'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Player } from '@lottiefiles/react-lottie-player'
import * as newsletterAnimation from '~/components/newsletter-animation.json'
import { useEffect, useRef, useState } from 'react'
import { B } from '~/routes/_marketing+/ui+/components/typography/b.tsx'

type NewsletterProps = {
	className?: string
	title: string
	description: string
	buttonText: string
}

const Newsletter = ({ className, title, description, buttonText }: NewsletterProps) => {
	const fetcher = useFetcher<typeof action>()
	const navigation = useNavigation()
	const [form, { name, email }] = useForm({
		lastSubmission: fetcher.data?.submission,
		shouldValidate: 'onBlur',
		onValidate: ({ formData }) => parse(formData, { schema: newsletterSchema }),
	})
	const playerRef = useRef<Player>(null)
	const [state, setState] = useState<'initial' | 'animating' | 'finished'>('initial')

	useEffect(() => {
		if(fetcher.data?.status === 'success') {
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
				<div className="grid">
					<fetcher.Form method="post" action="/newsletter" className={`col-start-1 row-start-1 flex flex-col mt-space-13 transition-opacity ${state === 'initial' ? ' opacity-100' : 'opacity-0 pointer-events-none'}`} {...form.props}>
						<div className="mt-6 grid grid-cols-3 gap-x-space-13">
							<div>
								<VisuallyHidden>
									<Label htmlFor="name">
										Name
									</Label>
								</VisuallyHidden>
								<Input id="name" type="text" placeholder="Enter your name" name="name" required defaultValue={name.defaultValue} className={name.error ? 'bg-danger-background border-danger-foreground' : ''} />
								<P size="xs" className="ml-3.5 text-danger-foreground">
									{name.error}&nbsp;
								</P>
							</div>
							<div className="col-span-2">
								<VisuallyHidden>
									<Label htmlFor="email-address">
										Email address
									</Label>
								</VisuallyHidden>
								<Input id="email-address" type="email" placeholder="Enter your email" name="email" autoComplete="email" required defaultValue={email.defaultValue} className={email.error ? 'bg-danger-background border-danger-foreground' : ''} />
								<P size="xs" className="ml-3.5 text-danger-foreground">
									{email.error}&nbsp;
								</P>
							</div>
						</div>
						<Button type="submit" disabled={navigation.state === 'submitting'}>
							{buttonText}
						</Button>
					</fetcher.Form>
					<div className={`col-start-1 row-start-1 transition-opacity ${state === 'animating' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
						<Player
							src={newsletterAnimation}
							style={{ height: '300px', width: '300px' }}
							keepLastFrame={true}
							ref={playerRef}
							onEvent={event => {
								if(event === 'complete') {
									setState('finished')
								}
							}}
						/>
					</div>
					<div id="data-test-newsletter-finished-animation" className={`col-start-1 row-start-1 mt-space-15 transition-opacity ${state === 'finished' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
						<H2 align="center">Verify Your Email Address</H2>
						<P align="center" className="mt-space-6"><B className="text-success-foreground">Got it!</B> Please <B className="text-danger-foreground">check your email</B> to confirm your subscription, otherwise you won't get my emails.</P>
						<Button size="wide" variant="link" className="underline text-foreground" onClick={() => {
							form.ref.current?.reset()
							playerRef.current?.stop()
							setState('initial')
						}}>Restart</Button>
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
