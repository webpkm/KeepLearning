var phonecatApp = angular.module("phonecatApp",  [
   'ngRoute',
   'phonecatControllers'
 ]);
var phonecatControllers = angular.module('phonecatControllers', []);


phonecatControllers.controller('PhoneListCtrl', function($scope, $http){
	var phones = [
	              	{'name': 'Nexus S','snippet': 'Fast just got faster with Nexus S.','age': 1},
				    {'name': 'Motorola XOOM™ with Wi-Fi','snippet': 'The Next, Next Generation tablet.','age': 2},
				    {'name': 'MOTOROLA XOOM™','snippet': 'The Next, Next Generation tablet.','age': 3}
				 ]; 
	$scope.phones = phones;
	 $http.get('phones/phones.json').success(function(data) {
	    $scope.phones = data;
	  });
    $scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
   function($scope, $routeParams) {
     $scope.phoneId = $routeParams.phoneId;
}]);
phonecatApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
    when('/phones', {
      templateUrl: 'partials/phone-list.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
}]);