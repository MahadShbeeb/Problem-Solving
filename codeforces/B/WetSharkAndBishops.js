const wetSharkAndBishops=(n,bishops)=>{
    let obj={},obj1={},obj2={},sum=0
    for (let i=0;i<n;i++){
        obj[i+1]=[bishops[i][0]+bishops[i][1],bishops[i][0]-bishops[i][1]]
    }
    Object.values(obj).map(value=>{obj1[value[0]]===undefined?obj1[value[0]]=1:obj1[value[0]]+=1})
    Object.values(obj).map(value=>{obj2[value[1]]===undefined?obj2[value[1]]=1:obj2[value[1]]+=1})     
    let first=Object.entries(obj1).filter(ele=>ele[1]!==1)
    let second=Object.entries(obj2).filter(ele=>ele[1]!==1)
    if (first.length!==0){sum+=first.sort((a,b)=>b[1]-a[1])[0][1]}
    if (second.length!==0){sum+=second.sort((a,b)=>b[1]-a[1])[0][1]}
    return sum
}
console.log(wetSharkAndBishops(5,[[1, 1],[1, 5],[3, 3],[5, 5],[5, 1]]))
