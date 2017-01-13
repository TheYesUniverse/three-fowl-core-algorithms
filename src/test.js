import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome', function(){
  context('when given "radar"', function(){
    it('should return true', function(){
      expect(isPalindrome('radar')).to.equal(true)
    })
  })
  context('when given "bananas"', function(){
    it('should return false', function(){
      expect(isPalindrome('bananas')).to.equal(false)
    })
  })
  it('should ignore special characters', function(){
    expect(isPalindrome('radar')).to.equal(true)
    expect(isPalindrome('rad%ar')).to.equal(true)
    expect(isPalindrome('ra/dar')).to.equal(true)
    expect(isPalindrome('ra/d.....ar')).to.equal(true)
  })
  context('when given "A man, a plan, a canal: Panama"', function(){
    it('should return true', function(){
      expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
    })
  })
})
