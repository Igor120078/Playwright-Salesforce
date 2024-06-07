import { Locator, Page, expect } from '@playwright/test';

export class LeadPage {
	private page: Page;
	private leadTitle: Locator;
	private leadStatus: Locator;
	private fullName: Locator;
	private title: Locator;
	private email: Locator;
	private phone: Locator;
	private mobile: Locator;
	private rating: Locator;
	private leadOwner: Locator;
	private website: Locator;
	private company: Locator;
	private industry: Locator;
	private numberOfEmployees: Locator;
	private leadSource: Locator;
	private address: Locator;

	constructor(page: Page) {
		this.page = page;
		this.leadTitle = page.locator("h2[class='pageDescription']");
		this.leadStatus = page.locator('#lea13_ileinner');
		this.fullName = page.locator('#lea2_ileinner');
		this.title = page.locator('#lea4_ileinner');
		this.email = page.locator('#lea11_ileinner');
		this.phone = page.locator('#lea8_ileinner');
		this.mobile = page.locator('#lea9_ileinner');
		this.rating = page.locator('#lea14_ileinner');
		this.leadOwner = page.locator('#lookup0052o00000DRNHBlea1');
		this.website = page.locator("//div[@id='lea12_ileinner']//a[1]");
		this.company = page.locator('#lea3_ileinner');
		this.industry = page.locator('#lea6_ileinner');
		this.numberOfEmployees = page.locator('#lea15_ileinner');
		this.leadSource = page.locator('#lea5_ileinner');
		this.address = page.locator("(//div[@id='lea16_ileinner']//td)[1]");
	}

	// async navigate(): Promise<void> {
	//     const testUrl = `${process.env.WEB_BASE_URL_CZ}`;
	//     await this.page.goto(testUrl);
	// }

	async goBack(): Promise<void> {
		await this.page.goBack();
	}

	async validateAllComponents(): Promise<void> {
		await expect(this.leadTitle).toBeVisible();
		await expect(this.leadStatus).toBeVisible();
		await expect(this.fullName).toBeVisible();
		await expect(this.title).toBeVisible();
		await expect(this.email).toBeVisible();
		await expect(this.phone).toBeVisible();
		await expect(this.mobile).toBeVisible();
		await expect(this.rating).toBeVisible();
		await expect(this.leadOwner).toBeVisible();
		await expect(this.website).toBeVisible();
		await expect(this.company).toBeVisible();
		await expect(this.industry).toBeVisible();
		await expect(this.numberOfEmployees).toBeVisible();
		await expect(this.leadSource).toBeVisible();
		await expect(this.address).toBeVisible();
	}

	async checkLeadTitleText(text: string): Promise<void> {
		await expect(this.leadTitle).toHaveText(text);
	}

	async checkLeadStatusText(text: string): Promise<void> {
		await expect(this.leadStatus).toHaveText(text);
	}

	async checkFullNameText(text: string): Promise<void> {
		await expect(this.fullName).toHaveText(text);
	}

	async checkTitleText(text: string): Promise<void> {
		await expect(this.title).toHaveText(text);
	}

	async checkEmailText(text: string): Promise<void> {
		await expect(this.email).toHaveText(text);
	}

	async checkPhoneText(text: string): Promise<void> {
		await expect(this.phone).toHaveText(text);
	}

	async checkMobileText(text: string): Promise<void> {
		await expect(this.mobile).toHaveText(text);
	}

	async checkRatingText(text: string): Promise<void> {
		await expect(this.rating).toHaveText(text);
	}

	async checkLeadOwnerText(text: string): Promise<void> {
		await expect(this.leadOwner).toHaveText(text);
	}

	async checkWebsiteText(text: string): Promise<void> {
		await expect(this.website).toHaveText(`http://${text}`);
	}

	async checkCompanyText(text: string): Promise<void> {
		await expect(this.company).toHaveText(text);
	}

	async checkIndustryText(text: string): Promise<void> {
		await expect(this.industry).toHaveText(text);
	}

	async checkNumberOfEmployeesText(text: string): Promise<void> {
		await expect(this.numberOfEmployees).toHaveText(text);
	}

	async checkLeadSourceText(text: string): Promise<void> {
		await expect(this.leadSource).toHaveText(text);
	}

	async checkAddressText(text: string): Promise<void> {
		await expect(this.address).toHaveText(text);
	}

	async validateLeadDetails(
		leadTitle: string,
		leadStatus: string,
		fullName: string,
		title: string,
		email: string,
		phone: string,
		mobile: string,
		rating: string,
		leadOwner: string,
		website: string,
		company: string,
		industry: string,
		numberOfEmployees: string,
		leadSource: string,
		address: string
	): Promise<void> {
		await this.checkLeadTitleText(leadTitle);
		await this.checkLeadStatusText(leadStatus);
		await this.checkFullNameText(fullName);
		await this.checkTitleText(title);
		await this.checkEmailText(email);
		await this.checkPhoneText(phone);
		await this.checkMobileText(mobile);
		await this.checkRatingText(rating);
		await this.checkLeadOwnerText(leadOwner);
		await this.checkWebsiteText(website);
		await this.checkCompanyText(company);
		await this.checkIndustryText(industry);
		await this.checkNumberOfEmployeesText(numberOfEmployees);
		await this.checkLeadSourceText(leadSource);
		await this.checkAddressText(address);
	}
}
