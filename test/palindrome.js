var expect = require('chai').expect;
    palindrome = require('../src/palindrome.js');

describe('palindrome', function(){
  context('when given "radar"', function(){
    it('should return true', function(){
      expect(palindrome('radar')).to.equal(true)
    })
  })
  context('when given "bananas"', function(){
    it('should return false', function(){
      expect(palindrome('bananas')).to.equal(false)
    })
  })
  it('should ignore special characters', function(){
    expect(palindrome('radar')).to.equal(true)
    expect(palindrome('rad%ar')).to.equal(true)
    expect(palindrome('ra/dar')).to.equal(true)
    expect(palindrome('ra/d.....ar')).to.equal(true)
  })
  context('when given "A man, a plan, a canal: Panama"', function(){
    it('should return true', function(){
      expect(palindrome('A man, a plan, a canal: Panama')).to.equal(true)
    })
  })
})
