/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
	private page: Page;
	private usernameTitle: Locator;
	private dashboard: Locator;
	private myTasks: Locator;
	private calendar: Locator;

	constructor(page: Page) {
		this.page = page;
		this.usernameTitle = page.locator("//h1[@class='currentStatusUserName']//a[1]");
		this.dashboard = page.getByText('Dashboard', { exact: true });
		this.myTasks = page.getByText('My Tasks', { exact: true });
		this.calendar = page.getByText('Calendar', { exact: true });
	}

	async navigate(): Promise<void> {
		const testUrl = `${process.env.HOME_PAGE_URL}`;
		await this.page.goto(testUrl);
	}

	async goBack(): Promise<void> {
		await this.page.goBack();
	}

	async validateAllComponents(): Promise<void> {
		await expect(this.usernameTitle).toBeVisible();
		await expect(this.dashboard).toBeVisible();
		await expect(this.myTasks).toBeVisible();
		await expect(this.calendar).toBeVisible();
	}
}
