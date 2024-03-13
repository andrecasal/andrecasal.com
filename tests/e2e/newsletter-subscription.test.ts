import { faker } from '@faker-js/faker'
import { expect, test } from '../playwright-utils.ts'

test('subscribing', async ({ page }) => {
	const firstName = faker.person.firstName()
	const lastName = faker.person.lastName()
	const username = faker.internet.userName({ firstName, lastName }).slice(0, 15)
	const subscriptionData = {
		email: `${username}@example.com`,
	}

	await page.goto('/')

	const emailTextbox = page.getByRole('textbox', { name: /email/i })
	await emailTextbox.click()
	await emailTextbox.fill(subscriptionData.email)

	await page.getByRole('button', { name: /I want my tips/i }).click()
	await page.waitForTimeout(3000) // Bad practice, but there's no patience to find out how to make Playwright wait for the animation to end
	await expect(page.getByText(/Got it, thanks!/i)).toBeVisible()
})
