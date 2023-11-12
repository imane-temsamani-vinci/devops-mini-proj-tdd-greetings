const greet = require('./app')

test('should return Hello, Bob!', () => {
  const result = greet('Bob')
  expect(result).toBe('Hello, Bob!')
})
