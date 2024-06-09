import { Page } from '@playwright/test';

export class TestDataLead {
	constructor() {}

	leadData = [
		{
			leadStatus: 'New',
			salutation: 'Mr.',
			firstName: 'Miloš',
			middleName: '',
			lastName: 'Černý',
			leadSuffix: 'Suffix',
			leadTitle: 'Middle Customer',
			leadEmail: 'milos.cernej@seznam.cz',
			leadPhone: '736715702',
			leadMobile: '736715702',
			leadRating: 'Hot',
			leadWebsite: 'tesena.com',
			leadCompany: 'tesena s.r.o.',
			industry: 'Technology',
			NoOfEmployees: '180',
			leadSource: 'Advertisement',
			street: 'Babická 2342/7',
			city: 'Praha',
			state: '',
			zipCode: '14900',
			country: 'Czech Republic',
		},
	];

	getLeadData() {
		let i = Math.floor(Math.random() * this.leadData.length);
		return this.leadData[i];
	}
}
