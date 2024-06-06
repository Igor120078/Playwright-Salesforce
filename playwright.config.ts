import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
// import { devices } from '@playwright/test';

dotenv.config({ path: './env/.env' });
dotenv.config({ path: './env/' + process.env.TEST_ENVIRONMENT + '/.env' });

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		// baseURL: 'http://127.0.0.1:3000',
		viewport: { width: 2560, height: 1600 },
		headless: true,
		browserName: 'chromium',
		screenshot: 'only-on-failure',
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		// trace: 'on-first-retry',
		trace: 'on',
		video: 'retain-on-failure',
		// launchOptions: {
		// 	// args: ['--start-maximized'],
		// 	// logger: {
		// 	//   isEnabled: (name, severity) => true,
		// 	//   log: (name, severity, message, args) => console.log(name, severity)
		// 	// },
		// 	slowMo: 500,
		// },
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'Desktop_Chrome',
			use: {
				...devices['Desktop Chrome'],
				viewport: { width: 2200, height: 1400 },
			},
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},

		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'Tablet_Safari',
			use: { ...devices['iPad (gen 5) landscape'] },
		},

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   url: 'http://127.0.0.1:3000',
	//   reuseExistingServer: !process.env.CI,
	// },
});
