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
  let nameUpper = null
  const withoutUpper = []
  array.forEach(name => {
    if (isUpperCase(name)) nameUpper = name
    else withoutUpper.push(name)
  })
  const lastName = withoutUpper.pop()
  let greet = `Hello, ${withoutUpper.join(', ')} and ${lastName}.`
  if (nameUpper) {
    greet += ` AND HELLO ${nameUpper}!`
  }
  return greet
}

module.exports = greet
