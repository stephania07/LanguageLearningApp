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
	.when('/register', {
	   templateUrl : 'views/register.html',
	   controller :  'LoginController',
	   controllerAs: 'login'			
	})
	.when('/logout', {
	   template : '',
	   controller :  'LogoutController'			
	})
	.when('/home', {
		templateUrl : 'views/home.html',
		controller : 'HomeController',
		controllerAs: 'home'
	})
	.when('/vocabulary', {
		templateUrl : 'views/table.html',
		controller : 'VocabularyController',
		controllerAs: 'vocal'
	})
	.when('/vocabulary/general', {
		templateUrl : 'views/general.html',
		controller : 'GeneralController',
		controllerAs: 'general'
	})
	.when('/vocabulary/number', {
		templateUrl : 'views/numdays.html',
		controller : 'NumberController',
		controllerAs: 'numCtrl'
	})
	.when('/vocabulary/days', {
		templateUrl : 'views/numdays.html',
		controller : 'DaysController',
		controllerAs: 'dayCtrl'
	})
	.when('/vocabulary/time', {
		templateUrl : 'views/time.html',
		controller : 'VocabularyController',
		controllerAs: 'vocal'
	})
	.when('/greetings', {
        templateUrl : 'views/greetings.html',
        controlller : 'GreetingsController',
        controllerAs : 'greetCtrl'
	})
	.when('/flashcards', {
		templateUrl : 'views/flashcards.html',
		controller: 'DemonstrativeController',
		controllerAs : 'demonstrate'
	})
	.when('/flip', {
		templateUrl : 'views/flip.html',
		controller: 'NumberController',
		controllerAs : 'numCtrl'
	})
	.when('/vocabulary/general/:id', {
		templateUrl: 'views/show.html',
		controller: 'ShowController',
		controllerAs: 'show'
	})
	})				
}());
