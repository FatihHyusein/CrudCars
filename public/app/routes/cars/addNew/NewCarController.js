CarsApp.controller('NewCarController', 
		function($scope,$location,$routeParams, carsSvc){
	
	$scope.car = {};
	
	$scope.addCar = function(){
		carsSvc.addCar($scope.car);
		$location.path('cars');
	}
	
	
});