function greet (name) {
  if (name === null || name === undefined || name.trim() === '') return 'Hello, my friend.'
  return `Hello, ${name}.`
}

module.exports = greet
