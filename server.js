var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS CONFIGURATION

var app = express();
var PORT = process.env.PORT || 8080;

// BodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// The below points our server to a series of "route" files.
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


// The below code effectively "starts" our server 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});