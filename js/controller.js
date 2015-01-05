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
    .controller('CardsController', function($http, $scope) {
      var vm = this;
      var id = 1;
      var idB = 0, idF = 0, idM = 0, idC = 0, idA = 0; 
      var numData;
      var $colr = document.querySelector('#flashC');
      console.log($colr);
      var url = "https://languagelearningapp.firebaseio.com/colors/" + 0 + "/English.json";
      console.log(url);
      $http.get(url).
        success(function(data){
          $scope.colors = data;
          $colr.innerHTML = data;
        })
         
        var $anim = document.querySelector('#flashA');    
        var url = "https://languagelearningapp.firebaseio.com/animals/" + 0 + "/English.json";
          $http.get(url).
          success(function(data){
          $scope.animals = data;
          $anim.innerHTML= data;
          })
        
          var $mon = document.querySelector('#flashM');    
          var url = "https://languagelearningapp.firebaseio.com/months/" + 0 + "/English.json";
          $http.get(url)
          .success(function(data){
          $scope.months = data;
          $mon.innerHTML= data;
          })
         

          var $fruit = document.querySelector('#flashF');    
          var url = "https://languagelearningapp.firebaseio.com/fruits/" + 0 + "/English.json";
          $http.get(url).
          success(function(data){
          $scope.fruits = data;
          $fruit.innerHTML = data;
          })
         $http.get("https://languagelearningapp.firebaseio.com/fruits.json")
         .success(function(data){
          console.log(data.length);
          numData = data.length; 
          })
                   
          
          vm.answercard = function(){
          var url = "https://languagelearningapp.firebaseio.com/fruits/" + id + "/Tigrigna.json";
          alert("fruits")
          if (id === numData) {
            return null;
          }else{
            $http.get(url).
            success(function(data){
            $scope.fruits = data; 
            $fruit.innerHTML= data;
              id++;
            })
           }
          };
          var $body = document.querySelector('#flashB');    
          var url = "https://languagelearningapp.firebaseio.com/bodyface/" + 0 + "/English.json";
          $http.get(url).
          success(function(data){
          $scope.bodyface = data;
          $body.innerHTML = data;
          })
         $http.get("https://languagelearningapp.firebaseio.com/bodyface.json")
         .success(function(data){
          console.log(data.length);
          numData = data.length; 
          })
                   
          vm.nextcard = function(topic) {
            switch(topic){
              case 'B':
                console.log("case B");
                idB++;
                var url = "https://languagelearningapp.firebaseio.com/bodyface/" + idB + "/English.json";
                $body = document.querySelector('#flashB');
                if(idB === numData) {
                  console.log(idB);
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.bodyface = data;
                    $body.innerHTML= data;
                  })
                }
                break;
              case 'F':
                console.log("case F");
                idF++;
                var url = "https://languagelearningapp.firebaseio.com/fruits/" + idF + "/English.json";
                $fruit = document.querySelector('#flashF');
                if(idF === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.fruits = data;
                    $fruit.innerHTML = data;
                  })
                }
                break;
              case 'M':
                console.log("case M");
                idM++;
                var url = "https://languagelearningapp.firebaseio.com/months/" + idM + "/English.json";
                var $mon = document.querySelector('#flashM');
                if(idM === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.months = data;
                    $mon.innerHTML = data;
                  })
                }
                break;
              case 'C':
                console.log("case C");
                idC++;
                var url = "https://languagelearningapp.firebaseio.com/colors/" + idC + "/English.json";
                $colr = document.querySelector('#flashC');
                if(idC === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.colors = data;
                    $colr.innerHTML = data;
                  })
                }
                break;
              case 'A':
                console.log("case A");
                idA++;
                var url = "https://languagelearningapp.firebaseio.com/animals/" + idA + "/English.json";
                $anim = document.querySelector('#flashA');
                if(idA === numData){
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.animals = data;
                    $anim.innerHTML = data;
                  })
                }
                break;
              default:
                console.log('default');
            }
          };

          vm.answercard = function(topic){
            //console.log(topic);
            switch(topic){
              case 'B':
                console.log("case B");
                var url = "https://languagelearningapp.firebaseio.com/bodyface/" + idB + "/Tigrigna.json";
                $body = document.querySelector('#flashB');
                if(idB === numData) {
                  console.log(idB);
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    console.log("success");
                    $body.innerHTML= data;
                  })
                }
                break;
              case 'F':
                console.log("case F");
                var url = "https://languagelearningapp.firebaseio.com/fruits/" + idF + "/Tigrigna.json";
                $fruit = document.querySelector('#flashF');
                if(idF === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $fruit.innerHTML = data;
                  })
                }
                break;
              case 'M':
                console.log("case M");
                var url = "https://languagelearningapp.firebaseio.com/months/" + idM + "/Tigrigna.json";
                var $mon = document.querySelector('#flashM');
                if(idM === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $mon.innerHTML = data;
                  })
                }
                break;
              case 'C':
                console.log("case C");
                var url = "https://languagelearningapp.firebaseio.com/colors/" + idC + "/Tigrigna.json";
                $colr = document.querySelector('#flashC');
                if(idC === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $colr.innerHTML = data;
                  })
                }
                break;
              case 'A':
                console.log("case A");
                var url = "https://languagelearningapp.firebaseio.com/animals/" + idA + "/Tigrigna.json";
                $anim = document.querySelector('#flashA');
                if(idA === numData){
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $anim.innerHTML = data;
                  })
                }
                break;
              default:
                console.log('default');
            }
          };
          vm.resetcard = function(){
            if(id !== numData) {
              angular.element($val).empty();
            }else{
              //numData;
              alert("You finished all the cards so refresh to start again");

            }
          };
        })
    .controller('FlipController', function($http) {
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/days.json')
        .success(function(data){
          vm.days = data;
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
      $http.get('https://languagelearningapp.firebaseio.com/animals.json')
        .success(function(data){
          vm.animals = data;
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
      $http.get('https://languagelearningapp.firebaseio.com/fruits.json')
        .success(function(data){
          vm.fruits = data;
        })
        .error(function(err){
          console.log(err);
        });             
      })
    .controller('QuizController', function($http, $scope) {
      var vm = this;
      $http.get("https://languagelearningapp.firebaseio.com/days.json")
      .success(function(data){
        vm.days = data;
      })
      .error(function(err){
        console.log(err);
      });
      vm.submit = function(){
      var val = document.querySelector('#submit').value;
      var url = "https://languagelearningapp.firebaseio.com/days.json";
       console.log(val);
       console.log(url);
       $scope.val = url;
        // var urlE = "https://languagelearningapp.firebaseio.com/days/" + id + "/English.json";
          if(val !== url) {
               alert("wrong answer plz try again");
          }else{
            alert("you are correct");
          }
      };
      vm.correctAnswer = function(){
      var $target = document.querySelector('#submit');
      var id = 0;
      var url = "https://languagelearningapp.firebaseio.com/days.json";
        angular.element($target).append(url);
      };
    })
}());
