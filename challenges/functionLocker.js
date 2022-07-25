/* Write a function (functionLocker) that takes in two functions as input and
returns a new function.
The first input function will be a predicate function that takes a number as
input and returns true if the number passes a certain test; false otherwise.
The second input function is a secret function that takes an unknown number of
parameters.
The returned function takes a number as its first parameter. If the number
passes the predicate function, the secret function runs with any additional
parameters passed into it. If the predicate fails, return undefined;

ex.
function isEven(num) { return num % 2 === 0; }
function addStrings(a, b, c) { return a + '--' + b + '--' + c; }

const lockedFunc = functionLocker(isEven, addStrings);

lockedFunc(4, 'I', 'love', 'Codesmith') --> 'I--love--Codesmith'
lockedFunc(3, 'I', 'love', 'Codesmith') -->  undefined
*/
