/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';
import { MainMenu } from './mainMenu';

export class MainMenuTablet extends MainMenu {
	// private page: Page;
	private badges: Locator;
	private listEmails: Locator;
	private opportunities: Locator;
	private profileFeed: Locator;
	private userProvisionsRequests: Locator;
	private files: Locator;
	private documents: Locator;
	private recognition: Locator;
	private tabsDropdown: Locator;
	private leads: Locator;
	private home: Locator;

	constructor(page: Page) {
		super(page);

		this.badges = page.locator("a[title='Badges Received Tab']");
		this.listEmails = page.locator("a[title='List Emails Tab']");
		this.opportunities = page.locator("a[title='Opportunities Tab']");
		this.profileFeed = page.locator("a[title='Profile Feed Tab']");
		this.userProvisionsRequests = page.locator("a[title='User Provisioning Requests Tab']");
		this.files = page.locator("a[title='Files Tab']");
		this.documents = page.locator("a[title='Documents Tab']");
		this.recognition = page.locator("a[title='Recognition Tab']");
		this.tabsDropdown = page.locator('#zen-moreTabsAssistiveLink');
		this.home = page.locator('#home_Tab');
		this.leads = page.locator('#Lead_Tab');
	}

	async validateAllComponents(): Promise<void> {
		await expect(this.badges).toBeVisible();
		await expect(this.listEmails).toBeVisible();
		await expect(this.opportunities).toBeVisible();
		await expect(this.profileFeed).toBeVisible();
		await expect(this.userProvisionsRequests).toBeVisible();
		await expect(this.files).toBeVisible();
		await expect(this.documents).toBeVisible();
		await expect(this.recognition).toBeVisible();
		await expect(this.tabsDropdown).toBeVisible();
	}

	async clickOnBadges(): Promise<void> {
		await this.badges.click();
	}

	async clickOnListEmails(): Promise<void> {
		await this.listEmails.click();
	}

	async clickOnOpportunities(): Promise<void> {
		await this.opportunities.click();
	}

	async clickOnProfileFeed(): Promise<void> {
		await this.profileFeed.click();
	}

	async clickOnUserProvisionsResults(): Promise<void> {
		await this.userProvisionsRequests.click();
	}

	async clickOnFiles(): Promise<void> {
		await this.files.click();
	}

	async clickOnDocuments(): Promise<void> {
		await this.documents.click();
	}

	async clickOnRecognition(): Promise<void> {
		await this.recognition.click();
	}

	async clickOnTabsDropdown(): Promise<void> {
		await this.tabsDropdown.click();
	}

	async clickOnLeads(): Promise<void> {
		await this.clickOnTabsDropdown();
		await this.leads.click();
	}

	async clickOnHome(): Promise<void> {
		await this.clickOnTabsDropdown();
		await this.home.click();
	}
}
