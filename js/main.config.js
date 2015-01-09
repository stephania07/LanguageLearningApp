;(function(){
  'use strict';
	angular.module('languagelearningApp')
    .config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/landing.html',
	})
	.when('/',{
		templateUrl:'views/landing.html',
		controller : 'CarouselDemoCtrl',
		controllerAs: 'carouselCtrl',

	})				
	.otherwise({redirectTo: '/'});
	})				
}());
