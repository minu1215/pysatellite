// arrow function 연결
const f = b => a => a + b + 1;
console.log(f(1));	// a => a + 1 + 1;
console.log(f(1)(10));	// 12

