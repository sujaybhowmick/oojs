/**
	Assign other functions to properties in a constructor
**/
function Foo(){
	this.x = 1;
	this.y = 2;
	this.bar = myFunction;	
}

function myFunction(name){
	console.log("Hello " + name);
}

foo = new Foo;
console.log("foo.x = " + foo.x);
console.log("foo.y = " + foo.y);
foo.bar('"Sujay Bhowmick !!!"');
console.log("foo.constructor = " + foo.constructor.name);