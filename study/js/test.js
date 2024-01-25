let v1 = '1';
const v2 = '2';
function f(){
	console.log(v1);
	let v1 = '3';
	console.log(v1);
	console.log(v2);
}

f();
