const greet = require('../greet')

// Case 1
test('greet should return Hello, Bob.', () => {
  const result = greet('Bob')
  expect(result).toBe('Hello, Bob.')
})

// Case 2 when name is null
test('greet should return Hello, my friend.', () => {
  const result = greet(null)
  expect(result).toBe('Hello, my friend.')
})

// Case 2 when name is undefined
test('greet should return Hello, my friend.', () => {
  const result = greet(undefined)
  expect(result).toBe('Hello, my friend.')
})

// Case 2 when name is empty
test('greet should return Hello, my friend.', () => {
  const result = greet('   ')
  expect(result).toBe('Hello, my friend.')
})

// Case 3 when name is UPPERCASE
test('greet should return HELLO, KENOBI!', () => {
  const result = greet('KENOBI')
  expect(result).toBe('HELLO, KENOBI!')
})

// Case 4 when name is an array
test('greet should return Hello, Kratos and Thanathos.', () => {
  const result = greet(['Kratos', 'Thanathos'])
  expect(result).toBe('Hello, Kratos and Thanathos.')
})
