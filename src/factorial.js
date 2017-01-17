'use strict'

const factorial = (arg) => {

       if(arg == 0) {
           return 1;
       }
       if(arg < 0) {
           return undefined;
       }
       for(var i = arg; --i; ) {
           arg *= i;
       }
       return arg;
}


console.log('factorial of 5 is: ' + factorial(5))

module.exports = factorial;
