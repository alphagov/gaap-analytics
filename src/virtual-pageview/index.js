// Works in combination with the following data-attributes
// data-virtual-pageview="page/slug/name" - this triggers the script to run currently only works for form elements
// data-parameters="dimension1:service-name" you can add custom parameters to your virtual pageview, such as dimensions and metrics.
// Where 'service-name' is the name attribute of an element that you want to pass to google
// For multiple space separate
// e.g. data-parameters="dimension1:service-name metric1:total-amount"

'use strict';

const init = require('./find-virtual-pageview');

module.exports = {init};
