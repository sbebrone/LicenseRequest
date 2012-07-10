var models = require('./models');

exports.find = function(callback) {
	models.Request.find({}, callback);
}

exports.add = function(request, callback) {
	models.Request.create(request, callback);
}
