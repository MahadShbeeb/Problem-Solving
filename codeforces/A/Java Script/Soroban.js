const soroban=(str)=>{
let bead='O',space='-',zero='O-|',fife='-O|'
for (let num of str.split("").reverse()){
num=parseInt(num)
if (num<5){
console.log(zero+bead.repeat(num)+space+bead.repeat(4-num))
}else{
num-=5
console.log(fife+bead.repeat(num)+space+bead.repeat(4-num))
}
}
}
console.log(soroban('720'))

