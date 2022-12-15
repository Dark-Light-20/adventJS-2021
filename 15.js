function checkSledJump(heights) {
  let goneDown = false;
  let goneUp = false;
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] < heights[i + 1]) {
      goneUp = true;
      if (goneDown) return false;
    } else if (heights[i] > heights[i + 1]) {
      goneDown = true;
    } else if (heights[i] === heights[i + 1]) return false;
  }
  return goneUp && goneDown;
}

const check = checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
console.log(check);
