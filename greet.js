function greet (name) {
  if (Array.isArray(name)) {
    const language = name.find(lang => lang === 'fr')
    return greetMultipleNames(name, language)
  }
  if (name === null || name === undefined || name.trim() === '') return 'Hello, my friend.'
  if (isUpperCase(name)) return `HELLO, ${name}!`

  return `Hello, ${name}.`
}

function isUpperCase (name) {
  return name === name.toUpperCase()
}

function greetMultipleNames (array, language) {
  let nameUpper = null
  const withoutUpper = []
  array.forEach(name => {
    if (isUpperCase(name)) nameUpper = name
    else if (name !== 'fr') withoutUpper.push(name)
  })
  const lastName = withoutUpper.pop()
  let greet = ''
  if (language === 'fr') {
    greet = `Bonjour, ${withoutUpper.join(', ')} et ${lastName}.`
    if (nameUpper) {
      greet += ` ET BONJOUR ${nameUpper}!`
    }
  } else {
    greet = `Hello, ${withoutUpper.join(', ')} and ${lastName}.`
    if (nameUpper) {
      greet += ` AND HELLO ${nameUpper}!`
    }
  }
  return greet
}

module.exports = greet
