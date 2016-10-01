var dbState = require('../db').state();
var ObjectID = require('mongodb').ObjectID;


module.exports = {
    getAll: function (cb) {
        var collection = dbState.db.collection('cars');
        collection.find({}).toArray(function (err, result) {
            cb(null, result);
        });
    },
    getById: function (id, cb) {
        var collection = dbState.db.collection('cars');
        collection.findOne(ObjectID(id), function (err, result) {
            cb(err, result);
        });
    },
    add: function (car, cb) {
        var collection = dbState.db.collection('cars');
        collection.insertOne(car, function (err, result) {
            cb(err, result);
        });
    },
    update: function (carId, car, cb) {
        var collection = dbState.db.collection('cars');
        if (car._id) {
            delete car._id;
        }

        collection.updateOne({_id: ObjectID(carId)}, {$set: car},
            function (err, result) {
                cb(err, result);
            });
    },
    delete: function (carId, cb) {
        var collection = dbState.db.collection('cars');

        collection.deleteOne({_id: ObjectID(carId)}, function (err, result) {
            cb(err, result);
        });
    }
};