;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .controller('HomeController', function($scope, $modal){
      var vm = this;
      var myModal = $modal({
        title: "Hello {{uid}}!", 
        content: 'Welcome to 60min Language Learning!', 
        show: true
      });
      var myOtherModal = $modal({
        scope: $scope,
        template: '/#/home', 
        show: false
      });
      // Show when some event occurs (use $promise property to ensure the template has been loaded)
      $scope.showModal = function() {
        myOtherModal.$promise.then(myOtherModal.show);
      };
    }) 
    
    .controller('GreetingsController', function($http) {
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/greetings.json')
        .success(function(data){
          vm.greetings = data;
        })
        .error(function(err){
          console.log(err);
        });
    }) 

    .controller('QuizController', function($http) {
      var vm = this;
    })
    .controller('CardsController', function($http, $scope) {
      var vm = this;
      var id = 1;
      var numData;
      var url = "https://languagelearningapp.firebaseio.com/colors/" + 0 + "/English.json";
      $http.get(url).
        success(function(data){
          $scope.colors = data;
          var $target = document.querySelector('#flash');
          //$target.innerHTML= "";
          angular.element($target).append(data);
        })
         $http.get("https://languagelearningapp.firebaseio.com/colors.json")
         .success(function(data){
          console.log(data.length);
          numData = data.length; 
          })
                   
          vm.nextcard = function() {
            console.log(numData);
            var url = "https://languagelearningapp.firebaseio.com/colors/" + id + "/English.json";
            if (id === numData) {
              return null;
            }else{
            $http.get(url).
              success(function(data){
             $scope.colors = data;
             var $target = document.querySelector('#flash');
             $target.innerHTML= "";
              angular.element($target).append(data);
            })

          }
      };
          var url = "https://languagelearningapp.firebaseio.com/colors/" + 0 + "/Tigrigna.json";
          $http.get(url).
          success(function(data){
          $scope.colors = data;
           var $target = document.querySelector('#flash');
          //$target.innerHTML= "";
          angular.element($target).append(data);
          })
          vm.truecard = function(){
          var url = "https://languagelearningapp.firebaseio.com/colors/" + id + "/Tigrigna.json";
          if (id === numData) {
            return null;
          }else{
            $http.get(url).
            success(function(data){
            $scope.colors = data; 
            var $target = document.querySelector('#flash');
            $target.innerHTML= "";
            angular.element($target).append(data);
              id++;
            })
           }
          };
        })
}());
