/**
 * LinkedList costructor
 *
 * construct a new linked list
 * you may modify this constructor as needed to achieve the challenges below
 */
function LinkedList() {
    this.head = null;
    this.tail = null;
}

/**
 *
 * constructor for node in linked list
 */
function Node(val) {
    this.val = val;
    this.next = null;
}

/**
 * add - Adds given value to the beginning of the linked list.
 *
 * @param {string|number|boolean} val - value to be stored in linked list
 * @return {number} The new length of the linked list
 */
LinkedList.prototype.add = function (val) {
    //this.add()
    // if the list is empty, set new Node to this.head and this.tail
    if (!this.head) {
        this.head = this.tail = new Node(val)

        // otherwise, reassign this.head to new Node
    } else {
        let oldHead = this.head;
        this.head = new Node(val);
        this.head.nex = oldHead;
        oldHead.prev = this.head;
    }
};

/**
 * remove - find and delete the first occurrence of a value
 *
 * - If an item with the corresponding value does not exist, return undefined
 *
 * @param {string} val - value to be found and deleted from linked list
 * @return {string|number|boolean} The value deleted from the linked list
 */
LinkedList.prototype.delete = function (val) {
    // store head node
    let removed = this.head = this.prev = null;
    // if head holds the key, deleted head and changed head
    if (removed !== null && removed.value === val) {
        this.head = removed.next;
        return;
    }
    // Search for the key to be deleted, keep track of
    // the previous node as we need to change temp.next
    while (removed !== null && removed.value !== val) {
        this.head.prev = removed;
        removed = removed.nex
    }

    // if val was not present in linked list return undefined
    if (removed === null) return;
    this.prev.nex = removed.next;


    // define a counter and set it equal to zero
    let currentNode = this.head,
        output = 0;
    // start at the head node and iterate through list until value is found
    for (let i = 0; i < this.length; ++i) {
        if (currentNode.val.toString() == val) {
            // update count
            output++;
        }
        currentNode = currentNode.next;
    }
    // return either undefined or the value of the deleted node
    return output;


    //set a counter variable equal to zero
    //iterate over every node in the LinkedList
    //every val encounters during the iteration, the counter will be incremented by 1
    //return the counter variable at the end
    // let count = 0;
    // let currentNode = this.head;

    // while (currentNode) {
    //   if (val === currentNode.val) {
    //     count++;
    //   }
    //   currentNode = currentNode.next;
    // }
    // return count;
};

/**
 * count - Returns the number of times a given value appears in the linked list
 *
 * @param {string} val - value to find in linked list
 * @return {number} The number of times that value appears in the list
 */
LinkedList.prototype.count = function (val) {
    // define a counter and set it equal to zero
    let currentNode = this.head,
        output = 0;
    // start at the head node and iterate through list until value is found
    for (let i = 0; i < this.length; ++i) {
        if (currentNode.val.toString() == val) {
            // update count
            output++;
        }
        currentNode = currentNode.next;
    }
    // return either undefined or the value of the deleted node
    return output;
};

// Do not remove!!
module.exports = {
    LinkedList,
    Node
};
const lists = new LinkedList();
lists.add(10)
lists.delete(12)
lists.add(20)
lists.add(30)
lists.add(40)
console.log(lists)