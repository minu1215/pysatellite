// 함수 본문이 한 줄인 경우 return과 중괄호를 생략할 수 있다.
var func = x => x * x;	// concise 바디
var func = (x, y) => { return x + y; };	// block 바디

// 객체 리터럴을 반환할 때는 괄호로 써야 한다.
// no
var func = () => {foo: 1};
// func() 호출은 undefined를 반환;

// yes
var func = () => ({foo: 1});

// 줄바꿈은 안된다.
var func = () => 1;
//=> 1;
// SyntaxError

