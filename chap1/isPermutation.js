// Method to check if a string is a permutation of another substring

function isPermutation(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

module.exports = isPermutation
