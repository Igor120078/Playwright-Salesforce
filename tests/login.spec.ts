/* eslint-disable import/order */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/poms/login/loginPage';
import { HomePage } from '../src/poms/homePage/homePage';

test.afterEach('Close the page', async ({ context }) => {
	await context.close();
});

test('Login and validate Salesforce Home Page @Login @Positive', async ({ browser }, testInfo) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	const loginPage = new LoginPage(page);

	let errors: Array<Error> = [];
	page.addListener('console', (msg) => {
		if (msg.type() === 'error') {
			errors.push(new Error(msg.text()));
		}
	});

	await loginPage.navigate();
	await loginPage.validateAllComponents();
	await loginPage.login();
	const homePage = new HomePage(page);
	await context.storageState({ path: 'storageState/loginState.json' });
	await homePage.validateAllComponents();

	const downloadSalesforce = homePage.getDownloadSalesforce();
	const projectName = testInfo.project.name;
	if (projectName === 'Tablet_Safari') {
		await expect(downloadSalesforce).toHaveScreenshot('downloadSalesforceTablet.png');
	} else {
		await expect(downloadSalesforce).toHaveScreenshot('downloadSalesforce.png');
	}

	if (errors.length > 0) {
		console.log('Console errors found:', errors);
	} else {
		console.log('No Console errors found');
	}

	await context.close();
});
