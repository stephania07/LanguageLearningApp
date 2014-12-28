;(function(){
  'use strict';
	angular.module('languagelearningApp')
    .config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/landing.html',
	})				
	.otherwise({redirectTo: '/'});
	})				
}());
