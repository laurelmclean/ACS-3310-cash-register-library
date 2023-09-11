// This function calculates the total change by subtracting the total money received from the total amount due.
function calculateTotalChange(totalDue, moneyRecieved) {
    return Math.round((moneyRecieved - totalDue) * 100) / 100
}

// Canada got rid of pennies!
// This function calculates the change by rounding to the nearest 0.05
function calculateRoundedChange(totalDue, moneyRecieved) {
    const total = calculateTotalChange(totalDue, moneyRecieved);
    console.log(total)
    return Number((Math.ceil(total * 20 - 0.5) / 20).toFixed(2))
}

function calculateChangeBreakdown(totalDue, moneyRecieved) {
    return moneyRecieved - totalDue
}

console.log(calculateTotalChange(364.7, 400))
console.log(calculateRoundedChange(22.59, 50))

module.exports.calculateTotalChange = calculateTotalChange;
module.exports.calculateRoundedChange = calculateRoundedChange;
module.exports.calculateChangeBreakdown = calculateChangeBreakdown;
