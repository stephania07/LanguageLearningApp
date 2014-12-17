;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .controller('LoginController', function($location, $scope){
     var vm = this;  
     vm.login = function(){
       var ref = new Firebase("https://languagelearningapp.firebaseio.com");
       ref.authWithPassword({
       email    : vm.email,
       password : vm.password
       }, function(error, authData) {
         if (error === null) {
         	$location.path('/');
         	$scope.apply();
           console.log("User logged in successfully", authData);
       } else {
           console.log("Error in loggin user:", error);
       }
      });
     }
     vm.register = function(){
     	var ref = new Firebase("https://languagelearningapp.firebaseio.com");
     	ref.createUser({
        email    : vm.email,
        password : vm.password
        }, function(error, authData) {
          if (error === null) {
            console.log("User created successfully", authData);
          } else {
            console.log("Error creating user:", error);
          }
        });
       }
      vm.forgotPassword = function(){
      	var ref = new Firebase("https://languagelearningapp.firebaseio.com");
      	ref.resetPassword({
        email : vm.email
        }, function(error) {
          if (error === null) {
            console.log("Password reset email sent successfully");
          } else {
            console.log("Error sending password reset email:", error);
          }
        });
      }
    })
    .controller('HomeController', function($scope, $modal){
      var vm = this;
      var myModal = $modal({
        title: 'Hello {{uid}}!', 
        content: 'Welcome to 60min Language Learning!', 
        show: true
      });
      var myOtherModal = $modal({
        scope: $scope,
        template: 'modal/docs/modal.tpl.demo.html', 
        show: false
      });
      // Show when some event occurs (use $promise property to ensure the template has been loaded)
      $scope.showModal = function() {
        myOtherModal.$promise.then(myOtherModal.show);
      };
    }) 
    .controller('VocabularyController', function($http){
      var vm = this;
    }) 
    .controller('GeneralController', function($http){
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/vocabularies.json')
        .success(function(data){
          vm.vocabularies = data;
        })
        .error(function(err){
          console.log(err);
        });
    })         
}());
