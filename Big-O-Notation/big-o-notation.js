/*
===========================================================================
****  Objectives  *****
===========================================================================
 
Motivate the need for something like Big O Notation
Describe what Big O Notation is
Simplify Big O Expressions
Define "time complexity" and "space complexity"
Evaluate the time complexity and space complexity of different algorithms using Big O Notation
Describe what a logarithm is



****   What's the idea here?  ****  
Imagine we have multiple implementations of the same function.

How can we determine which one is the "best?"

"Write a function that accepts a string input and returns a reversed copy"
Great!
Pretty Good
Only OK
Ehhhhh
Awful


===========================================================================
****  Who Cares? *****
===========================================================================

It's important to have a precise vocabulary to talk about how our code performs
Useful for discussing trade-offs between different approaches
When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
Less important: it comes up in interviews!


===========================================================================
****  What does better mean? *****
===========================================================================
- Faster?
- Less memory -  intensive?
- ore readable? ?

===========================================================================
****  The Problem with Time *****
===========================================================================
- Diffeent machines will record differnet times
- The same machine will recourd different times
- For fast algorithms, speed measurements may not be precise enough?



===========================================================================
****  If not time, then what? *****
===========================================================================
- Rather than counting secounds, which are so variable
- let's count the number of simmple operations the computer has to perform!

===========================================================================
****  Cunting Operations *****
===========================================================================
*/
//An Example
function addUpTo(n) { // have so in loop we multiple operations time N --> N additions or N asignments 
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function addUpTo(n) {
    return n * (n + 1) / 2;  // --> have 3 operstions
}
//Which one is better?