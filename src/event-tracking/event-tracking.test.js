// 'use strict'
const {describe, before, after, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

describe('GaaP event tracking', () => {
  describe('If data-click-events is applied directly to', () => {
    const track = {
      category: 'Header',
      action: 'Link clicked',
      label: 'Log in'
    };

    after(() => {
      delete window.ga;
    });

    describe('a link', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<a href="#" data-click-events data-click-category="${track.category}" data-click-action="${track.action}">${track.label}</a>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.eventTracking.init();
      });

      before('Act', () => {
        document.querySelector('a').click();
      });

      it(`It should call the ga function with the category: ${track.category}`, () => {
        expect(window.ga.args[0]).to.contain(track.category);
      });
      it(`It should call the ga function with the action: ${track.action}`, () => {
        expect(window.ga.args[0]).to.contain(track.action);
      });
      it(`It should call the ga function with the label: ${track.label}`, () => {
        expect(window.ga.args[0]).to.contain(track.label);
      });
    });
    describe('a button', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<button data-click-events data-click-category="${track.category}" data-click-action="${track.action}">${track.label}</button>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.eventTracking.init();
      });

      before('Act', () => {
        document.querySelector('button').click();
      });

      it(`It should call the ga function with the category: ${track.category}`, () => {
        expect(window.ga.args[0]).to.contain(track.category);
      });
      it(`It should call the ga function with the action: ${track.action}`, () => {
        expect(window.ga.args[0]).to.contain(track.action);
      });
      it(`It should call the ga function with the label: ${track.label}`, () => {
        expect(window.ga.args[0]).to.contain(track.label);
      });
    });
    describe('an input', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<input type="radio" value="${track.label}" data-click-events data-click-category="${track.category}" data-click-action="${track.action}" />`;
        window.ga = sinon.spy();
        window.GAAP.analytics.eventTracking.init();
      });

      before('Act', () => {
        document.querySelector('input').click();
      });

      it(`It should call the ga function with the category: ${track.category}`, () => {
        expect(window.ga.args[0]).to.contain(track.category);
      });
      it(`It should call the ga function with the action: ${track.action}`, () => {
        expect(window.ga.args[0]).to.contain(track.action);
      });
      it(`It should call the ga function with the label: ${track.label}`, () => {
        expect(window.ga.args[0]).to.contain(track.label);
      });
    });
  });
  describe('If data-click-events is applied to parent containing', () => {
    const track = {
      category: 'Navigation',
      action: 'Link clicked',
      label: 'Home'
    };

    after(() => {
      delete window.ga;
    });

    describe('a link', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<nav data-click-events data-click-category="${track.category}" data-click-action="${track.action}"><a href="#">${track.label}</a></nav>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.eventTracking.init();
      });

      before('Act', () => {
        document.querySelector('a').click();
      });

      it(`It should call the ga function with the category: ${track.category}`, () => {
        expect(window.ga.args[0]).to.contain(track.category);
      });
      it(`It should call the ga function with the action: ${track.action}`, () => {
        expect(window.ga.args[0]).to.contain(track.action);
      });
      it(`It should call the ga function with the label: ${track.label}`, () => {
        expect(window.ga.args[0]).to.contain(track.label);
      });
    });
    describe('a button', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<div data-click-events data-click-category="${track.category}" data-click-action="${track.action}"><button>${track.label}</button></div>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.eventTracking.init();
      });

      before('Act', () => {
        document.querySelector('button').click();
      });

      it(`It should call the ga function with the category: ${track.category}`, () => {
        expect(window.ga.args[0]).to.contain(track.category);
      });
      it(`It should call the ga function with the action: ${track.action}`, () => {
        expect(window.ga.args[0]).to.contain(track.action);
      });
      it(`It should call the ga function with the label: ${track.label}`, () => {
        expect(window.ga.args[0]).to.contain(track.label);
      });
    });
    describe('an input', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<form data-click-events data-click-category="${track.category}" data-click-action="${track.action}"><input type="radio" value="${track.label}"/></form>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.eventTracking.init();
      });

      before('Act', () => {
        document.querySelector('input[type="radio"]').click();
      });

      it(`It should call the ga function with the category: ${track.category}`, () => {
        expect(window.ga.args[0]).to.contain(track.category);
      });
      it(`It should call the ga function with the action: ${track.action}`, () => {
        expect(window.ga.args[0]).to.contain(track.action);
      });
      it(`It should call the ga function with the label: ${track.label}`, () => {
        expect(window.ga.args[0]).to.contain(track.label);
      });
    });
    describe('a detail', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<detail data-click-events data-click-category="${track.category}" data-click-action="${track.action}"><summary>${track.label}</summary></detail>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.eventTracking.init();
      });

      before('Act', () => {
        document.querySelector('summary').click();
      });

      it(`It should call the ga function with the category: ${track.category}`, () => {
        expect(window.ga.args[0]).to.contain(track.category);
      });
      it(`It should call the ga function with the action: ${track.action} opened`, () => {
        expect(window.ga.args[0]).to.contain(`${track.action} opened`);
      });
      it(`It should call the ga function with the label: ${track.label}`, () => {
        expect(window.ga.args[0]).to.contain(track.label);
      });
    });
  });
});
