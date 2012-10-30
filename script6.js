/**
	Use of Namespace to modularize Javascript code
**/

var OOJS = OOJS || {};

OOJS.Foo = function(){
	this.x = 1;
	this.y = 2;
	var xp = 100;
	this._get = function() { return xp};
}

OOJS.Foo.prototype.get = function(key){
	return this[key];
}

OOJS.Foo.prototype.set = function(key, value){
	return this[key] = value;
}

OOJS.Foo.prototype.toString = function(){
	return "x = " + this.get('x') + ", y = " + this.get('y');
}

foo = new OOJS.Foo;
console.log(foo.toString());
foo.set('x', 3);
foo.set('y', 4);
console.log(foo.toString());
console.log("Private member xp = " + foo._get('xp'));

var OOJS2 = OOJS2 || {};

OOJS2.Foo = function(){
	this.a = 3;
	this.b = 4;
}

OOJS2.Foo.prototype.myMethod = function(){
	console.log("calling myMethod OOJS2.Foo.myMethod");
}

OOJS2.Foo.prototype.toString = function(){
	return "a = " + this.a + ", b = " + this.b;
}

foo = new OOJS2.Foo;
console.log(foo.a);
foo.myMethod();
console.log(foo.toString());