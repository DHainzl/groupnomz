angular.module('GroupNomz').config ([ '$routeProvider', function ($routeProvider) {
	$routeProvider.when ('/', { 
			templateUrl: 'home/home.html', 
			controller: 'HomeController'
		})
		.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'LoginController'
		})
		.otherwise ({ redirectTo: '/' });
}]);