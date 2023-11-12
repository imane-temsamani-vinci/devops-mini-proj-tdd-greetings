function greet (name) {
  if (name === null || name === undefined || name.trim() === '') return 'Hello, my friend.'
  if (isUpperCase(name)) return `HELLO, ${name}!`
  return `Hello, ${name}.`
}

function isUpperCase (name) {
  return name === name.toUpperCase()
}

module.exports = greet
