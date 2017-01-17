'use strict'

//
// function makeChange(price, amountGiven) {
//     let amount = amountGiven - price;
//
//     let normalized = Math.floor( ( amount || 0 ) * 100 )
//
//     let quarters = Math.floor( normalized / 25 )
//     normalized -= quarters * 25
//
//     let dimes = Math.floor( normalized / 10 )
//     normalized -= dimes * 10
//
//     let nickels = Math.floor( normalized / 5 )
//     normalized -= nickels * 5
//
//     let pennies = normalized
//
//     return { quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies }
//   }
//



  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

var calculateChange = function(amountPaid) {
  let change = amountPaid;

  switch (true) {
  case (change >= 25):
    quarters += 1;
    let amountPaid1 = (change - 25);
  calculateChange(amountPaid1);
  break;
  case (change >= 10):
    dimes += 1;
    let amountPaid2 = (change - 10);
  calculateChange(amountPaid2);
  break;
  case (change >= 5):
    nickels  += 1;
    let amountPaid3 = (change - 5);
  calculateChange(amountPaid3);
  break;
  case (change >= 1):
    pennies  += 1;
    let amountPaid4 = (change - 1);
  calculateChange(amountPaid4);
  break;
  default:
  console.log("quarters: " + quarters + " dimes: " + dimes + " nickels: " + nickels + " pennies: " + pennies);
  }
};




console.log( calculateChange(60) );
