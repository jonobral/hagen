require('babel-core/register');
var forOwn = require('lodash/object/forOwn');
var config = require('config');
var express = require('express');
var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console
var compression = require('compression');
var path = require('path');

var staticPath = config.get('app.staticPath');

var app = express();
// Set application configuration.
forOwn(config.get('express'), (value, key) => {
    app.set(key, value);
});

// Let's make our express `Router` first.
var router = express.Router();
router.get('/error', function(req, res, next) {
    // here we cause an error in the pipeline so we see express-winston in action.
    return next(new Error("This is an error and it should be logged to the console"));
});

app.get('/', function(req, res, next) {
    res.write('This is a normal request, it should be logged to the console too');
    res.end();
});

app.use(compression());

// Healthcheck is a special endpoint used for application monitoring.
app.get('/healthcheck', (req, res) => {
    res.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
res.json({healthcheck: 'good'});
});

app.use(`/${staticPath}`, require('./mocks/router'));

// Serve static files from the public directory.
app.use(`/${staticPath}`, express.static(
    path.join(__dirname, config.get('app.publicDir')),
    {maxage: config.get('app.publicMaxAge')}
));

// express-winston logger makes sense BEFORE the router.
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
}));

// Now we can tell the app to use our routing code:
app.use(router);

// express-winston errorLogger makes sense AFTER the router.
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
}));

// Catch 404 and forward to error handler.
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
next(err);
});

// Error handlers.

// Development error handler will print stacktrace.
if (app.get('env') === 'dev' || app.get('env') === 'local') {
    app.use((err, req, res) => {
        res.status(err.status || 500).json({
            message: err.message,
            err: err
        });
    });
} else {
    // Production error handler no stacktraces leaked to user.
    app.use((err, req, res) => {
        logger.error(err);
        res.status(err.status || 500).json({
            message: err.message
        });
    });
}

module.exports = app;
