var phonecatApp = angular.module("phonecatApp", []);

phonecatApp.controller('phoneController', function($scope, $http){
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
