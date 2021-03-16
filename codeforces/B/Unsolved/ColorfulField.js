const colorfulField=(n, m, k, t,blackCells,coloredCells)=>{
    let grid=[],a=0,b=0,c=0,d=0
    let fruites=['Carrots','Kiwis','Grapes'],count=0
    for (let i=0;i<n;i++){
        grid[i]=[]
        for (let j=0;j<m;j++){
            grid[i][j]='*'
        }
    }
    for (let blackCell of blackCells){
        [a,b]=blackCell
        grid[a-1][b-1]='Wasted'
    }
    for (let i=0;i<n;i++){
        for (let j=0;j<m;j++){
            if(count>2){count=0}
            if(grid[i][j]!=='Wasted'){
                grid[i][j]=fruites[count]
                count+=1
            }
        }
    }
    for (let coloredCell of coloredCells){
       [c,d]=coloredCell
       console.log(grid[c-1][d-1])
    }
    
}
console.log(colorfulField(4 ,5 ,5 ,6,[[4, 3],[1, 3],[3, 3],[2 ,5],[3, 2]],
[[1, 3],[1, 4],[2, 3],[2, 4],[1, 1],[1, 1]]))
