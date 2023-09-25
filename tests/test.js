const { calculateTotalChange, calculateRoundedChange, calculateChangeBreakdown } = require('../src/index.js');

test('calculateTotalChange returns the total change by subtracting the total money received from the total amount due', () => {
    expect(calculateTotalChange(5.43, 10)).toBe(4.57);
    expect(calculateTotalChange(12.99, 100)).toBe(87.01);
});

test('calculateTotalChange returns negative number if amount owing', () => {
    expect(calculateTotalChange(5.43, 5)).toBe(-0.43);
    expect(calculateTotalChange(12.99, 10)).toBe(-2.99);
});

test('calculateRoundedChange rounds to nearest 0.05', () => {
    expect(calculateRoundedChange(5.43, 10)).toBe(4.55);
    expect(calculateRoundedChange(22.59, 50)).toBe(27.40);
    expect(calculateRoundedChange(1.05, 5)).toBe(3.95);
});

test('calculateChangeBreakdown calculates change for 0 totalDue and 0 moneyReceived', () => {
    const result = calculateChangeBreakdown(0, 0);
    expect(result).toBe("You don't need to dispense change.");
});

test('calculateChangeBreakdown calculates change for exact change', () => {
    const result = calculateChangeBreakdown(10.0, 10.0);
    expect(result).toBe("You don't need to dispense change.");
});

test('calculateChangeBreakdown calculates change for 1 coin', () => {
    const result = calculateChangeBreakdown(2.0, 3.0);
    expect(result).toBe("You need to dispense 1 loonie.");
});

test('calculateChangeBreakdown calculates change for multiple coin denominations', () => {
    const result = calculateChangeBreakdown(5.75, 10.0);
    expect(result).toBe("You need to dispense 2 toonies, and 1 quarter.");
});


test('calculateChangeBreakdown rounds to the nearest nickel', () => {
    const result = calculateChangeBreakdown(3.22, 5.00);
    expect(result).toBe("You need to dispense 1 loonie, 3 quarters, and 1 nickel.");
});

test('calculateChangeBreakdown calculates change for small values', () => {
    const result = calculateChangeBreakdown(0.05, 0.25);
    expect(result).toBe("You need to dispense 2 dimes.");
});






