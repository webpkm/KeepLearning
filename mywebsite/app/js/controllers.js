var appControllers = angular.module('appControllers', []);

appControllers.controller('AppCtrl', function($scope, $http) {
	// To get the ajax data
	/*
	$http.get('json/default.json').success(function(data) {
	    $scope.data = data;
	});
	 */
	$scope.pageName = "HomePage";
});

appControllers.controller('LoginCtrl', function($scope, $http) {
	// To get the ajax data
	/*
	$http.get('json/default.json').success(function(data) {
	    $scope.data = data;
	});
	 */
	$scope.pageName = "LoginPage";
});

appControllers.controller('SignupCtrl', function($scope, $http) {
	// To get the ajax data
	/*
	$http.get('json/default.json').success(function(data) {
	    $scope.data = data;
	});
	 */
	$scope.pageName = "Signup Page";
});

appControllers.controller('RestPasswordCtrl', function($scope, $http) {
	// To get the ajax data
	/*
	$http.get('json/default.json').success(function(data) {
	    $scope.data = data;
	});
	 */
	$scope.pageName = "ResetPasswordPage";
});

appControllers.controller('LogoutCtrl', function($scope, db) {
	// To get the ajax data
	/*
	$http.get('json/default.json').success(function(data) {
	    $scope.data = data;
	});
	 */
	$scope.save = function() {
	    db.addItem('hello');
	    console.log( db.getItems() );
	};
	$scope.pageName = "logoutPage";
});

appControllers.controller('TricksCtrl', function($scope, $http) {
	// To get the ajax data
	/*
	$http.get('json/default.json').success(function(data) {
	    $scope.data = data;
	});
	*/
	$scope.pageName = "trickstPage";
});

appControllers.controller('HeaderController', function($scope, $location) {
	$scope.isActive = function(path) {
		return path === $location.path();
	};
});