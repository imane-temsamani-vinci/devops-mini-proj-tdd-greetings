function greet (name) {
  if (Array.isArray(name)) {
    if (name.length > 2) return `Hello, ${name.slice(0, -1).join(', ')} and ${name[name.length - 1]}.`
    return `Hello, ${name[0]} and ${name[1]}.`
  }
  if (name === null || name === undefined || name.trim() === '') return 'Hello, my friend.'
  if (isUpperCase(name)) return `HELLO, ${name}!`

  return `Hello, ${name}.`
}

function isUpperCase (name) {
  return name === name.toUpperCase()
}

module.exports = greet
