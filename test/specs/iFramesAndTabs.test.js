/* eslint-disable no-undef */
const iFramePage = require('../../pages/iFrame.page');
const { assert } = require('chai');
const newWindowPage = require('../../pages/newWindow.page');

describe('Switch to the iFrame and new tab', () => {
	it('Should switch to new tab', () => {
		browser.url('https://the-internet.herokuapp.com/windows');
		newWindowPage.newWindowLink.click();
		browser.switchWindow('New Window');
		assert.equal(true, newWindowPage.h3Title.isExisting());
		assert.equal(true, newWindowPage.h3Title.isDisplayed());
		assert.equal('New Window', newWindowPage.h3Title.getText());
	});

	it('Should switch to iFrame', () => {
		browser.url('https://the-internet.herokuapp.com/iframe');
		iFramePage.sendTextToBody('This is the iframe test');
		assert.equal('This is the iframe test', iFramePage.iFrameInputElem.getText());
	});
});