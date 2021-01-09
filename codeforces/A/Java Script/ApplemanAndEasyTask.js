const applemanAndEasyTask=(n,grid)=>{
    let count=0,evenAdj=true
    for (let i=1;i<=n;i++){
        count=0
        for (let j=1;j<=n;j++){
            if (i+1<n && j+1<n){
            if (grid[i-1][j]==='o'||grid[i+1][j]==='o'||grid[i][j+1]==='o'||grid[i][j-1]==='o'){count+=1}
            if (count%2!==0){evenAdj=false}
            }
           
        }
    }
    return evenAdj?'YES':'NO'
}
console.log(applemanAndEasyTask(4,[['x','x','x','o'],['x','o','x','o'],['o','x','o','x'],['x','x','x','x']]))
