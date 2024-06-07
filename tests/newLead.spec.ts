/* eslint-disable import/order */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/poms/login/loginPage';
import { MainMenu } from '../src/poms/homePage/mainMenu';
import { TestDataLead } from '../test_data/testDataLead';
import { LeadsTabPage } from '../src/poms/lead/leadsTabPage';
import { NewLeadPage } from '../src/poms/lead/newLeadPage';
import { LeadPage } from '../src/poms/lead/leadPage';

test('New Lead Creating test @Leads', async ({ page }) => {
	const loginPage = new LoginPage(page);
	await loginPage.navigate();
	await loginPage.validateAllComponents();
	await loginPage.fillUsername(process.env.ADMINNAME!);
	await loginPage.fillPassword(process.env.ADMINPASSWORD!);
	await loginPage.clickOnLoginBtn();

	const mainMenu = new MainMenu(page);
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
	const leadOwner: string = await newLead.getLeadOwner();
	await newLead.clickOnBottomSaveBtn();

	// Created Lead Page
	const leadPage = new LeadPage(page);
	await leadPage.validateAllComponents();
	await leadPage.validateLeadDetails(
		`${leadData.salutation} ${leadData.firstName} ${leadData.middleName} ${leadData.lastName} ${leadData.leadSuffix}`,
		leadData.leadStatus,
		`${leadData.salutation} ${leadData.firstName} ${leadData.middleName} ${leadData.lastName} ${leadData.leadSuffix}`,
		leadData.leadTitle,
		leadData.leadEmail,
		leadData.leadPhone,
		leadData.leadMobile,
		leadData.leadRating,
		leadOwner,
		leadData.leadWebsite,
		leadData.leadCompany,
		leadData.industry,
		leadData.NoOfEmployees,
		leadData.leadSource,
		`${leadData.street}${leadData.city}, ${leadData.zipCode}${leadData.country}`
	);
});
