function LinkedList(...value) {
  this.head = null;
  this.tail = null;
  this.length = 0;
  if (value) {
    let newList = { ...value }
    for (const key in newList) {
      this.push(newList[key])
    }
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.back = null;
}

// adds node to end of list
LinkedList.prototype.push = function (value) {
  if (!this.tail) {
    this.head = this.tail = new Node(value);
  } else {
    let oldTail = this.tail;
    this.tail = new Node(value);
    oldTail.next = this.tail;
    this.tail.back = oldTail
  }
};

// returns true if value is present in the list
LinkedList.prototype.contains = function (value) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) return true;
    currentNode = currentNode.next;
  }
  return false;
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function (value) {
  if (!this.head) {
    this.head = this.tail = new Node(value)
  } else {
    let oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
    oldHead.back = this.head;
  }
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function (value, position) {// need to have a length, assign to position

  //   //if position = 0, use method add to head
  //   if (position === 0) this.addToHead(value);
  //   else {
  //     let currentNode = this.head;
  //     let count = 0;  // <--version 1 using count variable
  //     while (count < position) {  // <--version 1 using count variable
  //       if (count === position - 1) {  // <--version 1 using count variable
  //     // while (position > 0) {   // <--refactored version 2 w/out count variable
  //     //   if (position === 1) {  // <--refactored version 2 w/out count variable
  //         let tempNode = currentNode.next;
  //         currentNode.next = new Node(value);
  //         currentNode.next.next = tempNode;
  //       }
  //       currentNode = currentNode.next;
  //       count++;  // <--version 1 using count variable
  //       // position--;  // <--refactored version 2 w/out count variable
  //     };
  //   }
  // }


  // declare a node with new Node passed in value
  let node = new Node(value)
  // check if this.head === null
  if (this.head === null) {
    // assign node to this.head, so will be value we passed in
    this.head = node
    // increment length 
    this.length++
    // return this.head
    return this.head
  }
  // declare a variable count assign to 1
  let count = 1;
  // declare a variable currNode to store this.head if this.head is not unll
  let currNode = this.head
  // iterate check if currNode.next !== null && count < position, to point to nextNode
  while (currNode.next !== null && count < position) {
    // reassing currNode to currNode.next, so we point to next Node
    currNode = currNode.next
    // increment count
    count++;
  }
  // set node next will be the currNode next
  node.next = currNode.next
  // change node be next node (currNode) by assign to currNode
  currNode.next = node
  // increment length by 1
  this.length++
  // return node
  return node
}

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function (value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function (position) {

};

// const list = new LinkedList()
// list.insert(5, 0);
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.insert(8, 3);
//console.log(list)

const newList = new LinkedList(5, 1, 2, 6, 8)
//console.log('--->', newList) 
newList.addToHead(7)
console.log('--->', newList) 