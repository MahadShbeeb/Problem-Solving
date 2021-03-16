const seaAndIslands=(n,k)=>{
    let arr=[]
    for (let i=0;i<n;i++){
        arr[i]=[]
        for (let j=0;j<n;j++){
            if((i+j)%2!==0 && k>0){
                arr[i][j]='L'
                k-=1
            }
            else{arr[i][j]='S'}
        } 
    }
    if (k>0){return 'NO'}
    console.log('YES')
    return arr     
}
console.log(seaAndIslands(5 ,25))
