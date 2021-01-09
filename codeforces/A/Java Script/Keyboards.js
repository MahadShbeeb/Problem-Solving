const keyboards = (direction, message) => {
  let keyboard = "qwertyuiopasdfghjkl;zxcvbnm,./";
  let rightMessage = "";
  for (let j of message.toLowerCase()) {
    for (let i = 0; i <= keyboard.length; i++) {
      if (direction.toLowerCase() === "r" && j === keyboard[i]) {
        rightMessage += keyboard[i - 1];
        break;
      } else if (direction.toLowerCase() === "l" && j === keyboard[i]) {
        rightMessage += keyboard[i + 1];
        break;
      }
    }
  }
  return rightMessage;
};
console.log(keyboards("R", "s;;upimrrfod;pbr"));
