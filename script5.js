/**
	Subclassing using prototype
**/
function Engine(cylinders, cc, engineType){
	this.cylinders = cylinders;
	this.cc = cc;
	this.engineType = engineType;
}

Engine.prototype.startEngine = function(){
	console.log("Starting engine with Engine Type = " + this.engineType + ", cylinders = " + this.cylinders + " and cc = " + this.cc);
}

Engine.prototype.stopEngine = function(){
	console.log("Stopping engine with Engine Type = " + this.engineType + ", cylinders = " + this.cylinders + " and cc = " + this.cc);
}


function V8Engine(cylinders, cc, engineType){
	this.cylinders = cylinders;
	this.cc = cc;
	this.engineType = engineType;
}

V8Engine.prototype.startV8Engine = function(){
	console.log("Starting engine with Engine Type = " + this.engineType + ", cylinders = " + this.cylinders + " and cc = " + this.cc);	
}

V8Engine.prototype = new Engine();

v8Engine = new V8Engine(8, 2000, 'V8');

v8Engine.startEngine();
v8Engine.stopEngine();