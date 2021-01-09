const snacktower = (numberOfSnacks, snacks) => {
  let res = [];
  let count = 0;
  for (let i = 1; i <= numberOfSnacks; i++) {
    if (parseInt(snacks[i]) >= numberOfSnacks - i) {
      res.push(" ");
    } else {
      res.push(
        snacks
          .substring(count, i)
          .split("")
          .sort((a, b) => b - a)
          .join("")
      );
      count = res[res.length - 1].length;
    }
  }
  return res;
};
console.log(snacktower(3, "312"));
