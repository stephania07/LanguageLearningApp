;(function(){
  'use strict';
	angular.module('languagelearningApp')
    .config(function($routeProvider){
	$routeProvider				
	.when('/login', {
	   templateUrl : 'views/login.html',
	   controller :  'LoginController',
	   controllerAs: 'login'			
	})
	.when('/register', {
	   templateUrl : 'views/register.html',
	   controller :  'LoginController',
	   controllerAs: 'login'			
	})
	.when('/logout', {
	   template : '',
	   controller :  'LogoutController'			
	})
	})				
}());
