/* eslint-disable import/order */
import type { Page } from '@playwright/test';

export abstract class MainMenu {
	readonly page: Page;
	constructor(page: Page) {
		this.page = page;
	}

	abstract validateAllComponents(): Promise<void>;

	abstract clickOnHome(): Promise<void>;
	abstract clickOnLeads(): Promise<void>;
}
