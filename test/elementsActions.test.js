/* eslint-disable no-undef */
const { expect } = require('chai');
const homePage = require('../pages/home.page');
const checkoutPage = require('../pages/checkout.page');


describe('Testing home page element actions', () => {
	it('Should click on search button', () => {
		browser.url('/');
		homePage.searchBtnElem.click();
		expect(browser.getUrl()).includes('/index.php?route=product/search');
	});
    
	it('Should get text of the 1st product on the Feature section', () => {
		browser.url('/');
		expect(homePage.featuredProductTextElem(1).getText()).equals('MacBook');
	});

	it('Should click the \'Guest Checkout\' radio button ', () => {
		homePage.addToBasketBtn(1).click();
		if(homePage.successMsgAlert.isDisplayed() === true) {
			homePage.checkoutPageBtn.click();
			checkoutPage.registerAccountRadioBtn().click();
			expect(checkoutPage.guestCheckoutRadioBtn().getAttribute('checked')).equals('checked');
		} 
		
	});
    
});
