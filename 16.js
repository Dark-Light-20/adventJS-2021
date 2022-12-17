function decodeNumbers(symbols) {
  const symbolsAllowed = [".", ",", ":", ";", "!"];
  const symbolsValues = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  const regex = new RegExp(`[^${symbolsAllowed.join("")}]`, "g");
  if (symbols.match(regex)) return NaN;
  return symbols.split("").reduceRight((acc, current, i) => {
    if (i === symbols.length - 1) return acc + symbolsValues[current];
    return symbolsValues[current] < symbolsValues[symbols[i + 1]]
      ? acc - symbolsValues[current]
      : acc + symbolsValues[current];
  }, 0);
}

const decoded = decodeNumbers(".;!"); // 49 (-1 -50 + 100)
console.log(decoded);
