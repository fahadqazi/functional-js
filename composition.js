// Composition not so pure
function add(a,b){
	return a+b;
}

function mul(a,b){
	return a*b;
}

console.log(add(mul(2,3),5));

//Manual composition

function multAdd(a,b,c){
	return add(mul(a,b),c);
}

console.log(multAdd(2,3,5));