const diceTower = (n, z, x, y) => {
  let res = "";
  for (let i = 0; i < n; i++) {
    x === z || x === 7 - z || y === z || y === 7 - z
      ? (res = "NO")
      : (res = "YES");
  }
  return res;
};
console.log(diceTower(3, 6, 3, 2));
