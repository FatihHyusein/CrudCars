var express = require('express');
var router = express.Router();

var carsModel = require('../models/carsModel');

router.get('', function (req, res, next) {
    carsModel.getAll(function (err, cars) {
        if (err) {
            return next(err);
        }

        res.json(cars);
    });
});

router.post('/', function (req, res, next) {
    if (!req.body.make || !req.body.model || !req.body.year) {
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    carsModel.add(req.body, function (err, car) {
        if (err) {
            return next(err);
        }

        return res.json(car);
    });
});

router.get('/:carId', function (req, res, next) {
    carsModel.getById(req.params.carId, function (err, car) {
        if (err) {
            return next(err);
        }

        return res.json(car);
    });
});

router.put('/:carId', function (req, res, next) {
    carsModel.update(req.params.carId, req.body, function (err, car) {
        if (err) {
            return next(err);
        }

        return res.json(car);
    });
});

router.delete('/:carId', function (req, res, next) {
    carsModel.delete(req.params.carId, function (err) {
        if (err) {
            return next(err);
        }

        res.sendStatus(204);
    });
});

module.exports = router;