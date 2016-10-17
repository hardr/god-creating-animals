(function() {
  'use strict';

  var app = angular.module('redditApp', ['angularMoment']);

  app.filter('rating', function () {
    return function(input) {
      var rating = '';
      for (var i = 0; i < input; i++) {
        rating += '* ';
      }
      return rating;
    }
  });
})();
