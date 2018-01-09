'use strict'

const buildListener = require('./build-listener')

module.exports = () => {
  const elementsToTrack = Array.prototype.slice.call(document.querySelectorAll('[data-click-events]'))

  if (elementsToTrack && typeof ga === 'function') {
    buildListener(elementsToTrack)
  }
}
