// do not use any native array methods
function Queue() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.enqueue = function (value) {
    this.storage[this.tail] = value;
    this.tail += 1;
};

Queue.prototype.dequeue = function () {
    if (this.storage[this.head] === undefined) return undefined;
    const remove = this.storage[this.head];
    delete this.storage[this.head];
    this.head += 1;
    return remove;
};
const queue = new Queue()
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue()
console.log(queue) 