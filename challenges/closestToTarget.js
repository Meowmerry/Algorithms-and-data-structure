
/*
Write a function (closestToTarget) that takes as input an array of numbers, a
callback function, and a target number. closestToTarget will pass each number
in the array to the callback and return the number in the original array
whose callback value is closest to the target number. (If more than one are
the closest, return the first one.)

ex.
function flipEvens(num) { return (num % 2 === 0) ? -num : num; }
const myArr = [3, -2, 6, 0];

closestToTarget(myArr, flipEvens, 5) --> 3 (myArr[0])
closestToTarget(myArr, flipEvens, -5) --> 6 (myArr[2])
*/