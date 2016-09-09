sumRecur(2,3,4,5);

function sumRecur(...args){
	if(args.length <= 2){
		return args[0] + args[1];
	}
	return(args[0] + 
		sumRecur(...args.slice(1));
 

 //exercise

 function mult(..args){
 	if(args.lenght <= 2){
 		return args[0]*args[1];
 	}
 	return(args[0] + mult(...args.slice(1)))
 }

 mult(1,2,3,4);