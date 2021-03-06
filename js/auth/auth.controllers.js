;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .controller('LoginController', function(authFactory, $scope, $location){
     var vm = this;  
     vm.login = function(){ 
      authFactory.login(vm.email, vm.password, function($rootScope, authData){
        $rootScope.user = authData;
         $location.path('/home');
         $scope.$apply();  
      });
     };
      vm.forgotPassword = function(){
      	authFactory.resetPassword(vm.email);
      };
      vm.register = function(){
        authFactory.register(vm.email, vm.password, function(){
          vm.login();
        });
     };
    })
    .controller('LogoutController', function($scope, $location, authFactory){
      authFactory.logout(function(){
        $location.path('/');
        $scope.$apply();
      });
    })
   
}());
