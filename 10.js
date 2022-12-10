function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1];
  const returnValue = [0, 0, 0, 0, 0, 0];
  let value = change;
  for (let i = 0; i < coins.length; i++) {
    returnValue[i] = Math.floor(value / coins[i]);
    const remain = value % coins[i];
    if (remain) value = remain;
    else break;
  }
  return returnValue.reverse();
}

const coins1 = getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(coins1);

const coins2 = getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(coins2);

const coins3 = getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(coins3);

const coins4 = getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(coins4);

const coins5 = getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
console.log(coins5);
