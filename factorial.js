/* function factorial(x) {
  if(x == 0) {
    return 1;
  }
  if(x < 0 ) {
    return undefined;
  } else
    return x * factorial(x-1)
}

console.log(factorial(0));
*/
'use strict'
function factorial(n){
//take a number
//recursively subtract one
//multiply the previous number by the current number
if( typeof( n ) !== 'number' ) {
  throw "InvalidInput"
}

if(n === 0){
  return 1;
}
return n * factorial(n-1)


// recursion stopping point is when currentNumber is equal to zero
}
console.log(factorial(0));
