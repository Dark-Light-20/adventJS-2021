function canMouseEat(direction, game) {
  for (let index = 0; index < game.length; index++) {
    const mousePos = game[index].findIndex((value) => value === "m");
    if (mousePos > 0) {
      let answer = false;
      switch (direction) {
        case "up":
          answer = game[index - 1] && game[index - 1][mousePos] === "*";
          break;
        case "down":
          answer = game[index + 1] && game[index + 1][mousePos] === "*";
          break;
        case "right":
          answer =
            game[index][mousePos + 1] && game[index][mousePos + 1] === "*";
          break;
        case "left":
          answer =
            game[index][mousePos - 1] && game[index][mousePos - 1] === "*";
          break;
      }
      return Boolean(answer);
    }
  }
}

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

const eat1 = canMouseEat("up", room); // false
console.log(eat1);

const eat2 = canMouseEat("down", room); // true
console.log(eat2);

const eat3 = canMouseEat("right", room); // false
console.log(eat3);

const eat4 = canMouseEat("left", room); // false
console.log(eat4);
