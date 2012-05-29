
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Licenses Request' })
};

exports.request = function(req, res) {
	var products = ['Office 2010', 'Visual Studio 2010', 'Other'];
	var purposes = ['Production','Training/Certification', 'Demo', 'Other'];
	res.render('request', { title: 'Request', products: products, purposes: purposes })
};

exports.postRequest = function(req, res) {
	console.log(req.body.request);
	req.flash('info','Your request has been sent successfully.');
	res.redirect('home');
}
