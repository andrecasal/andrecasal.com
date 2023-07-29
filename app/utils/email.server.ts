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
	if ((!process.env.TRANSACTIONAL_EMAIL_SERVICE_API_KEY || !process.env.TRANSACTIONAL_EMAIL_SERVICE_API_ENDPOINT) && !process.env.MOCKS) {
		console.error(`TRANSACTIONAL_EMAIL_SERVICE_API_KEY or TRANSACTIONAL_EMAIL_SERVICE_API_ENDPOINT not set and we're not in mocks mode.`)
		console.error(`To send emails, set the both the TRANSACTIONAL_EMAIL_SERVICE_API_KEY and TRANSACTIONAL_EMAIL_SERVICE_API_ENDPOINT environment variables.`)
		console.error(`Would have sent the following email:`, JSON.stringify(email))
		return {
			status: 'success',
			data: { id: 'mocked' },
		} as const
	}

	const response = await fetch(`${process.env.TRANSACTIONAL_EMAIL_SERVICE_API_ENDPOINT}`, {
		method: 'POST',
		body: JSON.stringify(email),
		headers: {
			Authorization: `Bearer ${process.env.TRANSACTIONAL_EMAIL_SERVICE_API_KEY}`,
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

const subscribeUserErrorSchema = z.object({
	message: z.string(),
	errors: z.record(z.string(), z.string()),
})
type SubscribeUserError = z.infer<typeof subscribeUserErrorSchema>

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

export const subscribeUser = async ({ name, email }: { name: string; email: string }) => {
	const subscriber = {
		email,
		fields: { name },
	}

	const response = await fetch(`${process.env.MARKETING_EMAIL_SERVICE_API_ENDPOINT}`, {
		method: 'POST',
		body: JSON.stringify(subscriber),
		headers: {
			Authorization: `Bearer ${process.env.MARKETING_EMAIL_SERVICE_API_KEY}`,
			'Content-Type': 'application/json',
		},
	})

	const data = await response.json()
	const parsedSuccess = subscribeUserSuccessSchema.safeParse(data)

	if (response.ok && parsedSuccess.success) {
		return {
			status: 'success',
			data: parsedSuccess.data,
		} as const
	} else {
		const parsedError = subscribeUserErrorSchema.safeParse(data)
		if (parsedError.success) {
			return {
				status: 'error',
				error: parsedError.data,
			} as const
		} else {
			return {
				status: 'error',
				error: {
					message: 'Unknown Error',
					errors: {
						unknown: 'Unknown Error',
					},
				} satisfies SubscribeUserError,
			} as const
		}
	}
}
