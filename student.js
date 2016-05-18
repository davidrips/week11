
// Inside student.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.

// Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.

// export the student constructor at the bottom of the file
var prompt = require('prompt');

var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass= sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun= function(){if ((detentions<10)&&(GPA>2)){console.log("They can have fun!");return true}else{console.log("NO FUN"); return false}};
}

function newStudent(){
prompt.get (['name','gender','grade','gpa','detentions','sleepingInClass','catchPhrase'], function(err, result){
		name = result.name;
		gender= result.gender;
		grade = result.grade;
		gpa= result.gpa;
		detentions = result.detentions;
		sleeping=result.sleepingInClass;
		phrase = result.catchPhrase;

		var aStudent = new Student(name,gender,grade,gpa,detentions,sleeping,phrase);
		console.log(aStudent.canStudentHaveFun());
		


})};


module.exports = Student;

