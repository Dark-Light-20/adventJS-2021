function createXmasTree(height) {
  let tree = "";
  const maxLeafs = 2 * height - 1;
  for (let i = 1; i <= height; i++) {
    const leafs = (2 * i - 1);
    const spaces = (maxLeafs - leafs) / 2;
    tree += "_".repeat(spaces);
    tree += "*".repeat(leafs);
    tree += "_".repeat(spaces);
    tree += "\n";
  }
  const trunkSpaces = (maxLeafs - 1) / 2;
  const trunkPart = "_".repeat(trunkSpaces) + "#" + "_".repeat(trunkSpaces);
  tree += trunkPart + "\n" + trunkPart;
  return tree;
}

const tree = createXmasTree(5);
console.log(tree);
