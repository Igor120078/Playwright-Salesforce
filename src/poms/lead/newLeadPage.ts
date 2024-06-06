/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';

export class NewLeadPage {
	private page: Page;
	private mainTitle: Locator;
	private topSaveBtn: Locator;
	private topSaveNewBtn: Locator;
	private topCancelBtn: Locator;
	private bottomSaveBtn: Locator;
	private bottomSaveNewBtn: Locator;
	private bottomCancelBtn: Locator;

	// Lead Form Inputs
	private leadStatusDropdown: Locator;
	private salutationDropdown: Locator;
	private firstName: Locator;
	private middleName: Locator;
	private lastName: Locator;
	private leadSuffix: Locator;
	private leadTitle: Locator;
	private leadEmail: Locator;
	private leadPhone: Locator;
	private leadMobile: Locator;
	private leadRatingDropdown: Locator;
	private leadWebsite: Locator;
	private leadCompany: Locator;
	private industryDropdown: Locator;
	private NoOfEmployees: Locator;
	private leadSourceDropdown: Locator;

	// Address information
	private street: Locator;
	private city: Locator;
	private state: Locator;
	private zipCode: Locator;
	private country: Locator;

	constructor(page: Page) {
		this.page = page;
		this.mainTitle = page.locator("//h2[text()=' New Lead']");
		this.topSaveBtn = page.locator("(//input[@name='save'])[1]");
		this.topSaveNewBtn = page.locator("(//input[@name='save_new'])[1]");
		this.topCancelBtn = page.locator("(//input[@name='cancel'])[1]");
		this.bottomSaveBtn = page.locator("(//input[@name='save'])[2]");
		this.bottomSaveNewBtn = page.locator("(//input[@name='save_new'])[2]");
		this.bottomCancelBtn = page.locator("(//input[@name='cancel'])[2]");

		// Lead Form Inputs
		this.leadStatusDropdown = page.locator('#lea13');
		this.salutationDropdown = page.locator('#name_salutationlea2');
		this.firstName = page.locator('#name_firstlea2');
		this.middleName = page.locator('#name_middlelea2');
		this.lastName = page.locator('#name_lastlea2');
		this.leadSuffix = page.locator("input[id='name_suffixlea2']");
		this.leadTitle = page.locator('#lea4');
		this.leadEmail = page.locator('#lea11');
		this.leadPhone = page.locator('#lea8');
		this.leadMobile = page.locator('#lea9');
		this.leadRatingDropdown = page.locator('#lea14');
		this.leadWebsite = page.locator('#lea12');
		this.leadCompany = page.locator('#lea3');
		this.industryDropdown = page.locator('#lea6');
		this.NoOfEmployees = page.locator('#lea15');
		this.leadSourceDropdown = page.locator('#lea5');

		// Address information
		this.street = page.locator('#lea16street');
		this.city = page.locator('#lea16city');
		this.state = page.locator('#lea16state');
		this.zipCode = page.locator('#lea16zip');
		this.country = page.locator('#lea16country');
	}

	// async navigate(): Promise<void> {
	// 	const testUrl = `${process.env.WEB_BASE_URL_CZ}`;
	// 	await this.page.goto(testUrl);
	// }

	async goBack(): Promise<void> {
		await this.page.goBack();
	}

	async validateAllComponents(): Promise<void> {
		await expect(this.mainTitle).toBeVisible();
		await expect(this.topSaveBtn).toBeVisible();
		await expect(this.topSaveNewBtn).toBeVisible();
		await expect(this.topCancelBtn).toBeVisible();
		await expect(this.bottomSaveBtn).toBeVisible();
		await expect(this.bottomSaveNewBtn).toBeVisible();
		await expect(this.bottomCancelBtn).toBeVisible();

		// Lead Form Inputs
		await expect(this.leadStatusDropdown).toBeVisible();
		await expect(this.salutationDropdown).toBeVisible();
		await expect(this.firstName).toBeVisible();
		await expect(this.middleName).toBeVisible();
		await expect(this.lastName).toBeVisible();
		await expect(this.leadSuffix).toBeVisible();
		await expect(this.leadTitle).toBeVisible();
		await expect(this.leadEmail).toBeVisible();
		await expect(this.leadPhone).toBeVisible();
		await expect(this.leadMobile).toBeVisible();
		await expect(this.leadRatingDropdown).toBeVisible();
		await expect(this.leadWebsite).toBeVisible();
		await expect(this.leadCompany).toBeVisible();
		await expect(this.industryDropdown).toBeVisible();
		await expect(this.NoOfEmployees).toBeVisible();
		await expect(this.leadSourceDropdown).toBeVisible();

		// Address information
		await expect(this.street).toBeVisible();
		await expect(this.city).toBeVisible();
		await expect(this.state).toBeVisible();
		await expect(this.zipCode).toBeVisible();
		await expect(this.country).toBeVisible();
	}

	async selectLeadStatus(status: string): Promise<void> {
		await this.leadStatusDropdown.selectOption(status);
	}

	async selectSalutation(salutation: string): Promise<void> {
		await this.salutationDropdown.selectOption(salutation);
	}

	async fillFirstName(firstName: string): Promise<void> {
		await this.firstName.fill(firstName);
	}

	async fillMiddleName(middleName: string): Promise<void> {
		await this.middleName.fill(middleName);
	}

	async fillLastName(lastName: string): Promise<void> {
		await this.lastName.fill(lastName);
	}

	async fillLeadSuffix(leadSuffix: string): Promise<void> {
		await this.leadSuffix.fill(leadSuffix);
	}

	async fillLeadTitle(leadTitle: string): Promise<void> {
		await this.leadTitle.fill(leadTitle);
	}

	async fillLeadEmail(leadEmail: string): Promise<void> {
		await this.leadEmail.fill(leadEmail);
	}

	async fillLeadPhone(leadPhone: string): Promise<void> {
		await this.leadPhone.fill(leadPhone);
	}

	async fillLeadMobile(leadMobile: string): Promise<void> {
		await this.leadMobile.fill(leadMobile);
	}

	async selectLeadRating(leadRating: string): Promise<void> {
		await this.leadRatingDropdown.selectOption(leadRating);
	}

	async fillLeadWebsite(leadWebsite: string): Promise<void> {
		await this.leadWebsite.fill(leadWebsite);
	}

	async fillLeadCompany(leadCompany: string): Promise<void> {
		await this.leadCompany.fill(leadCompany);
	}

	async selectIndustry(industry: string): Promise<void> {
		await this.industryDropdown.selectOption(industry);
	}

	async fillNoOfEmployees(noOfEmployees: string): Promise<void> {
		await this.NoOfEmployees.fill(noOfEmployees);
	}

	async selectLeadSource(leadSource: string): Promise<void> {
		await this.leadSourceDropdown.selectOption(leadSource);
	}

	async fillStreet(street: string): Promise<void> {
		await this.street.fill(street);
	}

	async fillCity(city: string): Promise<void> {
		await this.city.fill(city);
	}

	async fillState(state: string): Promise<void> {
		await this.state.fill(state);
	}

	async fillZipCode(zipCode: string): Promise<void> {
		await this.zipCode.fill(zipCode);
	}

	async fillCountry(country: string): Promise<void> {
		await this.country.fill(country);
	}

	async clickOnBottomSaveBtn(): Promise<void> {
		await this.bottomSaveBtn.click();
	}
}
