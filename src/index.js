function calculateTotalChange(totalDue, moneyRecieved) {
    return moneyRecieved - totalDue 
}

function calculateChangeBreakdown(totalDue, moneyRecieved) {
    return moneyRecieved - totalDue
}

console.log(calculateTotalChange(5.34, 12))

module.exports.calculateTotalChange = calculateTotalChange;
module.exports.calculateChangeBreakdown = calculateChangeBreakdown;
