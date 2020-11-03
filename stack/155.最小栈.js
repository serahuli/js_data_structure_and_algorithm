/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min_VALUE = [];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack[this.stack.length] = x;
  if(this.min_VALUE.length === 0 || x <= this.min_VALUE[this.min_VALUE.length - 1]) {
      this.min_VALUE[this.min_VALUE.length] = x;
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if(this.stack[this.stack.length - 1] <= this.min_VALUE[this.min_VALUE.length - 1]){
      this.min_VALUE.length = this.min_VALUE.length - 1;
  } 
  this.stack.length = this.stack.length - 1;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min_VALUE[this.min_VALUE.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/