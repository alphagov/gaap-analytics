// 'use strict'
const {describe, before, after, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

describe('GaaP virtual pageviews', () => {
  describe('If a virtual pageview is applied with', () => {
    const virtualPageview = {
      name: 'create-user/success',
      parameterKey: 'dimension1',
      parameterName: 'service-name',
      parameterValue: 'default',
      anotherParameterKey: 'metric1',
      anotherParameterName: 'amount',
      anotherParameterValue: '10'
    };

    after(() => {
      delete window.ga;
    });

    describe('a pageview name', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<form action="/" method="post" data-virtual-pageview="${virtualPageview.name}">
            <input class="button" type="submit" value="Add service">
          </form>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.virtualPageview.init();
      });

      before('Act', () => {
        document.querySelector('.button').click();
      });

      it(`It should call the ga function with the page: ${virtualPageview.name}`, () => {
        expect(window.ga.args[0][1].page)
          .to.equal(virtualPageview.name);
      });
    });

    describe('a pageview name and a custom dimension', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<form action="/" method="post" data-virtual-pageview="${virtualPageview.name}" data-parameters="${virtualPageview.parameterKey}:${virtualPageview.parameterValue}">
            <input type="text" name="${virtualPageview.parameterName}" value="${virtualPageview.parameterValue}">
            <input class="button" type="submit" value="Add service">
          </form>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.virtualPageview.init();
      });

      before('Act', () => {
        document.querySelector('.button').click();
      });

      describe('It should call the ga function with', () => {
        it(`the page: ${virtualPageview.name}`, () => {
          expect(window.ga.args[0][1].page)
            .to.equal(virtualPageview.name);
        });
        it(`the parameter key: ${virtualPageview.parameterKey}`, () => {
          expect(window.ga.args[0][1])
            .to.include.any.keys(virtualPageview.parameterKey);
        });
        it(`the parameter value: ${virtualPageview.parameterValue}`, () => {
          expect(window.ga.args[0][1])
            .to.have.property(virtualPageview.parameterKey)
            .equal(virtualPageview.parameterValue);
        });
      });
    });

    describe('a pageview name and multiple custom dimensions', () => {
      before('Arrange', () => {
        document.body.innerHTML = `<form action="/" method="post" data-virtual-pageview="${virtualPageview.name}" data-parameters="${virtualPageview.parameterKey}:${virtualPageview.parameterValue} ${virtualPageview.anotherParameterKey}:${virtualPageview.anotherParameterValue}">
            <input type="text" name="${virtualPageview.parameterName}" value="${virtualPageview.parameterValue}">
            <input type="text" name="${virtualPageview.anotherParameterName}" value="${virtualPageview.anotherParameterValue}">
            <input class="button" type="submit" value="Add service">
          </form>`;
        window.ga = sinon.spy();
        window.GAAP.analytics.virtualPageview.init();
      });

      before('Act', () => {
        document.querySelector('.button').click();
      });

      describe('It should call the ga function with', () => {
        it(`the page: ${virtualPageview.name}`, () => {
          expect(window.ga.args[0][1].page)
            .to.equal(virtualPageview.name);
        });
        it(`the parameter key: ${virtualPageview.parameterKey}`, () => {
          expect(window.ga.args[0][1])
            .to.include.any.keys(virtualPageview.parameterKey);
        });
        it(`the parameter value: ${virtualPageview.parameterValue}`, () => {
          expect(window.ga.args[0][1])
            .to.have.property(virtualPageview.parameterKey)
            .equal(virtualPageview.parameterValue);
        });
        it(`the other parameter key: ${virtualPageview.anotherParameterKey}`, () => {
          expect(window.ga.args[0][1])
            .to.include.any.keys(virtualPageview.anotherParameterKey);
        });
        it(`the other parameter value: ${virtualPageview.anotherParameterValue}`, () => {
          expect(window.ga.args[0][1])
            .to.have.property(virtualPageview.anotherParameterKey)
            .equal(virtualPageview.anotherParameterValue);
        });
      });
    });
  });
});
