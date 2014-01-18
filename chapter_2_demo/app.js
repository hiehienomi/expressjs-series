/*jslint browser: true, devel: true, node: true, rhino: true, passfail: true, bitwise: true,  continue: true, debug: true, eqeq: true, evil: true, forin: true, newcap: true, nomen: true, plusplus: true, regexp: true, unparam: true, sloppy: true,  sub: true, vars: true, white: true */
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config')();
var fs = require('fs');
var connect = require('mongoose');
var app = express();

// all environments
app.set('port', config.port);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('hiehiebnomi'));
app.use(express.session());
app.use(app.router);
app.use(express['static'](path.join(__dirname, 'public')));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
// dynamically include routes (Controller)
fs.readdirSync('./app/controllers').forEach(function (file) {
    if (file.substr(-3) == '.js') {
        var route = require('./app/controllers/' + file);
        route.controller(app);
    }
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//connect database mongodb
connect.connect('mongodb://' + config.db.host + '/' + config.db.name);

//create server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port') + ' , ' + app.get('env'));
});