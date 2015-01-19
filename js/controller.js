;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .controller('CarouselDemoCtrl', function ($http, $scope) {
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/myData.json')
        .success(function(data){
          $scope.myInterval = 2000;
          vm.slides = data.slides;  
        })       
    })     
    .controller('HomeController', function(){
      
    }) 
    
    .controller('GreetingsController', function($http) {
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/myData.json')
        .success(function(data){
          vm.greetings = data.greetings;
        })
        .error(function(err){
          console.log(err);
        });
    }) 
    // .controller('CardsNavigateController', function(){

    // })
    .controller('CardsController', function($http, $scope) {
      var vm = this;
      var id = 1;
      var idB = 0, idF = 0, idM = 0, idC = 0, idA = 0; 
      var numData;
        var $colr = document.querySelector('#flashC');
        console.log($colr);
        var url = "https://languagelearningapp.firebaseio.com/myData.json";
          $http.get(url)
          .success(function(data){
            $scope.colors = data.colors[0].English;
            $colr.innerHTML = data.colors[0].English;
        })
         
        var $anim = document.querySelector('#flashA');    
        var url = "https://languagelearningapp.firebaseio.com/myData.json";
          $http.get(url)
          .success(function(data){
            $scope.animals = data.animals[0].English;
            $anim.innerHTML= data.animals[0].English;
          })
        
          var $mon = document.querySelector('#flashM');    
          var url = "https://languagelearningapp.firebaseio.com/myData.json";
          $http.get(url)
          .success(function(data){
            $scope.months = data.months[0].English;
            $mon.innerHTML= data.months[0].English;
          })
         

          var $fruit = document.querySelector('#flashF');    
          var url = "https://languagelearningapp.firebaseio.com/myData.json";
          $http.get(url).
          success(function(data){
            $scope.fruits = data.fruits[0].English;
            $fruit.innerHTML = data.fruits[0].English;
          })

          var $body = document.querySelector('#flashB');    
          var url = "https://languagelearningapp.firebaseio.com/myData.json";
          $http.get(url).
          success(function(data){
            $scope.bodyface = data.bodyface[0].English;
           $body.innerHTML = data.bodyface[0].English;
          })
                            
          vm.nextcard = function(topic) {
            switch(topic){
              case 'B':
                console.log("case B");
                idB++;
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $body = document.querySelector('#flashB');
                if(idB === numData) {
                  console.log(idB);
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.bodyface = data.bodyface[idB].English;
                    $body.innerHTML= data.bodyface[idB].English;
                  })
                }
                break;
              case 'F':
                console.log("case F");
                idF++;
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $fruit = document.querySelector('#flashF');
                if(idF === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.fruits = data.fruits[idF].English;
                    $fruit.innerHTML = data.fruits[idF].English;
                  })
                }
                break;
              case 'M':
                console.log("case M");
                idM++;
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                var $mon = document.querySelector('#flashM');
                if(idM === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.months = data.months[idM].English;
                    $mon.innerHTML = data.months[idM].English;
                  })
                }
                break;
              case 'C':
                console.log("case C");
                idC++;
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $colr = document.querySelector('#flashC');
                if(idC === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.colors = data.colors[idC].English;
                    $colr.innerHTML = data.colors[idC].English;
                  })
                }
                break;
              case 'A':
                //console.log("case A");
                idA++;
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $anim = document.querySelector('#flashA');
                if(idA === numData){
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $scope.animals = data.animals[idA].English;
                    $anim.innerHTML = data.animals[idA].English;
                  })
                }
                break;
              default:
                console.log('default');
            }
          };

          vm.answercard = function(topic){
            switch(topic){
              case 'B':
                console.log("case B");
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $body = document.querySelector('#flashB');
                if(idB === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    console.log("success");
                    $body.innerHTML= data.bodyface[idB].Tigrigna;
                  })
                }
                break;
              case 'F':
                console.log("case F");
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $fruit = document.querySelector('#flashF');
                if(idF === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $fruit.innerHTML = data.fruits[idF].Tigrigna;
                  })
                }
                break;
              case 'M':
                console.log("case M");
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                var $mon = document.querySelector('#flashM');
                if(idM === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $mon.innerHTML = data.months[idM].Tigrigna;
                  })
                }
                break;
              case 'C':
                console.log("case C");
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $colr = document.querySelector('#flashC');
                if(idC === numData) {
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $colr.innerHTML = data.colors[idC].Tigrigna;
                  })
                }
                break;
              case 'A':
                console.log("case A");
                var url = "https://languagelearningapp.firebaseio.com/myData.json";
                $anim = document.querySelector('#flashA');
                if(idA === numData){
                  return null;
                }else{
                  $http.get(url)
                  .success(function(data){
                    $anim.innerHTML = data.animals[idA].Tigrigna;
                  })
                }
                break;
              default:
                console.log('default');
            }
          };
          vm.resetcard = function(topic){
          	switch(topic) {
          		case 'C':        
                  	 idC = 0;
                     var url = "https://languagelearningapp.firebaseio.com/myData.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.colors = data.colors[idC].English;
                       $colr.innerHTML = data.colors[idC].English;
                     })
          		      break;
          		case 'B':
          		       idB = 0;
                     var url = "https://languagelearningapp.firebaseio.com/myData.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.bodyface = data.bodyface[idB].English;
                       $body.innerHTML = data.bodyface[idB].English;
                     })
          		  break;
              case 'F':
                     idF = 0;
                     var url = "https://languagelearningapp.firebaseio.com/myData.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.fruits = data.fruits[idF].English;
                       $fruit.innerHTML = data.fruits[idF].English;
                     })
                break;
              case 'M':
                     idM = 0;
                     var url = "https://languagelearningapp.firebaseio.com/myData.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.months = data.months[idM].English;
                       $mon.innerHTML = data.months[idM].English;
                     })
                break;
              case 'A':
                     idA = 0;
                     var url = "https://languagelearningapp.firebaseio.com/myData.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.animals = data.animals[idA].English;
                       $anim.innerHTML = data.animals[idA].English;
                     })
          	 }  
          };
    })
    .controller('FlipController', function($http) {
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
    .controller('QuizController', function($http, $scope) {
      var vm = this;
      vm.correctCount =0;
      vm.totalQuestions;
      vm.totalRightAnswers =0;
      vm.countRightColor = 0;
      $http.get("https://languagelearningapp.firebaseio.com/myData.json")
      .success(function(data){
        vm.days = data.days;
      })
      .error(function(err){
        console.log(err);
      });
      vm.submit = function(idDays, idNum, cb){
      var id = idNum;
      console.log(id);
      console.log(idDays);
      var val = document.querySelector('#'+idDays).value;
      var url = "https://languagelearningapp.firebaseio.com/myData.json";
          $http.get(url)
            .success(function(data){          
            if(val.toLowerCase() !== data.days[id].Tigrigna.toLowerCase()) {
               alert("your answer is incorret");
           }else{
              alert("Your answer is correct");
              vm.correctCount++;
              vm.totalQuestions;
              vm.getPercentage();
           } 
        })
      };
      vm.correctAnswer = function(idDays, idNum, $event){
      var id = idNum;
      var $target = document.querySelector('#'+idDays);
      var url = "https://languagelearningapp.firebaseio.com/myData.json";
        $http.get(url)
        .success(function(data){
          $target.value = data.days[id].Tigrigna;
        })
          $event.preventDefault();
      };
      var url = "https://languagelearningapp.firebaseio.com/myData.json";
        $http.get(url)
        .success(function(data){
          console.log(data.days);
          vm.totalQuestions = data.days.length;
        })
      vm.getPercentage = function(){
        return Math.floor((vm.correctCount/vm.totalQuestions)*100);
      };
      vm.getPercentageA = function(){
        return Math.floor((vm.totalRightAnswers/vm.totalQuestions)*100);
      };
      
      $http.get("https://languagelearningapp.firebaseio.com/myData.json")
      .success(function(data){
        vm.animals = data.animals;
        console.log(data.animals);
      })
      .error(function(err){
        console.log(err);
      });
      vm.check = function(idAnimals,idNum, cb){
      var id = idNum;
      console.log(id);
      console.log(idAnimals);
      var userInput = document.querySelector('#' + idAnimals).value;
      console.log(userInput);
      var url = "https://languagelearningapp.firebaseio.com/myData.json";
      console.log(url);
        $http.get(url)
        .success(function(data){  
          console.log(data.animals);        
          if(userInput !== data.animals[id].Tigrigna) {
            alert('Incorrect');
          }else{
            alert('Correct');
            vm.totalRightAnswers++;
            vm.totalQuestions;
            vm.getPercentageA();
          }
        })
        };
      
      $http.get("https://languagelearningapp.firebaseio.com/myData.json")
      .success(function(data){
        vm.colors = data.colors;
      })
      .error(function(err){
        console.log(err);
      });
     // vm.check = function(){

     // }
    })
      .controller("SearchController", function($http, $scope){
      var json;
      var vm = this;
      var url = "https://languagelearningapp.firebaseio.com/searchData.json";
      console.log(url);
      $http.get(url)
      .success(function(data){
        json = data;
        vm.animals = data.animals;
        vm.colors = data.colors;
        vm.months = data.months;
        vm.days = data.days;
        vm.fruits = data.fruits;
        vm.bodyface = data.bodyface;
        console.log(data);
        vm.results =[];
        vm.findValue = function(enteredValue) {
          angular.forEach(json, function(value, key){
            angular.forEach(value, function(v, k){
              if (v.English.toLowerCase() == enteredValue.toLowerCase()) {  
                vm.results.push({English: v.English, Tigrigna: v.Tigrigna});
              };
            });
          });
        };
    }) 
   
  }) 
}());
