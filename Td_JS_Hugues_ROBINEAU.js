function adder(l,m){
	return function(v){
		return m(v)+l(v);
	}
}

function mult(v){
	return function(e){
		return v*e;}
}

function adder_multiple(){
	var args = Array.prototype.slice.call(arguments);
	return function(v){
		var sum=0;
		args.forEach(function adding(value){sum += value(v);})
		return sum;		
	}					
}


function sub(x){
	return function(y){
		return x-y;
	}
}
