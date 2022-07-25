/*
Write a function (keywordCount) that takes as input an object of key-value
pairs and a string. The object can have as values numbers, booleans, strings,
or nested objects. There will be NO arrays or other object types in
the object. Your function should return the number of times the keyword
appears in the object. (Note: the keyword will never be an object key - only
a value)

ex.
const myObj = { a: 'hi', b: 'yo', c: { d: 'ciao', e: 'hi' } };
keywordCount(myObj, 'hi') --> 2
keywordCount(myObj, 'bye') --> 0
*/