var two = function() {
	return 2;
}

var caller = function(f) {
	return f();
}
caller(two);

var f = function() {
	return two;
}

