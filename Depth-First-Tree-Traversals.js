const preorderTraverse = (node, array) => {
  array.push(node.value);
  if (!node.left && !node.right) return;
  if (node.left) preorderTraverse(node.left, array);
  if (node.right) preorderTraverse(node.right, array);
  return array;
};

const inorderTraverse = (node, array) => {
  if (node.left) inorderTraverse(node.left, array);
  array.push(node.value);
  if (!node.left && !node.right) return;
  if (node.right) inorderTraverse(node.right, array);
  return array;
};

const postorderTraverse = (node, array) => {
  if (node.left) postorderTraverse(node.left, array);
  if (node.right) postorderTraverse(node.right, array);
  array.push(node.value);
  if (!node.left && !node.right) return;
  return array;
};
