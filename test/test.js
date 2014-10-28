'use strict';
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

//// SUT
var WalkerDom = require('../src/walker-dom');

describe('WalkerDom', function() {

  var sandbox;
  var walkerDom;
  var callback;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    walkerDom = new WalkerDom();
    callback = sandbox.spy();
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('child', function() {

    beforeEach(function() {
      walkerDom.child(callback, {
        firstChild: '123'
      });
    });

    it('should call the callback with the value of firstChild', function() {
      expect(callback).to.have.been.calledWith('123');
    });

  });

  describe('sibling', function() {

    beforeEach(function() {
      walkerDom.sibling(callback, {
        nextSibling: '456'
      });
    });

    it('should call the callback with the value of nextSibling', function() {
      expect(callback).to.have.been.calledWith('456');
    });

  });

});