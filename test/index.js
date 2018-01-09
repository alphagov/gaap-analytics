// 'use strict'
const {expect} = require('chai')
const sinon = require('sinon')

describe('GaaP event tracking', () => { // eslint-disable-line no-undef
  describe('If google analytics is initialised', () => { // eslint-disable-line no-undef
    before('Arrange', function () { // eslint-disable-line no-undef
      document.body.innerHTML = `<a href="#" data-click-events data-click-category="Header" data-click-action="Link clicked">Hello</a>`
      window.ga = sinon.spy()
      window.GAAP.eventTracking.init()
    })

    before('Act', () => { // eslint-disable-line no-undef
      document.querySelector('a').click()
    })

    after(() => { // eslint-disable-line no-undef
      delete window.ga
    })

    it('It should call the ga function with x', () => { // eslint-disable-line no-undef
      expect(window.ga.called).to.equal(true)
    })
  })

  describe('If google analytics is initialised', () => { // eslint-disable-line no-undef
    before('Arrange', function () { // eslint-disable-line no-undef
      document.body.innerHTML = `<a href="#" data-click-events data-click-category="Header" data-click-action="Link clicked">Hello</a>`
      window.GAAP.eventTracking.init()
    })

    before('Act', () => { // eslint-disable-line no-undef
      document.querySelector('a').click()
    })
    it('It should call the ga function with x', () => { // eslint-disable-line no-undef

    })
  })
})
