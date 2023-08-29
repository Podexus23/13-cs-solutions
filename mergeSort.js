const mergeSort = (nums) => {
  const length = nums.length;
  let res;
  if (length <= 2) res = merge([nums[0]], [nums[1]]);
  else {
    let half = Math.ceil(length / 2);
    let left = nums.splice(0, half);
    let right = nums;
    res = merge(mergeSort(left), mergeSort(right));
  }
  return res;
};

const merge = (left, right = []) => {
  const res = [];
  let next;
  let isSorted = false;

  do {
    if (left[0] === undefined) {
      next = right.splice(0, 1);
      left = [];
    } else if (right[0] === undefined) {
      next = left.splice(0, 1);
      right = [];
    }
    if (
      left[0] === right[0] &&
      (left[0] !== undefined || right[0] !== undefined)
    ) {
      next = [right.splice(0, 1)[0], left.splice(0, 1)[0]];
    } else if (left[0] > right[0]) {
      next = right.splice(0, 1);
      isSorted = false;
    } else if (left[0] < right[0]) {
      next = left.splice(0, 1);
      isSorted = false;
    }
    res.push(...next);
    if (left.length === 0 && right.length === 0) isSorted = true;
  } while (!isSorted);
  return res;
};
