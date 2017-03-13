"use strict";

require('mocha-sinon');

var expect = require('chai').expect;
var assert = require('chai').assert;
var testFile = require('../index.js');

// Question 1. Tests

describe('Question #1.', function () {

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('should print out single defined param', function () {
    testFile.print_me(1);

    expect( console.log.calledOnce ).to.be.true;
    expect( console.log.calledWith(1) ).to.be.true;
  });

  it('should print out multiple defined params', function() {
    testFile.print_me(2, '3', 6, 'test string');

    expect( console.log.callCount === 4 ).to.be.true;
    expect( console.log.callCount === 2 ).to.be.false;
  });

});

describe('Question #2.', function() {

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('should print each element in array', function() {
    testFile.print_me([2, 5, 7, 8]);

    expect(console.log.callCount === 4).to.be.true;
  });

  it('should print out all elements of array and additional params', function() {
    testFile.print_me(['1', '2', '3'], 5, 7);

    expect(console.log.callCount === 5).to.be.true;
  });

});

describe('Question #3.', function() {

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('should print out params recursively', function() {
    var spy = this.sinon.spy( testFile.print_me );
    testFile.print_me(1)(2)(3);

    expect(console.log.callCount === 3).to.be.true;
  });

  it('should test something', function() {
    var spy = this.sinon.spy( testFile.print_me );

    spy.calledWith(1, 2, 'test string');
  });

});