/* eslint-disable import/order */
import { test, expect } from '@playwright/test';
// import { LoginPage } from '../src/poms/login/loginPage';
import { HomePage } from '../src/poms/homePage/homePage';

test.afterEach('Close the page', async ({ context }) => {
	await context.close();
});

test('Screenshot of total value graph test @Screenshot @Positive', async ({ browser }, testInfo) => {
	const context = await browser.newContext({ storageState: 'storageState/loginState.json' });
	const page = await context.newPage();
	const homePage = new HomePage(page);
	await homePage.navigate();
	await homePage.validateAllComponents();

	// const totalValueGraph = homePage.getTotalValueGraph();
	// expect(await page.locator(totalValueGraph).screenshot()).toMatchSnapshot('src/screenShots/totalValueGraph.png');
	// await totalValueGraph.screenshot({ path: 'src/screenShots/totalValueGraphTablet.png' });

	const downloadSalesforce = homePage.getDownloadSalesforce();
	// await downloadSalesforce.screenshot({ path: 'src/screenShots/downloadSalesforce.png' });

	const projectName = testInfo.project.name;
	if (projectName === 'Tablet_Safari') {
		await expect(downloadSalesforce).toHaveScreenshot('downloadSalesforceTablet.png');
	} else {
		await expect(downloadSalesforce).toHaveScreenshot('downloadSalesforce.png');
	}

	await context.close();
});
