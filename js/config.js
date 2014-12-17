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
		templateUrl : 'views/number.html',
		controller : 'VocabularyController',
		controllerAs: 'vocal'
	})
	.when('/vocabulary/days', {
		templateUrl : 'views/days.html',
		controller : 'VocabularyController',
		controllerAs: 'vocal'
	})
	.when('/vocabulary/time', {
		templateUrl : 'views/time.html',
		controller : 'VocabularyController',
		controllerAs: 'vocal'
	})

	})				
}());
