;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .controller('VocabularyController', function($http){
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/myData.json')
        .success(function(data){
          vm.animals = data.animals;
          vm.colors = data.colors;
          vm.months = data.months;
          vm.days = data.days;
          vm.fruits = data.fruits;
          vm.bodyface = data.bodyface;
        })
        .error(function(err){
          console.log(err);
        });
    })  
}());