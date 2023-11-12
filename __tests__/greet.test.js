const greet = require('../greet')

test('should return Hello, Bob!', () => {
  const result = greet('Bob')
  expect(result).toBe('Hello, Bob!')
})
