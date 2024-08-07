/* import { conform, useForm } from '@conform-to/react'
import { getFieldsetConstraint, parse } from '@conform-to/zod'
import { type LinksFunction, json, redirect, type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form, Link, useActionData, useFormAction, useLoaderData, useNavigation } from '@remix-run/react'
import { z } from 'zod'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { prisma } from '~/utils/db.server.ts'
import { ErrorList, Field } from '~/components/forms.tsx'
import { commitSession, getSession } from '~/utils/session.server.ts'
import { emailSchema, usernameSchema } from '~/utils/user-validation.ts'
import { forgotPasswordOTPQueryParam, forgotPasswordTargetQueryParam, verificationType } from './forgot-password/index.tsx'
import { resetPasswordUsernameSessionKey } from './reset-password.tsx'
import { verifyTOTP } from '~/utils/totp.server.ts'
import invariant from 'tiny-invariant'
import { StatusButton } from '~/components/ui/status-button.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

const verifySchema = z.object({
	[forgotPasswordTargetQueryParam]: z.union([emailSchema, usernameSchema]),
	[forgotPasswordOTPQueryParam]: z.string().min(6).max(6),
})

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com/forgot-password/verify` }]
}

export async function loader({ request }: DataFunctionArgs) {
	const params = new URL(request.url).searchParams
	if (!params.has(forgotPasswordOTPQueryParam)) {
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

async function validate(request: Request, body: FormData | URLSearchParams) {
	const submission = await parse(body, {
		schema: () =>
			verifySchema.superRefine(async (data, ctx) => {
				const verification = await prisma.verification.findFirst({
					where: {
						type: verificationType,
						target: data.usernameOrEmail,
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
						path: [forgotPasswordOTPQueryParam],
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
						path: [forgotPasswordOTPQueryParam],
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
			target: submission.value.usernameOrEmail,
		},
	})
	const { usernameOrEmail } = submission.value
	const user = await prisma.user.findFirst({
		where: { OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }] },
		select: { email: true, username: true },
	})
	// this should not be possible...
	invariant(user, 'User not found')

	const session = await getSession(request.headers.get('Cookie'))
	session.set(resetPasswordUsernameSessionKey, user.username)
	return redirect('/reset-password', {
		headers: { 'Set-Cookie': await commitSession(session) },
	})
}

export const meta: MetaFunction = () => {
	return [{ title: 'Verify Password Recovery for André Casal' }]
}

export default function ForgotPasswordVerifyRoute() {
	const data = useLoaderData<typeof loader>()
	const formAction = useFormAction()
	const navigation = useNavigation()
	const isSubmitting = navigation.formAction === formAction
	const actionData = useActionData<typeof action>()

	const [form, fields] = useForm({
		id: 'forgot-password-verify-form',
		constraint: getFieldsetConstraint(verifySchema),
		lastSubmission: actionData?.submission ?? data.submission,
		onValidate({ formData }) {
			return parse(formData, { schema: verifySchema })
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<Container>
			<div className="pb-32 pt-20">
				<div className="flex flex-col justify-center">
					<>
						<div className="text-center">
							<H1 size="xl">Check your email</H1>
							<P size="lg" className="mt-3 text-muted-500">
								We've sent you a code to verify your password reset.
							</P>
						</div>
						<Form method="POST" {...getFormProps(form)} className="mx-auto mt-16 min-w-[368px] max-w-sm">
							<Field
								labelProps={{
									htmlFor: fields.usernameOrEmail.id,
									children: 'Username or Email',
								}}
								inputProps={conform.input(fields.usernameOrEmail)}
								errors={fields.usernameOrEmail.errors}
							/>
							<Field
								labelProps={{
									htmlFor: fields.code.id,
									children: 'Code',
								}}
								inputProps={{ ...conform.input(fields.code), autoFocus: true }}
								errors={fields.code.errors}
							/>
							<ErrorList errors={form.errors} id={form.errorId} />

							<div className="mt-6">
								<StatusButton className="w-full" status={isSubmitting ? 'pending' : actionData?.status ?? 'idle'} type="submit" disabled={isSubmitting}>
									Submit
								</StatusButton>
							</div>
						</Form>
					</>
					<Link to="/login" className="mt-11 text-center text-size-md font-bold">
						Back to Login
					</Link>
				</div>
			</div>
		</Container>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
 */
