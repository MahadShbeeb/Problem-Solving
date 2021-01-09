const vanyaAndCubes = (num) => {
    let totalCount=0,n=1,level=1
    while(totalCount<=num){
    for (let i=1;i<=n;i++){
        totalCount+=i
        level=i
    }
    n+=1
    }
return num===1?num:level-1
}
console.log(vanyaAndCubes(34))