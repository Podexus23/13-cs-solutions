const quickSort = function (nums) {
  //base case length < 2
  if (nums.length < 2) return nums;

  // choose pivot
  const pivot = nums.pop();

  //divide to left and right
  let left = [];
  let right = [];
  nums.forEach((el) => {
    el <= pivot ? left.push(el) : right.push(el);
  });

  //quickSort left and right
  left = quickSort(left);
  right = quickSort(right);

  return left.concat(pivot, right);
};
