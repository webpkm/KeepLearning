var phonecatApp = angular.module("phonecatApp",  [
   'ngRoute',
   'phonecatAnimations',
   'phonecatControllers',
   'phonecatFilters'
 ]);
var phonecatControllers = angular.module('phonecatControllers', []);


phonecatControllers.controller('PhoneListCtrl', function($scope, $http){
	 $http.get('phones/phones.json').success(function(data) {
	    $scope.phones = data;
	  });
	 $scope.clearFilter = function() {
		 $scope.search = "";
    };
    $scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http){
		var phoneId = $routeParams.phoneId;
		if(phoneId.indexOf(".html")>=0)
		{
			phoneId = phoneId.replace(".html","");
		}
		$http.get('phones/' + phoneId + '.json').success(function(data) {
	      $scope.phone = data;
	      $scope.mainImageUrl = data.images[0];
	    });
		$scope.setImage = function(imageUrl) {
			$scope.mainImageUrl = imageUrl;
		};
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