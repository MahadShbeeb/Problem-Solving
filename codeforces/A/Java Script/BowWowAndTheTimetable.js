const bowWowAndTheTimetable = (num) => {
  let binary = 0;
  let result = [];
  for (let i = 0; i < num.split("").sort((a, b) => a - b).length; i++) {
    parseInt(num.split("").sort((a, b) => a - b)[i]) === 1 ? (binary += Math.pow(2, i)) : (binary += 0);
  }
  for (let i = 0; i < 10; i++) {
    if (binary <= Math.pow(4, i)) {
      break;
    }
    result.push(Math.pow(4, i));
  }
  return result;
};
console.log(bowWowAndTheTimetable("1000001"));
