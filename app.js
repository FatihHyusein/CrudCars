var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var db = require('./db');
db.connect('mongodb://localhost:27017/carsdb', function (err) {
    if (err) {
        console.log('Error with connecting Mongo.');
    } else {
        console.log('Connected with MONGO!');

    }
});

var routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('views', './views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', {});
});
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});


app.listen(3000, function () {
    console.log('Listening on port 3000');
});