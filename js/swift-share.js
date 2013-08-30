// Create Namespace
angular.module("swift", ["ngSanitize"])
	.config(function($routeProvider) {
		console.info("Creating routes!");
		$routeProvider.
			when("/", 			{ templateUrl:"templates/welcome.html", 	controller:WelcomeController}).
			when("/login", 		{ templateUrl:"templates/login.html", 	controller:WelcomeController}).
			when("/containers", { templateUrl:"templates/containers.html", controller:ContainersController });
	});
	
AppController.$inject = ['$scope', '$route'];

function AppController($scope, $route) {
	
	$scope.$route = $route;

	$scope.credentials = { 
		username: "",
		apikey: ""
	}
}

function WelcomeController($scope) {

	console.info("WelcomeController!" + document.location.href);
}

function LoginController($scope) {

	console.info("LoginController!" + document.location.href);
}

function ContainersController($scope) {

	console.info("ContainersController:" + document.location.href);
}
