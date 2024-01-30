// Array.prototype.map
// 배열을 수노히하며 callback의 결과값을 새로운 배열로 반환한다.

const array = [1, 2, 3, 4, 5];
const r = array.map(n => n * n);
console.log(r);
// (5) [1, 4, 9, 16, 25]
