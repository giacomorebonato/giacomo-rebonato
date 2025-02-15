import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
	webServer: {
		command: 'cd .. && node --run build && node --run start',
		env: {
			HOST: 'localhost',
			NODE_ENV: 'production',
			PORT: '3000',
		},
		url: 'http://localhost:3000',
		reuseExistingServer: !process.env.CI,
	},
	testDir: './src',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
})
