const caisaAndPylons = (pylons) => {
  pylons = [0, ...pylons];
  let dollers = 0;
  let energy = 0;
  for (let i = 0; i < pylons.length; i++) {
    if (i + 1 < pylons.length) {
      pylons[i] > pylons[i + 1]
        ? (energy += pylons[i] - pylons[i + 1])
        : (energy += 0);
      energy >= pylons[i + 1] - pylons[i]
        ? (energy -= pylons[i + 1] - pylons[i])
        : (dollers += Math.abs(pylons[i + 1] - pylons[i]));
    }
  }
  return dollers;
};
console.log(caisaAndPylons([3, 4, 3, 2, 4]));
