"use strict"

const fibonacci = ( number ) => {
  const fibArray = [0, 1]
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

module.exports = fibonacci;
