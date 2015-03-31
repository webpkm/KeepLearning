var app = angular.module("mytodos", []);
app.controller("userController", function($scope) {
	$user = {};
	$user.first_name = "Prem Kumar";
	$user.last_name = "Maurya";
	$scope.user = $user; 
}).

controller("ListTodosCtrl", function($scope, $http) {
	$http.get("todos.php").success(function(todos){
		$scope.todos = todos;	
	});
});