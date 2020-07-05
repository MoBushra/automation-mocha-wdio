const homePage = require('./home.page');
const loginCredentials = require('../test/testData/loginCredentials');

/* eslint-disable no-undef */
class loginPage {
	get emailInputElem() { return $('#input-email'); }
	get passwordInputElem() { return $('#input-password'); }
	get forgotPasswordLnk() { return $('form[method="post"]  a'); }
	get loginBtn() { return $('[action] .btn-primary'); }
    
	loginUser(index,email = loginCredentials.signInAccount.email,
		password = loginCredentials.signInAccount.password) {
		homePage.myAccountDropdown.click();
		homePage.myAccountDropdownOptions(index).click();
		this.emailInputElem.waitForEnabled();
		this.emailInputElem.setValue(email);
		this.passwordInputElem.setValue(password);
		this.loginBtn.click();
	}

}
module.exports = new loginPage();