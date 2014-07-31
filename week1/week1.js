"use strict";
/*
Sum only numbers. Concat only strings.

Implement two functions called sum and concat. Both functions take two arguments - a and b.

sum returns the sum of a and b only if a and b are numbers! Otherwise it throws a TypeError
concat returns the concatenation of a and b only if a and b are strings! Otherwise it throws a TypeError
*/

var sum = function(a, b){
  if(typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new TypeError("a and b should be numbers");
 }
};
exports.sum = sum;

var concat = function(a, b){
  if(typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new TypeError("a and b should be strings");
 }
};

//console.log(sum(10, 5));
//console.log(concat("I love ", "beer"));

/*
Contains. Find element in a list.

Using only higher-order functions and variables, implement contains with the following signature:
*/

var contains = function(element, arr) {
 return arr.filter(function(value){return value === element;}).length > 0;
};
//console.log(contains(5,[1,2,3,4,5]));


/*
Contains them all? Find a list in a list

Using only higher-order functions and variables, implement contains with the following signature:
*/
var containsAll = function(elements, arr) {
  return elements.every(function(element_to_find){
    return (arr.filter(function(value){return value === element_to_find;}).length > 0);
  });

};
//console.log(containsAll([1,2,3,4],[1,2,3,4,5]));
