
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongoose = require('mongoose');

var app = module.exports = express.createServer();


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'License Request'}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	mongoose.connect('mongodb://localhost/license_request');
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Helpers
app.dynamicHelpers({
	info: function(req, res) {
		return req.flash('info');
	}
});

// middleware
var loadLists =  function(req, res, next) {
	var products = ['Office 2010', 'Visual Studio 2010', 'Other'];
	var purposes = ['Production','Training/Certification', 'Demo', 'Other'];
	req.products = products;
	req.purposes = purposes;
	next();
};

// Routes

app.get('/', routes.index);
app.get('/request/:id',loadLists, routes.editRequest);
app.get('/request',loadLists, routes.request);
app.post('/request', routes.postRequest);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
