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