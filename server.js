// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
//var database = require('./server/database'); 			// load the database config

// configuration ===============================================================
//mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io
app.configure(function() {
    app.use(express.static(__dirname + '/client')); 		// set the static files location /client/img will be /img for users
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

app.set('port', process.env.PORT || 3000);

// routes ======================================================================

require('./server/config')(app);
require('./server/db/repository')(app,mongoose);
require('./server/models')(app,mongoose);
require('./server/apis/contactApis')(app,mongoose);
require('./server/routes')(app);

// listen (start app with node server.js) ======================================

app.listen(app.get('port'),function(){
    console.log('Express App server listening on Port :' + app.get('port'));
});

