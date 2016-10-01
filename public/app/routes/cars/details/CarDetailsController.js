CarsApp.controller('CarDetailsController',
    function ($scope, $location, $routeParams, carsSvc) {

        carsSvc.getCarById($routeParams.carIdx).then(function (response) {
            $scope.car = response.data;
        });

        $scope.editCar = function (id) {
            $location.path('cars/' + id + '/edit');
        }
    });