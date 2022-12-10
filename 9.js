function groupBy(collection, it) {
  const group = {};
  collection.forEach((item) => {
    const value = typeof it === "string" ? item[it] : it(item);
    if (group[value]) {
      group[value].push(item);
    } else {
      group[value] = [item];
    }
  });
  return group;
}

const group1 = groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
console.log(group1);

const group2 = groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
console.log(group2);

const group3 = groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }
console.log(group3);

const group4 = groupBy([1397639141184, 1363223700000], (timestamp) =>
  new Date(timestamp).getFullYear()
);
// { 2013: [1363223700000], 2014: [1397639141184] }
console.log(group4);

const group5 = groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
  ],
  "rating"
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
console.log(group5);
