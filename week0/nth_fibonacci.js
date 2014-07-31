"use strict";

//### Signature
//11235
//```javascript
var nth_fibonacci = function(n) {
  return n < 2 ? n : nth_fibonacci(n - 1) + nth_fibonacci(n - 2);
};


/*
function(n) {
    // implementation here
    var fib_num = 1,
    next_fib_num = 1,
    temp_fib_num = 1,
    i=1;
    while (i !== n){
       i++;
       temp_fib_num = next_fib_num;
       next_fib_num = fib_num + next_fib_num;
       fib_num = temp_fib_num;

    }
    return fib_num;
};
console.log(nth_fibonacci(10));
*/

// make the function available for testing
exports.nth_fibonacci = nth_fibonacci;
