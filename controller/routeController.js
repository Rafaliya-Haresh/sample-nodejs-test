(function(routeConroller) {

  routeConroller.count = 0;

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
      routeConroller.count++;
		  res.render('index', {'count': routeConroller.count});
		});
	};

})(module.exports);
