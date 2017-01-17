"use strict"

const fizzbuzz = (a, b) => {

  for(let i = a; i <= b; i++){

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

const fizzBuzz = () => {
let fbArray = [];
  for(let i = 1; i <= 100; i++){

    if( i % 15 == 0 ){
      fbArray.push("fizzbuzz");
    } else if ( i % 5 == 0 ){
      fbArray.push("Buzz");
    } else if ( i % 3 == 0 ){
      fbArray.push("Fizz");
    } else {
      fbArray.push(i);
    }
  }

  console.log(fbArray);

}


//console.log(fizzbuzz(1,100));

module.exports = fizzBuzz
