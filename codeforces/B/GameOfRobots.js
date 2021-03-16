const gameOfRobots=(n,k,ids)=>{
    let res=[]
    for(let i=0;i<n;i++){
       for(let j=0;j<=i;j++){
          res.push(ids[j])
       }
    } 
    return res[k-1]
}
console.log(gameOfRobots(4 ,5,[10 ,4 ,18, 3]))
