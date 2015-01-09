;(function(){
  'use strict';
	angular.module('languagelearningApp')
    .config(function($routeProvider){
	$routeProvider				
	.when('/login', {
	   templateUrl : 'views/login.html',
	   controller :  'LoginController',
	   controllerAs: 'login',
	   resolve: {
	   	data: function(authFactory){
	   		authFactory.disallowLogin();
	   	}
	   }			
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
	.run(function($rootScope, authFactory){
      $rootScope.$on('$routeChangeStart', function(event, nextRoute, priorRoute){
      	if(nextRoute.$$route && nextRoute.$$route.private) {
      	  authFactory.requireLogin();
      	}
      })	
	})				
}());
