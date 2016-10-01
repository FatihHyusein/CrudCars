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