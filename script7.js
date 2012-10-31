/**
	Subclassing using prototype (Namespaces version)
**/
var OOJS = OOJS || {};

// Define the constructor
OOJS.Engine = function (cylinders, cc, engineType){
	this.cylinders = cylinders;
	this.cc = cc;
	this.engineType = engineType;
}

OOJS.Engine.prototype.startEngine = function(){
	console.log("Starting engine with Engine Type = " + this.engineType + ", cylinders = " + this.cylinders + " and cc = " + this.cc);
}

OOJS.Engine.prototype.stopEngine = function(){
	console.log("Stopping engine with Engine Type = " + this.engineType + ", cylinders = " + this.cylinders + " and cc = " + this.cc);
}

// Define the constructor
OOJS.V8Engine = function(cylinders, cc, engineType){
	this.cylinders = cylinders;
	this.cc = cc;
	this.engineType = engineType;
}

OOJS.V8Engine.prototype.startV8Engine = function(){
	console.log("Starting engine with Engine Type = " + this.engineType + ", cylinders = " + this.cylinders + " and cc = " + this.cc);	
}

OOJS.V8Engine.prototype = new OOJS.Engine();

v8Engine = new OOJS.V8Engine(8, 2000, 'V8');

v8Engine.startEngine();
v8Engine.stopEngine();