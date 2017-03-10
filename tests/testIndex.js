"use strict";

var chai = require('chai');
var assert = chai.assert;

var testFile = require('../index.js');
var print_me = testFile.print_me;

describe('print_me', function() {
  var result = print_me(4);

  assert.equal(result, 4, "Result is 4.");
});