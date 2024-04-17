import { conform, useForm } from '@conform-to/react'
import { getFieldsetConstraint, parse } from '@conform-to/zod'
import { type LinksFunction, json, redirect, type DataFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useFormAction, useLoaderData, useNavigation } from '@remix-run/react'
import { z } from 'zod'
import { ErrorList, Field } from '~/components/forms.tsx'
import { StatusButton } from '~/components/ui/status-button.tsx'
import { prisma } from '~/utils/db.server.ts'
import { commitSession, getSession } from '~/utils/session.server.ts'
import { verifyTOTP } from '~/utils/totp.server.ts'
import { onboardingEmailSessionKey } from './onboarding.tsx'
import { onboardingEmailQueryParam, onboardingOTPQueryParam, verificationType } from './signup/index.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

const verifySchema = z.object({
	[onboardingEmailQueryParam]: z.string().email(),
	[onboardingOTPQueryParam]: z.string().min(6).max(6),
})

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com/signup/verify` }]
}

export async function loader({ request }: DataFunctionArgs) {
	const params = new URL(request.url).searchParams
	if (!params.has(onboardingOTPQueryParam)) {
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

export async function action({ request }: DataFunctionArgs) {
	return validate(request, await request.formData())
}

async function validate(request: Request, body: URLSearchParams | FormData) {
	const submission = await parse(body, {
		schema: () =>
			verifySchema.superRefine(async (data, ctx) => {
				const verification = await prisma.verification.findFirst({
					where: {
						type: verificationType,
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
						path: [onboardingOTPQueryParam],
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
						path: [onboardingOTPQueryParam],
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
		return json(
			{
				status: 'error',
				submission,
			} as const,
			{ status: 400 },
		)
	}
	await prisma.verification.deleteMany({
		where: {
			type: verificationType,
			target: submission.value.email,
		},
	})
	const session = await getSession(request.headers.get('Cookie'))
	session.set(onboardingEmailSessionKey, submission.value.email)
	return redirect('/onboarding', {
		headers: { 'Set-Cookie': await commitSession(session) },
	})
}

export default function SignupVerifyRoute() {
	const data = useLoaderData<typeof loader>()
	const formAction = useFormAction()
	const navigation = useNavigation()
	const isSubmitting = navigation.formAction === formAction
	const actionData = useActionData<typeof action>()

	const [form, fields] = useForm({
		id: 'signup-verify-form',
		constraint: getFieldsetConstraint(verifySchema),
		lastSubmission: actionData?.submission ?? data.submission,
		onValidate({ formData }) {
			return parse(formData, { schema: verifySchema })
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<Container>
			<div className="flex flex-col justify-center pb-32 pt-20">
				<div className="text-center">
					<H1 size="xl">Check your email</H1>
					<P size="lg" className="mt-3 text-muted-500">
						We've sent you a code to verify your email address.
					</P>
				</div>

				<Form method="POST" className="mx-auto mt-16 min-w-[368px] max-w-sm" {...form.props}>
					<Field
						labelProps={{
							htmlFor: fields.email.id,
							children: 'Email',
						}}
						inputProps={{
							...conform.input(fields.email),
						}}
						errors={fields.email.errors}
					/>
					<Field
						labelProps={{
							htmlFor: fields.code.id,
							children: 'Code',
						}}
						inputProps={{
							...conform.input(fields.code),
						}}
						errors={fields.code.errors}
					/>
					<ErrorList errors={form.errors} id={form.errorId} />
					<StatusButton className="w-full" status={isSubmitting ? 'pending' : actionData?.status ?? 'idle'} type="submit" disabled={isSubmitting}>
						Submit
					</StatusButton>
				</Form>
			</div>
		</Container>
	)
}
