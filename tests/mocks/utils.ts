import fsExtra from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import { z } from 'zod'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fixturesDirPath = path.join(__dirname, '..', 'fixtures')

const emailsDirPath = 'emails'
const subscriptionssDirPath = 'subscriptions'

export async function readFixture(subdir: string, name: string) {
	return fsExtra.readJSON(path.join(fixturesDirPath, subdir, `${name}.json`))
}

export async function createFixture(subdir: string, name: string, data: unknown) {
	const dir = path.join(fixturesDirPath, subdir)
	await fsExtra.ensureDir(dir)
	return fsExtra.writeJSON(path.join(dir, `./${name}.json`), data)
}

export const emailSchema = z.object({
	to: z.string(),
	from: z.string(),
	subject: z.string(),
	text: z.string(),
	html: z.string(),
})

export async function writeEmail(rawEmail: unknown) {
	const email = emailSchema.parse(rawEmail)
	await createFixture(emailsDirPath, email.to, email)
}

export async function readEmail(recipient: string) {
	try {
		const email = await readFixture(emailsDirPath, recipient)
		return emailSchema.parse(email)
	} catch (error) {
		console.error(`Error reading email`, error)
		return null
	}
}

export const subscriptionSchema = z.object({
	email: z.string(),
	fields: z.object({
		name: z.string(),
	}),
})

export async function writeSubscription(rawSubscription: unknown) {
	const subscription = subscriptionSchema.parse(rawSubscription)
	await createFixture(subscriptionssDirPath, subscription.email, subscription)
}

export async function readSubscription(recipient: string) {
	try {
		const subscription = await readFixture(subscriptionssDirPath, recipient)
		return subscriptionSchema.parse(subscription)
	} catch (error) {
		console.error(`Error reading subscription`, error)
		return null
	}
}

export function requiredHeader(headers: Headers, header: string) {
	if (!headers.get(header)) {
		const headersString = JSON.stringify(Object.fromEntries(headers.entries()), null, 2)
		throw new Error(`Header "${header}" required, but not found in ${headersString}`)
	}
}
