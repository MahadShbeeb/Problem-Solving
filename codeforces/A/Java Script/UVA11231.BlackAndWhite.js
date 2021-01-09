const blackAndWhite = (numberOfRows, numberOfCols, colorOfTheFirstCell) => {
  return ((numberOfRows - 7) * (numberOfCols - 7) + colorOfTheFirstCell) / 2;
};
console.log(blackAndWhite(11, 15, 0));
