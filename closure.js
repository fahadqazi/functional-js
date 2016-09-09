//This version of closure is not very function or pure
//because state is being changed
function foo(){
	var counts = 0;
	return function(){
		return counts++;
	}
}

var x = foo();

console.log(x());
console.log(x());
console.log(x());
console.log(x());

// More function and pure example here..

function sum(x){
	return function(y){
		return x+y;
	};
}

var add10 = sum(10);

console.log(add10(3));
console.log(add10(4));

//ex11

function foo1(a,b){
	return function(){
		return a+b;
	}
}
var res1 = foo1(2,3);
console.log('res1 ',res1());
