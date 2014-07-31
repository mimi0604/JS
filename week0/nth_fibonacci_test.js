"use strict";

// we require the module name - without .js
// and after this - the function that we want to test
var nth_fibonacci = require("./nth_fibonacci").nth_fibonacci;

exports.testFirstFibonacci = function(test) {
  test.equal(1, nth_fibonacci(1));
  test.done();
};
exports.testSecondFibonacci = function(test) {
  test.equal(1, nth_fibonacci(2));
  test.done();
};
exports.testThirdFibonacci = function(test) {
  test.equal(2, nth_fibonacci(3));
  test.done();
};
exports.testForthFibonacci = function(test) {
  test.equal(55, nth_fibonacci(10));
  test.done();
};


//### Test examples

//```javascript
//nth_fibonacci(1) === 1


//nth_fibonacci(2) === 1
//nth_fibonacci(3) === 2
//nth_fibonacci(10) === 55
