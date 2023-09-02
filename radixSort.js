function getLongestNumber(arr) {
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (`${arr[i]}`.length > `${num}`.length) num = arr[i];
  }
  return num;
}

function radixSort(array) {
  let finalBucket = [...array];
  const longestNum = getLongestNumber(array);

  for (let i = 0; i < `${longestNum}`.length; i++) {
    const buckets = new Array(10).fill("").map((e) => []);
    let counter = 0;

    while (counter < finalBucket.length) {
      const el = finalBucket[counter];
      let char = String(el).at(-i - 1);
      if (char === undefined) char = 0;
      buckets[+char].push(el);
      counter++;
    }

    finalBucket = buckets.flat();
  }
  return finalBucket;
}
