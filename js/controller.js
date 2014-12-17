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
           console.log("Error creating user:", error);
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
}());