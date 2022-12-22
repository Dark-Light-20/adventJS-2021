function checkIsSameTree(treeA, treeB) {
  if (typeof treeA !== typeof treeB) return false;
  if (treeA !== null && typeof treeA === "object") {
    let value = checkIsSameTree(treeA.value, treeB.value);
    let left = checkIsSameTree(treeA.left, treeB.left);
    let right = checkIsSameTree(treeA.right, treeB.right);
    return value && left && right;
  } else {
    return treeA === treeB;
  }
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const same1 = checkIsSameTree(tree, tree); // true
console.log(same1);

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

const same2 = checkIsSameTree(tree, tree2); // false
console.log(same2);

const same3 = checkIsSameTree(tree2, tree2); // true
console.log(same3);
