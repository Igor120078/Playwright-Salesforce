/* eslint-disable import/order */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/poms/login/loginPage';
import { HomePage } from '../src/poms/homePage/homePage';
import dotenv from 'dotenv';
dotenv.config();

test.afterEach('Close the page', async ({ context }) => {
	await context.close();
});

test('Login and validate Salesforce Home Page @Login @Positive', async ({ browser }, testInfo) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	const loginPage = new LoginPage(page);
	await loginPage.navigate();
	await loginPage.validateAllComponents();
	await loginPage.fillUsername(process.env.SALESFORCE_USER!);
	await loginPage.fillPassword(process.env.SALESFORCE_PASSWORD!);
	await loginPage.clickOnLoginBtn();
	const homePage = new HomePage(page);
	await context.storageState({ path: 'storageState/loginState.json' });
	await homePage.validateAllComponents();

	const totalValueGraph = homePage.getTotalValueGraph();
	await totalValueGraph.scrollIntoViewIfNeeded();
	// await totalValueGraph.screenshot({ path: 'src/screenShots/totalValueGraph.png' });

	const projectName = testInfo.project.name;
	if (projectName === 'Tablet_Safari') {
		await expect(totalValueGraph).toHaveScreenshot('totalValueGraphTablet.png');
	} else {
		await expect(totalValueGraph).toHaveScreenshot('totalValueGraph.png');
	}
	await context.close();
});
