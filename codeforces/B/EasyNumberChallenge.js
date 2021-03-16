const easyNumberChallenge=(a,b,c)=>{
    let sum=0
    for (let i=1;i<=a;i++){
        for (let j=1;j<=b;j++){
            for (let k=1;k<=c;k++){sum+=divison(i*j*k)}
        }
    }
    return sum
}
const divison=(num)=>{
    let arr=[]
    for(let i=1;i<=num;i++){if(num%i===0)(arr.push(i))}
    return arr.length
}
console.log(easyNumberChallenge(2 ,2 ,2))