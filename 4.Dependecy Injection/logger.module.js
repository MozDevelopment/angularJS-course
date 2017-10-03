var app = angular.module("logger", []);

app.controller("LoggerController", LoggerController);

function LoggerController() {}

app.service("instructors", Instructors);

app.service("courses", Courses);

app.service("courseMap", CourseMap);

function Log() {
	var logC = 0;
	console.info("Log created: "+(logC++));
  this.log = function(msg) {	console.log(msg); }
}
function findElement(list, id) {
	for(var idx=0; idx<list.length; idx +=1) {
  	//console.warn(list[idx]);
  	if(list[idx].id === id) return list[idx];
   }
   return null
}

function Instructors() {
	var log = new Log();
	var _this = this,
  	instructors = [
    	{id: 1, name: "Lars Lemos"},
      {id: 2, name: "Guimino Neves"},
      {id: 3, name: "Hamilton Mutaquuiha"}
    ];
   this.log = log;
   log.log("Instructors created. ");
   this.getInstructors = function() {
   		return instructors.slice(0);
   }
   this.getInstructor = function(id) {
   		var list = _this.getInstructors();
      	return findElement(list, id);
   }
}

function Courses() {
	var log = new Log();
	var _this = this,
  	courses = [
    	{id: 1, name: "Angular"}, {id:2, name: "EDA"}, {id:3 , name: ".NET"}];
    this.log = log;
    log.log("Courses Created");
    this.getCourses = function(id) {
    	return courses.slice(0);
    }
    this.getCourse = function(id) {
    	var list = _this.getCourses(), idx;
      	return findElement(list, id);
    }
}
function CourseMap() {
	var log = new Log();
	var _this = this,
  	courseMap = [
    	{instructorId: 1, courseId: 3}, {instructorId: 2, courseId: 1},
      {instructorId: 3, courseId: 2}
    ];
    this.log = log;
    this.instructors = new Instructors();
    this.courses = new Courses();
    log.log("CourseMap Created. ");
    this.getCourseMap = function() {
    	var result = [], idx;
      for(idx = 0; idx < courseMap.length; idx += 1) {
      		result.push({
          	instructor: _this.instructors.getInstructor(courseMap[idx].instructorId),
            course: _this.courses.getCourse(courseMap[idx].courseId)
          });
      }
      return result;
    };
}

/**
 *  Unecessary code after services and DI
 */
var log = new Log();
log.log("We are in business");
var instructors = new Instructors();
log.log(instructors.getInstructors());
log.log(instructors.getInstructor(2));
var courses = new Courses();
log.log(courses.getCourses());
log.log(courses.getCourse(1));
var courseMap = new CourseMap();
log.log(courseMap.getCourseMap());
