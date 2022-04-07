/*
* ======= Pushing ========
Adding a new node to the end of the Linked List!

* Pushing pseudocode
Let's visualize this!
- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
Increment the length by one
- Return the linked list
*/
// create a class Node accept val
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// crete SinglyLinkedList class 
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // create push method accept value
    // Create a new node using the value passed to the function
    //  If there is no head property on the list, set the head and tail to be the newly created node
    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //  ==> 20 --> tail  , oldValue 10 --> this.
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }
}
const lists = new SinglyLinkedList();
lists.push(10)
console.log(lists)