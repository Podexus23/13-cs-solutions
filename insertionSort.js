const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertionNum = arr[i];
    let j;

    for (j = i - 1; arr[j] > insertionNum && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = insertionNum;
  }

  return arr;
};
