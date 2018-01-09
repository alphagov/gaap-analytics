// Works in combination with the following data-attributes
// data-click-events - this just sets the thing up designed to work with A, INPUT[type~="button radio checkbox"], BUTTON
// OR you can put it on a whole div/form and it will track all the aforementioned elements within it
// data-click-category="Header" - this is the category GA will put it in
// data-click-action="Navigation link clicked" - this is the action GA will use

'use strict'

const init = require('./find-trackable')

module.exports = {init}
