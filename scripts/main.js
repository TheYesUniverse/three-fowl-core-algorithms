"use strict"

$('#foldImage').mouseover(() => {
  $('#spaWarning').css({'display':'block'});
  console.log('mousein')
}).mouseleave(() => {
  $('#spaWarning').css({'display':'none'});
  console.log('mouseleave')
})

/* ~~~~~~~~~~~~~~~~~~~~~~ routing functionality below ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const routesObj = {
  1: '#welcomePage',
  2: '#makeChangePage',
  3: '#fizzBuzzPage',
  4: '#palindromePage',
  5: '#factorialPage',
  6:'#fibonacciPage',
  7:'#collatzConjecturePage',
  8: '#setUnionPage',
  9: '#setIntersectionPage',
  10: '#setComplimentPage',
  11: '#setSymmetricDifferencePage',
  12: '#mergeSortPage',
  13: '#bubbleSortPage',
  14: '#binarySearchPage',
  15: '#closestPairPage',
  16: '#connectedGraphPage'
}

const hideAllPages = () => {
  for(var i = 0; i <= Object.keys(routesObj).length; i++){
    $(routesObj[i]).css({'display':'none'});
  }
}

hideAllPages();
$('#welcomePage').css({'display':'block'});

const displayWelcomePage = () => {
  hideAllPages();
  $('#welcomePage').css({'display':'block'});
}

const displayMakeChangePage = () => {
  hideAllPages();
  $('#makeChangePage').css({'display':'block'});
}

const displayFizzBuzzPage = () => {
  hideAllPages();
  $('#fizzBuzzPage').css({'display':'block'});
}
const displayPalindromePage = () => {
  hideAllPages();
  $('#palindromePage').css({'display':'block'});
}
const displayFactorialPage = () => {
  hideAllPages();
  $('#factorialPage').css({'display':'block'});
}
const displayFibonacciPage = () => {
  hideAllPages();
  $('#fibonacciPage').css({'display':'block'});
}
const displayCollatzConjecturePage = () => {
  hideAllPages();
  $('#collatzConjecturePage').css({'display':'block'});
}
const displaySetUnionPage = () => {
  hideAllPages();
  $('#setUnionPage').css({'display':'block'});
}
const displaySetIntersectionPage = () => {
  hideAllPages();
  $('#setIntersectionPage').css({'display':'block'});
}
const displaySetComplimentPage = () => {
  hideAllPages();
  $('#setComplimentPage').css({'display':'block'});
}
const displaySetSymmetricDifferencePage = () => {
  hideAllPages();
  $('#setSymmetricDifferencePage').css({'display':'block'});
}
const displayMergeSortPage = () => {
  hideAllPages();
  $('#mergeSortPage').css({'display':'block'});
}
const displayBubbleSortPage = () => {
  hideAllPages();
  $('#bubbleSortPage').css({'display':'block'});
}
const displayBinarySearchPage = () => {
  hideAllPages();
  $('#binarySearchPage').css({'display':'block'});
}
const displayClosestPairPage = () => {
  hideAllPages();
  $('#closestPairPage').css({'display':'block'});
}
const displayConnectedGraphPage = () => {
  hideAllPages();
  $('#connectedGraphPage').css({'display':'block'});
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm makeChange ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const makeChange = (price, amountGiven) => {
    let amount = amountGiven - price;

    let normalized = Math.floor( ( amount || 0 ) * 100 )

    let quarters = Math.floor( normalized / 25 )
    normalized -= quarters * 25

    let dimes = Math.floor( normalized / 10 )
    normalized -= dimes * 10

    let nickels = Math.floor( normalized / 5 )
    normalized -= nickels * 5

    let pennies = normalized

    const solution = { quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies }
    return solution;
}

const calculateMakeChange = () => {

  const makeChangeInput1 = $('#makeChangeInput1').val();
  const makeChangeInput2 = $('#makeChangeInput2').val();
  const makeChangeResult = $('#makeChangeResult').val();

  if(makeChangeInput1 === '' || makeChangeInput2 === ''){
      $('#makeChangeResult').val('please enter two arguments').css({'color':'indianred'});
      console.log('please enter two arguments')
  } else if(isNaN(makeChangeInput1) || isNaN(makeChangeInput2)){
      $('#makeChangeResult').val('please enter numbers').css({'color':'indianred'});
  } else {
      const solution = makeChange(makeChangeInput1, makeChangeInput2);
      $('#makeChangeResult').val(JSON.stringify(solution)).css({'color':'black'});
  }
}

const clearMakeChange = () => {

  $('#makeChangeInput1').val('');
  $('#makeChangeInput2').val('');
  $('#makeChangeResult').val('');
  solution == " "

}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm fizzbuzz ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const fizzBuzz = (startingInteger, endingInteger) => {

  let resultArray = [];

  for(let i = startingInteger; i <= endingInteger; i++){

    if( i % 15 === 0 ){
      resultArray += " Fizzbuzz ";
    } else if ( i % 5 === 0 ){
      resultArray += " Buzz ";
    } else if ( i % 3 === 0 ){
      resultArray += " Fizz ";
    } else {
      resultArray += ' '+i+' ';
    }

  }

  let solution = resultArray;
  return solution;

}

const calculateFizzBuzz = () => {

  const fizzBuzzInput1 = $('#fizzBuzzInput1').val();
  const fizzBuzzInput2 = $('#fizzBuzzInput2').val();
  const fizzBuzzResult = $('#fizzBuzzResult').val();


  if(fizzBuzzInput1 === '' || fizzBuzzInput2 === ''){
    $('#fizzBuzzResult').val('please enter two arguments').css({'color':'indianred'});
  } else if (isNaN(fizzBuzzInput1) || isNaN(fizzBuzzInput2)){
    $('#fizzBuzzResult').val('please enter numbers').css({'color':'indianred'});
  } else {
    const solution = fizzBuzz(fizzBuzzInput1, fizzBuzzInput2);
    $('#fizzBuzzResult').val(JSON.stringify(solution)).css({'color':'black'});
  }
}

const clearFizzBuzz = () => {

  $('#fizzBuzzInput1').val('');
  $('#fizzBuzzInput2').val('');
  $('#fizzBuzzResult').val('');
  solution == null

}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm palindrome ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const palindrome = (arg) => {

    let submission = arg.replace(/[^\w,]/g, '').replace(/\d/g,''); // regEx to remove whitespace, special characters and integers.
    let submissionArray = submission.split('');
    let loopLength;
    let middleNumIndex;
    let w;
    let e;

    if(submissionArray.length % 2 == 0){
       loopLength = submissionArray.length / 2
        w = (submissionArray.length / 2) - 1
        e = w + 1

    } else {

        middleNumIndex = (submissionArray.length / 2) - 0.5
        loopLength = (submissionArray.length / 2) - 0.5
         w = middleNumIndex - 1
         e = middleNumIndex + 1
    }

    for(let i = 0; i <= loopLength; i++){
      if(submissionArray[w] == submissionArray[e]){
          console.log('your entry: '+arg)
          console.log(submissionArray[w]+' matches '+submissionArray[e])
      } else {
        console.log(submissionArray[w]+' does not match '+submissionArray[e])
        return false
      }
        w -= 1
        e += 1
      console.log('true')
    }

    return true

}

const calculatePalindrome = () => {

  const palindromeInput = $('#palindromeInput').val();

  if(palindromeInput === ''){
    $('#palindromeResult').val('please enter an argument').css({'color':'indianred'});
    console.log('please enter arg');
  } else if (!(isNaN(palindromeInput))){
    $('#palindromeResult').val('please enter a palindrome word or sentence').css({'color':'indianred'});
  } else {
    const solution = palindrome(palindromeInput);
    $('#palindromeResult').val(solution).css({'color':'black'});
  }
}

const clearPalindrome = () => {

  $('#palindromeInput').val('');
  $('#palindromeResult').val('');
  solution == null

}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm factorial ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

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

const calculateFactorial = () => {

  const factorialInput = $('#factorialInput').val();

  if(factorialInput === ''){
    $('#factorialResult').val('please enter an argument').css({'color':'indianred'});
    console.log('please enter arg');
  } else if (isNaN(factorialInput)){
    $('#factorialResult').val('please enter a number').css({'color':'indianred'});
  } else {
    const solution = factorial(factorialInput);
    $('#factorialResult').val(solution).css({'color':'black'});
  }
}

const clearFactorial = () => {

  $('#factorialInput').val('');
  $('#factorialResult').val('');
  solution == null

}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm fibonacci ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

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

const calculateFibonacci = () => {

  const fibonacciInput = $('#fibonacciInput').val();

  if(fibonacciInput === ''){
    $('#fibonacciResult').val('please enter an argument').css({'color':'indianred'});
    console.log('please enter arg');
  } else if (isNaN(fibonacciInput)){
    $('#fibonacciResult').val('please enter a number').css({'color':'indianred'});
    console.log('NaN')
  } else {
    const solution = fibonacci(fibonacciInput);
    $('#fibonacciResult').val(solution).css({'color':'black'});
  }
}

const clearFibonacci = () => {

  $('#fibonacciInput').val('');
  $('#fibonacciResult').val('');
  solution == null

}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm collatzConjecture ~~~~~~~~~~~~~~~~~~~~~~~~ */

const collatzConjecture = (start) => {

  let array = [];

  const doCollatz = (n) => {
    if( typeof( n ) !== 'number' ) {
      console.log('InvalidInput')
    }

    array.push(n);

    if (n === 1){
      return 1
    }
    if(n % 2 != 0) {
      n = (n * 3) + 1;
      array.push(n);
    }
    if (n % 2 === 0) {
      n = n/2;
    }
    doCollatz(n)
  }

  doCollatz(start)

  return array
}

const calculateCollatzConjecture = () => {

  const collatzConjectureInput = $('#collatzConjectureInput').val();

  if(collatzConjectureInput === ''){
    $('#collatzResult').val('please enter an argument').css({'color':'indianred'});
    console.log('please enter arg');
  } else if (isNaN(collatzConjectureInput)){
    $('#collatzConjectureResult').val('please enter a number').css({'color':'indianred'});
  } else {
    const solution = collatzConjecture(collatzConjectureInput);
    $('#collatzConjectureResult').val(solution).css({'color':'black'});
  }
}

const clearCollatzConjecture = () => {

  $('#collatzConjectureInput').val('');
  $('#collatzConjectureResult').val('');
  solution == null

}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm setUnion ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function setUnion(arr1,arr2) {

  let results = []
  const normalizeLength = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < normalizeLength; i++ ){
      results.push(arr1[i])
      results.push(arr2[i])
      results.sort(function(a, b) {
        return a - b;
      });
    }

    for (let i = 0 ; i < results.length; i++){

      if(results[i] === results[i +1]){

        results.splice(i, 1)
        i--

      }
    }

  return results;
}

const calculateSetUnion = () => {

  const setUnionInput1 = $('#setUnionInput1').val(); // 1, 2, 5
  const setUnionInput2 = $('#setUnionInput2').val();

  if(setUnionInput1 === '' || setUnionInput2 === ''){
    $('#setUnionResult').val('please enter an argument').css({'color':'indianred'});
    console.log('please enter arg');
  } else if (!(setUnionInput1.isArray) || !(setUnionInput2.isArray)){
    $('#setUnionResult').val('please enter a number').css({'color':'indianred'});
  } else {
    const solution = setUnion(setUnionInput1, setUnionInput2);
    $('#setUnionResult').val(solution).css({'color':'black'});
  }
}

const clearSetUnion = () => {

  $('#setUnionInput1').val('');
  $('#setUnionInput2').val('');
  $('#setUnionResult').val('');

}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm setIntersection ~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm setCompliment ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm setSymmetricDifference ~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm mergeSort ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm bubbleSort ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm binarySearch ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm closestPair ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ algorithm connectedGraph ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
