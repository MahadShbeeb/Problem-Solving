const goodNumber = (len, k, arr) => {
  let count = 0;
  let finalCount = 0;
  arr.map((row) => {
    count = 0;
    for (let i = 0; i < row.sort((a, b) => a - b).length; i++) {
      for (let j = 0; j < k; j++) {
        row[i] === j ? (count += 1) : (count += 0);
      }
    }
    count !== k ? (finalCount += 0) : (finalCount += 1);
  });
  return finalCount;
};
console.log(
  goodNumber(10, 6, [
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
    [1, 2, 3, 4, 5, 6, 0],
  ])
);
