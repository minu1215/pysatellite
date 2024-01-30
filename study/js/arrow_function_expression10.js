// Array.prototype.reduce
// 배열을 순회하며 callback 결과값을 a에 누적한다. (a: accumulator, b: elements)

const array = [1, 2, 3, 4, 5];
const r = array.reduce((a, b) => a + b, 0 /* initial value */);
console.log(r);
