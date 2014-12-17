;(function(){
  'use strict';
	angular.module('languagelearningApp')
    .config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/landing.html',
	})				
	.when('/login', {
	   templateUrl : 'views/login.html',
	   controller :  'LoginController',
	   controllerAs: 'login'			
	})				
	})				
}());
