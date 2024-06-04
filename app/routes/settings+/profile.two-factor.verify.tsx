/* import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { json, type LoaderFunctionArgs, redirect, type LinksFunction, type ActionFunctionArgs } from '@remix-run/node'
import { useFetcher, useLoaderData } from '@remix-run/react'
import * as QRCode from 'qrcode'
import { z } from 'zod'
import { StatusButton } from '~/components/ui/status-button.tsx'
import { requireUserId } from '~/utils/auth.server.ts'
import { prisma } from '~/utils/db.server.ts'
import { ErrorList, OTPField } from '~/components/forms.tsx'
import { getDomainUrl } from '~/utils/misc.ts'
import { getTOTPAuthUri } from '~/utils/totp.server.ts'
import { P } from '~/ui_components/typography/p.tsx'
import { redirectWithToast } from '~/utils/flash-session.server'
import { isCodeValid } from '../_auth+/verify.server'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com/profile/verify` }]
}

const CancelSchema = z.object({ intent: z.literal('cancel') })
const VerifySchema = z.object({
	intent: z.literal('verify'),
	code: z.string().min(6).max(6),
})

const ActionSchema = z.discriminatedUnion('intent', [CancelSchema, VerifySchema])

export const twoFAVerifyVerificationType = '2fa-verify'

export async function loader({ request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request)
	const verification = await prisma.verification.findUnique({
		where: {
			target_type: { type: twoFAVerifyVerificationType, target: userId },
		},
		select: {
			id: true,
			algorithm: true,
			secret: true,
			period: true,
			digits: true,
		},
	})
	if (!verification) {
		return redirect('/settings/profile/two-factor')
	}
	const user = await prisma.user.findUniqueOrThrow({
		where: { id: userId },
		select: { email: true },
	})
	const issuer = new URL(getDomainUrl(request)).host
	const otpUri = getTOTPAuthUri({
		...verification,
		accountName: user.email,
		issuer,
	})
	const qrCode = await QRCode.toDataURL(otpUri)
	return json({ otpUri, qrCode })
}

export async function action({ request }: ActionFunctionArgs) {
	const userId = await requireUserId(request)
	const formData = await request.formData()

	const submission = await parseWithZod(formData, {
		schema: () =>
			ActionSchema.superRefine(async (data, ctx) => {
				if (data.intent === 'cancel') return null
				const codeIsValid = await isCodeValid({
					code: data.code,
					type: twoFAVerifyVerificationType,
					target: userId,
				})
				if (!codeIsValid) {
					ctx.addIssue({
						path: ['code'],
						code: z.ZodIssueCode.custom,
						message: `Invalid code`,
					})
					return z.NEVER
				}
			}),
		async: true,
	})

	if (submission.status !== 'success') {
		return json({ result: submission.reply() }, { status: submission.status === 'error' ? 400 : 200 })
	}

	switch (submission.value.intent) {
		case 'cancel': {
			await prisma.verification.deleteMany({
				where: { type: twoFAVerifyVerificationType, target: userId },
			})
			return redirect('/settings/profile/two-factor')
		}
		case 'verify': {
			await prisma.verification.update({
				where: {
					target_type: { type: twoFAVerifyVerificationType, target: userId },
				},
				data: { type: '2fa' },
			})
			return redirectWithToast('/settings/profile/two-factor', {
				type: 'success',
				title: 'Enabled',
				description: 'Two-factor authentication has been enabled.',
			})
		}
	}
}

export default function TwoFactorRoute() {
	const data = useLoaderData<typeof loader>()
	const toggle2FAFetcher = useFetcher<typeof action>()

	const [form, fields] = useForm({
		id: 'verify-form',
		constraint: getZodConstraint(ActionSchema),
		lastResult: toggle2FAFetcher.data?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ActionSchema })
		},
	})

	return (
		<div>
			<div className="flex flex-col items-center gap-4">
				<img alt="qr code" src={data.qrCode} className="w-56" />
				<P>Scan this QR code with your authenticator app.</P>
				<P size="sm">If you cannot scan the QR code, you can manually add this account to your authenticator app using this code:</P>
				<div className="p-3">
					<pre className="whitespace-pre-wrap break-all text-size-sm" aria-label="One-time Password URI">
						{data.otpUri}
					</pre>
				</div>
				<P size="sm">
					Once you've added the account, enter the code from your authenticator app below. Once you enable 2FA, you will need to enter a code from your authenticator app every time
					you log in or perform important actions. Do not lose access to your authenticator app, or you will lose access to your account.
				</P>
				<toggle2FAFetcher.Form method="POST" preventScrollReset className="w-full" {...getFormProps(form)}>
					<OTPField
						labelProps={{
							htmlFor: fields.code.id,
							children: 'Code',
						}}
						inputProps={{
							...getInputProps(fields.code, { type: 'text' }),
							autoFocus: true,
							autoComplete: 'one-time-code',
						}}
						errors={fields.code.errors}
					/>
					<div className="min-h-[32px] px-4 pb-3 pt-1">
						<ErrorList id={form.errorId} errors={form.errors} />
					</div>
					<div className="flex flex-row-reverse justify-between">
						<StatusButton
							type="submit"
							name="intent"
							value="confirm"
							status={toggle2FAFetcher.state === 'loading' && toggle2FAFetcher.formData?.get('intent') === 'confirm' ? 'pending' : 'idle'}
						>
							Confirm
						</StatusButton>
						<StatusButton
							variant="secondary"
							type="submit"
							name="intent"
							value="cancel"
							status={toggle2FAFetcher.state === 'loading' && toggle2FAFetcher.formData?.get('intent') === 'cancel' ? 'pending' : 'idle'}
						>
							Cancel
						</StatusButton>
					</div>
				</toggle2FAFetcher.Form>
			</div>
		</div>
	)
}
 */
