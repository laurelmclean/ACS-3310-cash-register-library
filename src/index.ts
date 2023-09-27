// This function calculates the total change by subtracting the total money received from the total amount due.
function calculateTotalChange(totalDue: number, moneyRecieved: number): number {
    return Math.round((moneyRecieved - totalDue) * 100) / 100
}

// Canada got rid of pennies!
// This function calculates the change by rounding to the nearest 0.05
function calculateRoundedChange(totalDue: number, moneyRecieved: number): number {
    const total = calculateTotalChange(totalDue, moneyRecieved);
    return Number((Math.ceil(total * 20 - 0.5) / 20).toFixed(2))
}

// This function calculates the change breakdown, providing the number of each coin denomination that is owed as change.
function calculateChangeBreakdown(totalDue: number, moneyRecieved: number): string {
  let runningTotal: number = calculateRoundedChange(totalDue, moneyRecieved);
  // array of objects storing properties of coins
  // coin count keeps track of how many coins to dispense
  interface Coin {
    coinName: string;
    coinAmount: number;
    coinCount: number;
  }

  let coins: Coin[] = [
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
  let totalCoins: number = 0;
  for (let coin of coins) {
    while (runningTotal - coin.coinAmount >= 0) {
      runningTotal = Number((runningTotal - coin.coinAmount).toFixed(2));
      coin.coinCount += 1;
      totalCoins += 1;
    }
  }
  // removing coins from the array that have a coin count of zero
  let coinsMapped: Coin[] = coins.filter((coin) => coin.coinCount > 0);
  //  adding s to pluralize when there is more than one coin
  for (let i = 0; i < coinsMapped.length; i++) {
    if (coinsMapped[i].coinCount > 1) {
      coinsMapped[i].coinName += "s";
    }
  }
  //  created a variable storing the starting string for the output
  let stringy: string = "You need to dispense";
  // if zero coins, output don't need to dispense
  if (totalCoins == 0) {
    stringy = "You don't need to dispense change.";
  } else if (coinsMapped.length > 1) {
    // if length of the new array is greater than 1
    for (let i = 0; i < coinsMapped.length - 1; i++) {
      stringy += ` ${coinsMapped[i].coinCount} ${coinsMapped[i].coinName},`;
    }
    // add the last object in the array to the end of the sentence with and in front
    stringy += ` and ${coinsMapped[coinsMapped.length - 1].coinCount} ${
      coinsMapped[coinsMapped.length - 1].coinName
    }.`;
  } else if ((coinsMapped.length == 1)) {
    // format the output string correctly if there is only one type of coin
    stringy = `You need to dispense ${coinsMapped[0].coinCount} ${coinsMapped[0].coinName}.`;
  }
  return stringy;
}

module.exports.calculateTotalChange = calculateTotalChange;
module.exports.calculateRoundedChange = calculateRoundedChange;
module.exports.calculateChangeBreakdown = calculateChangeBreakdown;
