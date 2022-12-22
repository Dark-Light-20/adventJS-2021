function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const equivalences = {};
  for (let i = 0; i < from.length; i++) {
    const equivalence1 = equivalences[from[i]];
    const equivalence2 = equivalences[to[i]];
    if (!equivalence1 && !equivalence2) {
      equivalences[from[i]] = to[i];
      equivalences[to[i]] = from[i];
    } else if (
      !(equivalences[from[i]] === to[i] && equivalences[to[i]] === from[i])
    ) {
      return false;
    }
  }
  return true;
}

const from1 = "BAL";
const to1 = "LIB";
const reConfig1 = canReconfigure(from1, to1); // true
console.log(reConfig1);

const from2 = "CON";
const to2 = "JUU";
const reConfig2 = canReconfigure(from2, to2); // false
console.log(reConfig2);

const from3 = "XBOX";
const to3 = "XXBO";
const reConfig3 = canReconfigure(from3, to3); // false
console.log(reConfig3);

const from4 = "XBOX";
const to4 = "XOBX";
const reConfig4 = canReconfigure(from4, to4); // true
console.log(reConfig4);

const from5 = "MMM";
const to5 = "MID";
const reConfig5 = canReconfigure(from5, to5); // false
console.log(reConfig5);

const from6 = "AA";
const to6 = "MID";
const reConfig6 = canReconfigure(from6, to6); // false -> no tiene la misma longitud
console.log(reConfig6);




/* const equivalences = [];
  for (let i = 0; i < from.length; i++) {
    const equivalence = equivalences.find((relation) => {
      const letters = [from[i], to[i]];
      return (
        letters.includes(relation.setting1) ||
        letters.includes(relation.setting2)
      );
    });
    if (!equivalence) {
      equivalences.push({ setting1: from[i], setting2: to[i] });
    } else if (
      !(
        (equivalence.setting1 === from[i] && equivalence.setting2 === to[i]) ||
        (equivalence.setting1 === to[i] && equivalence.setting2 === from[i])
      )
    ) {
      return false;
    }
  } */