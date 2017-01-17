/*import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'*/

"use strict"

const isPalindrome = (arg) => {

  let submission = arg.replace(/[^\w,]/g, '');
  let submissionArray = submission.split('');
  let loopLength;
  let middleNumIndex
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



console.log( 'palindrome? '+isPalindrome('amoreroma'))
