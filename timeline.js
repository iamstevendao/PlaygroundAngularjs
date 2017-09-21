(function (angular) {
  'use strict';
  var App = angular.module('timeline', []);

  App.controller('TimelineController', function TimelineController($scope, $http) {
    console.log("hello");
    $http.get('./todos.json')
      .then(function (res) {
        this.todos = res.data;
      });
  });

})(window.angular);