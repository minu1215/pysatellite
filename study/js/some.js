var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [1, 3, 5];
var isEven = function(value) {

	//value가 2의 배수이면 true를 반환한다.
	return value % 2 === 0;
};
console.log(arr.some(isEven));
console.log(arr2.some(isEven));
