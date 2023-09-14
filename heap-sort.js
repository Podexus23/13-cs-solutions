const heapSort = (array) => {
  createMaxHeap(array);

  // for (let i = 1; i < array.length; i++) {
  //   swapPlace(0, array.length - i, array);
  //   heapify(array, 0, array.length - i);
  // }
  for (let i = array.length - 1; i > 0; i--) {
    swapPlace(0, i, array);
    heapify(array, 0, i);
  }

  return array;
};

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const swapPlace = (index1, index2, array) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const heapify = (array, index, heapSize) => {
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;

  let topIndex = index;
  if (heapSize > leftIndex && array[topIndex] < array[leftIndex])
    topIndex = leftIndex;
  if (heapSize > rightIndex && array[topIndex] < array[rightIndex])
    topIndex = rightIndex;
  if (topIndex !== index) {
    swapPlace(index, topIndex, array);
    heapify(array, topIndex, heapSize);
  }

  // const isLower =
  //   array[index] < array[leftIndex] || array[index] < array[rightIndex];
  // if (isLower && leftIndex < heapSize && rightIndex < heapSize) {
  //   if (array[leftIndex] > array[rightIndex]) {
  //     swapPlace(index, leftIndex, array);
  //     heapify(array, leftIndex, heapSize);
  //   } else if (array[rightIndex] > array[leftIndex]) {
  //     swapPlace(index, rightIndex, array);
  //     heapify(array, rightIndex, heapSize);
  //   }
  // } else if (isLower && leftIndex < heapSize && rightIndex >= heapSize) {
  //   if (array[leftIndex]) {
  //     swapPlace(index, leftIndex, array);
  //     heapify(array, leftIndex, heapSize);
  //   }
  // } else if (isLower && rightIndex < heapSize && leftIndex >= heapSize) {
  //   if (array[rightIndex]) {
  //     swapPlace(index, rightIndex, array);
  //     heapify(array, leftIndex, heapSize);
  //   }
  // }
};

const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
// const nums = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7];
console.log(heapSort(nums), "heap sort");
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log([10, 7, 9, 6, 5, 2, 8, 3, 4, 1]);
