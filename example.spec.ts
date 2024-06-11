import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
	await page.goto('https://playwright.dev/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
	await page.goto('https://playwright.dev/');

	// Click the get started link.
	await page.getByRole('link', { name: 'Get started' }).click();

	// Expects page to have a heading with the name of Installation.
	await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/*
import { Reporter, TestCase, TestResult, FullResult, FullConfig, Suite } from '@playwright/test/reporter';
import { InfluxDB, Point } from 'influx';

class CustomJsonReporter implements Reporter {
	influx: InfluxDB;

	constructor() {
		this.influx = new InfluxDB({
			url: 'http://localhost:8086',
			token: 'your-token',
			org: 'your-org',
			bucket: 'your-bucket',
		});
	}

	onTestEnd(test: TestCase, result: TestResult) {
		const point = new Point('test_results')
			.tag('test', test.title)
			.tag('status', result.status)
			.intField('duration', result.duration)
			.stringField('error', result.error?.message || '');

		this.influx.writeApi.writePoint(point);
	}

	// Other methods...
}

*/
