const breadthFirstTraverse = (queue, array) => {
  // fill code in here
  while (true) {
    let node = queue[0];
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    array.push(node.value);
    queue.shift();
    if (queue.length === 0) break;
  }
  return array;
};
