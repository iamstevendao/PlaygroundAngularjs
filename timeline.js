(function (angular) {
  'use strict'
  var App = angular.module('timeline', [])

  App.controller('TimelineController',
    function TimelineController ($scope, $http) {
      $http.get('todos.json')
        .then(function (res) {
          $scope.todos = res.data
        })
    })
})(window.angular)
