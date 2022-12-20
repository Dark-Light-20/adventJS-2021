function pangram(letter) {
  const lettersRemain = new Set(
    letter
      .toLowerCase()
      .replace(/[áä]/g, "a")
      .replace(/[éë]/g, "e")
      .replace(/[íï]/g, "i")
      .replace(/[óö]/g, "o")
      .replace(/[úü]/g, "u")
      .replace(/[^a-zñ]/g, "")
      .split("")
  );
  return lettersRemain.size === 27;
}

const pangram1 = pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho"); // true
console.log(pangram1);
const pangram2 = pangram(
  "Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!"
); // true
console.log(pangram2);

const pangram3 = pangram(
  "Esto es una frase larga pero no tiene todas las letras del abecedario"
); // false
console.log(pangram3);
const pangram4 = pangram("De la a a la z, nos faltan letras"); // false
console.log(pangram4);
