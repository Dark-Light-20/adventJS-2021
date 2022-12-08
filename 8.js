function maxProfit(prices) {
  let profit = -1;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = prices[j] - prices[i] > profit ? prices[j] - prices[i] : profit;
    }
  }
  return profit > 0 ? profit : -1;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const btc = maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)
console.log(btc);

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const eth = maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)
console.log(eth);

const pricesDoge = [18, 15, 12, 11, 9, 7];
const doge = maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)
console.log(doge);

const pricesAda = [3, 3, 3, 3, 3];
const ada = maxProfit(pricesAda); // -> -1 (no hay ganancia posible)
console.log(ada);
