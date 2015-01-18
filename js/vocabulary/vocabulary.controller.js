;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .controller('VocabularyController', function($http){
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/colors.json')
        .success(function(data){
          vm.colors = data;
        })
        .error(function(err){
          console.log(err);
        });
      $http.get('https://languagelearningapp.firebaseio.com/animals.json')
        .success(function(data){
          vm.animals = data;
        })
        .error(function(err){
          console.log(err);
        });
       $http.get('https://languagelearningapp.firebaseio.com/months.json')
        .success(function(data){
          vm.months = data;
        })
        .error(function(err){
          console.log(err);
        });
      $http.get('https://languagelearningapp.firebaseio.com/days.json')
        .success(function(data){
          vm.days = data;
        })
        .error(function(err){
          console.log(err);
        });
      $http.get('https://languagelearningapp.firebaseio.com/fruits.json')
        .success(function(data){
          vm.fruits = data;
        })
        .error(function(err){
          console.log(err);
        });
      $http.get('https://languagelearningapp.firebaseio.com/bodyface.json')
        .success(function(data){
          vm.bodyface = data;
        })
        .error(function(err){
          console.log(err);
        });
    })  
}());
