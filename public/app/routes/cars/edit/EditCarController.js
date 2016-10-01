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