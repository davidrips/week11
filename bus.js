// make a new node file called bus.js

// inside the bus.js file, make a bus constructor function, that has the following properties:

// studentsOnTheBus (array)

// driverName (string)

// color (string)

// gas (integer)

// studentEntersBus (function that adds a student to the studentsOnTheBus property)

// busChatter (function that outputs the students' catch phrases if they can have fun one by one)
// at the bottom of bus.js, export the constructor function

var Student = require('./student.js')

var Bus = function(driverName,color,gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function (n, g, gr, GPA, d, s, c){
  		this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
		};
	this.busChatter = function(){
		for (i=0; i<this.studentsOnTheBus.length; i++){
			if (this.studentsOnTheBus[i].canStudentHaveFun()===true){console.log(this.studentsOnTheBus[i].catchPhrase)}
		}
	};
}

module.exports = Bus;