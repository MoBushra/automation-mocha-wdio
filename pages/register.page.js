/* eslint-disable no-undef */
const homePage = require('./home.page');
const faker = require('faker');
const loginCredentials = require('../test/testData/loginCredentials');

class registerPage {
	get firstNameInputElem() { return $('#input-firstname');}
	get lastNameInputElem() { return $('#input-lastname');}
	get emailInputElem() { return $('#input-email');}
	get telephoneInputElem() { return $('#input-telephone');}
    
	get firstAddressInputElem() { return $('input[name="address_1"]');}
	get cityInputElem() { return $('#input-city');}
	get postCodeInputElem() { return $('#input-postcode');}
	get countryInputElem() { return $('#input-country');}
	get regionOrStateInputElem() { return $('#input-zone');}
    
	get registerPasswordInputElem() { return $('#input-password');}
	get confirmRegisterPasswordInputElem() { return $('#input-confirm');}
	get acceptPrivacyPolicyElem() { return $('input[name="agree"]');}
	get registerContinueBtn() { return $('input[value="Continue"]');}
	get accountSuccessCreated() { return $('div#content > h1');}

	registerAccount(index) {
		homePage.myAccountDropdown.click();
		homePage.myAccountDropdownOptions(index).click();
		this.firstNameInputElem.waitForDisplayed();
		this.enterPersonalDetails();
		this.acceptPrivacyPolicyElem.click();
		this.registerContinueBtn.click();
	}

	enterPersonalDetails(password = loginCredentials.signInAccount.password) {
		this.firstNameInputElem.setValue(faker.name.firstName());
		this.lastNameInputElem.setValue(faker.name.lastName());
		this.emailInputElem.setValue(faker.internet.email());
		this.telephoneInputElem.setValue(faker.phone.phoneNumber);
		this.firstAddressInputElem.setValue(faker.address.streetAddress);
		this.cityInputElem.setValue(faker.address.city);
		this.postCodeInputElem.setValue(faker.address.zipCode);
		// homePage.countryInputElem.selectByAttribute('value', '222');
		this.regionOrStateInputElem.selectByAttribute('value', '3553');
		this.registerPasswordInputElem.setValue(password);
		this.confirmRegisterPasswordInputElem.setValue(password);
	}

}
module.exports = new registerPage();