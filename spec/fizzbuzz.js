"use strict"

var fizzbuzz = function(a, b){

  for(var i = a; i <= b; i++){

    if( i % 15 == 0 ){
      console.log("Fizzbuzz");
    } else if ( i % 5 == 0 ){
      console.log("Buzz");
    } else if ( i % 3 == 0 ){
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }

}

console.log(fizzbuzz(1,100));
