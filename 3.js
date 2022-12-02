function isValid(letter) {
  let parenthesisCount = 0;
  for (let i = 0; i < letter.length; i++) {
    if (["{", "}", "[", "]"].includes(letter[i])) return false;
    else if (letter[i] === "(" && letter[i + 1] === ")") return false;
    else if (letter[i] === "(") parenthesisCount++;
    else if (letter[i] === ")" && parenthesisCount) parenthesisCount--;
  }
  return parenthesisCount === 0;
}
