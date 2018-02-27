'use strict';
const eventTracking = require('./event-tracking');

// Add to window.GAAP if in browser context
if (window) {
  window.GAAP = window.GAAP || {};
  window.GAAP.analytics = eventTracking;
}

module.exports.eventTracking = eventTracking;
