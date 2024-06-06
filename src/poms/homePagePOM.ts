/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
	private page: Page;
	private usernameTitle: Locator;

	constructor(page: Page) {
		this.page = page;

		this.usernameTitle = page.locator("//h1[@class='currentStatusUserName']//a[1]");
	}

	// async navigate(): Promise<void> {
	// 	const testUrl = `${process.env.WEB_BASE_URL_CZ}`;
	// 	await this.page.goto(testUrl);
	// }

	async goBack(): Promise<void> {
		await this.page.goBack();
	}

	async validateAllComponents(): Promise<void> {
		await expect(this.usernameTitle).toBeVisible();
	}
}
