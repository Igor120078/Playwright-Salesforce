/* eslint-disable import/order */
import { expect, test } from '@playwright/test';
import { LoginPage } from '../src/poms/loginPagePOM';
import { HomePage } from '../src/poms/homePagePOM';
import dotenv from 'dotenv';
dotenv.config();

test('Login and Home Salesforce page test @Login', async ({ browser }) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	const loginPage = new LoginPage(page);
	await loginPage.navigate();
	await loginPage.validateAllComponents();
	await loginPage.fillUsername(process.env.ADMINNAME!);
	await loginPage.fillPassword(process.env.ADMINPASSWORD!);
	await loginPage.clickOnLoginBtn();
	await page.waitForTimeout(10000);
	const homePage = new HomePage(page);
	await homePage.validateAllComponents();
});
