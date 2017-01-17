var expect = require('chai').expect;
    fibonacci = require('../src/fibonacci');

describe('fibonacci', function(){
  context('when given an number', function(){
    it('should return a fibonacci array', function(){
      expect(fibonacci(5)).to.eql([0, 1, 1, 2, 3])
    })
  })
})
