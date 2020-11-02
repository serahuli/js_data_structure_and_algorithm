function getFibonacci(fibNum) {
  var fibonacci = [];
  fibonacci[0] = 1;
  fibonacci[1] = 1;

  for(let i = 2; i <= fibNum; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci[fibNum];
}

let fibArr = [];
for(let i = 0; i < 4; i++) {
  fibArr.push(getFibonacci(i));
}
console.log(fibArr);