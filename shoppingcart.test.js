const { calculateTotal } = require('./shoppingcart');

test('calculates total for apples and cheese', () => {
  expect(calculateTotal(['apples', 'cheese'])).toBeCloseTo(5.5);
});

test('returns 0 for empty cart', () => {
  expect(calculateTotal([])).toBe(0);
});