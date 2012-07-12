var request = require('../models/request');

/*
 * GET home page.
 */

exports.index = function(req, res){
	request.find(function(err,requests) {
		res.render('index', { title: 'Licenses Request', requests:requests });
	});
};

exports.request = function(req, res) {
	var products = ['Office 2010', 'Visual Studio 2010', 'Other'];
	var purposes = ['Production','Training/Certification', 'Demo', 'Other'];
	res.render('request', { title: 'Request', products: products, purposes: purposes })
};

exports.postRequest = function(req, res) {
	request.add(req.body.request, function(err, item) {
		req.flash('info','Your request has been sent successfully.');
		res.redirect('home');
	});
};

exports.editRequest = function(req, res) {
	request.findById(req.params.id, function(err, item) {
		var products = ['Office 2010', 'Visual Studio 2010', 'Other'];
		var purposes = ['Production','Training/Certification', 'Demo', 'Other'];
		res.render('request', { title: 'Request', products: products, purposes: purposes })
	});
};
