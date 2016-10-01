var CarsApp = angular.module('carsModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/cars', {
        	templateUrl: './app/routes/cars/list/carsList.html',
            controller: 'CarsListController'
        })
        .when('/cars/new', {
        	templateUrl: './app/routes/cars/addNew/newCar.html',
            controller: 'NewCarController'
        })
        .when('/cars/:carIdx', {
            	templateUrl: './app/routes/cars/details/carDetails.html',
                controller: 'CarDetailsController'
        })
        
        .when('/cars/:carIdx/edit', {
            	templateUrl: './app/routes/cars/edit/editCar.html',
                controller: 'EditCarController'
        })
        
        
            .otherwise('/cars');
    })
    .controller('MainController', function () {
    		
    })
;
CarsApp.factory('carsSvc', function ($http) {
    return {
        addCar: function (newCar) {
            return $http.post('/cars', newCar);
        },
        removeCar: function (index) {
            return $http.delete('/cars/' + index);
        },
        getCars: function () {
            return $http.get('/cars');
        },
        getCarById: function (id) {
            return $http.get('/cars/' + id);
        },
        editCarByIndex: function (index, newCarData) {
            return $http.put('/cars/' + index, newCarData);
        }
    };
});
CarsApp.controller('NewCarController', 
		function($scope,$location,$routeParams, carsSvc){
	
	$scope.car = {};
	
	$scope.addCar = function(){
		carsSvc.addCar($scope.car);
		$location.path('cars');
	}
	
	
});
CarsApp.controller('CarDetailsController',
    function ($scope, $location, $routeParams, carsSvc) {

        carsSvc.getCarById($routeParams.carIdx).then(function (response) {
            $scope.car = response.data;
        });

        $scope.editCar = function (id) {
            $location.path('cars/' + id + '/edit');
        }
    });
CarsApp.controller('EditCarController',
    function ($scope, $location, $routeParams, carsSvc) {

        carsSvc.getCarById($routeParams.carIdx).then(function (response) {
            $scope.car = response.data;
        });

        $scope.updateCar = function () {
            carsSvc.editCarByIndex($scope.car._id, $scope.car).then(function () {
                $location.path('cars');
            });
        };

        $scope.removeCar  = function () {
            carsSvc.removeCar($scope.car._id).then(function () {
                $location.path('cars');
            });
        };
    });
CarsApp.controller('CarsListController',
    function ($scope, $location, carsSvc) {
        carsSvc.getCars().then(function (response) {
            $scope.cars = response.data;
        });

        $scope.showCarDetails = function (id) {
            $location.path('cars/' + id);
        }
    });