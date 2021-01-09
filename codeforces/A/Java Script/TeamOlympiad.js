const teamOlympiad = (skills) => {
  let row = [];
  let indexes = [];
  let res = [];
  for (let i = 0; i < skills.length; i++) {
    //check if the element inside in array 
    if (!row.includes(skills[i]) && skills[i] !== 0) {
      row.push(skills[i]);
    }
    // check if the array includes all skills which it is 3 skills 
    if (row.length === 3) {
      // store the indexes of skill
      for (let i = 0; i < row.length; i++) {
        indexes.push(skills.indexOf(row[i]) + 1);
        skills[skills.indexOf(row[i])] = 0;
      }
      res.push(indexes);
      row = [];
      indexes = [];
      // check if there is elements dosent sorted yet so we sort skills again
      if (skills.filter((skill) => skill === 0).length <= skills.length - 2) {
        i = 0
      }
    }
  }
  // if there is no skills enough to make group so return 0
  return res.length !== 0 ? res : 0;
};
console.log(teamOlympiad([1, 3, 1, 3, 2, 1, 2]));