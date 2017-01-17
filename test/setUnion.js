'use strict'
const expect = require('chai').expect,
      setUnion = require('../src/setUnion');


describe('setUnion', () => {

  it('exists', () => {
    expect(setUnion).to.be.a('function')
  })

  it('should take an array and return a union set of the two arrays', () => {
    const arr1 = [1, 2, 3, 3, 4, 13, 7, 9, 11, 14, 16, 13, 17]
    const arr2 = [2, 4, 6, 8, 11, 13, 14, 9, 13, 18, 19]
    expect(setUnion(arr1, arr2)).to.deep.equal([1,2,3,4,6,7,8,9,
      11,13,14,16,17,18,19])
  })
  it('should return an array union regardless of length', () => {
    const array1 = [1, 2, 3, 3, 4]
    const array2 = [2, 4, 6, 8]
    expect(setUnion(array1, array2)).to.deep.equal([1,2,3,4,6,8])
  })
})
