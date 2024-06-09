/* eslint-disable import/order */
import { test, expect } from '@playwright/test';
// import { LoginPage } from '../src/poms/login/loginPage';
import { HomePage } from '../src/poms/homePage/homePage';
import { TestDataLead } from '../test_data/testDataLead';
import { LeadsTabPage } from '../src/poms/lead/leadsTabPage';
import { NewLeadPage } from '../src/poms/lead/newLeadPage';
import { NewLeadDuplicatedPage } from '../src/poms/lead/newLeadDuplicatedPage';

test('New Duplicated Lead Creating test @Leads @Negative', async ({ browser }) => {
	const context = await browser.newContext({ storageState: 'storageState/loginState.json' });
	const page = await context.newPage();

	const homePage = new HomePage(page);
	await homePage.navigate();
	await homePage.validateAllComponents();

	// const projectName = test.info().project.name;
	// let mainMenu: MainMenuDesktop | MainMenuTablet;
	// if (projectName === 'Tablet_Safari') {
	// 	mainMenu = new MainMenuTablet(page);
	// } else {
	// 	mainMenu = new MainMenuDesktop(page);
	// }
	const mainMenu = await homePage.selectMainMenuPOM();

	await mainMenu.validateAllComponents();
	await mainMenu.clickOnLeads();

	const leadsPage = new LeadsTabPage(page);
	await leadsPage.validateAllComponents();
	await leadsPage.clickOnNewBtn();

	const testDataLead = new TestDataLead();
	const leadData = testDataLead.getLeadData();

	// New Lead Form filling
	const newLead = new NewLeadPage(page);
	await newLead.validateAllComponents();
	await newLead.selectLeadStatus(leadData.leadStatus);
	await newLead.selectSalutation(leadData.salutation);
	await newLead.fillFirstName(leadData.firstName);
	await newLead.fillLastName(leadData.lastName);
	await newLead.fillLeadSuffix(leadData.leadSuffix);
	await newLead.fillLeadTitle(leadData.leadTitle);
	await newLead.fillLeadEmail(leadData.leadEmail);
	await newLead.fillLeadPhone(leadData.leadPhone);
	await newLead.fillLeadMobile(leadData.leadMobile);
	await newLead.selectLeadRating(leadData.leadRating);
	await newLead.fillLeadWebsite(leadData.leadWebsite);
	await newLead.fillLeadCompany(leadData.leadCompany);
	await newLead.selectIndustry(leadData.industry);
	await newLead.fillNoOfEmployees(leadData.NoOfEmployees);
	await newLead.selectLeadSource(leadData.leadSource);
	await newLead.fillStreet(leadData.street);
	await newLead.fillCity(leadData.city);
	await newLead.fillZipCode(leadData.zipCode);
	await newLead.fillCountry(leadData.country);
	await newLead.clickOnBottomSaveBtn();

	// DuplicatedCreated Lead Page
	const leadDuplicatedPage = new NewLeadDuplicatedPage(page);
	await leadDuplicatedPage.validateErrorMessage();
});
