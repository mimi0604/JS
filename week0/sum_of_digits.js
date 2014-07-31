

var sum_of_digits = function(n) {
    // implementation
    var digit_sum = 0;
    for (i = 0; i <(''+n).length; i++) {
       digit_sum = digit_sum + parseInt((''+n)[i]);
    }
    return digit_sum;
};
console.log(sum_of_digits(123));


