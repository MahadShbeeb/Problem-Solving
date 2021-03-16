const findTheBone=(n,m,k,holesIndexes,swapsIndexes)=>{
    let pos=1
    for (let i=0;i<k;i++){
        if (pos===swapsIndexes[i][0] && !holesIndexes.includes(swapsIndexes[i][1])){
           pos=swapsIndexes[i][1]
        }
        if (holesIndexes.includes(swapsIndexes[i][1])){
            return swapsIndexes[i][1]  
        }
    }
    return pos
}
console.log(findTheBone(7 ,3 ,4,[3 ,4 ,6],[[1 ,2],[2, 5],[5 ,7],[7, 1]]))
