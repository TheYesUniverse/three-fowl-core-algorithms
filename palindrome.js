/*import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'*/

/*
function fibonacci (number) {
  if( typeof( number ) !== 'number' ) {
    throw "InvalidInput"
  }
  let fibArray = [0,1]
  if ( number < 3 )
  return fibArray;

  for ( let i = 2; i < number; i++ ) {
    fibArray[i] = fibArray[i-1] + fibArray[i-2]
  }
  return fibArray;
  }
console.log(fibonacci(20))
*/

function fibonacci ( number ) {
  var fibArray = [0, 1]
  if ( number <= 0 ) return undefined;
  if ( number === 1 ) return fibArray = [0]
  if ( number === 2 ) return fibArray = [0,1]
  if ( number >= 3 ) {
    for ( var i = 2; i < number; i++ ) {
        fibArray[ i ] = fibArray[ i - 1 ] + fibArray[ i - 2 ]
    }
  }
    return fibArray
}

console.log(fibonacci(20))
