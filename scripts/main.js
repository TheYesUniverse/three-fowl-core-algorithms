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

/* ~~~~~~~~~~~~~~~~~~~~~~~~~ algorithms ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

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
  const solution = makeChange(makeChangeInput1, makeChangeInput2);

  if(makeChangeInput1 == " " || makeChangeInput2 == " "){
      $('#makeChangeResult').val('please enter two arguments');
      console.log('please enter two arguments')
  } else if(isNaN(makeChangeInput1) || isNaN(makeChangeInput2)){
      $('#makeChangeResult').val('please enter numbers');
  }
  $('#makeChangeResult').val(JSON.stringify(solution));
}

const clearMakeChange = () => {
  $('#makeChangeInput1').val("");
  $('#makeChangeInput2').val("");
  $('#makeChangeResult').val("");
  solution == " "
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
