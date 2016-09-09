//list transformation 
//MAP
function doubleIt(v){return v*2;}

function transform(arr,fn){
	var new_list = [];
	for(var i=0; i<arr.length; i++){
		new_list[i] = fn(arr[i]);
	}
	return new_list;
}

var res = transform([1,2,3,4,5,6],doubleIt)
console.log(res) 

var res1 = [1,2,3,4,5].map(doubleIt)
console.log(res1);

//FILTER
function isOdd(v){return v%2 == 1;}

function exclude(arr, fn){
	var new_list = [];
	for(i=0; i<arr.length; i++){
		if(fn(arr[i])){
			new_list.push(arr[i]);
		}
	}
	return new_list;
}

var res2 = exclude([1,2,3,4,5,6,7],isOdd);
console.log(res2);

var res3 = [9,8,7,6,5,4,3,2,1].filter(isOdd);
console.log(res3);

//REDUCE => multiply all values in array
 function mult(x,y){return x*y;}

 function compose(arr, fn, initial){
 	var total = initial;
 	for(var i=0; i<arr.length; i++){
 		total = fn(total, arr[i]);
 	}
 	return total;
 }

 var res3 = compose([1,2,3,4,5,6],mult,1);
 console.log(res3);


 //REDUCE => Add all values in an array

function add(x,y){return x+y;}

function compose1(arr, fn, initial){
	var total = initial;
	for(var i=0; i<arr.length; i++){
		total = fn(total, arr[i]);
	}
	return total;
}

var res4 = compose1([1,2,3,4,5], add, 0);
console.log(res4);


//Iterate - forEach
function logger(v){console.log(v);}

function iterate(arr,fn){
	for(var i=0; i<arr.length; i++){
		fn(arr[i]);
	}
}

var res5 = iterate([1,2,3,4,5], logger);
console.log(res5);

[9,8,7,6,5].forEach(logger);

///EXERCISE (values wrapped in a function)
//-easier to compose two functions together than it is numbers
function foo(){return 32;}

function bar(){return 88;}

function add(x,y){return x+y;}

function add2(fn1, fn2){
	return add(fn1(), fn2());
}

var res6 = add2(foo,bar);
console.log(res6);

function foo1(a){
	return function(){
		return a;
	};
}

function bar1(b){
	return function(){
		return b;
	};
}

var res7 = add2(foo1(32), bar1(88));
console.log(res7);

function addn (arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++) {
		sum = add2(foo(arr[i]), foo(sum));
	}
	return sum;
}


// function addn(arr){
// 	return arr
// 			.reduce(function(prev,cur){
// 				return function(){
// 					return add2(prev, cur);
// 				};
// 			}, foo(0))();
// }

// addn(foo(10), foo(42), foo(55), foo(53));


/// getting an array of number and converting it into an array of 
/// functions. 

var arr = [1,2,3,4,5];
function fnConvert(x){
	return function(){
		return x;
	};
};
  
var res8 = arr.map(fnConvert);
console.log(res8);


var arr = [1,2,3,34,4,5,6,6,7,7]
	.filter(isEven)
	.map(foo);

addn(...arr);
