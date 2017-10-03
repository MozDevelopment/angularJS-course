var app = angular.module("logger", []);

app.controller("LoggerController", LoggerController);
LoggerController.$inject = ['$scope', 'courseMap'];

function LoggerController($scope, courseMapService) {
   _this = this;
   this.courseMap = courseMapService; 
   $scope.getcoursesMap = function() {
        $scope.coursesMap = _this.courseMap.getCourseMap();
   }
}

app.value("log", new Log());

app.service("instructors", Instructors);

app.service("courses", Courses);

app.service("courseMap", CourseMap);

function Log() {
  var logC = 0;
	console.info("Log created: "+logC++);
  this.log = function(msg) {	console.log(msg); }
}
function findElement(list, id) {
	for(var idx=0; idx<list.length; idx +=1) {
  	if(list[idx].id === id) return list[idx];
   }
   return null
}

function Instructors(log) {
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
Instructors.$inject = ['log'];

function Courses(log) {
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
Courses.$inject = ['log'];

function CourseMap(log, instructors, courses) {
	var _this = this;
  var	courseMap = [
      {instructorId: 1, courseId: 3}, {instructorId: 2, courseId: 1},
      {instructorId: 3, courseId: 2}
    ];
    this.log = log;
    this.instructors = instructors;
    this.courses = courses
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
CourseMap.$inject = ['log','instructors', 'courses'];
