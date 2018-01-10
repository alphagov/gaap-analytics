'use strict'

const addListener = require('./add-listener')

module.exports = elements => {
  elements.forEach(element => {
    const eventCategory = element.dataset.clickCategory
    let eventAction = element.dataset.clickAction

    switch (element.tagName) {
      case 'A':
      case 'BUTTON':
      case 'INPUT':
        const label = element.tagName === 'INPUT' ? element.value : element.innerText
        addListener(element, eventCategory, eventAction, label)
        break
      default:
        const childClickables = Array.prototype.slice.call(element.querySelectorAll(
          'a, button, input[type="button"], input[type="radio"], input[type="checkbox"], summary'
        ))

        if (childClickables.length) {
          childClickables.forEach(element => {
            let label
            switch (element.tagName) {
              case 'A':
              case 'BUTTON':
              case 'SUMMARY':
                label = element.innerText
                break
              default:
                label = element.value
                break
            }

            addListener(element, eventCategory, eventAction, label)
          })
        }
        break
    }
  })
}
