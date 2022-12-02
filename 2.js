function listGifts(letter) {
  const pack = {};
  const gifts = letter
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter((gift) => !gift.includes("_"));
  gifts.forEach((gift) => {
    if (!pack[gift]) pack[gift] = 1;
    else pack[gift]++;
  });
  return pack;
}

excercise