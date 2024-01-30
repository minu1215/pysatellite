var x = 1;
function varTest() {
	const x = 2;
	console.log(x); // 2
}
varTest(); // 2
console.log(x); // 1


for(let i = 0; i < 3; i++) {
	var x = 10;
}
console.log(x); // 10
console.log(i); // Reference Error: 1 is not defined

