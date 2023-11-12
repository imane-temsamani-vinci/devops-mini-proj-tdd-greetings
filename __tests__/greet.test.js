const greet = require('../greet');

// Case 1
test('greet should return Hello, Bob.', () => {
  const result = greet('Bob');
  expect(result).toBe('Hello, Bob.');
});

// Case 2 when name is null
test('greet should return Hello, my friend. ', () => {
  const result = greet(null);
  expect(result).toBe('Hello, my friend.');
});

// Case 2 when name is undefined
test('greet should return Hello, my friend!', () => {
  const result = greet(undefined);
  expect(result).toBe('Hello, my friend.');
});