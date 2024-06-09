/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';
import { MainMenu } from './mainMenu';

export class MainMenuDesktop extends MainMenu {
	// private page: Page;
	private badges: Locator;
	private listEmails: Locator;
	private opportunities: Locator;
	private profileFeed: Locator;
	private userProvisionsRequests: Locator;
	private files: Locator;
	private documents: Locator;
	private recognition: Locator;
	private dashboards: Locator;
	private chatter: Locator;
	private quotes: Locator;
	private ideas: Locator;
	private leads: Locator;
	private orders: Locator;
	private skills: Locator;
	private contactRequests: Locator;
	private home: Locator;
	private images: Locator;
	private workOrders: Locator;
	private people: Locator;

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
		this.dashboards = page.locator("a[title='Dashboards Tab']");
		this.chatter = page.locator("a[title='Chatter Tab']");
		this.quotes = page.locator("a[title='Quotes Tab']");
		this.ideas = page.locator("a[title='Ideas Tab']");
		this.leads = page.locator("a[title='Leads Tab']");
		this.orders = page.locator("a[title='Orders Tab']");
		this.skills = page.locator("a[title='Skills Tab']");
		this.contactRequests = page.locator("a[title='Contact Requests Tab']");
		this.home = page.locator("a[title='Home Tab - Selected']");
		this.images = page.locator("a[title='Images Tab']");
		this.workOrders = page.locator("a[title='Work Orders Tab']");
		this.people = page.locator("a[title='People Tab']");
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
		await expect(this.dashboards).toBeVisible();
		await expect(this.chatter).toBeVisible();
		await expect(this.quotes).toBeVisible();
		await expect(this.ideas).toBeVisible();
		await expect(this.leads).toBeVisible();
		await expect(this.orders).toBeVisible();
		await expect(this.skills).toBeVisible();
		await expect(this.contactRequests).toBeVisible();
		await expect(this.home).toBeVisible();
		await expect(this.images).toBeVisible();
		await expect(this.workOrders).toBeVisible();
		await expect(this.people).toBeVisible();
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

	async clickOnDashboards(): Promise<void> {
		await this.dashboards.click();
	}

	async clickOnChatter(): Promise<void> {
		await this.chatter.click();
	}

	async clickOnQuotes(): Promise<void> {
		await this.quotes.click();
	}

	async clickOnIdeas(): Promise<void> {
		await this.ideas.click();
	}

	async clickOnLeads(): Promise<void> {
		await this.leads.click();
	}

	async clickOnOrders(): Promise<void> {
		await this.orders.click();
	}

	async clickOnSkills(): Promise<void> {
		await this.skills.click();
	}

	async clickOnContactRequests(): Promise<void> {
		await this.contactRequests.click();
	}

	async clickOnHome(): Promise<void> {
		await this.home.click();
	}

	async clickOnImages(): Promise<void> {
		await this.images.click();
	}

	async clickOnWorkOrders(): Promise<void> {
		await this.workOrders.click();
	}

	async clickOnPeople(): Promise<void> {
		await this.people.click();
	}
}
