/* eslint-disable no-undef */

class checkoutPage {
	// Step 1: Checkout Options elements
	get registerAccountRadioBtn() { return $('#accordion .radio:nth-child(3) label');}
	get guestCheckoutRadioBtn() { return $('#accordion .radio:nth-child(4) [type]');}
	get newCustomerContinueBtn() { return $('input#button-account');}
	get returnCustomEmailInputElem() { return $('input#input-email');}
	get returnCustomPasswordInputElem() { return $('input#input-password');}
	get forgottenPassLink() { return $('Forgotten Password');}
	get loginBtn() { return $('input#button-login');}

	// Step 2: Billing Details elements
	get firstNameInputElem() { return $('#input-payment-firstname');}
	get lastNameInputElem() { return $('#input-payment-lastname');}
	get emailInputElem() { return $('#input-payment-email');}
	get telephoneInputElem() { return $('#input-payment-telephone');}
    
	get firstAddressInputElem() { return $('input[name="address_1"]');}
	get cityInputElem() { return $('#input-payment-city');}
	get postCodeInputElem() { return $('#input-payment-postcode');}
	get countryInputElem() { return $('#input-payment-country');}
	get regionOrStateInputElem() { return $('#input-payment-zone');}
	get guestContinueBtn() { return $('#button-register');}

	// for registering an account
	get registerPasswordInputElem() { return $('#input-payment-password');}
	get confirmRegisterPasswordInputElem() { return $('#input-payment-confirm');}
	get acceptPrivacyPolicyElem() { return $('[aria-expanded] div:nth-of-type(3) [type="checkbox"]');}

	// Step 3: Payement Method elements
	get commentInputElem() { return $('textarea[name="comment"]');}
	get acceptTCElem() { return $('input[name="agree"]');}
	get paymentContinueBtn() { return $('#button-payment-method');}

	// Step 4: Confirm Order elements
}
module.exports = new checkoutPage();