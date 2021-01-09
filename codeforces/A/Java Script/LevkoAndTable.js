const levkoAndTable = (n, k) => {
    let res=[]
    for(let i=0;i<n;i++){
        res[i]=[]
        for(let j=0;j<n;j++){
            i==j?res[i][j]=k:res[i][j]=0 
        }
    }
    return res
}
console.log(levkoAndTable(4, 7))