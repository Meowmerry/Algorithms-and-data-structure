// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  // re-assign this.storage to the value
  // increment index by 1
  this.storage[this.index] = value;
  this.index += 1;
};

Stack.prototype.pop = function() {
  const popped = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return popped;
};
