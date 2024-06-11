/* eslint-disable import/order */
import { Locator, Page, expect, test } from '@playwright/test';
import { MainMenu } from './mainMenu';
import { MainMenuDesktop } from './mainMenuDesktop';
import { MainMenuTablet } from './mainMenuTablet';

export class HomePage {
	private page: Page;
	private usernameTitle: Locator;
	private dashboard: Locator;
	private myTasks: Locator;
	private calendar: Locator;
	private totalValueGraph: Locator;
	private downloadSalesforce: Locator;

	constructor(page: Page) {
		this.page = page;
		this.usernameTitle = page.locator("//h1[@class='currentStatusUserName']//a[1]");
		this.dashboard = page.getByText('Dashboard', { exact: true });
		this.myTasks = page.getByText('My Tasks', { exact: true });
		this.calendar = page.getByText('Calendar', { exact: true });
		this.totalValueGraph = page.locator("//img[@id='01a2o000003kOnTImg']");
		this.downloadSalesforce = page.locator('#listItem-getSalesforce1');
	}

	async navigate(): Promise<void> {
		const testUrl = `${process.env.SF_HOME_PAGE_URL}`;
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

	public getTotalValueGraph(): Locator {
		return this.totalValueGraph;
	}

	public getDownloadSalesforce(): Locator {
		return this.downloadSalesforce;
	}

	async selectMainMenuPOM(): Promise<MainMenu> {
		const projectName = test.info().project.name;
		if (projectName === 'Tablet_Safari') {
			return new MainMenuTablet(this.page);
		} else {
			return new MainMenuDesktop(this.page);
		}
	}
}
