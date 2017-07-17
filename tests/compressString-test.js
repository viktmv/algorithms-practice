const {expect} = require('chai')
const compress = require('../chap1/compressString')

describe('compress string', () => {
  it('returns a compressed string with the letter count', () => {
    expect(compress('aabcccccaaa')).to.equal('a2b1c5a3')
  })

  it('returns original string if the compressed string is longer', () => {
    expect(compress('hello')).to.equal('hello')
  })
})
