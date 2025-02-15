import { expect, test } from '@playwright/test'

test.describe('when JS is enabled and user agent is not a bot', () => {
	test('has title set from browser JS', async ({ page }) => {
		await page.goto('http://localhost:3000')
		await page.waitForLoadState('networkidle')

		await expect(page).toHaveTitle(`You don't need SSR`)
	})
})

test.describe('when JS is disabled and user agent is not a bot', () => {
	test.use({
		javaScriptEnabled: false,
	})

	test(`doesn't have title set from browser JS`, async ({ page }) => {
		await page.goto('http://localhost:3000')

		await expect(page).toHaveTitle('Vite + React + TS')
	})
})

test.describe('when JS is disabled and user agent is a bot', () => {
	test.use({
		javaScriptEnabled: false,
		userAgent: 'curl/7.64.1',
	})
	test('has title', async ({ page }) => {
		await page.goto('http://localhost:3000')

		await expect(page).toHaveTitle('Vite + React + TS')
	})
})
