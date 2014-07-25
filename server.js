// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 3000; 				// set the port
var database = require('./server/database'); 			// load the database config

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.configure(function() {
    app.use(express.static(__dirname + '/client')); 		// set the static files location /client/img will be /img for users
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

// routes ======================================================================
require('./server/apis/todoapis')(app,mongoose);
require('./server/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("Contact App listening on port " + port);
