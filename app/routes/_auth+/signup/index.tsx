import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { type LinksFunction, json, redirect, type MetaFunction, type ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useFormAction, useNavigation } from '@remix-run/react'
import { z } from 'zod'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { ErrorList, Field } from '~/components/forms.tsx'
import { StatusButton } from '~/components/ui/status-button.tsx'
import { prisma } from '~/utils/db.server.ts'
import { sendEmail } from '~/utils/email.server.ts'
import { getDomainUrl } from '~/utils/misc.ts'
import { generateTOTP } from '~/utils/totp.server.ts'
import { emailSchema } from '~/utils/user-validation.ts'
import { SignupEmail } from './email.server.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'

export const onboardingOTPQueryParam = 'code'
export const onboardingEmailQueryParam = 'email'
export const verificationType = 'signup'

const signupSchema = z.object({
	email: emailSchema,
})

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com/signup` }]
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const submission = await parseWithZod(formData, {
		schema: () => {
			return signupSchema.superRefine(async (data, ctx) => {
				const existingUser = await prisma.user.findUnique({
					where: { email: data.email },
					select: { id: true },
				})
				if (existingUser) {
					ctx.addIssue({
						path: ['email'],
						code: z.ZodIssueCode.custom,
						message: 'A user already exists with this email',
					})
					return
				}
			})
		},
		async: true,
	})
	if (submission.status !== 'success') {
		return json({ result: submission.reply() }, { status: submission.status === 'error' ? 400 : 200 })
	}
	const { email } = submission.value

	const thirtyMinutesInSeconds = 30 * 60
	const { otp, secret, algorithm, period, digits } = generateTOTP({
		algorithm: 'sha256',
		period: thirtyMinutesInSeconds,
	})
	// delete old verifications. Users should not have more than one verification
	// of a specific type for a specific target at a time.
	await prisma.verification.deleteMany({
		where: { type: verificationType, target: email },
	})
	await prisma.verification.create({
		data: {
			type: verificationType,
			target: email,
			algorithm,
			secret,
			period,
			digits,
			charSet: 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789',
			expiresAt: new Date(Date.now() + period * 1000),
		},
	})
	const onboardingUrl = new URL(`${getDomainUrl(request)}/signup/verify`)
	onboardingUrl.searchParams.set(onboardingEmailQueryParam, email)
	const redirectTo = new URL(onboardingUrl.toString())

	// add the otp to the url we'll email the user.
	onboardingUrl.searchParams.set(onboardingOTPQueryParam, otp)

	const response = await sendEmail({
		to: email,
		subject: `Welcome to André Casal!`,
		react: <SignupEmail onboardingUrl={onboardingUrl.toString()} otp={otp} />,
	})

	if (response.status === 'success') {
		return redirect(redirectTo.toString())
	} else {
		return json({ result: submission.reply({ formErrors: [response.error.message] }) }, { status: 500 })
	}
}

export const meta: MetaFunction = () => {
	return [{ title: 'Sign Up | André Casal' }]
}

export default function SignupRoute() {
	const actionData = useActionData<typeof action>()
	const formAction = useFormAction()
	const navigation = useNavigation()
	const isSubmitting = navigation.formAction === formAction
	const [form, fields] = useForm({
		id: 'signup-form',
		constraint: getZodConstraint(signupSchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			const result = parseWithZod(formData, { schema: signupSchema })
			return result
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<Container>
			<div className="flex flex-col justify-center pb-32 pt-20">
				<div className="text-center">
					<H1 size="xl">Let's start your journey!</H1>
					<P size="lg" className="mt-3 text-muted-500">
						Please enter your email.
					</P>
				</div>
				<Form method="POST" className="mx-auto mt-16 min-w-[368px] max-w-sm" {...getFormProps(form)}>
					<Field
						labelProps={{
							htmlFor: fields.email.id,
							children: 'Email',
						}}
						inputProps={{ ...getInputProps(fields.email, { type: 'email' }), autoFocus: true, autoComplete: 'email' }}
						errors={fields.email.errors}
					/>
					<ErrorList errors={form.errors} id={form.errorId} />
					<StatusButton className="w-full" type="submit" disabled={isSubmitting}>
						Submit
					</StatusButton>
				</Form>
			</div>
		</Container>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
