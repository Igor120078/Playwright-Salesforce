import { Page } from '@playwright/test';

export class TestDataLead {
	constructor() {}

	leadData = [
		{
			leadStatus: 'New',
			salutation: 'Mr.',
			firstName: 'Vojta',
			middleName: '',
			lastName: 'Kratofil',
			leadSuffix: 'Suffix',
			leadTitle: 'New Offer',
			leadEmail: 'vojta.kratofil@seznam.cz',
			leadPhone: '731581710',
			leadMobile: '731581710',
			leadRating: 'Hot',
			leadWebsite: 'tesena.com',
			leadCompany: 'tesena s.r.o.',
			industry: 'Technology',
			NoOfEmployees: '250',
			leadSource: 'Webinar',
			street: 'Šumavská 1094/3',
			city: 'Praha',
			state: '',
			zipCode: '10100',
			country: 'Czech Republic',
		},
		{
			leadStatus: 'New',
			salutation: 'Mr.',
			firstName: 'Pavel',
			middleName: '',
			lastName: 'Gross',
			leadSuffix: 'Suffix',
			leadTitle: 'Super Customer',
			leadEmail: 'pavel.gross@post.cz',
			leadPhone: '605756378',
			leadMobile: '605756378',
			leadRating: 'Hot',
			leadWebsite: 'tesena.com',
			leadCompany: 'tesena s.r.o.',
			industry: 'Technology',
			NoOfEmployees: '450',
			leadSource: 'Advertisement',
			street: 'Charkovská 434/9',
			city: 'Praha',
			state: '',
			zipCode: '10100',
			country: 'Czech Republic',
		},
	];

	getLeadData() {
		let i = Math.floor(Math.random() * this.leadData.length);
		return this.leadData[i];
	}
}
