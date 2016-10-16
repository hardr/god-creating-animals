(function() {
  'use strict';

  var app = angular.module('redditApp');

  app.controller('postCtrl', function($rootScope) {
    $rootScope.posts = [];
    this.posting = false;
    this.newPost = {};

    this.Posting = () => {
      if (this.posting === true) {
        this.posting = false;
      } else {
        this.posting = true;
      }
    };

    this.addPost = () => {

    };

  });

  app.controller('StudentCtrl', function($rootScope) {


  });

})();
