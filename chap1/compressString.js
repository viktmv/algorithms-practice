// Perform basic string compression with letter count
function compress(str) {
  let counter = {}
  let compressed = ''

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    let next = str[i + 1]

    if (!counter[char]) counter[char] = 1
    else counter[char]++

    if (char !== next) {
      compressed += (char + counter[char])
      counter[char] = 0
    }
  }
  return compressed.length >= str.length ? str : compressed
}

module.exports = compress
