// check if all characters of sring are unique

// Solution 1
function hasUniqueChars(str) {
  let chars = new Set(str)

  return str.length === chars.size
}

