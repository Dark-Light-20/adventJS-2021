function countDecorations(bigTree) {
  const searchDecorations = (tree, decorations) => {
    let levelDecorations = 0;
    if (tree.left)
      levelDecorations += searchDecorations(tree.left, decorations);
    if (tree.right)
      levelDecorations += searchDecorations(tree.right, decorations);
    levelDecorations += tree.value;
    return levelDecorations;
  };
  return searchDecorations(bigTree, 0);
}

const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};
const decorations1 = countDecorations(tree); // 6
console.log(decorations1);

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};
const decorations2 = countDecorations(bigTree); // 28
console.log(decorations2);
