var express = require('express');
var connect = require('connect');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var http = require('http');
var https = require('https');
var request = require('request');
app.use(bodyParser.urlencoded(
{
    extended: false
}))
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());
app.use(require('helmet')());
var parseString = require('xml2js').parseString;

require('./app/routes.js')(app, fs);

app.listen(port, function()
{
    console.log('Parallels listening on port ' + port + '!');
});

console.log('The Parallels runs on port ' + port);