const lightMoreLight = (numberOfLights) => {
  let count = 0;
  for (let i = 1; i <= numberOfLights; i++) {
    if (numberOfLights % i == 0) {
      count += 1;
    }
  }
  return count % 2 == 0 ? "No" : "Yes";
};
console.log(lightMoreLight(4));
