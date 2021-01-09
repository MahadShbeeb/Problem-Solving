const table=(n,m,grid)=>{
    let colClear=false,colCount=0
    for (let j=0;j<m;j++){
        for (let i=0;i<n;i++){
            if (grid[i][j]===0 && j===0){colCount+=1}
        }
        if(colCount===n){colClear=true}
    }
    return colClear && grid[0].every(cell=>cell===0) ? 4 : 2
}
console.log(table(4 ,3,[[0 ,0 ,0],[0 ,0 ,1],[0 ,0, 0],[0 ,0 ,0]]))


