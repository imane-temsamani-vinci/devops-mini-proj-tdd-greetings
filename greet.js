function greet (name) {
  if (Array.isArray(name)) return `Hello, ${name[0]} and ${name[1]}.`
  if (name === null || name === undefined || name.trim() === '') return 'Hello, my friend.'
  if (isUpperCase(name)) return `HELLO, ${name}!`

  return `Hello, ${name}.`
}

function isUpperCase (name) {
  return name === name.toUpperCase()
}

module.exports = greet
