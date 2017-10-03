var app = angular.module("logger", []);

app.controller("LoggerController", LoggerController);
LoggerController.$inject = ['$scope', '$injector'];

function LoggerController($scope, injector) {
   _this = this;
  //  this.injector = injector;
   $scope.getcoursesMap = function() {
        // $scope.coursesMap = _this.injector.get("courseMap").getCourseMap();
        $scope.coursesMap = injector.get("courseMap").getCourseMap();
   }
}

app.provider('log', logProvider);

function logProvider() {
  var enabled = true;
  this.disablelogging = function() {
      enabled = false;
  };
  this.$get = function() {
    if(enabled) {
      return {
        log: function(msg) {
          console.log(msg);
        }
      }
    }
    return {
      log: function () {}
    }
  };
}


app.config(logDecorator);
logDecorator.$inject = ['$provide'];

function logDecorator($provide) {
  $provide.decorator('log', logDelegate);
}

logDelegate.$inject = ['$delegate'];

function logDelegate($delegate) {
  // return $delegate;
  return {
    log: function(msg) {
      var date = new Date();
      // $delegate.log(date.toString()+': '+msg);
      console.info(date.toString()+': '+msg);
    }
  }
}

app.service("instructors", Instructors);

app.service("courses", Courses);

app.service("courseMap", CourseMap);

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
