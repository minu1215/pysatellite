// method로 사용할 경우 this 바인딩이 되지 않는다.
var obj = {
	i: 10,
	b: () => console.log(this.i, this),
	c: function() {
		console.log(this.i, this)
	}
}
obj.b(); // prints undefined, Window
obj.c(); // prints 10, Object (...)

// 화살표 함수에서는 arguments 객체가 바인딩되지 않는다.
const args = () => console.log(arguments);
args();
