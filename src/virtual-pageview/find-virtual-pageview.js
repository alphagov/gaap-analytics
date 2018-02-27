'use strict';

const buildListener = require('./build-listener');

module.exports = () => {
  const elementsToTrack = Array.prototype.slice.call(document.querySelectorAll('[data-virtual-pageview]'));

  if (elementsToTrack && typeof ga === 'function') {
    buildListener(elementsToTrack);
  }
};
