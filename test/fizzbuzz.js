var expect = require('chai').expect;
    fizzbuzz = require('../src/fizzBuzz.js');

describe('fizzbuzz()', () => {
  'use strict'

  it('exists', () => {
    expect(fizzbuzz).to.be.a('function')
  })

  context( 'with invalid input', () => {
    it( 'returns invalid with any input that is less than 100', () => {
      expect( () => fizzbuzz()).to.not.have.length(101)
    })
  })

})
