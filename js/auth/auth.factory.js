;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .factory('authFactory', function($rootScope, $location, FIREBASE_URL){
      var factory = {},
       ref = new Firebase(FIREBASE_URL); 

    $rootScope.user = ref.getAuth();

    factory.requireLogin = function(){
      if(!_isLoggedIn()){
        $location.path('/login');
      }
    }

    factory.disallowLogin = function(){
      if(_isLoggedIn()){
        $location.path('/home');
      }
    };
    function _isLoggedIn(){
      return Boolean(ref.getAuth());
    } 

    factory.login = function(email, pass, cb){
     ref.authWithPassword({
       email    : email,
       password : pass
       }, function(error, authData) {
         if (error === null) {
           cb();
           console.log("User logged in successfully", authData);
       } else {
           console.log("Error in loggin user:", error);
       } 
      });
    };
    factory.logout = function(cb){
        ref.unauth(function(){
          $rootScope.user = null;
          cb();
        });
      };
    
    factory.register = function(email, pass, cb){
      ref.createUser({
        email    : email,
        password : pass
        }, function(error, authData) {
          if (error === null) {
            console.log("User created successfully", authData);
            cb();
          } else {
            console.log("Error creating user:", error);
          }
        })
       };  

    factory.resetPassword = function(email) {
      ref.resetPassword({
        email : email
        }, function(error) {
          if (error === null) {
            console.log("Password reset email sent successfully");
          } else {
            console.log("Error sending password reset email:", error);
          }
        });
    };
    return factory;
    }) 
}());
