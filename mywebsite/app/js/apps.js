var myApp = angular.module("myApp",  [
   'ngRoute',
   'phonecatAnimations',
   'appControllers',
   'appFilters'
 ]);

myApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'layout/desktop/homepage.html',
      controller: 'AppCtrl'
    }).
    when('/login', {
    	templateUrl: 'layout/desktop/login.html',
    	controller: 'LoginCtrl'
    }).
    when('/signup', {
    	templateUrl: 'layout/desktop/signup.html',
    	controller: 'SignupCtrl'
    }).
    when('/reset-password', {
    	templateUrl: 'layout/desktop/reset-password.html',
    	controller: 'RestPasswordCtrl'
    }).
    when('/logout', {
    	templateUrl: 'layout/desktop/logout.html',
    	controller: 'LogoutCtrl'
    }).
    when('/tricks', {
      templateUrl: 'layout/desktop/tricks.html',
      controller: 'TricksCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);