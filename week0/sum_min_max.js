/*
## Sum the minimum and maximum elements

Given an array of integers, implement a function, called `sum_of_min_and_max(arr)`, that calculates and returns the sum of the largest and the smallest integers in the array.

Don't bother for the case when the array is empty.

### Signature

```javascript
    // implementation
}
```

### Test examples
```javascript
sum_of_min_and_max([1,2,3,4,5,6,8,9]) === 10
sum_of_min_and_max([-10,5,10,100]) === 90
sum_of_min_and_max([1]) === 2
*/

var sum_of_min_and_max = function(arr) {
    // implementation
var min = arr[0];
var max = arr[0];
arr.forEach(function(value){
  if (value < min) {
    min = value;
  }
  if (value > max) {
    max = value;
  }
});
return min + max;
};

console.log(sum_of_min_and_max([1,2,3,4,5,6,8,9]));
