function getMinJump(obstacles) {
  let jump = 2;
  while (true) {
    const notClear = obstacles.some((obstacle) => obstacle % jump === 0);
    if (notClear) jump++;
    else return jump;
  }
}

const obstacles1 = [5, 3, 6, 7, 9];
const jump1 = getMinJump(obstacles1); // -> 4
console.log(jump1);

const obstacles2 = [2, 4, 6, 8, 10];
const jump2 = getMinJump(obstacles2); // -> 7
console.log(jump2);

const jump3 = getMinJump([1, 2, 3, 5]); // -> 4
console.log(jump3);

const jump4 = getMinJump([3, 7, 5]); // -> 2
console.log(jump4);

const jump5 = getMinJump([9, 5, 1]); // -> 2
console.log(jump5);
