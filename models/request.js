var models = require('./models'),
    mongoose = require('mongoose'),
    ObjectId = mongoose.Types.ObjectId;

exports.find = function(callback) {
	models.Request.find({}, callback);
}

exports.findById = function(id, callback) {
	models.Request.findById(ObjectId.fromString(id), callback);
}

exports.add = function(request, callback) {
	models.Request.create(request, callback);
}
