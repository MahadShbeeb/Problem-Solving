const africanCrossword=(n,m,grid)=>{
    let newGrid=[],str=''
    for (let i=0;i<n;i++){
        str=''
        for (let j=0;j<m;j++){
            !str.includes(grid[i][j]) && grid[i][j] !==undefined?str+=grid[i][j]:str+='*'
        }
        newGrid.push(str)
    } 
    for (let i=0;i<n;i++){
        str=''
        for (let j=0;j<m;j++){
            if (!str.includes(newGrid[j][i]) && newGrid[j][i] !==undefined){
                grid[j][i]=newGrid[j][i]
                str+=newGrid[j][i]
            }else{
                grid[j][i]='*'
                str+='*'
            }
        }
    }
    console.log(grid)
    str=''
    grid.map(row=>{
        for (let i=row.length-1;i>=0;i--){
            if (!str.includes(row[i])&& row[i]!=='*'){
                str+=row[i]
            }
        }
    })
    return str
}
console.log(africanCrossword(5,5,[['f','c','o','f','d'],['o','o','e','d','o'],
['a','f','a','o','a'],['r','d','c','d','f'],['e','o','f','s','f']]))
