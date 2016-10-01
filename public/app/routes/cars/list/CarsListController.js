CarsApp.controller('CarsListController',
    function ($scope, $location, carsSvc) {
        carsSvc.getCars().then(function (response) {
            $scope.cars = response.data;
        });

        $scope.showCarDetails = function (id) {
            $location.path('cars/' + id);
        }
    });