/* import { conform, useForm } from '@conform-to/react'
import { getFieldsetConstraint, parse } from '@conform-to/zod'
import { type LinksFunction, json, redirect, type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Link, useFetcher } from '@remix-run/react'
import { z } from 'zod'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { ErrorList, Field } from '~/components/forms.tsx'
import { StatusButton } from '~/components/ui/status-button.tsx'
import { prisma } from '~/utils/db.server.ts'
import { sendEmail } from '~/utils/email.server.ts'
import { getDomainUrl } from '~/utils/misc.ts'
import { generateTOTP } from '~/utils/totp.server.ts'
import { emailSchema, usernameSchema } from '~/utils/user-validation.ts'
import { ForgotPasswordEmail } from './email.server.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const forgotPasswordOTPQueryParam = 'code'
export const forgotPasswordTargetQueryParam = 'usernameOrEmail'
export const verificationType = 'forgot-password'

const forgotPasswordSchema = z.object({
	usernameOrEmail: z.union([emailSchema, usernameSchema]),
})

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com/forgot-password` }]
}

export async function action({ request }: DataFunctionArgs) {
	const formData = await request.formData()
	const submission = parse(formData, {
		schema: forgotPasswordSchema,
		acceptMultipleErrors: () => true,
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
	const { usernameOrEmail } = submission.value

	const resetPasswordUrl = new URL(`${getDomainUrl(request)}/forgot-password/verify`)
	resetPasswordUrl.searchParams.set(forgotPasswordTargetQueryParam, usernameOrEmail)
	const redirectTo = new URL(resetPasswordUrl.toString())

	const user = await prisma.user.findFirst({
		where: { OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }] },
		select: { email: true, username: true },
	})
	if (user) {
		// fire and forget to avoid timing attacks

		const tenMinutesInSeconds = 10 * 60
		// using username or email as the verification target allows us to
		// avoid leaking whether a username or email is registered. It also
		// allows a user who forgot one to use the other to reset their password.
		// And displaying what the user provided rather than the other ensures we
		// don't leak the association between the two.
		const target = usernameOrEmail
		const { otp, secret, algorithm, period, digits } = generateTOTP({
			algorithm: 'sha256',
			period: tenMinutesInSeconds,
		})
		// delete old verifications. Users should not have more than one verification
		// of a specific type for a specific target at a time.
		await prisma.verification.deleteMany({
			where: { type: verificationType, target },
		})
		await prisma.verification.create({
			data: {
				type: verificationType,
				target,
				algorithm,
				secret,
				period,
				digits,
				expiresAt: new Date(Date.now() + period * 1000),
			},
		})

		// add the otp to the url we'll email the user.
		resetPasswordUrl.searchParams.set(forgotPasswordOTPQueryParam, otp)

		await sendEmail({
			to: user.email,
			subject: `André Casal Password Reset`,
			react: <ForgotPasswordEmail onboardingUrl={resetPasswordUrl.toString()} otp={otp} />,
		})
	}

	return redirect(redirectTo.pathname + redirectTo.search)
}

export const meta: MetaFunction = () => {
	return [{ title: 'Password Recovery for André Casal' }]
}

export default function ForgotPasswordRoute() {
	const forgotPassword = useFetcher<typeof action>()

	const [form, fields] = useForm({
		id: 'forgot-password-form',
		constraint: getFieldsetConstraint(forgotPasswordSchema),
		lastSubmission: forgotPassword.data?.submission,
		onValidate({ formData }) {
			return parse(formData, { schema: forgotPasswordSchema })
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<Container>
			<div className="pb-32 pt-20">
				<div className="flex flex-col justify-center">
					<div className="text-center">
						<H1 size="xl">Forgot Password</H1>
						<P size="lg" className="mt-3 text-muted-500">
							No worries, we'll send you reset instructions.
						</P>
					</div>
					<forgotPassword.Form method="POST" {...getFormProps(form)} className="mx-auto mt-16 min-w-[368px] max-w-sm">
						<div>
							<Field
								labelProps={{
									htmlFor: fields.usernameOrEmail.id,
									children: 'Username or Email',
								}}
								inputProps={{
									autoFocus: true,
									...conform.input(fields.usernameOrEmail),
								}}
								errors={fields.usernameOrEmail.errors}
							/>
						</div>
						<ErrorList errors={form.errors} id={form.errorId} />

						<div className="mt-6">
							<StatusButton
								className="w-full"
								status={forgotPassword.state === 'submitting' ? 'pending' : forgotPassword.data?.status ?? 'idle'}
								type="submit"
								disabled={forgotPassword.state !== 'idle'}
							>
								Recover password
							</StatusButton>
						</div>
					</forgotPassword.Form>
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
