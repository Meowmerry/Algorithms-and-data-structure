/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). 
 *  The parameters entered may have puncutations and symbols, 
 *  but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {
  //convert string to lowercase /\W/g, '' /\[a-z]/g  //remove all space and punctuation 
  let str = string.replace(/\W/g, '').toLowerCase()
  // base case if !str || str.length === 1 return true
  if (!str || str.length===1) return true
  // if str[0] != str[str.length-1] return false
  if (str[0] != str[str.length-1]) return false
  // recursive case : in each recursive call, we compare the first char with the last char 
  // recursive call with passed string with the first char and last char that, we move
  // return the result 
  return palindrome(str.slice(1,-1))
}

/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */

// function isPrime(num , div = 2) {
//     // prime is only divide my itself
//     // check every number of the remainder until num === 1 return true
//     // base case : if number is 1 return false
//     if(num < div)  return false;
//     // if reach the orinal num return true
//     if(num === div) return true;
//     // check if the remainder is 0 return false
//     if(num % div === 0) return false;
//     // recursive case : 
//     // call function itself, passed next number 
//     return isPrime(num, div + 1)
// }
// const isPrime = (num) => {
//   if (num < 2) return false;
//   if (num === 2) return true;
//   if (!(num % 2)) return false;
//   return isPrimeRecursive(num, 3, Math.floor(Math.sqrt(num)));
// }
// const isPrimeRecursive = (num, divisor, max) => {
//   if (divisor > max) return true;
//   if (!(num % divisor)) return false;
//   return isPrimeRecursive(num, divisor + 1, max);
// }

// console.log(isPrime(10007))
function  isPrime(num) {
    if(num < 2) return false;
    let count = 2;
    while(count < num){
        if(num % count === 0) return false;
        count ++
    }
    return true;
}
console.log(isPrime(10007))

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, 
 * and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the 
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be 
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the 
 * performance difference.
 */

function nthFibonacci(num) {
  const storage = {};
  function inputFibonacci(num){
    if(storage[num]) return storage[num];
    else {
        if (num === 0) return 0;
        if (num === 1) return 1;
        storage[num] = inputFibonacci(num -1) + inputFibonacci(num - 2) 
     return storage[num]
    }
  }
  return inputFibonacci(num)
}

// function nthFibonacci(num) {
//   if (num === 0) return 0;
//   if (num === 1) return 1;
//   return nthFibonacci(num - 1) + nthFibonacci(num - 2);
// }

/** returns a function with a context bound to this
 * 
 * const mattObj = {
 *  name: 'matt',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * let boundShout = functionBind(mattObj.shout, mattObj); 
 * boundShout(); -> prints 'matt;
 * 
 * const kimObj = {
 *  name: 'kim',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * boundShout = functionBind(mattObj.shout, kimObj);
 * boundShout(); -> prints 'kim'
 * 
 * boundShout = functionBind(mattObj.shout, {name: 'bob'});
 * boundShout(); -> prints 'bob'
 */
function functionBind(func, context) {

}

/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num) {
    
}

function insertionSort(array) {
    
}

function bubbleSort(array) {
    
}

function mergeSort(array) {
    
}
