const contest=(a, b, c, d)=>{
let Misha=Math.max(3*a/10,a-((a/250)*c))
let Vasya=Math.max(3*b/10,b-((b/250)*d))
return Misha>Vasya?'Misha':Misha<Vasya?'Vasya':'Tie'
}
console.log(contest(1500 ,1000 ,176, 177))