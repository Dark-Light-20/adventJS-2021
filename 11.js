function shouldBuyFidelity(times) {
  const normalPrice = times * 12;
  let fidelityPrice = 250;
  for (let i = 0; i < times; i++) {
    fidelityPrice += 12 * Math.pow(0.75, i + 1);
  }
  return fidelityPrice < normalPrice;
}

const answer1 = shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
console.log(answer1);

const answer2 = shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
console.log(answer2);
