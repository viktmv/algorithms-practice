// check if all characters of sring are unique

// Solution 1
function hasUniqueChars(str) {
  let chars = new Set(str)

  return str.length === chars.size
}

// Solution 2 - without Sets
function hasUniqueCharsSimple(str) {
  let isUnique = true

  str.split('').forEach((char, i) => {
    if (str.substring(++i).search(char) !== -1) return isUnique = false
  })

  return isUnique
}


