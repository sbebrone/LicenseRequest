var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({
	product: String,
    	purpose: String,
    	commment: String
});

exports.Request = mongoose.model('Request', requestSchema);
