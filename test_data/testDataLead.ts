export function getTestDataLead() {
	const leadData = [
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

	let i = Math.floor(Math.random() * leadData.length);
	return leadData[i];
}
