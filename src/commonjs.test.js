const { expect, test } = require('vitest')
const { sum } = require('./esm-syntax')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
