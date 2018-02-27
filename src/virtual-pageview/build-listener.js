'use strict';

const addListener = require('./add-listener');

module.exports = elements => {
  elements.forEach(element => {
    addListener(element);
  });
};
