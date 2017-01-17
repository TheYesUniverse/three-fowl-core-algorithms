"use strict"

var should = require('chai').should(),
  mergeSort = require('../src/mergeSort.js');

  describe('mergeSort', function(){

    it('sort an array of numbers', function(){
      mergeSort(10,20,40,16).should.equal(10,16,20,40);
    })

    it('sort an array of numbers', function(){
      mergeSort(5,7,2,9).should.equal(2,5,7,9)
    })

    it('should return an error', function(){
      mergeSort('2,3,4,5').should.throw(Error)
    })

  })
