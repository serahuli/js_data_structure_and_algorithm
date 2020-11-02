/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

/**
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.min();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.min();   --> 返回 -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // 1
  // this.stack.push(x);
  // 2
  this.stack[this.stack.length] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 1
  // this.stack.pop();
  // 2
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
MinStack.prototype.min = function() {
  var stackArr = [];
  for(let i = 0; i < this.stack.length; i++) {
    stackArr[i] = this.stack[i];
  }
  stackArr.sort((a, b) => a - b);
  return stackArr[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();
// minStack.pop();
// minStack.top();
// minStack.min();