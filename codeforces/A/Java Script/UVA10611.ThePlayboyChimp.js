const thePlayboyChimp = (queries, numbers) => {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    queries.map((query) => {
      if (query === numbers[i]) {
        res.push([numbers[i - 1], numbers[i + 1]]);
      } else if (
        (query > numbers[i] && query < numbers[i - 1]) ||(query > numbers[i] && numbers[i + 1] === undefined)) {
        res.push([numbers[i],numbers[i + 1] === undefined ? "X" : numbers[i + 1],
        ]);
      } else if (query < numbers[i] && query > numbers[i - 1]) {
        res.push([numbers[i - 1], numbers[i]]);
      }
    });
  }
  return res;
};
console.log(thePlayboyChimp([4, 6, 8, 10], [1, 4, 5, 7]));
