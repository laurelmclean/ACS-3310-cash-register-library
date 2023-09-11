const { calculateTotalChange, calculateRoundedChange, calculateChangeBreakdown } = require('../src/index.js');

test('calculateTotalChange returns the total change by subtracting the total money received from the total amount due', () => {
    expect(calculateTotalChange(5.43, 10)).toBe(4.57);
    expect(calculateTotalChange(12.99, 100)).toBe(87.01);
});

test('calculateRoundedChange rounds to nearest 0.05', () => {
    expect(calculateRoundedChange(5.43, 10)).toBe(4.55);
    expect(calculateRoundedChange(22.59, 50)).toBe(27.40);
    expect(calculateRoundedChange(1.05, 5)).toBe(3.95);
});

test('calculateChangeBreakdown calculates the change breakdown, providing the number of each coin denomination that is owed as change', () => {
});