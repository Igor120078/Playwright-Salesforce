/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';

export class LeadsPage {
	private page: Page;
	private view: Locator;
	private viewDropdown: Locator;
	private goBtn: Locator;
	private editLink: Locator;
	private createNewViewLink: Locator;
	private recentLeads: Locator;
	private reports: Locator;
	private summary: Locator;
	private tools: Locator;
	private newBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.view = page.locator("label[for='fcf']");
		this.viewDropdown = page.locator("select[id='fcf']");
		this.goBtn = page.locator("input[title='Go!']");
		this.editLink = page.locator("//a[text()='Edit']");
		this.createNewViewLink = page.getByText('Create New View', { exact: true });
		this.recentLeads = page.getByText('Recent Leads', { exact: true });
		this.reports = page.locator("//h3[text()='Reports']");
		this.summary = page.locator("//h3[text()='Summary']");
		this.tools = page.locator("//h3[text()='Tools']");
		this.newBtn = page.locator("input[name='new']");
	}

	// async navigate(): Promise<void> {
	// 	const testUrl = `${process.env.WEB_BASE_URL_CZ}`;
	// 	await this.page.goto(testUrl);
	// }

	async goBack(): Promise<void> {
		await this.page.goBack();
	}

	async validateAllComponents(): Promise<void> {
		await expect(this.view).toBeVisible();
		await expect(this.viewDropdown).toBeVisible();
		await expect(this.goBtn).toBeVisible();
		await expect(this.editLink).toBeVisible();
		await expect(this.createNewViewLink).toBeVisible();
		await expect(this.recentLeads).toBeVisible();
		await expect(this.reports).toBeVisible();
		await expect(this.summary).toBeVisible();
		await expect(this.tools).toBeVisible();
		await expect(this.newBtn).toBeVisible();
	}

	async clickOnNewBtn(): Promise<void> {
		await this.newBtn.click();
	}
}
