
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Licenses Request' })
};

exports.request = function(req, res) {
	var products = ['Office 2010', 'Visual Studio 2010'];
	res.render('request', { title: 'Request', products: products })
};
