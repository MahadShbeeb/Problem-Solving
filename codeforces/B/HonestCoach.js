const honestCoach=(n,array)=>{
    let min=1000000
    for (let i=0;i<array.length;i++){
        for (let j=i+1;j<array.length;j++){
            min=Math.min(min,Math.abs(array[i]-array[j]))
        }
    }
    return min
}
console.log(honestCoach(4,[7 ,9 ,3 ,1]))
