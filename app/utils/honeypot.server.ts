import { Honeypot, SpamError } from 'remix-utils/honeypot/server'

export const honeypot = new Honeypot({
	validFromFieldName: process.env.TESTING ? null : undefined,
	encryptionSeed: process.env.HONEYPOT_SECRET,
})

export function checkHoneypot(formData: FormData, location: string = 'unknown location') {
	try {
		honeypot.check(formData)
	} catch (error) {
		if (error instanceof SpamError) {
			console.log(`HONEYPOT TRIGGERED ON ${location}:`, JSON.stringify(Object.fromEntries(formData.entries()), null, 2))
			throw new Response('Form not submitted properly', { status: 400 })
		}
		throw error
	}
}
