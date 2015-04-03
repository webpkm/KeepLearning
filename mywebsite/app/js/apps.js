var myApp = angular.module("phonecatApp",  [
   'ngRoute',
   'phonecatAnimations',
   'appControllers',
   'appFilters'
 ]);

myApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'layout/desktop/index.html',
      controller: 'HomePageCtrl'
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
    otherwise({
      redirectTo: '/'
    });
}]);