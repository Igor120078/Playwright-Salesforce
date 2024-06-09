/* eslint-disable import/order */
import { Locator, Page, expect } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();

export class LoginPage {
	private page: Page;
	private usernameInput: Locator;
	private passwordInput: Locator;
	private loginBtn: Locator;

	constructor(page: Page) {
		this.page = page;

		this.usernameInput = page.locator('#username');
		this.passwordInput = page.locator('#password');
		this.loginBtn = page.locator('#Login');
	}

	async navigate(): Promise<void> {
		const testUrl = `${process.env.WEB_BASE_URL_CZ}`;
		await this.page.goto(testUrl);
	}

	async goBack(): Promise<void> {
		await this.page.goBack();
	}

	async validateAllComponents(): Promise<void> {
		await expect(this.usernameInput).toBeVisible();
		await expect(this.passwordInput).toBeVisible();
		await expect(this.loginBtn).toBeVisible();
	}

	async fillUsername(username: string): Promise<void> {
		await this.usernameInput.fill(username);
	}

	async fillPassword(password: string): Promise<void> {
		await this.passwordInput.fill(password);
	}

	async clickOnLoginBtn(): Promise<void> {
		await this.loginBtn.click();
		await this.page.waitForLoadState();
	}
}
