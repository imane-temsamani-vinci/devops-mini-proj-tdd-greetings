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
  const vocabulary = greetIn(language)
  let greet = `${vocabulary[0]}, ${withoutUpper.join(', ')} ${vocabulary[1]} ${lastName}.`
  if (nameUpper) {
    greet += ` ${vocabulary[1].toUpperCase()} ${vocabulary[0].toUpperCase()} ${nameUpper}!`
  }
  return greet
}

function greetIn (language) {
  if (language === 'fr') return ['Bonjour', 'et', 'mon ami']
  else return ['Hello', 'and', 'my friend']
}

module.exports = greet
