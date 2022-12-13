function missingReindeer(ids) {
  const sortIds = ids.sort((a, b) => a - b);
  console.log(sortIds);
  for (let i = 0; i <= sortIds.length; i++) {
    if (sortIds[i] !== i) return i;
  }
}

const missing = missingReindeer([0, 2, 3]); // -> 1
console.log(missing);
