const {expect} = require('chai')
const URLify = require('../chap1/urlify')

describe('URLify', () => {
  it('returns a string with spaces replaced with "%20"', () => {
    expect(URLify('Hello world !')).to.equal('Hello%20world%20!')
  })
})
