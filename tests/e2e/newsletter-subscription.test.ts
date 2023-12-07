import { faker } from '@faker-js/faker'
import invariant from 'tiny-invariant'
import { expect, test } from '../playwright-utils.ts'
import { readEmail, readSubscription } from '../mocks/utils.ts'

const urlRegex = /(?<url>https?:\/\/[^\s$.?#].[^\s]*)(?=\])/
function extractUrl(text: string) {
	const match = text.match(urlRegex)
	return match?.groups?.url
}

test('subscribing with link', async ({ page }) => {
	const firstName = faker.person.firstName()
	const lastName = faker.person.lastName()
	const username = faker.internet.userName({ firstName, lastName }).slice(0, 15)
	const subscriptionData = {
		name: `${firstName} ${lastName}`,
		username,
		email: `${username}@example.com`,
	}

	await page.goto('/')

	const nameTextbox = page.getByRole('textbox', { name: /name/i })
	await nameTextbox.click()
	await nameTextbox.fill(subscriptionData.name)
	const emailTextbox = page.getByRole('textbox', { name: /email/i })
	await emailTextbox.click()
	await emailTextbox.fill(subscriptionData.email)

	await page.getByRole('button', { name: /I want my tips/i }).click()
	await page.waitForTimeout(3000); // Bad practice, but there's no patience
	await expect(page.getByText(/Verify Your Email Address/i)).toBeVisible()

	const email = await readEmail(subscriptionData.email)
	invariant(email, 'Email not found')
	expect(email.to).toBe(subscriptionData.email)
	expect(email.from).toBe('Andre Casal <andre@transactional.andrecasal.com>')
	expect(email.subject).toMatch(/Action Required: Verify Your Email Address/i)
	const newsletterSubscriptionVerificationLink = extractUrl(email.text)
	invariant(newsletterSubscriptionVerificationLink, 'Newsletter subscription verification URL not found')
	await page.goto(newsletterSubscriptionVerificationLink)

	const subscription = await readSubscription(subscriptionData.email)
	invariant(subscription, 'Subscription not found')
	expect(subscription.email).toBe(subscriptionData.email)
	expect(subscription.fields.name).toBe(subscriptionData.name)

	await expect(page).toHaveURL(`/newsletter/welcome`)
})
