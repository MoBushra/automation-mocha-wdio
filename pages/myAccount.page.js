/* eslint-disable no-undef */
class myAccountPage {
	h2AccountHeading(index) { return $(`#content h2:nth-of-type(${index})`);}
}
module.exports = new myAccountPage();