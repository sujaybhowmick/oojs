/**
 Using Prototype
**/

function Foo(){
	this.x = 1;
}

Foo.prototype.y = 2;

Foo.prototype.incrementX = function(){
	this.x++;
}

foo = new Foo;

console.log("foo.y = " + foo.y);

foo.y = 3;

console.log("foo.y = " + foo.y);

foo.incrementX();

console.log("after calling incrementX, x = " + foo.x);