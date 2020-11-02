/**
 * @param {string} S
 * @return {number}
 */

/**
 * 思路分析
 * 1. 创建一个新数组 newArr 长度为空，或者为 S.length
 * 2. 循环遍历 S
 *    2.0 2.2.0 ===== 思路修正： 如果是第一项，直接 push  ===== pass
 *    2.1 如果当前是 (, 就不用比较，直接push 到新数组 newArr
 *    2.2 如果当前是 ）
 *      2.2.0 ===== 思路修正： 如果是第一项，直接 push  ===== 去掉这一项
 *      2.2.1 如果新数组 newArr 已有项存在 ( , 就去掉 newArr 里面的 ( 一次, 再去掉当前项，一共去掉两项  
 *            ==== 思路修正：不用去掉该项，因为这一项不会加进去。
 *      2.2.2 如果新数组 newArr 不存在 (, 就直接 push 到新数组后面
 * 3. 返回 新数组长度。
 * 4. 临界检测：======》 好像不需要临界检测
 */
var minAddToMakeValid = function(S) {
  // 1. 创建一个新数组 newArr 长度为空，或者为 S.length
  let newArr = new Array();
  // 2. 循环遍历 S
  for(let i = 0; i < S.length; i++) {
    // 2.1 如果当前是 (, 就不用比较，直接push 到新数组 newArr
    if(S[i] === '(' || newArr.length === 0) newArr.push(S[i]);
    // 2.2 如果当前是 ）
    else {
      // 2.2.2 如果新数组 newArr 不存在 (, 就直接 push 到新数组后面
      if(newArr.indexOf('(') === -1) {
        newArr.push(S[i]);
      }
      // 2.2.1 如果新数组 newArr 已有项存在 ( , 就去掉 newArr 里面的 ( 一次, 再去掉当前项，一共去掉两项
      else {
        for(let j = newArr.length; j > 0; j--) {
          if(newArr[j - 1] === '(') {
            newArr.splice(j - 1, 1);
            break;
          }
        }
      }
    }
  }
  return newArr.length;
};

console.log(minAddToMakeValid("()))(("));