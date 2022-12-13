function wrapGifts(gifts) {
  if (!gifts.length) return [];
  const wrappedGifts = [];
  const wrapCover = "*".repeat(gifts[0].length + 2);
  wrappedGifts.push(wrapCover);
  gifts.forEach((gift) => wrappedGifts.push(`*${gift}*`));
  wrappedGifts.push(wrapCover);
  return wrappedGifts;
}

const gifts1 = wrapGifts(["📷", "⚽️"]);
console.log(gifts1);

const gifts2 = wrapGifts(["🏈🎸", "🎮🧸"]);
console.log(gifts2);

const gifts3 = wrapGifts(["📷"]);
console.log(gifts3);
