// 'use strict'
const {describe, before, after, it} = require('mocha')
const {expect} = require('chai')
const sinon = require('sinon')

describe('GaaP event tracking', () => {
  describe('If google analytics is initialised', () => {
    const track = {
      category: 'Header',
      action: 'Link clicked',
      label: 'Hello'
    }

    before('Arrange', function () {
      document.body.innerHTML = `<a href="#" data-click-events data-click-category="${track.category}" data-click-action="${track.action}">${track.label}</a>`
      window.ga = sinon.spy()
      window.GAAP.eventTracking.init()
    })

    before('Act', () => {
      document.querySelector('a').click()
    })

    after(() => {
      delete window.ga
    })

    it(`It should call the ga function with the category: ${track.category}`, () => {
      expect(window.ga.args[0]).to.contain(track.category)
    })
    it(`It should call the ga function with the action: ${track.action}`, () => {
      expect(window.ga.args[0]).to.contain(track.action)
    })
    it(`It should call the ga function with the label: ${track.label}`, () => {
      expect(window.ga.args[0]).to.contain(track.label)
    })
  })
})
