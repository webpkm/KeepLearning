var app = angular.module('myApp', [], function(){
	
});

app.run(function($rootScope) {
  $rootScope.user = {first_name: 'Prem Kumar', last_name: 'Maurya', user_guid:'0001O'}
});
app.controller('Page1Controller', function($scope){
	$scope.page = "Page1Controller";
});

app.controller('Page2Controller', function($scope){
	$scope.page = "Page2Controller";
});