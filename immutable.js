var x = 2;
x++; //yes

const y = 3;
y =5; //no

const z = [1,2,3];
z = 10; //no
z[0] = 5; //yes

const w = Object.freeze([5,6,7]);
w = 15; //no
w[0] = 9 //no

//impure and mutable function
//double array vals

function doubleArr(list){
	for(var i=0; i<list.length; i++){
		list[i] = list[i] * 2;
	}
	return list;
}
var arr1 = [1,2,3];
console.log(doubleArr(arr1));

//slightly purer way of doing it

function doubleArr2(list){
	var newlist = [];
	for(var i=0; i<list.length; i++){
		newlist[i] = list[i]*2;
	}
	return newlist;
}

var arr = [1,2,3,4];
result = doubleArr2(arr);
console.log(result);