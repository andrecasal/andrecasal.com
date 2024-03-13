import { rest } from 'msw'
import { setupServer } from 'msw/node'
import closeWithGrace from 'close-with-grace'
import { requiredHeader, writeEmail } from './utils.ts'
import { faker } from '@faker-js/faker'

const handlers = [
	process.env.REMIX_DEV_HTTP_ORIGIN ? rest.post(`${process.env.REMIX_DEV_HTTP_ORIGIN}/ping`, req => req.passthrough()) : null,

	rest.post(`https://api.resend.com/audiences/*`, async (req, res, ctx) => {
		requiredHeader(req.headers, 'Authorization')
		const body = await req.json()
		console.info('🔶 mocked subscription:', body)
		return res(
			ctx.json({
				data: {
					object: 'contact',
					id: faker.string.uuid(),
				},
				error: null,
			}),
		)
	}),

	// feel free to remove this conditional from the mock once you've set up your transactional email service provider
	process.env.RESEND_API_KEY
		? rest.post(`${process.env.RESEND_TRANSACTIONAL_ENDPOINT}`, async (req, res, ctx) => {
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
].filter(Boolean)

const server = setupServer(...handlers)

server.listen({ onUnhandledRequest: 'warn' })
console.info('🔶 Mock server installed')

closeWithGrace(() => {
	server.close()
})
