'use strict';
const eventTracking = require('./event-tracking');
const virtualPageview = require('./virtual-pageview');

// Add to window.GAAP if in browser context
if (window) {
  window.GAAP = window.GAAP || {};
  window.GAAP.analytics = {eventTracking, virtualPageview};
}

module.exports.eventTracking = eventTracking;
module.exports.virtualPageview = virtualPageview;
