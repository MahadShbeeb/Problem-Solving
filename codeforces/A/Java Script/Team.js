const team = (scores) => {
  let count = 0;
  scores.map((problem) => {
    problem.reduce((acc, ele) => acc + ele, 0) >= 2
      ? (count += 1)
      : (count += 0);
  });
  return count;
};
console.log(
  team([
    [1, 1, 0],
    [1, 0, 0],
  ])
);
