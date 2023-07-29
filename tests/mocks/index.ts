import { rest } from 'msw'
import { setupServer } from 'msw/node'
import closeWithGrace from 'close-with-grace'
import { requiredHeader, writeEmail, writeSubscription } from './utils.ts'
import { faker } from '@faker-js/faker'
import { type SubscribeUserSuccess } from '~/utils/email.server.ts'

const handlers = [
	process.env.REMIX_DEV_HTTP_ORIGIN ? rest.post(`${process.env.REMIX_DEV_HTTP_ORIGIN}/ping`, req => req.passthrough()) : null,

	// feel free to remove this conditional from the mock once you've set up your transactional email service provider
	process.env.TRANSACTIONAL_EMAIL_SERVICE_API_KEY
		? rest.post(`${process.env.TRANSACTIONAL_EMAIL_SERVICE_API_ENDPOINT}`, async (req, res, ctx) => {
				requiredHeader(req.headers, 'Authorization')
				const body = await req.json()
				console.info('🔶 mocked email contents:', body)

				await writeEmail(body)

				return res(
					ctx.json({
						id: faker.string.uuid(),
						from: body.from,
						to: body.to,
						created_at: new Date().toISOString(),
					}),
				)
		  })
		: null,

	process.env.MARKETING_EMAIL_SERVICE_API_KEY
		? rest.post(`${process.env.MARKETING_EMAIL_SERVICE_API_ENDPOINT}`, async (req, res, ctx) => {
				requiredHeader(req.headers, 'Authorization')
				const body = await req.json()
				console.info('🔶 mocked subscription contents:', body)

				await writeSubscription(body)

				return res(
					ctx.json({
						data: {
							id: faker.string.uuid(),
							email: body.email,
							fields: {
								name: body.fields.name,
							},
						},
					} satisfies SubscribeUserSuccess),
				)
		  })
		: null,
].filter(Boolean)

const server = setupServer(...handlers)

server.listen({ onUnhandledRequest: 'warn' })
console.info('🔶 Mock server installed')

closeWithGrace(() => {
	server.close()
})
