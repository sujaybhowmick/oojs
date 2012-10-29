/**
	Polymorphism -  Since Javascript is not strongly types 
	we can achieve polymorphism by defining Objects with 
	the same method	
**/

function Foo(){
	this.x = 1;
	this.y = 2;
	this.sayHello = sayHelloFoo;
}

function sayHelloFoo(name){
	console.log("Hello " + name + " from Foo");
}

function Bar(){
	this.a = 3;
	this.b = 4;
	this.sayHello = sayHelloBar;
}

function sayHelloBar(name){
	console.log("Hello " + name + " from Bar");
}

function polymorph(object){
	object.sayHello('"Sujay Bhowmick!!!"');
}

foo = new Foo;
bar = new Bar;

polymorph(foo);
polymorph(bar);