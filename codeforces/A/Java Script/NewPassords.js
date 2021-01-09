const newPassord = (passwordLength, numberOfUniqueChars) => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let randomPassword = (res = "");
  for (let i = 1; i <= passwordLength; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  res =
    [...new Set(randomPassword.split(""))].length == numberOfUniqueChars
      ? randomPassword
      : addChar([...new Set(randomPassword.split(""))].join(""));
  return res.substr(0, passwordLength);
};
const addChar = (Str) => {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  for (let i of Str.split("")) {
    chars = chars.replace(i, "");
  }
  return (Str += chars.charAt(Math.floor(Math.random() * chars.length)));
};
const newPassord2 = (passwordLength, numberOfUniqueChars) => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let randomPassword = "";
  for (let i = 1; i <= 10; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return [...new Set(randomPassword.split(""))]
    .join("")
    .substring(0, passwordLength);
};
console.log(newPassord2(4, 3));
