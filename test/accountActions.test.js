/* eslint-disable no-undef */

const registerPage = require('../pages/register.page');
const { assert, expect } = require('chai');
const loginPage = require('../pages/login.page');
const myAccountPage = require('../pages/myAccount.page');

// describe('Register new account on the website', () => {
// 	it('Should register new account successfully', () => {
// 		browser.url('/');
// 		registerPage.registerAccount(1);
// 		assert.equal(registerPage.accountSuccessCreated.getText(), true, 'Your Account Has Been Created!');
// 	});
// });

describe('Login succefully into the website', () => {
	it('Should login the user successfully', () => {
		browser.url('/');
		loginPage.loginUser(2);
		expect(myAccountPage.h2AccountHeading(1).getText()).includes('My Account');
	});
});