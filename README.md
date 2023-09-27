![workflow](https://github.com/laurelmclean/ACS-3310-cash-register-library/actions/workflows/node.js.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/cash-register.svg)](https://www.npmjs.com/package/cash-register)
[![npm downloads](https://img.shields.io/npm/dt/cash-register.svg)](https://www.npmjs.com/package/cash-register)


# cash-register

`cash-register` is a simple JavaScript module that helps you calculate and break down change owed after a transaction. It is designed with Canadian currency denominations in mind, considering the absence of pennies in Canada.

## Installation

You can install `cash-register` via npm:

```bash
npm install cash-register
```

## Usage

Import the module into your JavaScript code:

```javascript
const { calculateTotalChange, calculateRoundedChange, calculateChangeBreakdown } = require('cash-register');
```

### Calculate Total Change

The `calculateTotalChange` function calculates the total change by subtracting the total amount due from the total money received.

```javascript
const totalChange = calculateTotalChange(totalDue, moneyReceived);
```

### Calculate Rounded Change

The `calculateRoundedChange` function calculates the change by rounding to the nearest 0.05. This is suitable for handling Canadian currency without pennies.

```javascript
const roundedChange = calculateRoundedChange(totalDue, moneyReceived);
```

### Calculate Change Breakdown

The `calculateChangeBreakdown` function provides a breakdown of the change, specifying the number of each coin denomination owed as change. This function is suitable for Canadian currency where there are loonies and toonies, but no pennies.

```javascript
const changeBreakdown = calculateChangeBreakdown(totalDue, moneyReceived);
```

## Example

```javascript
const { calculateTotalChange, calculateRoundedChange, calculateChangeBreakdown } = require('cash-register');

const totalDue = 3.22;
const moneyReceived = 5;

const totalChange = calculateTotalChange(totalDue, moneyReceived);
const roundedChange = calculateRoundedChange(totalDue, moneyReceived);
const changeBreakdown = calculateChangeBreakdown(totalDue, moneyReceived);

console.log(`Total Change: $${totalChange}`);
console.log(`Rounded Change: $${roundedChange}`);
console.log(changeBreakdown);
```

## Output

```
Total Change: $1.78
Rounded Change: $1.8
You need to dispense 1 loonie, 3 quarters, and 1 nickel.
```

