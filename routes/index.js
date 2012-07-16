var request = require('../models/request');

/*
 * GET home page.
 */

exports.index = function(req, res){
	request.find(function(err,requests) {
		res.render('index', { title: 'Licenses Request', requests:requests });
	});
};

exports.createRequest = function(req, res) {
	res.render('request/create', { title: 'Request', products: req.products, purposes: req.purposes })
};

exports.postRequest = function(req, res) {
	request.add(req.body.request, function(err, item) {
		req.flash('info','Your request has been sent successfully.');
		res.redirect('home');
	});
};

exports.editRequest = function(req, res) {
	request.findById(req.params.id, function(err, item) {
		res.render('request/edit', { title: 'Request', products: req.products, purposes: req.purposes })
	});
};
