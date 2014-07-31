"use strict";

// we require the module name - without .js
// and after this - the function that we want to test
var sum = require("./week1").sum;

exports.sumTrue = function(test) {
  test.throws(function(){
    sum(5,"string 2");
  });
  test.done();
};
