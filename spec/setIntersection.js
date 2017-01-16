/*
function setIntersection (array1, array2) {
  let sectionArray = [];
  let newArray = array1.concat(array2);
  for ( let i = 0; i < newArray.length - 1; i++ ) {
    for ( let j = i + 1; j < newArray.length; j++ ) {
      if ( newArray[i] == newArray[j]) {
        sectionArray.push(newArray[i])
      }
    }
  }
  return sectionArray;
}

console.log(
  setIntersection([1,2,2,4],[6,4,5,6]) )
*/

function setIntersection(arr1, arr2){
  var intersectingIntegers = 0;
  for(var x = 0; x <= arr1.length; x++){ // for loop to check each item in arr1
    var integer = arr1[x]
    for(var i = 0; i < arr2.length; i++){ // for loop to compare integers in arr2
      if(integer == arr2[i]){
        intersectingIntegers += arr2[i]
        console.log('working!',intersectingIntegers)
      }
    }
  }
  return intersectingIntegers;
}

console.log(setIntersection([2,3,4],[2,1,0]))
