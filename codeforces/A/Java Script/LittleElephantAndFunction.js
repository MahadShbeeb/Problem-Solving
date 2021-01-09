const littleElephantAndFunction=(x)=>{
    let res=[]
    for (let i=1;i<=x;i++){res.push(i)}
    console.log(... res.sort((a,b)=>b-a))
}
console.log(littleElephantAndFunction(2))
