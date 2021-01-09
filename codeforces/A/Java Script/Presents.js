const presents = (friends) => {
  let res = [];
  for (let i = 0; i < friends.split("").length; i++) {
    res[friends[i] - 1] = i + 1;
  }
  return res;
};
console.log(presents("2341"));
