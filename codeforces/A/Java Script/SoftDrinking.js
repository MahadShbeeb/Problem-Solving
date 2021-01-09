const softDrinking = (n, k, l, c, d, p, nl, np) => {
  let millilitersForFriends = Math.floor((k * l) / np);
  let slicesForLime = c * d;
  let salt = p / n;
  return Math.floor(Math.min(millilitersForFriends, slicesForLime, salt) / n);
};
console.log(softDrinking(10, 1000, 1000, 25, 23, 1, 50, 1));
