/*import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'*/

"use strict"

const isPalindrome = (submission) => {

  // remove anything that's not text using regex
  // Loop through the numbers given by length, is the last number equal to the first? Next two...
  //const submission; // = regex removing white space and uneededs
  let submissionArray = submission.split('');
  let loopLength;
  let middleNumIndex;
  let w; // index representing the first letter to the west of the middleNum
  let e; // index representing the first letter to the east of the middleNum

  if(submissionArray.length % 2 == 0){
    // our tow initial matching integers sit right in the middle of our array and they're saved in variables signifying west and east of the midpoint. So if submission = 'cammac' w = m, e = m, and move outwards.
     loopLength = submissionArray.length / 2
      w = (submissionArray.length / 2) - 1 // respect the zero index
      e = w + 1

  } else { // if submission = lol

      middleNumIndex = (submissionArray.length / 2) - 0.5
      loopLength = (submissionArray.length / 2) - 0.5
       w = middleNumIndex - 1 // respect the zero index
       e = middleNumIndex + 1
  }

  for(let i = 0; i <= loopLength; i++){
    //is first character equal to second character?
    if(submissionArray[w] == submissionArray[e]){
        console.log(' match! ')
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



console.log( 'palindrome? '+isPalindrome('amoreroma'))
