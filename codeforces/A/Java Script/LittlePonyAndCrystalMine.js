const littlePonyAndCrystalMine=(num)=>{
  let i=0
  let res=[]
  while(i<num){
    if (i%2==0){
     res.push(drawLine(i,num-i))
    }
    i+=1
  }
  let moves=[...res]
  moves.shift()
return [... moves.reverse(),...res]
  }
const drawLine=(s,b)=>{
let body='D'
let space='*'
return space.repeat(s/2)+body.repeat(b)+space.repeat(s/2)
}

console.log(littlePonyAndCrystalMine(9))





// const littlePonyAndCrystalMine = (nums) => {
//   let res = [];
//   let moves = []
//   let percent = Math.ceil(nums / 2);
//   for (let i = 0; i < nums; i++) {
//     res[i] = [];
//     if (i <= percent) {
//       for (let j = 0; j < nums; j++) {
//         if (
//           getArray(percent - i, percent + i).includes(j) &&
//           percent - i >= 0 &&
//           percent + i <= nums
//         ) {
//           moves.push(percent - i, percent + i)
//           res[i][j] = "D";
//         } else {
//           res[i][j] = "*";
//         }
//       }
//     }
//   }

//   return res
// };
// const getArray = (n1, n2) => {
//   let res = [];
//   for (let i = n1; i <= n2; i++) {
//     res.push(i);
//   }
//   return res;
// };
// console.log(littlePonyAndCrystalMine(9))