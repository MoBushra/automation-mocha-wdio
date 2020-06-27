/* eslint-disable no-undef */

class iFrame {
	get iFrameBodyElem() { return $('iframe#mce_0_ifr');}
	get iFrameInputElem() { return $('body#tinymce');}
    
	sendTextToBody(text) {
		this.iFrameBodyElem.waitForDisplayed();
		browser.switchToFrame(this.iFrameBodyElem);
		this.iFrameInputElem.setValue(text);
	}
}
module.exports = new iFrame();