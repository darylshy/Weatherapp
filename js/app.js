let weatherApp = angular.module('weatherApp', ['ngRoute']);

weatherApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../templates/hello.html',
		controller: 'helloCtrl'
	})
	.when('/goodbye', {
		templateUrl: '../templates/goodbye.html',
		controller: 'goodbyeCtrl'
	})
});

weatherApp.controller('helloCtrl', ['$scope', function ($scope) {
	$scope.name = "Daryl";
	$scope.greeting = "How are you?";

}]);

weatherApp.controller('goodbyeCtrl', ['$scope', function ($scope) {
	$scope.name = "Daryl";
	$scope.goodbye = "See you later!"

}]);

weatherApp.directive('sayHello', function () {
	return {
		restrict: 'AE',
		controller: 'helloCtrl',
		replace: true,
		link: function (scope,elem,attrs) {
			$(elem).addClass('jumbotron');
			elem.style.backgroundColor = "green";
		}
	}
});