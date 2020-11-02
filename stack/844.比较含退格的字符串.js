/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

/**
 * 1. 处理字符串
 */
var backspaceCompare = function(S, T) {
  return formatString(S) === formatString(T);
};

var formatString = function (S) {
  if(S.length === 0) return '';
  const reg = /[a-z]#/g;
  do {
    if(S[0] === '#') S = S.replace(S[0], '')
    if(S.length > 0) {
      const matchArr = S.match(reg)
      if(matchArr) {
        matchArr.forEach(item => S = S.replace(item, ''));
      }
    }
  } while (S.indexOf('#') !== -1);
  return S;
}

console.log(formatString('b'))

/**
 * 2
 */


 // 注意点：：： ==== 创建的 a 是引用类型，所以必须要换成字符串比较，地址一直是一样的，而且内部函数一定要 return!!!
var backspaceCompare = function(S, T) {
  var formatString = (s, a = []) => {
    for(let i = 0; i < s.length; i++) {
      s[i] === '#' ? a.pop() : a.push(s[i]);
    }
    return a;
  }
  return formatString(S).join('') === formatString(T).join('');
};

console.log(backspaceCompare('a##c', '#a#c'));