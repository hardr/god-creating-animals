(function() {
  'use strict';

  var app = angular.module('redditApp');

  app.controller('ClassCtrl', function($rootScope) {
    this.classes = [];
    this.newClass = { students: [] };

    this.addClass = () => {
      this.classes.push(this.newClass);
      this.newClass = { students: [] };
    };

    this.student;
    this.class;

    this.studentToClass = () => {
      var selectedClass = this.classes.filter((item) => {
        return item.name === this.class;
      })[0];

      selectedClass.students.push(this.student);
      $rootScope.students.push(this.student);
    }

  });

  app.controller('StudentCtrl', function($rootScope) {
    $rootScope.students = [];
    this.newStudent = { classes: [] };

    this.addStudent = () => {
      this.students.push(this.newStudent);
      this.newStudent = { classes: [] };
    };

  });

})();
