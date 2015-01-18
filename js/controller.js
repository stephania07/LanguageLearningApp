;(function(){
  'use strict';
  angular.module('languagelearningApp')
    .controller('CarouselDemoCtrl', function ($http, $scope) {
      var vm = this;
      $http.get('https://languagelearningapp.firebaseio.com/slides.json')
        .success(function(data){
          $scope.myInterval = 2000;
          vm.slides = data;  
        })       
    })     
    .controller('HomeController', function(){
      
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
    // .controller('CardsNavigateController', function(){

    // })
    .controller('CardsController', function($http, $scope) {
      var vm = this;
      var id = 1;
      var idB = 0, idF = 0, idM = 0, idC = 0, idA = 0; 
      var numData;
        var $colr = document.querySelector('#flashC');
        console.log($colr);
        var url = "https://languagelearningapp.firebaseio.com/colors/" + 0 + "/English.json";
          $http.get(url)
          .success(function(data){
            $scope.colors = data;
            $colr.innerHTML = data;
        })
         
        var $anim = document.querySelector('#flashA');    
        var url = "https://languagelearningapp.firebaseio.com/animals/" + 0 + "/English.json";
          $http.get(url)
          .success(function(data){
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

          var $body = document.querySelector('#flashB');    
          var url = "https://languagelearningapp.firebaseio.com/bodyface/" + 0 + "/English.json";
          $http.get(url).
          success(function(data){
            $scope.bodyface = data;
           $body.innerHTML = data;
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
                //console.log("case A");
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
            switch(topic){
              case 'B':
                console.log("case B");
                var url = "https://languagelearningapp.firebaseio.com/bodyface/" + idB + "/Tigrigna.json";
                $body = document.querySelector('#flashB');
                if(idB === numData) {
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
          vm.resetcard = function(topic){
          	switch(topic) {
          		case 'C':        
                  	 idC = 0;
                     var url = "https://languagelearningapp.firebaseio.com/colors/" + idC + "/English.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.colors = data;
                       $colr.innerHTML = data;
                     })
          		      break;
          		case 'B':
          		       idB = 0;
                     var url = "https://languagelearningapp.firebaseio.com/bodyface/" + idB + "/English.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.bodyface = data;
                       $body.innerHTML = data;
                     })
          		  break;
              case 'F':
                     idF = 0;
                     var url = "https://languagelearningapp.firebaseio.com/fruits/" + idF + "/English.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.fruits = data;
                       $fruit.innerHTML = data;
                     })
                break;
              case 'M':
                     idM = 0;
                     var url = "https://languagelearningapp.firebaseio.com/months/" + idM + "/English.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.months = data;
                       $mon.innerHTML = data;
                     })
                break;
              case 'A':
                     idA = 0;
                     var url = "https://languagelearningapp.firebaseio.com/animals/" + idA + "/English.json";
                     $http.get(url)
                     .success(function(data){
                       $scope.animals = data;
                       $anim.innerHTML = data;
                     })
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
      vm.correctCount =0;
      vm.totalQuestions;
      vm.totalRightAnswers =0;
      $http.get("https://languagelearningapp.firebaseio.com/days.json")
      .success(function(data){
        vm.days = data;
      })
      .error(function(err){
        console.log(err);
      });
      vm.submit = function(idDays, idNum, cb){
      var id = idNum;
      console.log(id);
      console.log(idDays);
      var val = document.querySelector('#'+idDays).value;
      var url = "https://languagelearningapp.firebaseio.com/days/" + id + "/Tigrigna.json";
          $http.get(url)
            .success(function(data){          
            if(val !== data) {
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
      var url = "https://languagelearningapp.firebaseio.com/days/" + id + "/Tigrigna.json";
        $http.get(url)
        .success(function(data){
          $target.value = data;
        })
          $event.preventDefault();
      };
      var url = "https://languagelearningapp.firebaseio.com/days.json";
        $http.get(url)
        .success(function(data){
          console.log(data);
          vm.totalQuestions = data.length;
        })
      vm.getPercentage = function(){
        return Math.floor((vm.correctCount/vm.totalQuestions)*100);
      };
      vm.getPercentageA = function(){
        return Math.floor((vm.totalRightAnswers/vm.totalQuestions)*100);
      };
      
      $http.get("https://languagelearningapp.firebaseio.com/animals.json")
      .success(function(data){
        vm.animals = data;
        console.log(data);
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
      var url = "https://languagelearningapp.firebaseio.com/animals/" + id + "/Tigrigna.json";
      console.log(url);
        $http.get(url)
        .success(function(data){  
          console.log(data);        
          if(userInput !== data) {
            alert('Incorrect');
          }else{
            alert('Correct');
            vm.totalRightAnswers++;
            vm.totalQuestions;
            vm.getPercentageA();
          }
        })
        };
      
      $http.get("https://languagelearningapp.firebaseio.com/colors.json")
      .success(function(data){
        vm.colors = data;
      })
      .error(function(err){
        console.log(err);
      });
    })
      .controller("SearchController", function($http, $scope){
      var vm = this;
      var url = "https://languagelearningapp.firebaseio.com/myData/animals.json";
      console.log(url);
      $http.get(url)
      .success(function(data){
        vm.animals = data;
        console.log(data);
        vm.results =[];
        vm.findValue = function(enteredValue) {
          angular.forEach($scope.myData, function(value, key){
            console.log($scope.myData);
            if(key === enteredValue){
              console.log(key);
              $scope.results.push({Englsih: key, Tigrigna: value[0].Tigrigna});
            }
          });
        };
    }) 
   
  }) 
}());
