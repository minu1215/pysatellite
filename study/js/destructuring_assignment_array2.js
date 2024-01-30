// 변수 교환
let a1 = 1;
let b1 = 3;
[a1, b1] = [b1, a1];
console.log(a1, b1);    // 3 1

// 일부 반환 값 무시
function f() {
    return [1, 2, 3];
}
const [a2, , b2] = f();
console.log(a2, b2);    // 1 3

// 나머지를 할당하기
//const a3, b3, rest;
//[a3, b3, ...rest] = [10, 20, 30, 40, 50];
const [a3, b3, ...rest] = [10, 20, 30, 40, 50];
console.log(a3, b3, rest);    // 10 20 [30, 40, 50]