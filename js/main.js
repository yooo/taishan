'use strict';

var mainApp = angular.module('mainApp', ['ngRoute']);


// mainApp.controller('CalendarCtrl', ['$scope', function($scope) {
//
// }]);


mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/calendar', {
      templateUrl: 'views/calendar.html',
      controller: 'CalendarCtrl'
    })
    .otherwise({ redirectTo: '/'});
}]);
