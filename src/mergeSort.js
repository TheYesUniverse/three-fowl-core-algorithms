"use strict"

export default const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length /2);
    const subLeft = mergeSort(arr.slice(0,mid));
    const subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (a,b) {
    const result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}

module.exports = mergeSort;
