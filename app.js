require('babel-core/register');
var forOwn = require('lodash/object/forOwn');
var config = require('config');
var express = require('express');
var expressWinston = require('express-winston');
// for transports.Console
var winston = require('winston');
var compression = require('compression');
var path = require('path');

var staticPath = config.get('app.staticPath');

var app = express();
// Set application configuration.
forOwn(config.get('express'), (value, key) => {
  app.set(key, value);
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
}
else {
  // Production error handler, no stacktraces leaked to user.
  app.use((err, req, res) => {
    res.status(err.status || 500).json({
      message: err.message
    });
  });
}

module.exports = app;
