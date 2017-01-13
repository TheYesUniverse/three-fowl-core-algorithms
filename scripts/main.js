"use strict"

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
  $(routesObj['makeChange']).css({'display':'none'});
  console.log("routesObj['welcome']: ", JSON.stringify(routesObj['welcome']))
}

const displayMakeChangePage = () => {
  hideAllPages();
  $(routesObj['makeChange']).css({'display':'block'});
  //$(routesObj['welcome']).css({'display':'none'});
  console.log('makeChange page clicked')
}

const fizzBuzzPage = () => {
  console.log('fizzbuzz button works')
}
const palindromePage = () => {
  console.log('palindrome button works')
}
const factorialPage = () => {}
const fibonacciPage = () => {}
const collatzConjecturePage = () => {}
const setUnionPage = () => {}
const setIntersectionPage = () => {}
const setComplimentPage = () => {}
const setSymmetricDifferencePage = () => {}
const mergeSortPage = () => {}
const bubbleSortPage = () => {}
const binarySearchPage = () => {}
const closestPairPage = () => {}
const connectedGraphPage = () => {}
