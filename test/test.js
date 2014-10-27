'use strict';
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var sandbox;

//// SUT
var WalkerDom = require('../src/walker-dom');

describe('WalkerDom', function() {

  var walkerDom;
  var result;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    walkerDom = new WalkerDom();
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('child', function() {

    beforeEach(function() {
      result = walkerDom.child({
        firstChild: '123'
      });
    });

    it('should return the value of firstChild', function() {
      expect(result).to.equal('123');
    });

  });

  describe('sibling', function() {

    beforeEach(function() {
      result = walkerDom.sibling({
        nextSibling: '456'
      });
    });

    it('should return the value of nextSibling', function() {
      expect(result).to.equal('456');
    });

  });

});