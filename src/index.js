// This function calculates the total change by subtracting the total money received from the total amount due.
function calculateTotalChange(totalDue, moneyRecieved) {
    return Math.round((moneyRecieved - totalDue) * 100) / 100;
}
// Canada got rid of pennies!
// This function calculates the change by rounding to the nearest 0.05
function calculateRoundedChange(totalDue, moneyRecieved) {
    var total = calculateTotalChange(totalDue, moneyRecieved);
    return Number((Math.ceil(total * 20 - 0.5) / 20).toFixed(2));
}
// This function calculates the change breakdown, providing the number of each coin denomination that is owed as change.
function calculateChangeBreakdown(totalDue, moneyRecieved) {
    var runningTotal = calculateRoundedChange(totalDue, moneyRecieved);
    var coins = [
        {
            coinName: "toonie",
            coinAmount: 2.0,
            coinCount: 0,
        },
        {
            coinName: "loonie",
            coinAmount: 1.0,
            coinCount: 0,
        },
        {
            coinName: "quarter",
            coinAmount: 0.25,
            coinCount: 0,
        },
        {
            coinName: "dime",
            coinAmount: 0.1,
            coinCount: 0,
        },
        {
            coinName: "nickel",
            coinAmount: 0.05,
            coinCount: 0,
        },
    ];
    // loop through each coin, adding to coin count and subtracting the coin amount from the running total
    var totalCoins = 0;
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
        var coin = coins_1[_i];
        while (runningTotal - coin.coinAmount >= 0) {
            runningTotal = Number((runningTotal - coin.coinAmount).toFixed(2));
            coin.coinCount += 1;
            totalCoins += 1;
        }
    }
    // removing coins from the array that have a coin count of zero
    var coinsMapped = coins.filter(function (coin) { return coin.coinCount > 0; });
    //  adding s to pluralize when there is more than one coin
    for (var i = 0; i < coinsMapped.length; i++) {
        if (coinsMapped[i].coinCount > 1) {
            coinsMapped[i].coinName += "s";
        }
    }
    //  created a variable storing the starting string for the output
    var stringy = "You need to dispense";
    // if zero coins, output don't need to dispense
    if (totalCoins == 0) {
        stringy = "You don't need to dispense change.";
    }
    else if (coinsMapped.length > 1) {
        // if length of the new array is greater than 1
        // eslint-disable-next-line no-redeclare
        for (var i = 0; i < coinsMapped.length - 1; i++) {
            stringy += " ".concat(coinsMapped[i].coinCount, " ").concat(coinsMapped[i].coinName, ",");
        }
        // add the last object in the array to the end of the sentence with and in front
        stringy += " and ".concat(coinsMapped[coinsMapped.length - 1].coinCount, " ").concat(coinsMapped[coinsMapped.length - 1].coinName, ".");
    }
    else if ((coinsMapped.length == 1)) {
        // format the output string correctly if there is only one type of coin
        stringy = "You need to dispense ".concat(coinsMapped[0].coinCount, " ").concat(coinsMapped[0].coinName, ".");
    }
    return stringy;
}
console.log(calculateTotalChange(364.7, 400));
console.log(calculateRoundedChange(22.59, 50));
console.log(calculateChangeBreakdown(2.22, 5));
module.exports.calculateTotalChange = calculateTotalChange;
module.exports.calculateRoundedChange = calculateRoundedChange;
module.exports.calculateChangeBreakdown = calculateChangeBreakdown;
