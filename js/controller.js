;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .factory('authFactory', function(FIREBASE_URL){
      var factory = {},
       ref = new Firebase(FIREBASE_URL);   
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
    return factory;
  })
    .controller('LoginController', function(authFactory, $scope, $location){
     var vm = this;  
     vm.login = function(){
      authFactory.login(vm.email, vm.password, function(){
         $location.path('/home');
         $scope.$apply();  
      });
     };
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
      vm.register = function(){
        var ref = new Firebase("https://languagelearningapp.firebaseio.com")
        ref.createUser({
        email    : vm.email,
        password : vm.password
        }, function(error, authData) {
          if (error === null) {
            $location.path('/home');
            $scope.$apply();
            vm.login();
            console.log("User created successfully", authData);
          } else {
            console.log("Error creating user:", error);
          }
        })
       };
    })
    .controller('LogoutController', function($scope, $location){
      var ref = new Firebase("https://languagelearningapp.firebaseio.com");
      ref.unauth(function(){
        $location.path('/');
        $scope.$apply();
      });
    })
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
    .controller('ShowController', function($http, $routeParams){
      var vm = this;
      var id = $routeParams.id;
      $http.get('https://languagelearningapp.firebaseio.com/vocabularies' + id + '.json')
        .success(function(data){
          vm.vocabularies = data;
        })
        .error(function(err){
          console.log(err);
        })

    })
    .controller('NumberController', function($http){
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/numbers.json')
        .success(function(data){
          vm.numbers = data;
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
    .controller('DemonstrativeController', function($http, $routeParams, $scope) {
      var vm = this;

      vm.nextcard = function(){
        var $target = document.querySelector('#flash');
        $target.innerHTML= "";
        var $id = $routeParams.id;
        var url = "https://languagelearningapp.firebaseio.com/numbers/" + $id  + "/English.json";
        //console.log(url);
        $http.get(url).
        success(function(data){
          $scope.numbers = data;
          console.log(data);
          angular.element($target).append(data);
        })
        // $http.get("https://languagelearningapp.firebaseio.com/numbers.json")
        // .success(function(data){
        //   vm.numbers = data;
        //   console.log(data);
        //   for(var i=0; i<data.length; i++){
        //     var key = data[i].English;
        //     for(var j=0; j<key.length; j++){
        //       console.log(key);
        //       angular.element($target).append(key);
        //    }
        //    }
        //   })
      };
      vm.truecard = function(){
        var $target = document.querySelector('#flash');
        $target.innerText = "";
        $http.get("https://languagelearningapp.firebaseio.com/numbers.json")
        .success(function(data){
          vm.numbers = data; 
          for (var i=0; i<data.length; i++){
            if(data[i].English) {
              console.log(angular.element($target).append(data[i].Tigrigna));
          }
          
         }
        })
      };

      function getRandomInt(nums){
        var result = Math.floor((Math.random()*nums)%nums);
        return result;
         //console.log(result);
      }      
        console.log(getRandomInt(6));
      
    }) 
}());
