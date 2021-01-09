const AntonAndLetters = (letters) => {
  return [...new Set(letters)].length;
};
console.log(AntonAndLetters(["l", "a", "b", "k"]));
