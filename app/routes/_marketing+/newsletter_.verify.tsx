import { conform, useForm } from '@conform-to/react'
import { getFieldsetConstraint, parse } from '@conform-to/zod'
import { json, type DataFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useFormAction, useLoaderData, useNavigation } from '@remix-run/react'
import { z } from 'zod'
import { ErrorList, Field } from '~/components/forms.tsx'
import { StatusButton } from '~/components/ui/status-button.tsx'
import { Text } from '~/components/ui/text.tsx'
import { prisma } from '~/utils/db.server.ts'
import { verifyTOTP } from '~/utils/totp.server.ts'
import { newsletterNameQueryParam, newsletterEmailQueryParam, newsletterOTPQueryParam, newsletterVerificationType } from './newsletter/index.tsx'
import { emailSchema, nameSchema } from '~/utils/user-validation.ts'
import { commitSession, getSession } from '~/utils/session.server.ts'
import { newsletterNameSessionKey } from './newsletter_.welcome.tsx'
import { redirectWithConfetti } from '~/utils/flash-session.server.ts'
import { Input } from '~/components/ui/input.tsx'
import { subscribeUser } from '~/utils/email.server.ts'
import { Heading } from './ui+/components/typography/heading.tsx'

const verifySchema = z.object({
	[newsletterNameQueryParam]: nameSchema,
	[newsletterEmailQueryParam]: emailSchema,
	[newsletterOTPQueryParam]: z.string().min(6).max(6),
})

export async function loader({ request }: DataFunctionArgs) {
	const params = new URL(request.url).searchParams
	if (!params.has(newsletterOTPQueryParam)) {
		// we don't want to show an error message on page load if the otp hasn't be
		// prefilled in yet, so we'll send a response with an empty submission.
		return json({
			status: 'idle',
			submission: {
				intent: '',
				payload: Object.fromEntries(params),
				error: {},
			},
		} as const)
	}
	return validate(request, params)
}

const NewsletterVerifyRoute = () => {
	const data = useLoaderData<typeof loader>()
	const formAction = useFormAction()
	const navigation = useNavigation()
	const isSubmitting = navigation.formAction === formAction
	const actionData = useActionData<typeof action>()

	const [form, { name, email, code }] = useForm({
		id: 'signup-verify-form',
		constraint: getFieldsetConstraint(verifySchema),
		lastSubmission: actionData?.submission ?? data.submission,
		onValidate({ formData }) {
			return parse(formData, { schema: verifySchema })
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<div className="container flex flex-col justify-center pb-32 pt-20">
			<div className="mx-auto max-w-md">
				<Heading as="h1" size="3xl">
					Confirm your subscription
				</Heading>
				<Text size="lg" className="mt-6 text-muted-500">
					Hi <span className="font-semibold">{name.defaultValue}</span>,
				</Text>
				<Text size="lg" className="mt-6 text-muted-500">
					We've sent a link to <span className="font-semibold">{email.defaultValue}</span> to verify your email address. Just click that link.
				</Text>
				<Form method="post" className="mx-auto mt-24" {...form.props}>
					<Input {...conform.input(name)} type="hidden" />
					<Input {...conform.input(email)} type="hidden" />
					<p className="my-6 text-size-sm text-muted-500">If the link doesn't work, we've also sent you a code:</p>
					<Field labelProps={{ htmlFor: code.id, children: 'Code' }} inputProps={{ ...conform.input(code), autoComplete: 'off' }} errors={code.errors} />
					<ErrorList errors={form.errors} id={form.errorId} />
					<StatusButton type="submit" className="w-full" status={isSubmitting ? 'pending' : actionData?.status ?? 'idle'} disabled={isSubmitting}>
						Confirm with code
					</StatusButton>
				</Form>
			</div>
		</div>
	)
}

export default NewsletterVerifyRoute

export async function action({ request }: DataFunctionArgs) {
	return validate(request, await request.formData())
}

async function validate(request: Request, body: URLSearchParams | FormData) {
	const submission = await parse(body, {
		schema: () =>
			verifySchema.superRefine(async (data, ctx) => {
				const verification = await prisma.verification.findFirst({
					where: {
						type: newsletterVerificationType,
						target: data.email,
						expiresAt: { gt: new Date() },
					},
					select: {
						algorithm: true,
						secret: true,
						period: true,
					},
				})
				if (!verification) {
					ctx.addIssue({
						path: [newsletterOTPQueryParam],
						code: z.ZodIssueCode.custom,
						message: `Invalid code`,
					})
					return
				}
				const result = verifyTOTP({
					otp: data.code,
					secret: verification.secret,
					algorithm: verification.algorithm,
					period: verification.period,
					window: 0,
				})
				if (!result) {
					ctx.addIssue({
						path: [newsletterOTPQueryParam],
						code: z.ZodIssueCode.custom,
						message: `Invalid code`,
					})
					return
				}
			}),
		acceptMultipleErrors: () => true,
		async: true,
	})
	if (submission.intent !== 'submit') {
		return json({ status: 'idle', submission } as const)
	}
	if (!submission.value) {
		return json({ status: 'error', submission } as const, { status: 400 })
	}

	const { name, email } = submission.value
	await prisma.verification.deleteMany({
		where: {
			type: newsletterVerificationType,
			target: email,
		},
	})
	const session = await getSession(request.headers.get('Cookie'))
	session.set(newsletterNameSessionKey, name)

	const response = await subscribeUser({ name, email })
	if (response.status === 'success') {
		return redirectWithConfetti('/newsletter/welcome', {
			headers: { 'Set-Cookie': await commitSession(session) },
		})
	} else {
		submission.error[''] = response.error.message
		return json({ status: 'error', submission } as const, { status: 500 })
	}
}
