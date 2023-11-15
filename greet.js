function greet (name) {
  if (Array.isArray(name)) {
    return greetMultipleNames(name)
  }
  if (name === null || name === undefined || name.trim() === '') return 'Hello, my friend.'
  if (isUpperCase(name)) return `HELLO, ${name}!`

  return `Hello, ${name}.`
}

function isUpperCase (name) {
  return name === name.toUpperCase()
}

function greetMultipleNames (array) {
  const nameUpper = array.find(name => isUpperCase(name))
  if (nameUpper) array = array.filter(name => !isUpperCase(name))
  const lastName = array[array.length - 1]
  const withoutLast = array.slice(0, -1)
  let greet = `Hello, ${withoutLast.join(', ')} and ${lastName}.`
  if (nameUpper) {
    greet += ` AND HELLO ${nameUpper}!`
  }
  return greet
}

module.exports = greet
