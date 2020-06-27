/* eslint-disable no-undef */
class newWindow{
	get newWindowLink() { return $('div#content  a[target="_blank"]');}
    
	get h3Title() { return $('.example > h3');}

}
module.exports = new newWindow();