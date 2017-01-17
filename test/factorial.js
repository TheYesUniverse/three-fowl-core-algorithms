var expect = require('chai').expect;
    factorial = require('../src/factorial.js');

  describe('factorial', () => {
    context('when given a number', () => {
      it('should return the factorial', () => {
        expect(factorial(5)).to.equal(120)
      })
    });

    context('when given a negetive number', () =>{
      it('should retrn an undefined', () => {
        expect(factorial(-5)).to.equal(undefined)
      })
    })
  });
