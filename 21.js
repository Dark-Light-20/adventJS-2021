function canCarry(capacity, trip) {
  let currentWeight = 0;
  const tripPoints = [];
  trip.forEach((item) =>
    tripPoints.push(
      { quantity: item[0], point: item[1] },
      { quantity: -item[0], point: item[2] }
    )
  );
  tripPoints.sort((a, b) => a.point - b.point);
  for (const trip of tripPoints) {
    currentWeight += trip.quantity;
    if (currentWeight > capacity) return false;
  }
  return true;
}

const carry = canCarry(4, [
  [2, 5, 8],
  [3, 6, 10],
]); // false
console.log(carry);
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

const carry2 = canCarry(3, [
  [1, 1, 5],
  [2, 2, 10],
]); // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos
console.log(carry2);

const carry3 = canCarry(3, [
  [2, 1, 5],
  [3, 5, 7],
]); // true -> nunca supera el máximo de capacidad
console.log(carry3);

const carry4 = canCarry(4, [
  [2, 3, 8],
  [2, 5, 7],
]); // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo
console.log(carry4);

const carry5 = canCarry(1, [[2, 3, 8]]); // false -> no podría ni con el primer viaje
console.log(carry5);

const carry6 = canCarry(2, [
  [1, 2, 4],
  [2, 3, 8],
]); // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
console.log(carry6);
