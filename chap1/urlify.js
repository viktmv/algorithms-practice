// Replace spaces with %20
const URLify = str => {
  let spaces = /\s/g
  return str.replace(spaces, '%20')
}

module.exports = URLify
