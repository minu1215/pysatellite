// 객체 구조 분해 할당
// 기본값 할당
const {a1 = 10, b1 = 5} = {a1: 3};
console.log(a1, b1);  // 3 5

// 기본값 갖는 새로운 이름의 변수에 할당
const {a2:aa = 10, b2:bb = 5} = {a2: 3};
console.log(aa, bb);    // 3 5

// 나머지 분해 할당
const {a3, b3, ...rest} = {a3:10, b3:20, c:30, d:40};
console.log(a3, b3);    // 10 20
console.log(rest);  // { c: 30, d: 40 }