const {expect} = require('chai')
const isPermutation = require('../chap1/isPermutation')

describe('isPermutation', () => {
  it('should return true if second string is permutaions of the first', () => {
    expect(isPermutation('dog', 'god')).to.equal(true)
  })

  it('should return false if second string is not a permutaions of the first', () => {
    expect(isPermutation('hello', 'world')).to.equal(false)
  })
})
