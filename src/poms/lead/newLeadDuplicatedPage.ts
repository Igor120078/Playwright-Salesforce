/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';

export class NewLeadDuplicatedPage {
	private page: Page;
	private errorMessage1: Locator;
	private errorMessage2: Locator;
	private errorMessageText1 = 'Error: Invalid Data. Review all error messages below to correct your data.';
	private errorMessageText2 =
		"1 Possible Duplicate Record FoundYou're creating a duplicate record. We recommend you use an existing record instead.";

	constructor(page: Page) {
		this.page = page;
		this.errorMessage1 = page.locator('#errorDiv_ep');
		this.errorMessage2 = page.locator("(//div[@class='pbError'])[2]");
	}

	// async navigate(): Promise<void> {
	// 	const testUrl = `${process.env.WEB_BASE_URL_CZ}`;
	// 	await this.page.goto(testUrl);
	// }

	async goBack(): Promise<void> {
		await this.page.goBack();
	}

	async validateErrorMessage(): Promise<void> {
		await expect(this.errorMessage2).toHaveText(this.errorMessageText2);
	}
}
