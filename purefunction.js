// 1.Impure function is one that can change the outside state

function foo(x){
	y++;
	z = y * x;
}

var y=5, z;

foo(20);
console.log('First impure funciton call: ',z);

foo(20);
console.log('Second impure function call: ', z);

// 2. Pure function is one that doesn't change outside state
function bar(x,y){
	var z;
	foo(x);
	return z
	function foo(x){
		y++;
		z = x*y;
	}
}

console.log('first pure function call: ', bar(20,5));
console.log('Second pure function call: ', bar(20,5));
