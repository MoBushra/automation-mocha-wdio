/* eslint-disable no-undef */
const homePage = require('../pages/home.page');

// See which currency is set on the website
describe('Interacting with home page elements', () => {

	// Getting text value from a selector
	it('Get the current currency text', () => {
		browser.url('/');
		let currencySymbol = $('#form-currency').getText();
		console.log(currencySymbol);
		homePage.getLiText();
		homePage.getSpecifiedChildElemText(4);
	});

	// Checking to see if selector is displayed 
	it('Is carousel Displayed?', () => {
		console.log(homePage.slideshowElem.isDisplayed());
	});

	// Checking to see if selector exists
	it('Does the search button exist?', () => {
		console.log(homePage.searchBtnElem.isExisting());
	});

	// Checking to see if selector field/btn is enabled
	it('Is the search text field enabled?', () => {
		console.log(homePage.searchFieldElem.isEnabled());
	});

	// Checking to see if selector is in our view
	it('Is \'Powered by OpenCart\' in our view port?', () => {
		console.log(homePage.smallerFooterElem.isDisplayedInViewport());
	});

	// Click on a component in the navbar menu
	it('Click on the 3rd component in the navbar', () => {
		homePage.clickOnComponent(3);
	});
    
});