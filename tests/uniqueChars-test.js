const {expect} = require('chai')
const {hasUniqueChars, hasUniqueCharsBrute, hasUniqueCharsSimple} = require('../chap1/uniqueChars')

describe('uniqueChars', () => {
  describe('hasUniqueChars', () => {
    it('returns true if all characters in string are unique', () => {
      expect(hasUniqueChars('cat')).to.equal(true)
    })

    it('returns false if characters in string are not unique', () => {
      expect(hasUniqueChars('hello')).to.equal(false)
    })
  })

  describe('hasUniqueCharsSimple', () => {
    it('returns true if all characters in string are unique', () => {
      expect(hasUniqueCharsSimple('cat')).to.equal(true)
    })

    it('returns false if characters in string are not unique', () => {
      expect(hasUniqueCharsSimple('hello')).to.equal(false)
    })
  })

  describe('hasUniqueCharsBrute', () => {
    it('returns true if all characters in string are unique', () => {
      expect(hasUniqueCharsBrute('dragon')).to.equal(true)
    })

    it('returns false if characters in string are not unique', () => {
      expect(hasUniqueCharsBrute('giraffe')).to.equal(false)
    })
  })
})
