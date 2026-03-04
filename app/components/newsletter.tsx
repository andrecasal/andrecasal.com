import { useEffect, useRef, useState } from 'react'
import { getFormProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { Player } from '@lottiefiles/react-lottie-player'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useFetcher } from '@remix-run/react'
import { AuthenticityTokenInput } from 'remix-utils/csrf/react'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import newsletterAnimation from '~/components/newsletter-animation.json'
import { Button } from '~/components/ui/button.tsx'
import { Input } from '~/components/ui/input.tsx'
import { Label } from '~/components/ui/label.tsx'
import { type action, newsletterSchema } from '~/routes/_marketing+/newsletter.tsx'
import { Flex } from '~/ui_components/layout/flex.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { cn } from '~/utils/tailwind-merge.ts'

type NewsletterProps = {
	id?: string
	className?: string
	title?: string
	description?: string
	buttonText?: string
}

function Newsletter({
	id,
	className,
	title = 'Get notified when I publish',
	description = 'One deep essay per month on code architecture, product strategy, and first-principles thinking. Each one takes weeks to research. No fluff, no spam.',
	buttonText = 'Subscribe',
}: NewsletterProps) {
	const fetcher = useFetcher<typeof action>()
	const [form, { email }] = useForm({
		lastResult: fetcher.data?.result,
		shouldValidate: 'onBlur',
		onValidate: ({ formData }) => parseWithZod(formData, { schema: newsletterSchema }),
	})
	const playerRef = useRef<Player>(null)
	const [state, setState] = useState<'initial' | 'animating' | 'finished'>('initial')
	const formRef = useRef<HTMLFormElement>(null)

	useEffect(() => {
		if (fetcher.data?.result.status === 'success') {
			setState('animating')
			playerRef.current?.play()
		}
	}, [fetcher.data])

	return (
		<div id={id} className={cn('mx-auto max-w-2xl', className)}>
			<H2 size="2xl">{title}</H2>
			<P size="lg" className="mt-4 text-muted-400">
				{description}
			</P>
			<div className="mt-8 grid">
				<fetcher.Form
					ref={formRef}
					method="post"
					action="/newsletter"
					className={cn('col-start-1 row-start-1', state === 'initial' ? 'opacity-100' : 'pointer-events-none opacity-0')}
					{...getFormProps(form)}
					encType="multipart/form-data"
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
								defaultValue={email.initialValue}
								className={email.errors ? 'border-danger-foreground' : ''}
							/>
							<P size="xs" className="ml-3.5 text-danger-foreground">
								{email.errors}&nbsp;
							</P>
						</Flex>
						<Button type="submit" disabled={fetcher.state === 'submitting'} className="px-8">
							{buttonText}
						</Button>
					</Flex>
				</fetcher.Form>
				<div className={cn('col-start-1 row-start-1 transition-opacity', state === 'animating' ? 'opacity-100' : 'pointer-events-none hidden opacity-0')}>
					<Player
						src={newsletterAnimation}
						style={{ height: '300px', width: '300px' }}
						keepLastFrame
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
					className={cn('col-start-1 row-start-1 mt-space-15 transition-opacity', state === 'finished' ? 'opacity-100' : 'pointer-events-none hidden opacity-0')}
				>
					<P align="center" className="mt-space-6">
						Got it, thanks!
					</P>
					<Button
						size="wide"
						variant="link"
						className="text-foreground underline"
						onClick={() => {
							formRef.current?.reset()
							playerRef.current?.stop()
							setState('initial')
						}}
					>
						Restart
					</Button>
				</div>
			</div>
		</div>
	)
}

export { Newsletter }
