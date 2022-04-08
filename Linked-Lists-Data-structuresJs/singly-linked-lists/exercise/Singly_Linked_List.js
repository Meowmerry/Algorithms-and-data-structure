class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop() {
        let currentHead = this.head;
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
const lists = new SingleLinkedList()
lists.push(10);
lists.push(20);
lists.push(30);
lists.pop()
console.log(lists)