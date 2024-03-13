import { type ReactElement } from 'react'
import { renderAsync } from '@react-email/components'
import { z } from 'zod'

async function renderReactEmail(react: ReactElement) {
	const [html, text] = await Promise.all([renderAsync(react), renderAsync(react, { plainText: true })])
	return { html, text }
}

const sendEmailErrorSchema = z.union([
	z.object({
		name: z.string(),
		message: z.string(),
		statusCode: z.number(),
	}),
	z.object({
		name: z.literal('UnknownError'),
		message: z.literal('Unknown Error'),
		statusCode: z.literal(500),
		cause: z.any(),
	}),
])
type SendEmailError = z.infer<typeof sendEmailErrorSchema>

const sendEmailSuccessSchema = z.object({
	id: z.string(),
})

export async function sendEmail({
	react,
	...options
}: {
	to: string
	subject: string
} & ({ html: string; text: string; react?: never } | { react: ReactElement; html?: never; text?: never })) {
	const from = 'Andre Casal <andre@transactional.andrecasal.com>'

	const email = {
		from,
		...options,
		...(react ? await renderReactEmail(react) : null),
	}

	// feel free to remove this condition once you've set up your transactional email service provider
	if ((!process.env.RESEND_API_KEY || !process.env.RESEND_TRANSACTIONAL_ENDPOINT) && !process.env.MOCKS) {
		console.error(`RESEND_API_KEY or RESEND_TRANSACTIONAL_ENDPOINT not set and we're not in mocks mode.`)
		console.error(`To send emails, set the both the RESEND_API_KEY and RESEND_TRANSACTIONAL_ENDPOINT environment variables.`)
		console.error(`Would have sent the following email:`, JSON.stringify(email))
		return {
			status: 'success',
			data: { id: 'mocked' },
		} as const
	}

	const response = await fetch(`${process.env.RESEND_TRANSACTIONAL_ENDPOINT}`, {
		method: 'POST',
		body: JSON.stringify(email),
		headers: {
			Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
			'Content-Type': 'application/json',
		},
	})
	const data = await response.json()
	const parsedData = sendEmailSuccessSchema.safeParse(data)

	if (response.ok && parsedData.success) {
		return {
			status: 'success',
			data: parsedData,
		} as const
	} else {
		const parseResult = sendEmailErrorSchema.safeParse(data)
		if (parseResult.success) {
			return {
				status: 'error',
				error: parseResult.data,
			} as const
		} else {
			return {
				status: 'error',
				error: {
					name: 'UnknownError',
					message: 'Unknown Error',
					statusCode: 500,
					cause: data,
				} satisfies SendEmailError,
			} as const
		}
	}
}

const subscribeUserSuccessSchema = z.object({
	data: z.object({
		id: z.string(),
		email: z.string(),
		fields: z.object({
			name: z.string(),
		}),
	}),
})
export type SubscribeUserSuccess = z.infer<typeof subscribeUserSuccessSchema>
