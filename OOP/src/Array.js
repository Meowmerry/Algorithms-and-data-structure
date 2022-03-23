// the following constructor function should create an object with a push and pop method
// do not use the built-in array type or its methods
// ===========  Using the prototype chain  ================
function Erray() {
  this.contents = {};
  this.length = 0;
}

/* create a method push use prototype */
Erray.prototype.push = function (...values) {
  // iterates through values input use a for loop
  for (let i = 0; i < values.length; i += 1) {
    // assign the values of this contents with each value
    this.contents[this.length] = values[i];
    // increment length by 1
    this.length++;
  }
  // return this.length
  return this.length;
};
/* create a method pop use prototype */
Erray.prototype.pop = function () {
  // check if this.length is === 0, return undefined
  if (this.length === 0) return undefined;
  // declare the element to return assign to the last element in contents
  const poped = this.contents[this.length - 1];
  // delete the last element
  delete this.contents[this.length - 1];
  // decrement this.length by 1
  this.length--;
  // return element
  return poped;
};
/* create a method unshift use prototype */
Erray.prototype.unshift = function (...elements) {
  // iterate through the elements array
  for (let i = 0; elements[0] !== undefined; i += 1) {
    // iterate left through contents and reassign each value to the value at the next lower index
    for (let j = this.length; j > i; j -= 1) {
      this.contents[j] = this.contents[j - 1];
    }
    // remove final value in elements, reassign contents[i] to that value, and increment length
    this.contents[i] = elements.shift();
    this.length++;
  }
  // return the updated length property
  return this.length;
};
/* create a method shift use prototype */
Erray.prototype.shift = function () {
  // if length is already 0, stop execution
  if (this.length === 0) return;
  // decrement length and declare a variable shifted initialized to the final value in contents
  this.length--;
  const shifted = this.contents[0];
  // iterate through contents and reassign each value to the value at the subsequent index
  for (let i = 0; i < this.length; i += 1) {
    this.contents[i] = this.contents[i + 1];
  }
  // delete the final element in contents and return shifted
  delete this.contents[this.length];
  return shifted;
};

var array = new Erray();
console.log(array.push(1));
console.log(array.push());
console.log(array.shift(2));
console.log(array.unshift());
console.log("len==>", array.length);
console.log(array);


class Erray {
  constructor() {
    this.contents = {};
    this.length = 0;
  }

  /* create a method push use prototype */
  push(...args) {
    //iterates thrugh args use a for of loop to get value
    for (let arg of args) {
      // assign each arg to this contents
      this.contents[this.length] = arg;
      // increment this length by 1
      this.length++;
    }
  }

  /* create a method pop use prototype */
  pop() {
    // check if this.length is === 0, return undefined
    if (this.length === 0) return undefined;
    // declare a variable assign to the last element of this contents
    const poped = this.contents[this.length - 1];
    // delete last element 
    delete this.contents[this.length - 1];
    // decements this length by 1
    this.length--;
    // return value which poped out;
    return poped;
  }

  /* create a method unshift use prototype */
  unshift(...args) {
    // iterates thruogh the args, check if the first args is not undefined
    for (let i = 0; args[0] !== undefined; i += 1) {
      // iterates through i, set first index equal to this length and reassign each element at the next lower index
      for (let j = this.length; j > i; j -= 1) {
        this.contents[j] = this.contents[j - 1];
      }
      // remove element in args, reassign contents[i] to that element, and increment length
      this.contents[i] = args.shift();
      this.length++;
    }
    //then return length
    return this.length;
  }

  /* create a method shift use prototype */
  shift() {
    // check if this.length is === 0, return undefined
    if (this.length === 0) return undefined;
    //decrement this length, and declare a variable to the first element in contents
    this.length--;
    const shifted = this.contents[0];
    //iterate through this length use a for loop
    for (let i = 0; i < this.length; i += 1) {
      // reassign this contents to the subsequents with next element
      this.contents[i] = this.contents[i + 1]
    }
    // delete the final element in contents 
    delete this.contents[this.length];
    // return shifted
    return shifted;
  }
}


var array = new Erray();
console.log(array.push(1));
console.log(array.push());
console.log(array.shift(2));
console.log(array.unshift());
console.log("len==>", array.length);
console.log(array);
