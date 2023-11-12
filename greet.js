function greet (name) {
  if (name === null || name === undefined || name.trim() === '') return 'Hello, my friend.'
  if (name === name.toUpperCase()) return `HELLO, ${name}!`
  return `Hello, ${name}.`
}

module.exports = greet
