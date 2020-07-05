/* eslint-disable no-undef */
class homePage {
	get currencyElem() { return $('#form-currency');}

	get myAccountDropdown() {return $('a[title="My Account"]');}

	get slideshowElem() {  return $('div#slideshow0');}

	get searchBtnElem() { return $('.btn-default');}

	get searchTextFieldElem() { return $('div#search > input[name=\'search\']');}

	get smallerFooterElem() { return $('footer p');}

	get checkoutPageBtn() { return $('.list-inline .fa.fa-share');}

	get successMsgAlert() { return $('.alert-success');}
	
	/**
	 * Choosing an option
	 * @param {Number} index 
	 */
	myAccountDropdownOptions(index) { return $(`.list-inline  ul > li:nth-of-type(${index}) > a`);}

	/**
	 * Clicks to add a product to the basket
	 * @param {Number} index the index of the basket button
	 */
	addToBasketBtn(index) { return $(` .button-group > button:nth-of-type(${index})`);}

	/**
	 * Gets text of featured products on home page
	 * @param {Number} index 
	 */
	featuredProductTextElem(index) { return $(`div:nth-of-type(${index}) h4 > a`);}
	
	/**
	 * Clicks on a product from the dropdown menu on the parent dropdown
	 * @param {Number} component 
	 */
	componentsToClick(component) { return $(`li:nth-of-type(3) > .dropdown-menu  .list-unstyled > li:nth-of-type(${component}) > a`);}

	get topNavbarParentElem() {return $('.nav.navbar-nav');}

	get topNavbarChildrenElem() {return this.topNavbarParentElem.$$('li');}

	/**
	 * Gets text of the specified child on the navbar
	 * @param {Number} index the index of the element
	 */
	specifiedChildElem(index) { return this.topNavbarParentElem.$(`li:nth-of-type(${index})`);}

	/**
	 * Gets the text of the currency value
     * @param {string} currency the currency of the page
     */
	getCurrency(currency) { return $(`button[name=${currency}]`);}
    
	get searchFieldElem() { return $('div#search > input[name="search"]');}

	getLiText() {
		this.topNavbarChildrenElem.filter((element) =>{
			console.log(element.getText());
		});
	}
	
	/**
	 * Gets text of the specified child on the navbar
	 * @param {Number} index the index of the element
	 */
	getSpecifiedChildElemText(index) {
		console.log(this.specifiedChildElem(index).getText());
	}

	clickOnComponent(componentNumber) {
		if(this.topNavbarParentElem.isExisting() === true) {
			this.specifiedChildElem(componentNumber).moveTo();
			this.componentsToClick(componentNumber).click();
		}
		browser.pause(5000);
	}
}
module.exports = new homePage();